// pages/api/brandData.ts
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const graphqlApi = "https://calnita-api-gateway.onrender.com";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { session, id } = req.body;

  const query = `
  query Brand($id: ID!) {
    brand(_id: $id) {
      avatar
      bio
      coverPhoto
      email
      id
      identity
      name
      products {
        category
        concerns
        description
        howToUse
        id
        ingredients
        name
        price {
          salePrice
        }
        productCode
        productImages
        productType
        skinTypes
        status
        weight
      }
    }
  }`;

  
    const response = await axios.post(
      `https://calnita-api-gateway.onrender.com/brand`,
      {
        query: query,
        variables: {
          "id": "657ca21f1eb1899a0999c2da",
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
