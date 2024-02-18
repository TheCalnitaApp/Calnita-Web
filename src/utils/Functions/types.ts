import { ChangeEvent, ChangeEventHandler } from "react";
 export interface ProductInput {
    name: string;
    desc: string;
    ingredients: string[];
    howto: string;
    productImage: File[];
    status: string;
    discount: number
    category: {
      subCategories: Array<
        {
          types:  string[]
          name: string
        }
      >
    };
    pricing: Array<
      {
        weight: {
          value: number;
          unit: string;
        }
        salePrice: number
      }
    >
    qty: number
    token: string;
    refreshToken: string;
  }

  export interface ProductUpdateTypes {
    id: string;
    name: string;
    desc: string;
    ingredients: string[];
    howto: string;
    productImage: File[];
    status: string;
    discount: number;
    category: {
      subCategories: Array<
        {
          types:  string[]
          name: string
        }
      >
    };
    pricing: Array<
      {
        weight: {
          value: number;
          unit: string;
        }
        salePrice: number
      }
    >
    qty: number
    token: string;
    refreshToken: string;
  }

  export interface InputTypes {
    placeholder: string;
    name: string;
    label: string;
    type?: string;
  }

  export interface TextAreaTypes {
    placeholder: string;
    name: string;
    label: string;
   rows: number;
  }

  export interface SelectTypes {
    placeholder: string;
    name: string;
    value? : string
    label: string;
   options: string[]
  }

  export interface CheckboxTypes {
    placeholder: string;
    name: string;
    label: string;
   options: Array<string>
  }

  export interface ImageTypes {
    placeholder: string;
    name: string;
    label: string;
   onchange: ChangeEventHandler<HTMLInputElement>
  }

  export interface SignUpTypes {
    name: string,
    identity: string,
    email: string,
    password: string,
    document: Array<File>
  }

 export interface BrandUpdateTypes {
    avatar: string;
    coverPhoto: string;
  }

  export interface Customer {
    id: string;
    name: string;
    email: string;
    tel: number;
    status: boolean;
    location: string;
    orders: Array<{
      name: string;
      date: string;
      status: number;
      amount: number;
      imgUrl: string;
      destination: string;
      orderId: number;
      customer: {
        name: string;
        tel: number;
        email: string;
      };
      shippingDetails: {
        address: string;
        tel: number;
        email: string;
        landmark: string;
      };
      products: Array<{
        prodname: string;
        price: number;
        quantity: number;
        imgUrl: string;
      }>;
    }>
    cart: Array<{
      prodname: string;
      price: number;
      quantity: number;
      imgUrl: string;
    }>;
  }
  
  export interface CustomerPageProps {
    customer: Customer;
  }
