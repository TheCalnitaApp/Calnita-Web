export const PostQuery = `
mutation CreateProduct($productInput: ProductInput) {
  createProduct(productInput: $productInput) {
    id
  }
}`;

export const  productUpdateMutation = `
mutation UpdateProduct($id: ID!, $productInputUpdate: ProductInputUpdate) {
  updateProduct(_id: $id, productInputUpdate: $productInputUpdate) {
    id
    name
  }
}
`
export  const getProductById = `
query Product($id: ID!) {
  product(_id: $id) {
    category {
      subCategories {
        types
        name
      }
      name
    }
    
    pricing {
      weight {
        value
        unit
      }
      salePrice
    }
    discount
    status
    productCode
    name
    ingredients
    id
    howToUse
    description
    coverPhoto
  }
}
`
export  const brandUpdateMutation = `
mutation UpdateBrand($id: ID!, $brandInputUpdate: BrandInputUpdate) {
  updateBrand(_id: $id, brandInputUpdate: $brandInputUpdate) {
    avatar
    bio
    coverPhoto
    email
    id
    identity
    name
    password
  }
}`

export const brandSignUpMutation = `
mutation BrandEmailSignUp($brandInput: BrandInput) {
  brandEmailSignUp(brandInput: $brandInput) {
    brand {
      password
      name
      identity
      email
    }
    token
    userId
    userData {
      location {
        country
        state
      }
      firstName
      lastName
      email
      gender
      dOB
      beautyChallenges
      orders
      phoneNumber
      username
    }
  }
}`

export const requestOtpMutation = `
mutation RequestOTP($email: String!, $purpose: String!) {
  requestOTP(email: $email, purpose: $purpose) {
    status
    message
  }
}
`

export const verifyOtpMutation =  `
mutation VerifyOTP($email: String!, $purpose: String!, $otp: String) {
  verifyOTP(email: $email, purpose: $purpose, otp: $otp) {
    status
    message
  }
}
`
export const brandSignInMutation = `
mutation BrandEmailSignIn($email: String!, $password: String!) {
  brandEmailSignIn(email: $email, password: $password) {
    products {
      category {
        subCategories {
          types
          name
        }
        name
      }
      
      pricing {
        weight {
          value
          unit
        }
        salePrice
      }
      productCode
      status
      discount
      name
      ingredients
      id
      howToUse
      description
      coverPhoto
    }
    userId
    tokenExpiration
    token
    refreshToken
    brand {
      name
      identity
      id
      email
      coverPhoto
      bio
      avatar
    }
  }
}
`

export const updateSessionProductsQuery = `
mutation BrandRefreshToken($refreshToken: String!) {
  brandRefreshToken(refreshToken: $refreshToken) {
    products {
      status
      productCode
      pricing {
        salePrice
        weight {
          value
          unit
        }
      }
      name
      ingredients
      id
      howToUse
      discount
      description
      category {
        subCategories {
          name
          types
        }
        name
      }
      coverPhoto
    }
    refreshToken
    brand {
      name
      email
      coverPhoto
      bio
      avatar
      identity
      id
    }
    userId
    tokenExpiration
    token
  }
}
`

export const updateSessionBrandQuery = `
query Brand($id: ID) {
  brand(_id: $id) {
    password
    name
    nafdacDoc
    identity
    id
    email
    coverPhoto
    bio
    avatar
  }
}
`