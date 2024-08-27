import styled from 'styled-components';

export const TicketCard = styled.div`
  background-color: white;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  padding: ${props => props.theme.spacing.medium};
`;

export const TicketInfo = styled.div`
  margin-bottom: ${props => props.theme.spacing.medium};
`;

export const TicketActions = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RejectForm = styled.form`
  margin-top: ${props => props.theme.spacing.medium};
`;