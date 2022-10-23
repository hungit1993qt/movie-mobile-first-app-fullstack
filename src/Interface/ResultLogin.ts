export interface ResultLogin {
  _id: string;
  accountUser: string;
  nameUser: string;
  emailUser: string;
  phoneNumberUser: string;
  isAdmin: boolean;
  avatar: string;
  reviews: [];
  orders: [];
  createdAt: string;
  updatedAt: string;
  accessToken: string;
}
