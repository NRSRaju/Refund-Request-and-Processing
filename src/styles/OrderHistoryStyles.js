import styled from 'styled-components';

export const OrderHistoryContainer = styled.div`
  margin-bottom: ${props => props.theme.spacing.large};
`;

export const OrderTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: ${props => props.theme.spacing.medium};

  th, td {
    border: 1px solid ${props => props.theme.colors.border};
    padding: ${props => props.theme.spacing.small};
    text-align: left;
  }

  th {
    background-color: ${props => props.theme.colors.primary};
    color: white;
  }

  tr:nth-child(even) {
    background-color: ${props => props.theme.colors.background};
  }
`;