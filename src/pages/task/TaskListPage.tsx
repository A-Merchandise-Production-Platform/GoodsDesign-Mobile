import { useState, useEffect } from "@lynx-js/react";
import { useNavigate } from "react-router";
import { useAuthStore } from "../../stores/auth.store.js";
import { TASK_QUERY } from "../../graphql/queries/task.js";
import { graphqlFetch } from "../../graphql/client.js";
import type { StaffOrder } from "../../types/task.js";
import { formatDate } from "../../utils/format.js";

export default function TaskListPage() {
  const nav = useNavigate();
  const { user, accessToken } = useAuthStore();
  const [orders, setOrders] = useState<StaffOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTab, setSelectedTab] = useState<"quality_check" | "all">(
    "quality_check"
  );

  useEffect(() => {
    const fetchOrders = async () => {
      if (!accessToken) {
        setError("User not authenticated");
        setLoading(false);
        return;
      }

      try {
        const result = await graphqlFetch<{ staffOrders: StaffOrder[] }>(
          TASK_QUERY,
          accessToken
        );
        setOrders(result.staffOrders);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [accessToken]);

  // Filter orders based on selected tab
  const filteredOrders = orders.filter((order) => {
    if (selectedTab === "all") return true;
    if (selectedTab === "quality_check") {
      return order.tasks.some(
        (task) =>
          task.taskname.toLowerCase().includes("quality") ||
          task.description.toLowerCase().includes("quality")
      );
    }
    return true;
  });

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

  if (loading) {
    return (
      <view className=" items-center justify-center bg-gray-50">
        <view className="p-8 rounded-2xl bg-white shadow-lg">
          <view className="items-center">
            <view className="w-12 h-12 rounded-full border-3 border-blue-500 border-t-transparent animate-spin mb-4" />
            <text className="text-gray-700 font-medium text-lg text-center">
              Loading your orders...
            </text>
          </view>
        </view>
      </view>
    );
  }

  if (error) {
    return (
      <view className=" items-center justify-center bg-gray-50 p-4">
        <view className="p-8 rounded-2xl bg-red-50 shadow-lg border border-red-200">
          <text className="text-red-600 font-bold text-xl mb-3 text-center">
            Unable to load orders
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

  return (
    <view className="pt-4 pb-4">
      {/* Header */}
      <view className="bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-6">
        <view className="justify-between">
          <text className="text-3xl font-bold ">My Orders</text>
          <text className="font-medium mt-2">
            {filteredOrders.length}{" "}
            {filteredOrders.length === 1 || filteredOrders.length === 0
              ? "task"
              : "tasks"}
          </text>
        </view>
      </view>

      {/* Tabs */}
      <view className="flex-row bg-white border-b border-gray-200">
        <view
          className={`py-4 px-5 ${
            selectedTab === "quality_check"
              ? "border-b-3 border-blue-500 bg-blue-50"
              : ""
          }`}
          bindtap={() => setSelectedTab("quality_check")}
        >
          <text
            className={`font-semibold ${
              selectedTab === "quality_check"
                ? "text-blue-600"
                : "text-gray-600"
            }`}
          >
            Quality Check
          </text>
        </view>
        <view
          className={`py-4 px-5 ${
            selectedTab === "all" ? "border-b-3 border-blue-500 bg-blue-50" : ""
          }`}
          bindtap={() => setSelectedTab("all")}
        >
          <text
            className={`font-semibold ${
              selectedTab === "all" ? "text-blue-600" : "text-gray-600"
            }`}
          >
            All Task
          </text>
        </view>
      </view>

      {/* Orders List */}
      <view className="mt-4 p-4">
        {filteredOrders.length === 0 ? (
          <view className="items-center justify-center mt-10 p-6">
            <view className="w-24 h-24 bg-gray-200 rounded-full items-center justify-center mb-6 shadow-inner">
              <text className="text-4xl">📋</text>
            </view>
            <text className="text-gray-700 font-bold text-xl text-center">
              No orders found
            </text>
            <text className="text-gray-500 text-center mt-3 px-8 leading-relaxed">
              {selectedTab === "all"
                ? "You don't have any orders yet. New orders will appear here."
                : "No quality check orders available at the moment."}
            </text>
          </view>
        ) : (
          <scroll-view scroll-orientation="horizontal">
            {filteredOrders.map((order) => {
              const statusStyle = getStatusColor(order.status, order.isDelayed);
              const progressPercentage = Math.min(order.currentProgress, 100);

              return (
                <view
                  key={order.id}
                  bindtap={() => nav(`/task/${order.id}`, { replace: false })}
                  className="bg-white rounded-2xl  overflow-hidden border border-gray-200 w-full"
                >
                  {/* Order Header */}
                  <view>
                    <view className="flex-row justify-between items-center">
                      <view className="flex-row items-center">
                        <view className="bg-white rounded-lg p-2">
                          <text className="text-lg font-bold text-gray-800 mt-4">
                            #{order.id}
                          </text>
                        </view>
                        <view className="flex items-center">
                          <text className="text-sm text-gray-500">
                            Ordered on:
                          </text>
                          <text className="text-gray-800 font-medium ml-2">
                            {formatDate(order.orderDate)}
                          </text>
                        </view>
                      </view>
                      <view
                        className={`px-4 py-2 mt-4 rounded-full ${statusStyle.bg} border ${statusStyle.border}`}
                      >
                        <text
                          className={`text-sm font-bold ${statusStyle.text}`}
                        >
                          {order.isDelayed ? "DELAYED" : order.status}
                        </text>
                      </view>
                    </view>
                  </view>

                  {/* Order Info */}
                  <view className="p-5">
                    <view className="flex-row justify-between">
                      <view className="mb-6">
                        <text className=" uppercase text-gray-500 font-bold mb-2">
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
                        </view>
                      </view>
                      <view className="mb-6">
                        <text className=" uppercase text-gray-500 font-bold mb-2">
                          Factory
                        </text>
                        <view className="flex-row items-center bg-gray-50 p-3 rounded-xl border border-gray-200">
                          <view className="w-10 h-10 rounded-full bg-purple-100 items-center justify-center">
                            <text className="text-purple-600 font-bold text-lg">
                              {order?.factory?.name?.charAt(0) || "F"}
                            </text>
                          </view>
                          <text className="text-gray-800 font-semibold mt-1">
                            {order?.factory?.name || "Not assigned"}
                          </text>
                        </view>
                      </view>
                    </view>

                    <view className="flex-row justify-between mb-2">
                      <view className="mb-6">
                        <text className=" uppercase text-gray-500 font-bold mb-2">
                          Progress
                        </text>
                        <view className="bg-gray-50 p-3 rounded-xl border border-gray-200">
                          <view className="flex-row items-center mb-2">
                            <text className="text-2xl font-bold text-gray-800">
                              {progressPercentage}%
                            </text>
                            <text className="text-gray-500 text-sm">
                              complete
                            </text>
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
                      </view>
                      <view className="">
                        <text className=" uppercase text-gray-500 font-bold mb-2">
                          Total Items
                        </text>
                        <view className="bg-gray-50 p-3 rounded-xl border border-gray-200">
                          <view className="flex-row items-center">
                            <view className="w-10 h-10 rounded-full bg-green-100 items-center justify-center">
                              <text className="text-green-600 font-bold text-lg">
                                {order.totalItems}
                              </text>
                            </view>
                            <view>
                              <text className="text-gray-500 text-sm">
                                {order.totalItems === 1 ? "item" : "items"}
                              </text>
                            </view>
                          </view>
                        </view>
                      </view>
                    </view>
                  </view>
                </view>
              );
            })}
          </scroll-view>
        )}
      </view>
    </view>
  );
}
