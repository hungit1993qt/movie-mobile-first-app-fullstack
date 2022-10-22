export interface Reviews {
  _id: string;
  contentReview: string;
  rankReview: number;
  user: {
    _id: string;
    accountUser: string;
    nameUser: string;
    emailUser: string;
    phoneNumberUser: string;
    isAdmin: boolean;
    avatar: string;
  };
  createdAt: string;
  updatedAt: Date;
}
