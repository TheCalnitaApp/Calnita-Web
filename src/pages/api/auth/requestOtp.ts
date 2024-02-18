import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { requestOtpMutation } from "@/utils/Functions/structures";

const graphqlApi = "https://calnita-api-gateway.onrender.com";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, purpose } = req.body;

  try {
    console.log(email);
    const response = await axios
      .post(
        `https://calnita-api-gateway.onrender.com/auth`,
        {
          query: requestOtpMutation,
          variables: {
            
                "email": email,
                "purpose": purpose
              
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        response.data;
        console.log(response.data)
        
        if(response.data.errors) {
             res.status(500).send(response.data.errors);
             Promise.reject(response.data)
        }
        else {
            res.status(200).send(response.data.data.requestOTP.message);
            Promise.resolve(response.data.data.requestOTP.message)
           return response.data.data.requestOTP.message; 
        }
       
      })
      .catch((error) => {
        console.log(error)
        res.status(500).send({ error: error.data.errors }) });

  } catch (error) {
    console.log(error)
    res.status(500).send({ error: error });
    return Promise.reject(error)
  }
}
