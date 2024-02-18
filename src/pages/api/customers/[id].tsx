// pages/api/customers/[id].ts

import { NextApiRequest, NextApiResponse } from 'next';

const customersData = {
    customers: [
      {
        id: 'mimienene',
        name: 'Mimiboy Enene',
        email: 'mimi@gmail.com',
        tel: 8146134953,
        location: 'Nigeria',
        orders: [
          {
            name: 'CeraVe',
            date: '12/2/2023',
            status: 2,
            amount: 14450,
            imgUrl: './topprodpic.png',
            destination: 'kenya',
            orderId: 234857,
            customer: {
              name: 'Grace Amusan',
              tel: 8123456789,
              email: 'grace@gmail.com',
            },
            shippingDetails: {
              address: '45 Sapa Street, benson avenue, Uyo ',
              tel: 7894332041,
              email: 'Calnita@gmail.com',
              landmark: 'Unity Bank benson avenue',
            },
            products: [
              {
                prodname: 'Obsessed 5ml parfum',
                price: 14450,
                quantity: 3,
                imgUrl: './topprodpic.png',
              },
              {
                prodname: 'Obsessed 5ml parfum',
                price: 16650,
                quantity: 3,
                imgUrl: './topprodpic.png',
              },
            ],
          },
        ],
        cart: [
              {
                prodname: 'Obsessed 5ml parfum',
                price: 14450,
                quantity: 3,
                imgUrl: './topprodpic.png',
              },
              {
                prodname: 'Obsessed 5ml parfum',
                price: 16650,
                quantity: 3,
                imgUrl: './topprodpic.png',
              },
              {
                prodname: 'Obsessed 5ml parfum',
                price: 14450,
                quantity: 3,
                imgUrl: './topprodpic.png',
              },
              {
                prodname: 'Obsessed 5ml parfum',
                price: 16650,
                quantity: 3,
                imgUrl: './topprodpic.png',
              }
         ]
      }
    ],
  };

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id) {
    console.log("missingID")
    return res.status(400).send({ error: 'Missing customer ID' });
  }

  const customer = customersData.customers.find((c) => c.id === id);

  if (!customer) {
    console.log("not found")
    return res.status(404).send({ error: 'Customer not found' });
  }
console.log(customer)
  return res.status(200).send({ customer });
}
