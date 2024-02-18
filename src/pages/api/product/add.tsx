// pages/api/addProduct.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react'; // Assuming you're using NextAuth for session management
import axios from 'axios';
import { PostQuery, updateSessionProductsQuery } from '../../../utils/Functions/structures';

const graphqlApi = "https://calnita-api-gateway.onrender.com";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }


  const { category, description, howToUse, ingredients, name, pricing, token,  status, discount } = req.body;

  console.log(category, description, howToUse, ingredients, name, pricing, token, status)
  const session = await getSession({ req });

  try {
      const graphqlResponse = await axios({
        url: `${graphqlApi}/products`,
        method: 'post',
        data: {
          query: PostQuery,
          variables: {
            "productInput": {
              "category": category,
              "description": description,
              "howToUse": howToUse,
              "ingredients": ingredients,
              "name": name,
              "pricing": pricing,
              "status": status,
              "discount": discount
            },
          },
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(graphqlResponse.data)
    
      return res.status(200).send(graphqlResponse.data);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Internal Server Error',  error });
  }
}
