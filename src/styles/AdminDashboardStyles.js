import styled from 'styled-components';

export const AdminDashboardContainer = styled.div`
  margin-top: ${props => props.theme.spacing.large};
`;

export const TicketList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.medium};
`;