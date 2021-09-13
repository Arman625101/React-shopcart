export type SignUpFormValues = {
  email: string;
  password: string;
  username: string;
  avatar: string;
};

type Seller = {
  avatar: string;
  username: string;
  email: string;
};

export interface Product {
  description: string;
  image: string;
  name: string;
  price: number;
  sellerID: string;
  id: string;
  seller?: Seller;
}

export interface Profile {
  avatar: string;
  username: string;
  email: string;
  products?: string[];
}
