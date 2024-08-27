import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRefund } from '../context/RefundContext';
import { FaCheck, FaTimes, FaQuestionCircle } from 'react-icons/fa';
import {
  TicketCard,
  TicketInfo,
  TicketActions,
  RejectForm
} from '../styles/RefundTicketStyles';

const RefundTicket = ({ ticket }) => {
  const [showRejectForm, setShowRejectForm] = useState(false);
  const { register, handleSubmit } = useForm();
  const { approveRefund, rejectRefund } = useRefund();

  const onApprove = () => {
    approveRefund(ticket.id);
  };

  const onReject = (data) => {
    rejectRefund(ticket.id, data.reason);
    setShowRejectForm(false);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'approved':
        return <FaCheck color="green" />;
      case 'rejected':
        return <FaTimes color="red" />;
      default:
        return <FaQuestionCircle color="orange" />;
    }
  };

  return (
    <TicketCard>
      <TicketInfo>
        <h4>Ticket #{ticket.id}</h4>
        <p>Order ID: {ticket.orderId}</p>
        <p>Reason: {ticket.reason}</p>
        <p>Comments: {ticket.comments}</p>
        <p>Status: {getStatusIcon(ticket.status)} {ticket.status}</p>
      </TicketInfo>
      {ticket.status === 'pending' && (
        <>
          <TicketActions>
            <button onClick={onApprove}><FaCheck /> Approve</button>
            <button onClick={() => setShowRejectForm(true)}><FaTimes /> Reject</button>
          </TicketActions>
          {showRejectForm && (
            <RejectForm onSubmit={handleSubmit(onReject)}>
              <textarea
                {...register('reason', { required: true })}
                placeholder="Rejection reason"
                rows={3}
              />
              <button type="submit">Submit Rejection</button>
              <button type="button" onClick={() => setShowRejectForm(false)}>Cancel</button>
            </RejectForm>
          )}
        </>
      )}
    </TicketCard>
  );
};

export default RefundTicket;