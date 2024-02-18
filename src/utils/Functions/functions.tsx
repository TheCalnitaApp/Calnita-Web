import axios from "axios";
import { ProductInput, ProductUpdateTypes, SignUpTypes } from "./types";
const graphqlApi = "https://calnita-api-gateway.onrender.com";
const restApi = "https://calnita-api-gateway.onrender.com";

export const handleBrandSignUp = async (values: any) => {
  // console.log(values.document[0]);

  let file = values.document[0];

  const formData = new FormData();
  if (values.document.length > 0) {
    console.log(file);
    formData.append("registrationDoc", file);
    formData.append("fieldNames[registrationDoc]", "registrationDoc");
    // console.log(formData);
  }
  const data = {
    name: values.name,
    email: values.email,
    password: values.password,
    identity: values.identity,
  };

  const request = await axios
    .post("/api/auth/register", data)
    .then((response) => {
      console.log("Response:", response.data);
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      console.log("Error:", error);
      return Promise.reject(error.response.data[0].message);
    });

  let uploadHeaders = new Headers();
  uploadHeaders.append("apollo-require-preflight", "true");

  uploadHeaders.append("Authorization", `Bearer ${request}`);
  const uploadResponse = await axios
    .post(`${graphqlApi}/upload/brand`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "apollo-require-preflight": true,
        Authorization: `Bearer ${request}`,
      },
    })
    .then((response) => {
      console.log(response.data);
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
      return Promise.reject(error);
    });
  return request;
};

export const handleBrandUpdate = async (values: any) => {
  let avatar = values.avatar;
  let coverPhoto = values.coverPhoto;
  const fieldNames = ["avatar", "coverPhoto"];
  const formData = new FormData();

  if (values.avatar || values.coverPhoto) {
    formData.append("avatar", avatar);
    formData.append("coverPhoto", coverPhoto);
    fieldNames.forEach((fieldName, index) => {
      formData.append(`fieldNames[${index}]`, fieldName);
    });
    // console.log(formData);
  }

  const uploadResponse = await axios
    .post(`${graphqlApi}/upload/brand`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "apollo-require-preflight": true,
        Authorization: `Bearer ${values.token}`,
      },
    })
    .then((response) => {
      console.log(response.data.fileUrls);
      return Promise.resolve(response.data.fileUrls);
    })
    .catch((error) => {
      console.error("Error:", error);
      return Promise.reject(error);
    });

  const request = await axios
    .post(
      "/api/updateBrand",
      {
        name: values.name,
        bio: values.bio,
        identity: values.identity,
        id: values.id,
        token: values.token,
        avatar: uploadResponse.length > 0 ? uploadResponse[0] : values.avatar,
        coverPhoto: uploadResponse.length > 0 ? uploadResponse[1] : values.coverPhoto,
      },
      {
        headers: {
          "apollo-require-preflight": true,
          Authorization: `Bearer ${values.token}`,
        },
      }
    )
    .then((response) => {
      console.log("Response:", response.data);
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      console.log("Error:", error);
      return Promise.reject(error.response.data[0].message);
    });
  return request;
};
export const handleAddProduct = async (values: ProductInput) => {
  try {
    // console.log(values.token);
    // console.log(values.productImage[0]);
    let file = values.productImage[0];

    const data = {
      category: values.category,
      description: values.desc,
      howToUse: values.howto,
      ingredients: values.ingredients,
      name: values.name,
      pricing: values.pricing,
      token: values.token,
      refreshToken: values.refreshToken,
      status: values.status,
      discount: values.discount
    };

    const formData = new FormData();

    const request = await axios
      .post("/api/product/add", data)
      .then((response) => {
        console.log("Response:", response.data);
        return Promise.resolve(response.data.data.createProduct.id);
      })
      .catch((error) => {
        console.log("Error:", error);
        return Promise.reject(error.response.data[0].message);
      });

    if (values.productImage.length > 0) {
      formData.append("coverPhoto", file); //  I'm passing  in only the main  image hencce  1 file
      formData.append("fieldNames[0]", "coverPhoto"); // I'm confused. Please restructure.
      // formData.append("imageIndices[0]", "0"); //   I'm confused. Please restructure
      formData.append("resourceId", request); // . "request is the product Id from the create product response"
    }

    const uploadResponse = await axios
      .post(`${graphqlApi}/upload/product`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "apollo-require-preflight": true,
          Authorization: `Bearer ${values.token}`,
        },
      })
      .then((response) => {
        console.log(response.data.fileUrls);
        return Promise.resolve(response.data.fileUrls);
      })
      .catch((error) => {
        console.error("Error:", error);
        return Promise.reject(error);
      });

      const updatesessionProducts = await axios
      .post("/api/session/updatebrand", data)
      .then((response) => {
        console.log("Response:", response.data);
        return Promise.resolve(response.data);
      })
      .catch((error) => {
        console.log("Error:", error);
        return Promise.reject(error.response.data[0].message)
      });
      return updatesessionProducts
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

