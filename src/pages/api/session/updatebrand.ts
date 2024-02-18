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


  const {  token,  refreshToken } = req.body;

  console.log( token, refreshToken)
  const session = await getSession({ req });

  try {
   
      const updateSessionProducts = await axios({
        url: `${graphqlApi}/auth`,
        method: 'post',
        data: {
          query: updateSessionProductsQuery,
         variables: {
          "refreshToken":  refreshToken
         }
        },

        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(updateSessionProducts.data.data.brandRefreshToken)
      return res.status(200).send(updateSessionProducts.data.data.brandRefreshToken);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Internal Server Error',  error });
  }
}
