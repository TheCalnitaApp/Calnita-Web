import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User {
    userId: string;
    token: string;
    refreshToken: string;

    products: 
        [{
            category: string
            concerns: string[]
            description: string;
            howToUse: string
            id: string
            ingredients: string[],
            name: string
            price: {
                salePrice: number
            },
            skinTypes: string[]
            status: string;
            weight: string[]
               
        }],

    brand: {
      email: string;
      identity: string;
      name: string;
      id: string;
      avatar: string;
      bio: string;
      coverPhoto: string;
    };
  }

  interface Session {
    user: {
      userId: string;
      token: string;
      refreshToken: string;

      products: 
        [{
            category: string
            concerns: string[]
            description: string;
            howToUse: string
            id: string
            ingredients: string[],
            name: string
            price: {
                salePrice: number
            },
            skinTypes: string[]
            status: string;
            weight: string[]
               
        }],

      brand: {
        email: string;
        identity: string;
        name: string;
        id: string;
        avatar: string;
        bio: string;
        coverPhoto: string;
      };
    };
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    user: {
      userId: string;
      token: string;
      refreshToken: string;

      products: 
        [{
            category: string
            concerns: string[]
            description: string;
            howToUse: string
            id: string
            ingredients: string[],
            name: string
            price: {
                salePrice: number
            },
            skinTypes: string[]
            status: string;
            weight: string[]
               
        }],
      brand: {
        email: string;
        identity: string;
        id: string;
        name: string;
        avatar: string;
        bio: string;
        coverPhoto: string;
      };
    };
  }
}


export const CustomSwitchInput = ({ values }: any) => {
  switch (values) {
    case 'My Skin':
     
    case 'My Mouth':
     
    case 'My Hair':
     
    case 'Creams and Lotions':
      
    case 'Fragrances/Deodorants':
      
    case 'For Men':
     
    case 'Tools and Accessories':
      
    case 'Suncare':
      
    default:
      return null;
  }
};