export const handleUpdateProduct = async (values: ProductUpdateTypes) => {
  try {
    // console.log(values.token);
    // console.log(values.productImage[0]);
    let file = values.productImage[0];

    const data = {
      id: values.id,
      category: values.category,
      description: values.desc,
      howToUse: values.howto,
      ingredients: values.ingredients,
      name: values.name,
      pricing: values.pricing,
      status: values.status,
      token: values.token,
      refreshToken: values.refreshToken,
      discount: values.discount
    };

    const formData = new FormData();

    const request = await axios
      .post("/api/product/edit", data)
      .then((response) => {
        console.log("Response:", response.data);
        return Promise.resolve(response.data.data.updateProduct.id);
      })
      .catch((error) => {
        console.log("Error:", error);
        return Promise.reject(error.response.data[0].message);
      });

    if (values.productImage.length > 0) {
      formData.append("coverPhoto", file); //  I'm passing  in only the main  image hencce  1 file
      formData.append("fieldNames[0]", "coverPhoto"); // I'm confused. Please restructure.
      // formData.append("imageIndices[0]", "0"); //   I'm confused. Please restructure
      formData.append("resourceId", request); // . "request is the product Id from the create product response"
    }


if (values.productImage.length > 0) {
    const uploadResponse = await axios
      .post(`${graphqlApi}/upload/product`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "apollo-require-preflight": true,
          Authorization: `Bearer ${values.token}`,
        },
      })
      .then((response) => {
        console.log(response.data.fileUrls);
        return Promise.resolve(response.data.fileUrls);
      })
      .catch((error) => {
        console.error("Error:", error);
        return Promise.reject(error);
      });
}
const updatesessionProducts = await axios
.post("/api/session/updatebrand", data)
.then((response) => {
  console.log("Response:", response.data);
  return Promise.resolve(response.data);
})
.catch((error) => {
  console.log("Error:", error);
  return Promise.reject(error.response.data[0].message)
});
return updatesessionProducts
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

export const DeleteProdRequest = async (values: any, session: any) => {
  const data = {
    category: values.category,
    description: values.desc,
    howToUse: values.howto,
    ingredients: values.ingredients,
    name: values.name,
    pricing: values.pricing,
    token: session.user.token,
    status: values.status,
    refreshToken: session.user.refreshToken
    
  };
  try {
    if (session!.user.token) {
      const response = await fetch(`${graphqlApi}/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.user.token}`,
        },
        body: JSON.stringify({
          query: ` 
          mutation {
           deleteProduct(_id: "${values.id}") {
             name
           }
         }
         `,
        }),
      })
        .then((response) => {
          console.log("Response:", response.json);
          return Promise.resolve(response.json);
        })
        .catch((error) => {
          console.log("Error:", error);
          return Promise.reject(error);
        });
    }
    const updatesessionProducts = await axios
      .post("/api/session/updatebrand", data)
      .then((response) => {
        console.log("Response:", response.data);
        return Promise.resolve(response.data);
      })
      .catch((error) => {
        console.log("Error:", error);
        return Promise.reject(error.response.data[0].message)
      });
      return updatesessionProducts

  } catch (error) {
    console.log(error);
  }
};

export const requestOtp =  async (email: string, purpose: string) => {
  const data = {
    email:  email,
    purpose: purpose
  }
  const request = await axios
  .post("/api/auth/requestOtp", data)
  .then((response) => {
    console.log("Response:", response.data);
    return Promise.resolve(response.data);
  })
  .catch((error) => {
    console.log("Error:", error);
    return Promise.reject(error.response.data[0].message);
  });

  return request;
}
export const verifyOTP =  async (values: any) => {
  const data = {
    email:  values.email,
    otp: values.otp,
    purpose: values.purpose

  }
  const request = await axios
  .post("/api/auth/verifyOtp", data)
  .then((response) => {
    console.log("Response:", response.data);
    return Promise.resolve(response.data);
  })
  .catch((error) => {
    console.log("Error:", error);
    return Promise.reject(error.response.data[0].message);
  });

  return request;
}

export const resetPassword =  async (values: any) => {
  const data = {
    email:  values.email,
    password: values.password

  }
  const request = await axios
  .post("/api/auth/resetPass", data)
  .then((response) => {
    console.log("Response:", response.data);
    return Promise.resolve(response.data);
  })
  .catch((error) => {
    console.log("Error:", error);
    return Promise.reject(error.response.data[0].message);
  });

  return request;
}

export const Currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "NGN",
});
