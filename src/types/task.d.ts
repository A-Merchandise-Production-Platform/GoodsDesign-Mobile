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
  checkQualities: {
    id: string;
    status: string;
    totalChecked: number;
    passedQuantity: number;
    orderDetailId: string;
    task: TaskEntity;
  }[];
};
