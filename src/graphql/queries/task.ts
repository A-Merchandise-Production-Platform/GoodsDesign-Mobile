export const TASK_QUERY = `
query GetMyStaffOrders {
  staffOrders {
    acceptanceDeadline
    acceptedAt
    address {
      districtID
      factoryId
      id
      provinceID
      street
      wardCode
    }
    addressId
    assignedAt
    completedAt
    currentProgress
    customer {
      imageUrl
      name
      email
    }
    customerId
    delayReason
    doneCheckQualityAt
    doneProductionAt
    estimatedCheckQualityAt
    estimatedCompletionAt
    estimatedDoneProductionAt
    estimatedShippingAt
    factory {
      name
      owner {
        name
        imageUrl
        email
      }
    }
    id
    isDelayed
    orderDate
    orderDetails {
      systemConfigVariant {
        id
        isActive
        isDeleted
        price
        color
        size
        model
        product {
            name
            imageUrl
          }
      }
      checkQualities {
        totalChecked
        status
        passedQuantity
        orderDetailId
        task {
          taskname
          taskType
          status
          startDate
          note
          id
          expiredTime
          description
          completedDate
          assignee {
            email
            name
            imageUrl
            id
          }
          assignedDate
        }
      }
      completedQty
      createdAt
      design {
        thumbnailUrl
        systemConfigVariantId
        isTemplate
        isPublic
        isFinalized
        id
        systemConfigVariant {
          color
          id
          isActive
          isDeleted
          model
          price
          product {
            name
            imageUrl
          }
          productId
          size
        }
        designPositions {
          positionType {
            positionName
            basePrice
          }
          designJSON
        }
      }
      id
      isRework
      price
      productionCost
      quantity
      rejectedQty
      reworkTime
      status
      updatedAt
    }
    orderProgressReports {
      reportDate
      note
      imageUrls
      id
    }
    payments {
      id
      type
      paymentLog
      amount
      transactions {
        imageUrls
        transactionLog
        status
        paymentMethod
        createdAt
        amount
        id
        type
      }
      status
    }
    ratedAt
    ratedBy
    rating
    ratingComment
    rejectedHistory {
      rejectedAt
      reassignedTo
      reassignedAt
      reason
      id
      factory {
        name
        contractUrl
        address {
          wardCode
          street
          districtID
          provinceID
        }
        owner {
          name
          email
          imageUrl
        }
      }
    }
    shippedAt
    shippingPrice
    status
    tasks {
      taskname
      taskType
      id
      status
      startDate
      note
      description
      expiredTime
      completedDate
      assignee {
        name
        imageUrl
        email
      }
      assignedDate
    }
    totalItems
    totalPrice
    totalProductionCost
    updatedAt
  }
}
`;

export const GET_TASK_DETAIL_QUERY = `query GetOrder($orderId: String!) {
  order(id: $orderId) {
    acceptanceDeadline
    acceptedAt
    orderEvaluationCriteria {
      createdAt
      evaluationCriteria {
        id
        description
        name
        updatedAt
      }
    }
    orderCode
    address {
      districtID
      factoryId
      id
      provinceID
      street
      wardCode
      formattedAddress
    }
    addressId
    assignedAt
    completedAt
    currentProgress
    customer {
      imageUrl
      name
      email
    }
    customerId
    delayReason
    doneCheckQualityAt
    doneProductionAt
    estimatedCheckQualityAt
    estimatedCompletionAt
    estimatedDoneProductionAt
    estimatedShippingAt
    factory {
      name
      owner {
        name
        imageUrl
        email
      }
      address {
        districtID
        street
        id
        provinceID
        wardCode
        formattedAddress
      }
    }
    id
    isDelayed
    orderDate
    orderDetails {
      systemConfigVariant {
        id
        isActive
        isDeleted
        price
        color
        size
        model
        product {
          name
          imageUrl
        }
      }
      checkQualities {
        id
        totalChecked
        status
        passedQuantity
        orderDetailId
        task {
          taskname
          taskType
          status
          startDate
          note
          id
          expiredTime
          description
          completedDate
          assignee {
            email
            name
            imageUrl
            id
          }
          assignedDate
        }
      }
      completedQty
      createdAt
      design {
        thumbnailUrl
        systemConfigVariantId
        isTemplate
        isPublic
        isFinalized
        id
        systemConfigVariant {
          color
          id
          isActive
          isDeleted
          model
          price
          product {
            name
            imageUrl
          }
          productId
          size
        }
        designPositions {
          positionType {
            positionName
            basePrice
          }
          designJSON
        }
      }
      id
      isRework
      price
      productionCost
      quantity
      rejectedQty
      reworkTime
      status
      updatedAt
    }
    orderProgressReports {
      reportDate
      note
      imageUrls
      id
    }
    payments {
      id
      type
      paymentLog
      amount
      transactions {
        imageUrls
        transactionLog
        status
        paymentMethod
        createdAt
        amount
        id
        type
      }
      status
    }
    ratedAt
    ratedBy
    rating
    ratingComment
    rejectedHistory {
      rejectedAt
      reassignedTo
      reassignedAt
      reason
      id
      factory {
        name
        contractUrl
        address {
          wardCode
          street
          districtID
          provinceID
        }
        owner {
          name
          email
          imageUrl
        }
      }
    }
    shippedAt
    shippingPrice
    status
    tasks {
      taskname
      taskType
      id
      status
      startDate
      note
      description
      expiredTime
      completedDate
      assignee {
        name
        imageUrl
        email
      }
      assignedDate
    }
    totalItems
    totalPrice
    totalProductionCost
    updatedAt
  }
}`;

export const CHECK_QUALITY_MUTATION = `mutation DoneCheckQuality($input: DoneCheckQualityInput!) {
  doneCheckQuality(input: $input) {
    id
  }
}`;
