import { UserRole } from "@/types/user";

const userService = {
  getUserTabsByRole: (role: string | undefined) => {
    switch (role) {
      case UserRole.ADMIN:
        return tabs.admin;
      case UserRole.MANAGER:
        return tabs.manager;
      case UserRole.STAFF:
        return tabs.staff;
      case UserRole.USER:
      default:
        return tabs.user;
    }
  },
};

const tabs = {
  user: "userTabs",
  staff: "staffTabs",
  manager: "managerTabs",
  admin: "adminTabs",
};

export { userService };
