import React from 'react';
import { OrderHistoryContainer, OrderTable } from '../styles/OrderHistoryStyles';
import { useRefund } from '../context/RefundContext';
import RefundRequest from './RefundRequest';
import { FaBox, FaTruck, FaUndo } from 'react-icons/fa';

const OrderHistory = () => {
  const { orders } = useRefund();

  const getStatusIcon = (status) => {
    switch (status) {
      case 'delivered':
        return <FaBox />;
      case 'shipped':
        return <FaTruck />;
      case 'refunded':
        return <FaUndo />;
      default:
        return null;
    }
  };

  return (
    <OrderHistoryContainer>
      <h2>Order History</h2>
      <OrderTable>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product</th>
            <th>Price</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.product}</td>
              <td>${order.price.toFixed(2)}</td>
              <td>{order.date}</td>
              <td>{getStatusIcon(order.status)} {order.status}</td>
              <td>
                {order.status === 'delivered' && (
                  <RefundRequest orderId={order.id} />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </OrderTable>
    </OrderHistoryContainer>
  );
};

export default OrderHistory;