export enum UserRole {
  Teacher = 'Teacher',
  Student = 'Student',
}

export enum PurchaseState {
  Started = 'Started',
  WaitingForPayment = 'WaitingForPayment',
  Purchased = 'Purchased',
  Cancelled = 'Cancelled',
}

export interface IUser {
  _id?: string;
  displayName?: string;
  email: string;
  passwordHash: string;
  role: UserRole;
  courses: IUserCources[];
}

export interface IUserCources {
  _id?: string;
  courseId: string;
  purchaseState: PurchaseState;
}
