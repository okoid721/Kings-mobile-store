import Containers from '@/app/components/Containers';
import React from 'react';
import OrderClient from './OrderClient';
import { getCurrentUser } from '@/actions/getCurrentUser';
import NullData from '@/app/components/NullData';
import getOrdersByUserId from '@/actions/getOrdersByUserId';

const Order = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <NullData title="Oops! Access Denied" />;
  }

  const orders = await getOrdersByUserId(currentUser.id);

  if (!orders) {
    return <NullData title="No orders yet..." />;
  }
  return (
    <div className="p-8 bg-white text-[#0F1111] select-none ">
      <Containers>
        <OrderClient orders={orders} />
      </Containers>
    </div>
  );
};

export default Order;
