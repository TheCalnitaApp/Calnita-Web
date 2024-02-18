import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { brandUpdateMutation } from "@/utils/Functions/structures";

const graphqlApi = "https://calnita-api-gateway.onrender.com";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { bio, name, identity, token, id,  avatar, coverPhoto } = req.body;
 console.log(bio, name, identity, token, id, avatar, coverPhoto);
  try {
   
    const response = await axios
      .post(
        `https://calnita-api-gateway.onrender.com/brand`,
        {
          query: brandUpdateMutation,
          variables: {
            "brandInputUpdate": {
                "bio": bio,
                "name": name,
                "identity": identity,
                "avatar":  avatar,
                "coverPhoto":  coverPhoto
              },
              "id":  id
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
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
            res.status(200).send(response.data.data.updateBrand);
            Promise.resolve(response.data.data.updateBrand)
           return response.data.data.updateBrand; 
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
