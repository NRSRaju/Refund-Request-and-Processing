import styled from 'styled-components';

export const RefundButton = styled.button`
  background-color: ${props => props.theme.colors.secondary};
  &:hover {
    background-color: ${props => props.theme.colors.secondaryDark};
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: ${props => props.theme.spacing.large};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  max-width: 500px;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.medium};
`;

export const Select = styled.select`
  padding: ${props => props.theme.spacing.small};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius};
`;

export const Textarea = styled.textarea`
  padding: ${props => props.theme.spacing.small};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius};
  resize: vertical;
`;