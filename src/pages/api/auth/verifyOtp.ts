import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { verifyOtpMutation } from "@/utils/Functions/structures";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, otp, purpose } = req.body;

  try {
    console.log(email);
    const response = await axios
      .post(
        `https://calnita-api-gateway.onrender.com/auth`,
        {
          query: verifyOtpMutation,
          variables: {
            
                "email": email,
                "purpose": purpose,
                "otp": otp
              
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
            res.status(200).send(response.data.data.verifyOTP.message);
            Promise.resolve(response.data.data.verifyOTP.message)
           return response.data.data.verifyOTP.message; 
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
