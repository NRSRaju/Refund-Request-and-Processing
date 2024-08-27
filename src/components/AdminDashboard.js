import React from 'react';
import { useRefund } from '../context/RefundContext';
import RefundTicket from './RefundTicket';
import { AdminDashboardContainer, TicketList } from '../styles/AdminDashboardStyles';
import { FaTicketAlt } from 'react-icons/fa';

const AdminDashboard = () => {
  const { refundTickets } = useRefund();

  return (
    <AdminDashboardContainer>
      <h2><FaTicketAlt /> Admin Dashboard</h2>
      <h3>Refund Requests</h3>
      <TicketList>
        {refundTickets.map((ticket) => (
          <RefundTicket key={ticket.id} ticket={ticket} />
        ))}
      </TicketList>
    </AdminDashboardContainer>
  );
};

export default AdminDashboard;