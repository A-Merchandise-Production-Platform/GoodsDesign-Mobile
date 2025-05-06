export type StaffOrder = {
  id: string;
  status: string;
  orderDate: string;
  acceptanceDeadline: string;
  acceptedAt?: string;
  completedAt?: string;
  currentProgress: number;
  isDelayed: boolean;
  delayReason?: string;
  totalItems: number;
  totalPrice: number;
  totalProductionCost: number;
  customer: {
    name: string;
    email: string;
    imageUrl?: string;
  };
  factory: {
    name: string;
    owner: {
      name: string;
      email: string;
      imageUrl?: string;
    };
  };
  tasks: TaskEntity[];
  orderDetails: OrderDetail[];
};

export type OrderDetail = {
  id: string;
  quantity: number;
  completedQty: number;
  rejectedQty: number;
  status: string;
  price: number;
  productionCost: number;
  isRework: boolean;
  reworkTime?: string;
  systemConfigVariant: {
    id: string;
    color: string;
    size: string;
    model: string;
    price: number;
    isActive: boolean;
    isDeleted: boolean;
    product: {
      name: string;
      imageUrl?: string;
    };
  };
  design?: {
    thumbnailUrl: string;
    systemConfigVariantId: string;
    isTemplate: boolean;
    isPublic: boolean;
    isFinalized: boolean;
    id: string;
    systemConfigVariant: {
      color: string;
      id: string;
      isActive: boolean;
      isDeleted: boolean;
      model: string;
      price: number;
      product: {
        name: string;
        imageUrl?: string;
      };
      productId: string;
      size: string;
    };
    designPositions: {
      positionType: {
        positionName: string;
        basePrice: number;
      };
      designJSON: string;
    }[];
  };
  checkQualities: {
    id: string;
    status: string;
    totalChecked: number;
    passedQuantity: number;
    orderDetailId: string;
    task: TaskEntity;
  }[];
};

export type Order = {
  id: string;
  status: string;
  orderDate: string;
  acceptanceDeadline: string;
  acceptedAt?: string;
  completedAt?: string;
  currentProgress: number;
  isDelayed: boolean;
  delayReason?: string;
  totalItems: number;
  totalPrice: number;
  totalProductionCost: number;
  address?: {
    districtID: string;
    factoryId: string;
    id: string;
    provinceID: string;
    street: string;
    wardCode: string;
    formattedAddress?: string;
  };
  addressId?: string;
  assignedAt?: string;
  doneCheckQualityAt?: string;
  doneProductionAt?: string;
  estimatedCheckQualityAt?: string;
  estimatedCompletionAt?: string;
  estimatedDoneProductionAt?: string;
  estimatedShippingAt?: string;
  customer: {
    name: string;
    email: string;
    imageUrl?: string;
  };
  customerId?: string;
  factory: {
    name: string;
    owner: {
      name: string;
      email: string;
      imageUrl?: string;
    };
    address?: {
      districtID: string;
      street: string;
      id: string;
      provinceID: string;
      wardCode: string;
      formattedAddress?: string;
    };
  };
  orderDetails: OrderDetail[];
  orderProgressReports?: {
    reportDate: string;
    note: string;
    imageUrls: string[];
    id: string;
  }[];
  payments?: {
    id: string;
    type: string;
    paymentLog: string;
    amount: number;
    transactions: {
      imageUrls: string[];
      transactionLog: string;
      status: string;
      paymentMethod: string;
      createdAt: string;
      amount: number;
      id: string;
      type: string;
    }[];
    status: string;
  }[];
  ratedAt?: string;
  ratedBy?: string;
  rating?: number;
  ratingComment?: string;
  rejectedHistory?: {
    rejectedAt: string;
    reassignedTo: string;
    reassignedAt: string;
    reason: string;
    id: string;
    factory: {
      name: string;
      contractUrl?: string;
      address: {
        wardCode: string;
        street: string;
        districtID: string;
        provinceID: string;
      };
      owner: {
        name: string;
        email: string;
        imageUrl?: string;
      };
    };
  }[];
  shippedAt?: string;
  shippingPrice?: number;
  tasks: TaskEntity[];
  updatedAt: string;
};
