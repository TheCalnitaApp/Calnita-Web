import { GetStaticPaths, GetStaticProps } from 'next';
import { Customer, CustomerPageProps } from '../../../utils/Functions/types';
import ViewCustomer from '../../../prerenderedComponents/viewcustomer';
import React from 'react';


export const getStaticPaths = async () => {
    // Fetch the list of customer IDs from your API route
    const response = await fetch(`https://645bba4da8f9e4d6e7715bbb.mockapi.io/customers`);
    const data = await response.json();
    const customerIds = data.map((customer: any) => customer.id);
 
    const paths = customerIds.map((id: string) => ({
      params: { id },
    }));
  
    return {
      paths,
      fallback: true,
    };
  };


  export const getStaticProps: GetStaticProps<CustomerPageProps> = async ({ params }) => {
    if (!params || !params.id) {
      return {
        notFound: true,
      };
    }
  
    // Fetch customer data based on the ID from your API route
    const response = await fetch(`https://645bba4da8f9e4d6e7715bbb.mockapi.io/customers/${params.id}`);
    const customer: Customer = await response.json();
   
    return {
      props: {
        customer,
      },
      revalidate: 60,
    };
  };
  export default function CustomerPage({ customer }: any) {
    if (customer) {
       return (
      <ViewCustomer customer= {customer } />
    )} else {
      return (
        <span>Hello</span>
      )
    }
    
   
  }
  