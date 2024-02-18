// pages/[id].js
import { GetServerSideProps, NextPage } from 'next';

import { getSession } from 'next-auth/react';
import  axios  from 'axios';
import { getProductById } from '@/utils/Functions/structures';
import ViewCustomer from '@/prerenderedComponents/viewcustomer';
import Editproductform from '../../../../prerenderedComponents/forms/editpageform';

interface Item {
  id: string;
  name: string;
  // Add other properties of your item here
}

interface Props {
  item?: Item;
}
const fetchItemById = async (id: string, token: string): Promise<Item | null>  => {
  // Implement your logic to fetch data based on the ID using the token
  // For example, make an API request to your backend
    console.log(id, token)
  const response =  await axios({
    url: "https://calnita-api-gateway.onrender.com/products",
    method: 'post',
    data: {
      query: getProductById,
      variables: {
        "id": id
      },
    },
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.data.data.product;
    

  return data;
};

const DynamicPage = ({ item }: any) => {
  return (
    <div>
      <h1>{item ? <Editproductform initialData={item}  /> : 'Item Not Found'}</h1>
      {/* Render other details of the item here */}
    </div>
  );
};



export const  getServerSideProps: GetServerSideProps<Props> = async (context)  =>  {
  const session = await getSession(context);

  if (!session?.user?.token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const { id }: any = context.params;
  const item = await fetchItemById(id, session.user.token);

  if (!item) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      item,
    },
  };
}

export default DynamicPage;
