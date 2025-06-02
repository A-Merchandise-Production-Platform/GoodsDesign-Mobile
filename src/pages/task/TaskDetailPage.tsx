"use client";

import { useState, useEffect } from "@lynx-js/react";
import { useParams, useNavigate } from "react-router";
import { useAuthStore } from "../../stores/auth.store.js";
import { GET_TASK_DETAIL_QUERY } from "../../graphql/queries/task.js";
import { CHECK_QUALITY_MUTATION } from "../../graphql/queries/task.js";
import { graphqlFetch } from "../../graphql/client.js";
import type { Order } from "../../types/task.js";
import { formatCurrency, formatDate, formatTime } from "../../utils/format.js";

enum OrderStatus {
  WaitingForCheckingQuality = "WAITING_FOR_CHECKING_QUALITY",
  ReworkRequired = "REWORK_REQUIRED",
}

enum OrderDetailStatus {
  Pending = "PENDING",
  Completed = "COMPLETED",
}

export default function TaskDetailPage() {
  const { id } = useParams();
  const nav = useNavigate();
  const { accessToken } = useAuthStore();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"details" | "quality">("details");
  const [selectedOrderDetailIndex, setSelectedOrderDetailIndex] = useState(0);

  const [qualityCheckLoading, setQualityCheckLoading] = useState(false);
  const [qualityCheckError, setQualityCheckError] = useState<string | null>(
    null
  );
  const [qualityCheckSuccess, setQualityCheckSuccess] = useState(false);
  const [passedQty, setPassedQty] = useState<number>(0);
  const [note, setNote] = useState<string>("");
  const [
    selectedFailedEvaluationCriteriaIds,
    setSelectedFailedEvaluationCriteriaIds,
  ] = useState<string[]>([]);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      if (!accessToken) {
        setError("User not authenticated");
        setLoading(false);
        return;
      }

      try {
        const result = await graphqlFetch<{ order: Order }>(
          GET_TASK_DETAIL_QUERY,
          accessToken,
          { orderId: id }
        );
        setOrder(result.order);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [accessToken, id]);

  // Get status color
  const getStatusColor = (status: string, isDelayed: boolean) => {
    if (isDelayed)
      return {
        bg: "bg-red-100",
        text: "text-red-600",
        border: "border-red-200",
      };
    if (status === "COMPLETED")
      return {
        bg: "bg-green-100",
        text: "text-green-600",
        border: "border-green-200",
      };
    if (status === "IN_PROGRESS")
      return {
        bg: "bg-blue-100",
        text: "text-blue-600",
        border: "border-blue-200",
      };
    return {
      bg: "bg-yellow-100",
      text: "text-yellow-600",
      border: "border-yellow-200",
    };
  };

  const handleQualityCheck = async (
    checkQualityId: string,
    passedQuantity: number
  ) => {
    if (!accessToken) {
      setQualityCheckError("User not authenticated");
      return;
    }

    setQualityCheckLoading(true);
    setQualityCheckError(null);
    setQualityCheckSuccess(false);

    try {
      const result = await graphqlFetch<{ doneCheckQuality: { id: string } }>(
        CHECK_QUALITY_MUTATION,
        accessToken,
        {
          input: {
            checkQualityId,
            passedQuantity,
            failedQuantity: selectedOrderDetail
              ? selectedOrderDetail.quantity - passedQuantity
              : 0,
            note,
            failedEvaluationCriteriaIds: selectedFailedEvaluationCriteriaIds,
          },
        }
      );

      if (result.doneCheckQuality?.id) {
        setQualityCheckSuccess(true);

        // Refresh order data
        const updatedOrder = await graphqlFetch<{ order: Order }>(
          GET_TASK_DETAIL_QUERY,
          accessToken,
          { orderId: id }
        );
        setOrder(updatedOrder.order);
      }
    } catch (err) {
      setQualityCheckError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    } finally {
      setQualityCheckLoading(false);
    }
  };

  if (loading) {
    return (
      <view className="items-center justify-center bg-gray-50">
        <view className="p-8 rounded-2xl bg-white shadow-lg">
          <view className="items-center">
            <view className="w-12 h-12 rounded-full border-3 border-blue-500 border-t-transparent animate-spin mb-4" />
            <text className="text-gray-700 font-medium text-lg text-center">
              Loading order details...
            </text>
          </view>
        </view>
      </view>
    );
  }

  if (error) {
    return (
      <view className="items-center justify-center bg-gray-50 p-4">
        <view className="p-8 rounded-2xl bg-red-50 shadow-lg border border-red-200">
          <text className="text-red-600 font-bold text-xl mb-3 text-center">
            Unable to load order details
          </text>
          <text className="text-red-500 text-center mb-6">{error}</text>
          <view className="bg-white rounded-xl p-5 border border-red-100">
            <text className="text-gray-700 text-center">
              Please check your connection and tap here to try again.
            </text>
          </view>
        </view>
      </view>
    );
  }

  if (!order) {
    return (
      <view className="items-center justify-center bg-gray-50 p-4">
        <view className="p-8 rounded-2xl bg-yellow-50 shadow-lg border border-yellow-200">
          <text className="text-yellow-600 font-bold text-xl mb-3 text-center">
            Order not found
          </text>
          <text className="text-yellow-500 text-center mb-6">
            The order you're looking for doesn't exist or you don't have
            permission to view it.
          </text>
          <view
            className="bg-white rounded-xl p-5 border border-yellow-100"
            bindtap={() => nav("/tasks", { replace: true })}
          >
            <text className="text-gray-700 text-center">
              Return to task list
            </text>
          </view>
        </view>
      </view>
    );
  }

  const statusStyle = getStatusColor(order.status, order.isDelayed);
  const progressPercentage = Math.min(order.currentProgress, 100);
  const selectedOrderDetail = order.orderDetails?.[selectedOrderDetailIndex];

  return (
    <scroll-view
      scroll-orientation="vertical"
      className="pt-4 pb-4 w-full h-full"
    >
      {/* Header with back button */}
      <view className="px-5 py-6">
        <view className="flex-row">
          <view className="flex items-center justify-between">
            <view
              className="rounded-md bg-gray-200 flex items-center justify-center w-28 h-10"
              bindtap={() => nav("/task", { replace: true })}
            >
              <text className="font-bold text-3xl mb-3">← </text>
              <text className="font-medium text-lg -ml-1">Back</text>
            </view>

            <view className="flex-row items-center px-4">
              <text className="font-medium">
                Hi, {useAuthStore.getState().user?.name || "User"}
              </text>
              <view
                className="rounded-md bg-gray-200 flex items-center justify-center w-28 h-10 mt-2"
                bindtap={() => {
                  useAuthStore.getState().logout();
                  nav("/", { replace: true });
                }}
              >
                <text className="font-medium">Logout</text>
                <text className="-mt-3 text-4xl">↪</text>
              </view>
            </view>
          </view>

          <view className="mt-4">
            <text className="text-xl font-bold">Order #{order.id}</text>
            <text className="mt-1">
              Ordered on: {formatDate(order.orderDate)}
            </text>
          </view>
        </view>
      </view>
      {/* Status Card */}
      <view className="px-4">
        <view className="bg-white rounded-2xl border border-gray-200 p-5">
          <view className="flex-row justify-between items-center mb-4">
            <text className="text-lg font-bold text-gray-800">
              Order Status
            </text>
            <view
              className={`px-4 py-2 rounded-full ${statusStyle.bg} border ${statusStyle.border}`}
            >
              <text className={`text-sm font-bold ${statusStyle.text}`}>
                {order.isDelayed ? "DELAYED" : order.status}
              </text>
            </view>
          </view>

          <view className="mb-4">
            <text className="text-sm text-gray-500 mb-2">Progress</text>
            <view className="flex-row justify-between mb-2">
              <text className="text-lg font-bold text-gray-800">
                {progressPercentage}% Complete
              </text>
              {order.estimatedCompletionAt && (
                <text className="text-sm text-gray-500">
                  Est. completion: {formatDate(order.estimatedCompletionAt)}
                </text>
              )}
            </view>
            <view className="h-4 bg-gray-200 rounded-full overflow-hidden shadow-inner">
              <view
                className={`h-full rounded-full ${
                  order.isDelayed
                    ? "bg-red-500"
                    : progressPercentage >= 100
                    ? "bg-green-500"
                    : "bg-blue-500"
                }`}
                style={{
                  width: `${progressPercentage}%`,
                }}
              />
            </view>
          </view>

          <view className="flex-row justify-between">
            <view className="items-center mb-2">
              <text className="text-sm text-gray-500">Total Items</text>
              <text className="text-lg font-bold text-gray-800">
                {order.totalItems}
              </text>
            </view>
            <view className="items-center mb-2">
              <text className="text-sm text-gray-500">Total Price</text>
              <text className="text-lg font-bold text-gray-800">
                {formatCurrency(order.totalPrice)}
              </text>
            </view>
            <view className="items-center">
              <text className="text-sm text-gray-500">Shipping</text>
              <text className="text-lg font-bold text-gray-800">
                {formatCurrency(order.shippingPrice)}
              </text>
            </view>
          </view>
        </view>
      </view>
      {/* Customer & Factory Info */}
      <view className="px-4 mt-4">
        <view className="bg-white rounded-2xl border border-gray-200 p-5">
          <view className="flex-row justify-between mb-6">
            <view className="mb-6">
              <text className="uppercase text-gray-500 font-bold mb-2">
                Customer
              </text>
              <view className="flex-row items-center bg-gray-50 p-3 rounded-xl border border-gray-200">
                <view className="w-10 h-10 rounded-full bg-blue-100 items-center justify-center">
                  <text className="text-blue-600 font-bold text-lg">
                    {order?.customer?.name?.charAt(0) || "C"}
                  </text>
                </view>
                <text className="text-gray-800 font-semibold mt-1">
                  {order?.customer.name}
                </text>
                <text className="text-gray-500 text-sm">
                  {order.customer?.email}
                </text>
              </view>
            </view>
            <view className="">
              <text className=" uppercase text-gray-500 font-bold mb-2">
                Factory
              </text>
              <view className="flex-row items-center bg-gray-50 p-3 rounded-xl border border-gray-200">
                <view className="w-10 h-10 rounded-full bg-purple-100 items-center justify-center">
                  <text className="text-purple-600 font-bold text-lg">
                    {order.factory?.name?.charAt(0) || "F"}
                  </text>
                </view>
                <text className="text-gray-800 font-semibold">
                  {order.factory?.name || "Not assigned"}
                </text>
                {order.factory?.owner && (
                  <text className="text-gray-500 text-sm">
                    {order.factory.owner.name}
                  </text>
                )}
              </view>
            </view>
          </view>

          <view>
            <text className=" uppercase text-gray-500 font-bold mb-2">
              Addresses
            </text>
            <view className="bg-gray-50 p-4 rounded-xl border border-gray-200 mb-3">
              <text className="text-sm font-semibold text-gray-700 mb-1">
                Shipping Address:
              </text>
              <text className="text-sm text-gray-600">
                {order.address?.formattedAddress || "No address provided"}
              </text>
            </view>
            <view className="bg-gray-50 p-4 rounded-xl border border-gray-200">
              <text className="text-sm font-semibold text-gray-700 mb-1">
                Factory Address:
              </text>
              <text className="text-sm text-gray-600">
                {order.factory?.address?.formattedAddress ||
                  "No address provided"}
              </text>
            </view>
          </view>
        </view>
      </view>
      {/* Tabs */}
      <view className="flex-row bg-white border-b border-gray-200 mt-6">
        <view
          className={`py-4 px-5 items-center justify-center ${
            activeTab === "details"
              ? "border-b-3 border-blue-500 bg-blue-50"
              : ""
          }`}
          bindtap={() => setActiveTab("details")}
        >
          <text
            className={`font-semibold ${
              activeTab === "details" ? "text-blue-600" : "text-gray-600"
            }`}
          >
            Details
          </text>
        </view>
        <view
          className={`py-4 px-5 items-center justify-center ${
            activeTab === "quality"
              ? "border-b-3 border-blue-500 bg-blue-50"
              : ""
          }`}
          bindtap={() => setActiveTab("quality")}
        >
          <text
            className={`font-semibold ${
              activeTab === "quality" ? "text-blue-600" : "text-gray-600"
            }`}
          >
            Quality
          </text>
        </view>
      </view>
      {/* Tab Content */}
      <view className="px-4 mt-4">
        {/* Details Tab */}
        {activeTab === "details" && (
          <view>
            {/* Order Details */}
            <view className="bg-white rounded-2xl border border-gray-200 p-5 mb-4">
              <text className="text-lg font-bold text-gray-800 mb-4">
                Order Timeline
              </text>
              <view className="ml-3">
                <view className="border-l-2 border-blue-500 pl-4 pb-6 relative">
                  <view className="w-4 h-4 rounded-full bg-blue-500 absolute -left-[8px] top-0" />
                  <text className="font-semibold text-gray-800">
                    Order Placed
                  </text>
                  <text className="text-sm text-gray-500">
                    {formatDate(order.orderDate)} at{" "}
                    {formatTime(order.orderDate)}
                  </text>
                </view>

                {order.assignedAt && (
                  <view className="border-l-2 border-blue-500 pl-4 pb-6 relative">
                    <view className="w-4 h-4 rounded-full bg-blue-500 absolute -left-[8px] top-0" />
                    <text className="font-semibold text-gray-800">
                      Assigned to Factory
                    </text>
                    <text className="text-sm text-gray-500">
                      {formatDate(order.assignedAt)} at{" "}
                      {formatTime(order.assignedAt)}
                    </text>
                  </view>
                )}

                {order.acceptedAt && (
                  <view className="border-l-2 border-blue-500 pl-4 pb-6 relative">
                    <view className="w-4 h-4 rounded-full bg-blue-500 absolute -left-[8px] top-0" />
                    <text className="font-semibold text-gray-800">
                      Accepted by Factory
                    </text>
                    <text className="text-sm text-gray-500">
                      {formatDate(order.acceptedAt)} at{" "}
                      {formatTime(order.acceptedAt)}
                    </text>
                  </view>
                )}

                {order.doneProductionAt && (
                  <view className="border-l-2 border-blue-500 pl-4 pb-6 relative">
                    <view className="w-4 h-4 rounded-full bg-blue-500 absolute -left-[8px] top-0" />
                    <text className="font-semibold text-gray-800">
                      Production Completed
                    </text>
                    <text className="text-sm text-gray-500">
                      {formatDate(order.doneProductionAt)} at{" "}
                      {formatTime(order.doneProductionAt)}
                    </text>
                  </view>
                )}

                {order.doneCheckQualityAt && (
                  <view className="border-l-2 border-blue-500 pl-4 pb-6 relative">
                    <view className="w-4 h-4 rounded-full bg-blue-500 absolute -left-[8px] top-0" />
                    <text className="font-semibold text-gray-800">
                      Quality Check Completed
                    </text>
                    <text className="text-sm text-gray-500">
                      {formatDate(order.doneCheckQualityAt)} at{" "}
                      {formatTime(order.doneCheckQualityAt)}
                    </text>
                  </view>
                )}

                {order.shippedAt && (
                  <view className="border-l-2 border-blue-500 pl-4 pb-6 relative">
                    <view className="w-4 h-4 rounded-full bg-blue-500 absolute -left-[8px] top-0" />
                    <text className="font-semibold text-gray-800">Shipped</text>
                    <text className="text-sm text-gray-500">
                      {formatDate(order.shippedAt)} at{" "}
                      {formatTime(order.shippedAt)}
                    </text>
                  </view>
                )}

                {order.completedAt && (
                  <view className="border-l-2 border-blue-500 pl-4 relative">
                    <view className="w-4 h-4 rounded-full bg-green-500 absolute -left-[8px] top-0" />
                    <text className="font-semibold text-gray-800">
                      Completed
                    </text>
                    <text className="text-sm text-gray-500">
                      {formatDate(order.completedAt)} at{" "}
                      {formatTime(order.completedAt)}
                    </text>
                  </view>
                )}

                {!order.completedAt && (
                  <view className="border-l-2 border-gray-300 pl-4 relative">
                    <view className="w-4 h-4 rounded-full bg-gray-300 absolute -left-[8px] top-0" />
                    <text className="font-semibold text-gray-400">
                      Pending Completion
                    </text>
                    {order.estimatedCompletionAt && (
                      <text className="text-sm text-gray-400">
                        Estimated: {formatDate(order.estimatedCompletionAt)}
                      </text>
                    )}
                  </view>
                )}
              </view>
            </view>

            {/* Products */}
            <view className="bg-white rounded-2xl border border-gray-200 p-5 mb-4">
              <text className="text-lg font-bold text-gray-800 mb-4">
                {order.orderDetails?.length > 1 ? "Products" : "Product"}(
                {order.orderDetails?.length || 0})
              </text>

              {order.orderDetails?.map((detail, index) => (
                <view
                  key={detail.id}
                  className={`p-4 rounded-xl ${
                    index === selectedOrderDetailIndex
                      ? "bg-blue-50 border border-blue-200"
                      : "bg-gray-50 border border-gray-200"
                  } mb-3`}
                  bindtap={() => setSelectedOrderDetailIndex(index)}
                >
                  <view className="flex-row justify-between items-center">
                    <view className="flex-row items-center">
                      <view className="w-28 h-28 rounded-md">
                        {detail.design?.thumbnailUrl && (
                          <image
                            src={detail.design.thumbnailUrl}
                            className="w-28 h-28 rounded-md"
                          />
                        )}
                      </view>
                      <view className="flex justify-center">
                        {/* <text className="font-semibold text-gray-800">
                          {detail.systemConfigVariant?.product?.name ||
                            "Product"}
                        </text> */}
                        <text className="text-sm text-gray-500 flex items-center">
                          {detail.systemConfigVariant?.size} •{" "}
                          <view
                            className="w-3 h-3 rounded-full mr-1"
                            style={{
                              backgroundColor:
                                detail.systemConfigVariant?.color || "#ccc",
                            }}
                          />
                        </text>
                      </view>
                    </view>
                    <view className="flex items-center">
                      <text className="font-bold text-gray-800 mr-2">
                        {detail.quantity}x
                      </text>
                      <text className="text-sm text-gray-500">
                        {formatCurrency(detail.price)}
                      </text>
                    </view>
                  </view>
                </view>
              ))}
            </view>

            {/* Progress Reports */}
            {order.orderProgressReports &&
              order.orderProgressReports.length > 0 && (
                <view className="bg-white rounded-2xl border border-gray-200 p-5 mb-4">
                  <text className="text-lg font-bold text-gray-800 mb-4">
                    Progress Reports
                  </text>

                  {order.orderProgressReports.map((report, index) => (
                    <view
                      key={report.id}
                      className="p-4 rounded-xl bg-gray-50 border border-gray-200 mb-3"
                    >
                      <view className="flex-row justify-between items-center mb-2">
                        <text className="font-semibold text-gray-800">
                          Report #{index + 1}
                        </text>
                        <text className="text-sm text-gray-500">
                          {formatDate(report.reportDate)}
                        </text>
                      </view>

                      {report.note && (
                        <text className="text-gray-700 mb-3">
                          {report.note}
                        </text>
                      )}

                      {report.imageUrls && report.imageUrls.length > 0 && (
                        <view className="flex-row flex-wrap">
                          {report.imageUrls.map((url, imgIndex) => (
                            <view
                              key={imgIndex}
                              className="w-20 h-20 mr-2 mb-2"
                            >
                              <image
                                src={url}
                                className="w-20 h-20 rounded-md object-cover"
                              />
                            </view>
                          ))}
                        </view>
                      )}
                    </view>
                  ))}
                </view>
              )}

            {/* Payment Information */}
            {order.payments && order.payments.length > 0 && (
              <view className="bg-white rounded-2xl border border-gray-200 p-5 mb-4">
                <text className="text-lg font-bold text-gray-800 mb-4">
                  Payment Information
                </text>

                {order.payments.map((payment) => (
                  <view
                    key={payment.id}
                    className="p-4 rounded-xl bg-gray-50 border border-gray-200 mb-3"
                  >
                    <view className="flex-row justify-between items-center mb-2">
                      <text className="font-semibold text-gray-800">
                        {payment.type}
                      </text>
                      <view
                        className={`mt-1 px-3 py-1 rounded-full ${
                          payment.status === "COMPLETED"
                            ? "bg-green-100 text-green-600"
                            : "bg-yellow-100 text-yellow-600"
                        }`}
                      >
                        <text className=" font-bold">{payment.status}</text>
                      </view>
                    </view>

                    <view className="flex mb-2">
                      <text className="text-gray-500">Amount:</text>
                      <text className="ml-1 font-bold text-gray-800">
                        {formatCurrency(payment.amount)}
                      </text>
                    </view>

                    {payment.transactions &&
                      payment.transactions.length > 0 && (
                        <view>
                          <text className="text-sm font-semibold text-gray-700 mb-2">
                            Transactions:
                          </text>

                          {payment.transactions.map((transaction) => (
                            <view
                              key={transaction.id}
                              className="p-3 rounded-lg bg-white border border-gray-200 mb-2"
                            >
                              <view className="flex justify-between mb-1">
                                <text className="text-sm text-gray-500">
                                  {transaction.paymentMethod}
                                </text>
                                <text className="text-sm font-semibold text-gray-800">
                                  {formatCurrency(transaction.amount)}
                                </text>
                              </view>
                              <view className="flex justify-between">
                                <text className=" text-gray-500">
                                  {formatDate(transaction.createdAt)}
                                </text>
                                <view
                                  className={`px-2 py-0.5 rounded-full ${
                                    transaction.status === "COMPLETED"
                                      ? "bg-green-100 text-green-600"
                                      : "bg-yellow-100 text-yellow-600"
                                  }`}
                                >
                                  <text className=" font-bold">
                                    {transaction.status}
                                  </text>
                                </view>
                              </view>
                            </view>
                          ))}
                        </view>
                      )}
                  </view>
                ))}
              </view>
            )}
          </view>
        )}

        {/* Quality Tab */}
        {activeTab === "quality" && (
          <view>
            {/* Evaluation Criteria Section */}
            {order.orderEvaluationCriteria &&
              order.orderEvaluationCriteria.length > 0 && (
                <view className="mb-6">
                  <text className="text-md font-medium mb-3">
                    Evaluation Criteria ({order.orderEvaluationCriteria.length}
                    ):
                  </text>
                  <view className="space-y-3">
                    {order.orderEvaluationCriteria.map((criteria, index) => (
                      <view
                        key={criteria.evaluationCriteria.id}
                        className="bg-gray-50 p-4 rounded-lg border border-gray-200"
                      >
                        <text className="font-medium text-gray-800">
                          {criteria.evaluationCriteria.name}
                        </text>
                        <text className="text-gray-600 mt-1 block">
                          {criteria.evaluationCriteria.description}
                        </text>
                      </view>
                    ))}
                  </view>
                </view>
              )}

            {/* Product Selection */}
            <view className="bg-white rounded-2xl border border-gray-200 p-5 mb-4">
              <text className="text-lg font-bold text-gray-800 mb-4">
                Select Product
              </text>

              <scroll-view
                scroll-orientation="horizontal"
                style={{
                  width: "calc(100% - 10px)",
                  height: "100px",
                }}
                className="mb-4"
              >
                <view className="flex">
                  {order.orderDetails?.map((detail, index) => (
                    <view
                      key={detail.id}
                      className={`rounded-xl w-28 h-28 ${
                        index === selectedOrderDetailIndex
                          ? "bg-blue-100 border border-blue-300"
                          : "bg-gray-50 border border-gray-200"
                      }`}
                      bindtap={() => setSelectedOrderDetailIndex(index)}
                    >
                      <view className="rounded-md mb-2">
                        {detail.design?.thumbnailUrl && (
                          <image
                            src={detail.design.thumbnailUrl}
                            className="w-28 h-28 rounded-md"
                          />
                        )}
                      </view>
                    </view>
                  ))}
                </view>
              </scroll-view>

              {selectedOrderDetail && (
                <view className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                  <view className="flex-row justify-between items-center mb-3">
                    <text className="font-semibold text-gray-800 mb-2">
                      {selectedOrderDetail.systemConfigVariant?.product?.name ||
                        "Product"}
                    </text>
                    <view
                      className={`px-3 py-1 rounded-full ${
                        getStatusColor(selectedOrderDetail.status, false).bg
                      } ${
                        getStatusColor(selectedOrderDetail.status, false).border
                      }`}
                    >
                      <text
                        className={` font-bold ${
                          getStatusColor(selectedOrderDetail.status, false).text
                        }`}
                      >
                        {selectedOrderDetail.status}
                      </text>
                    </view>
                  </view>

                  <view className="flex-row mb-3">
                    <view className="flex items-center mb-2">
                      <text className="text-gray-500 mr-2">Size</text>
                      <text className="font-medium text-gray-800">
                        {selectedOrderDetail.systemConfigVariant?.size || "N/A"}
                      </text>
                    </view>

                    <view className="flex items-center mb-2">
                      <text className="text-gray-500 mr-2">Color</text>
                      <view className="flex-row items-center">
                        <view
                          className="w-3 h-3 rounded-full mr-1"
                          style={{
                            backgroundColor:
                              selectedOrderDetail.systemConfigVariant?.color ||
                              "#ccc",
                          }}
                        />
                      </view>
                    </view>
                    <view className="flex items-center">
                      <text className="text-gray-500 mr-2">Quantity</text>
                      <text className="font-medium text-gray-800">
                        {selectedOrderDetail.quantity}
                      </text>
                    </view>
                  </view>

                  <view className="flex-row justify-between">
                    <view className="flex items-center mb-2">
                      <text className="text-gray-500 mr-2">Completed</text>
                      <text className="font-medium text-green-600">
                        {selectedOrderDetail.completedQty || 0}
                      </text>
                    </view>
                    <view className="flex items-center mb-2">
                      <text className="text-gray-500 mr-2">Rejected</text>
                      <text className="font-medium text-red-600">
                        {selectedOrderDetail.rejectedQty || 0}
                      </text>
                    </view>
                    <view className="flex items-center mb-2">
                      <text className="text-gray-500 mr-2">Rework</text>
                      <text className="font-medium text-gray-800">
                        {selectedOrderDetail.isRework
                          ? `Yes (${selectedOrderDetail.reworkTime || 0})`
                          : "No"}
                      </text>
                    </view>
                  </view>
                </view>
              )}
            </view>

            {/* Quality Checks */}
            {selectedOrderDetail &&
            selectedOrderDetail.checkQualities &&
            selectedOrderDetail.checkQualities.length > 0 ? (
              <view className="bg-white rounded-2xl border border-gray-200 p-5 mb-4">
                <text className="text-lg font-bold text-gray-800 mb-4">
                  Quality Checks
                </text>

                {selectedOrderDetail.checkQualities.map((check, index) => (
                  <view
                    key={check.id}
                    className="p-4 rounded-xl bg-gray-50 border border-gray-200 mb-3"
                  >
                    <view className="flex-row justify-between items-center mb-3">
                      <text className="font-semibold text-gray-800 mb-2">
                        Quality Check #{index + 1}
                      </text>
                      <view
                        className={`px-3 py-1 rounded-full ${
                          getStatusColor(check.status, false).bg
                        } ${getStatusColor(check.status, false).border}`}
                      >
                        <text
                          className={` font-bold ${
                            getStatusColor(check.status, false).text
                          }`}
                        >
                          {check.status}
                        </text>
                      </view>
                    </view>

                    <view className="flex-row mb-3">
                      <view className="flex items-center mb-2">
                        <text className="text-gray-500 mr-2">
                          Total Checked
                        </text>
                        <text className="font-medium text-gray-800">
                          {check.totalChecked || 0}
                        </text>
                      </view>
                      <view className="flex items-center mb-2">
                        <text className="text-gray-500 mr-2">Passed</text>
                        <text className="font-medium text-green-600">
                          {check.passedQuantity || 0}
                        </text>
                      </view>
                    </view>

                    {/* Conditional Quality Check Form */}
                    {(order.status === OrderStatus.WaitingForCheckingQuality ||
                      order.status === OrderStatus.ReworkRequired) &&
                      check.status === OrderDetailStatus.Pending && (
                        <view className="p-3 rounded-lg bg-white border border-gray-200 mb-3">
                          <text className="text-lg font-semibold text-gray-700 mb-2">
                            Complete Quality Check
                          </text>

                          <view className="flex items-center mb-3">
                            <text className="text-gray-500 mr-2">
                              Passed Quantity:
                            </text>
                            <input
                              type="number"
                              className="w-20 h-8 px-2 border border-slate-300 rounded-xl text-lg"
                              placeholder="0"
                              min="0"
                              max={selectedOrderDetail.quantity}
                              id={`passed-qty-${check.id}`}
                              value={passedQty}
                              bindinput={(event: any) =>
                                setPassedQty(Number(event.detail.value) || 0)
                              }
                            />
                          </view>

                          <view className="flex items-center mb-3">
                            <text className="text-gray-500 mr-2">Note:</text>
                            <input
                              type="text"
                              className="flex-1 h-8 px-2 border border-slate-300 rounded-xl text-lg"
                              placeholder="Add a note (optional)"
                              value={note}
                              bindinput={(event: any) =>
                                setNote(event.detail.value || "")
                              }
                            />
                          </view>

                          {/* Failed Criteria Selection - Only show if there are failed items */}
                          {selectedOrderDetail &&
                            selectedOrderDetail.quantity - passedQty > 0 && (
                              <view className="mt-4">
                                <text className="text-md font-medium mb-3">
                                  Select Failed Criteria (
                                  {selectedOrderDetail.quantity - passedQty}{" "}
                                  items failed):
                                </text>
                                <view className="space-y-2">
                                  {order.orderEvaluationCriteria?.map(
                                    (criteria) => (
                                      <view
                                        key={criteria.evaluationCriteria.id}
                                        className="flex items-center bg-white p-3 rounded-lg border border-gray-200"
                                        bindtap={() => {
                                          setSelectedFailedEvaluationCriteriaIds(
                                            (prev) => {
                                              if (
                                                prev.includes(
                                                  criteria.evaluationCriteria.id
                                                )
                                              ) {
                                                return prev.filter(
                                                  (id) =>
                                                    id !==
                                                    criteria.evaluationCriteria
                                                      .id
                                                );
                                              } else {
                                                return [
                                                  ...prev,
                                                  criteria.evaluationCriteria
                                                    .id,
                                                ];
                                              }
                                            }
                                          );
                                        }}
                                      >
                                        <view className="w-6 h-6 border-2 border-gray-300 rounded flex items-center justify-center mr-3">
                                          {selectedFailedEvaluationCriteriaIds.includes(
                                            criteria.evaluationCriteria.id
                                          ) && (
                                            <text className="text-indigo-400 text-xl">
                                              ✓
                                            </text>
                                          )}
                                        </view>
                                        <view className="flex-1">
                                          <text className="font-medium text-gray-800">
                                            {criteria.evaluationCriteria.name}
                                          </text>
                                          <text className="text-gray-600 text-sm">
                                            {
                                              criteria.evaluationCriteria
                                                .description
                                            }
                                          </text>
                                        </view>
                                      </view>
                                    )
                                  )}
                                </view>
                              </view>
                            )}

                          <view
                            className={`h-12 flex justify-center items-center rounded-xl mt-4 ${
                              qualityCheckLoading
                                ? "bg-indigo-300"
                                : "bg-indigo-400"
                            } text-center`}
                            bindtap={() => {
                              handleQualityCheck(check.id, passedQty);
                            }}
                          >
                            <text className="text-white text-lg font-medium">
                              {qualityCheckLoading
                                ? "Processing..."
                                : "Complete Quality Check"}
                            </text>
                          </view>

                          {qualityCheckError && (
                            <text className="text-red-500 text-sm mt-2">
                              {qualityCheckError}
                            </text>
                          )}

                          {qualityCheckSuccess && (
                            <text className="text-green-500 text-sm mt-2">
                              Quality check completed successfully!
                            </text>
                          )}
                        </view>
                      )}

                    {check.task && (
                      <view className="p-3 rounded-lg bg-white border border-gray-200">
                        <text className="text-lg font-semibold text-gray-700 mb-2">
                          Task Information:
                        </text>

                        <view className="flex-row justify-between mb-2">
                          <view className="flex items-center">
                            <text className="text-gray-500 mr-2">
                              Task Name:
                            </text>
                            <text className="text-sm font-medium text-gray-800">
                              {check.task.taskname}
                            </text>
                          </view>
                        </view>

                        <view className="flex-row justify-between mb-2">
                          <view className="flex items-center">
                            <text className="text-gray-500 mr-2">
                              Assignee:
                            </text>
                            <text className="text-sm font-medium text-gray-800">
                              {check.task.assignee?.name || "Unassigned"}
                            </text>
                          </view>
                        </view>

                        <view className="flex-row justify-between mb-2">
                          <view className="flex items-center">
                            <text className="text-gray-500 mr-2">Status:</text>
                            <view
                              className={`px-2 py-0.5 rounded-full ${
                                getStatusColor(check.task.status, false).bg
                              } ${
                                getStatusColor(check.task.status, false).border
                              }`}
                            >
                              <text
                                className={`font-bold ${
                                  getStatusColor(check.task.status, false).text
                                }`}
                              >
                                {check.task.status}
                              </text>
                            </view>
                          </view>
                        </view>

                        {check.task.note && (
                          <view className="mt-2">
                            <view className="flex items-center mb-2">
                              <text className="text-gray-500 mr-2">Note:</text>
                            </view>
                            <text className="text-sm text-gray-700 bg-gray-50 p-2 rounded-md mt-1">
                              {check.task.note}
                            </text>
                          </view>
                        )}
                      </view>
                    )}
                  </view>
                ))}
              </view>
            ) : (
              <view className="bg-white rounded-2xl border border-gray-200 p-5 mb-4 items-center">
                <view className="w-28 h-28 bg-gray-200 rounded-full items-center justify-center mb-3">
                  <text className="text-2xl">🔍</text>
                </view>
                <text className="text-lg font-semibold text-gray-800 text-center mb-2">
                  No Quality Checks Found
                </text>
                <text className="text-gray-500 text-center">
                  This product doesn't have any quality checks yet.
                </text>
              </view>
            )}
          </view>
        )}
      </view>
    </scroll-view>
  );
}
