// pages/api/addProduct.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react'; // Assuming you're using NextAuth for session management
import axios from 'axios';
import { productUpdateMutation } from '../../../utils/Functions/structures';

const graphqlApi = "https://calnita-api-gateway.onrender.com";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }


  const { category, concern, description, howToUse, ingredients, name, pricing, id, token, status, discount } = req.body;

  console.log(category, concern, description, howToUse, ingredients, name, pricing,status, id, token)
  const session = await getSession({ req });

  try {
      const graphqlResponse = await axios({
        url: `${graphqlApi}/products`,
        method: 'post',
        data: {
          query: productUpdateMutation,
          variables: {
            "productInputUpdate": {
              "category": category,
              "description": description,
              "howToUse": howToUse,
              "ingredients": ingredients,
              "name": name,
              "pricing": pricing,
              "status":  status,
              "discount": discount
            },
            "id": id
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
