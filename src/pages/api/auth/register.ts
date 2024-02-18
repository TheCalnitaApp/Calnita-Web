import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { brandSignUpMutation } from "../../../utils/Functions/structures";

const graphqlApi = "https://calnita-api-gateway.onrender.com";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password, name, identity, } = req.body;

  try {
    console.log(email, password, name, identity);
    const response = await axios
      .post(
        `https://calnita-api-gateway.onrender.com/auth`,
        {
          query: brandSignUpMutation,
          variables: {
            "brandInput": {
              "email": `${email}`,
              "identity": `${identity}`,
              "name": `${name}`,
              "password": `${password}`,
            },
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
            res.status(200).send(response.data.data.brandEmailSignUp.token);
            Promise.resolve(response.data.data.brandEmailSignUp.token)
           return response.data.data.brandEmailSignUp.token; 
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
