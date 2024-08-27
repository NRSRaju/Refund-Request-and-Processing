import React, { createContext, useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { dummyOrders, dummyRefundTickets } from '../data/dummyData';

const RefundContext = createContext();

export const useRefund = () => useContext(RefundContext);

export const RefundProvider = ({ children }) => {
  const [orders, setOrders] = useState(dummyOrders);
  const [refundTickets, setRefundTickets] = useState(dummyRefundTickets);

  const requestRefund = (orderId, reason, comments) => {
    const newTicket = {
      id: Date.now(),
      orderId,
      reason,
      comments,
      status: 'pending',
    };
    setRefundTickets([...refundTickets, newTicket]);
    toast.success('Refund request submitted successfully!');
  };

  const approveRefund = (ticketId) => {
    setRefundTickets(
      refundTickets.map((ticket) =>
        ticket.id === ticketId ? { ...ticket, status: 'approved' } : ticket
      )
    );
    setOrders(
      orders.map((order) =>
        order.id === refundTickets.find((t) => t.id === ticketId).orderId
          ? { ...order, status: 'refunded' }
          : order
      )
    );
    toast.success('Refund approved and processed!');
  };

  const rejectRefund = (ticketId, reason) => {
    setRefundTickets(
      refundTickets.map((ticket) =>
        ticket.id === ticketId ? { ...ticket, status: 'rejected', rejectionReason: reason } : ticket
      )
    );
    toast.info('Refund request rejected.');
  };

  return (
    <RefundContext.Provider
      value={{
        orders,
        refundTickets,
        requestRefund,
        approveRefund,
        rejectRefund,
      }}
    >
      {children}
    </RefundContext.Provider>
  );
};