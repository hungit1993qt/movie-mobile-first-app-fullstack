export interface User {
  _id: string;
  accountUser: string;
  passwordUser: string;
  nameUser: string;
  emailUser: string;
  phoneNumberUser: string;
  isAdmin: boolean;
  avatar: string;
  reviews: [];
  orders: [];
}
