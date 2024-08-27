import React from 'react';
import styled from 'styled-components';
import OrderHistory from './components/OrderHistory';
import AdminDashboard from './components/AdminDashboard';
import { RefundProvider } from './context/RefundContext';

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const App = () => {
  return (
    <RefundProvider>
      <AppContainer>
        <h1>Refund Request and Processing System</h1>
        <OrderHistory />
        <AdminDashboard />
      </AppContainer>
    </RefundProvider>
  );
};

export default App;