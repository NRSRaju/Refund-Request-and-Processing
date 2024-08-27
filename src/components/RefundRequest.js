import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRefund } from '../context/RefundContext';
import { FaUndo } from 'react-icons/fa';
import {
  RefundButton,
  Modal,
  ModalContent,
  Form,
  Select,
  Textarea
} from '../styles/RefundRequestStyles';

const RefundRequest = ({ orderId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { requestRefund } = useRefund();

  const onSubmit = (data) => {
    requestRefund(orderId, data.reason, data.comments);
    setIsOpen(false);
  };

  return (
    <>
      <RefundButton onClick={() => setIsOpen(true)}>
        <FaUndo /> Request Refund
      </RefundButton>
      {isOpen && (
        <Modal>
          <ModalContent>
            <h3>Request Refund</h3>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Select {...register('reason', { required: 'Reason is required' })}>
                <option value="">Select a reason</option>
                <option value="defective">Defective product</option>
                <option value="notAsDescribed">Not as described</option>
                <option value="wrongItem">Wrong item received</option>
                <option value="other">Other</option>
              </Select>
              {errors.reason && <span>{errors.reason.message}</span>}
              <Textarea
                {...register('comments', { required: 'Comments are required' })}
                placeholder="Additional comments"
                rows={4}
              />
              {errors.comments && <span>{errors.comments.message}</span>}
              <button type="submit">Submit Refund Request</button>
              <button type="button" onClick={() => setIsOpen(false)}>Cancel</button>
            </Form>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default RefundRequest;