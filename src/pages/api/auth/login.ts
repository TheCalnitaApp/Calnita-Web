import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios"

const graphqlApi = "https://calnita-api-gateway.onrender.com";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const { email, password } = req.body;
  
    const mutation = `
  mutation BrandEmailSignIn($email: String!, $password: String!) {
    brandEmailSignIn(email: $email, password: $password) {
      brand {
        avatar
        bio
        coverPhoto
        email
        id
        identity
        name
      }
      products {
        weight
        status
        skinTypes
        productType
        productCode
        price {
          salePrice
        }
        ingredients
        concerns
        category
        description
        id
        howToUse
        name
      }
    }
  }`;;
  
    
      const response = await axios.post(
        `https://calnita-api-gateway.onrender.com/brand`,
        {
            mutaion: mutation,
            variables: {
              "email": email,
              "password": password
    
            },
          },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((response) => {
        response.data
        res.status(200).send(response.data)
      })
        .catch((error) => res.status(500).json({ error: error }))
  
  }