export const dummyOrders = [
    { id: 1, product: 'Smartphone', price: 599.99, date: '2024-08-20', status: 'delivered' },
    { id: 2, product: 'Laptop', price: 1299.99, date: '2024-08-22', status: 'delivered' },
    { id: 3, product: 'Headphones', price: 149.99, date: '2024-08-25', status: 'shipped' },
    { id: 4, product: 'Smart Watch', price: 249.99, date: '2024-08-18', status: 'delivered' },
    { id: 5, product: 'Gaming Console', price: 499.99, date: '2024-08-15', status: 'delivered' },
    { id: 6, product: 'Wireless Earbuds', price: 129.99, date: '2024-08-23', status: 'processing' },
    { id: 7, product: 'Tablet', price: 349.99, date: '2024-08-19', status: 'delivered' },
    { id: 8, product: 'Camera', price: 799.99, date: '2024-08-17', status: 'delivered' },
    { id: 9, product: 'Portable Charger', price: 39.99, date: '2024-08-24', status: 'shipped' },
    { id: 10, product: 'Smart Home Hub', price: 129.99, date: '2024-08-21', status: 'delivered' },
  ];
  
  export const dummyRefundTickets = [
    { id: 1, orderId: 1, reason: 'Defective product', comments: 'The screen is cracked', status: 'pending' },
    { id: 2, orderId: 2, reason: 'Not as described', comments: 'The laptop is slower than advertised', status: 'approved' },
    { id: 3, orderId: 4, reason: 'Wrong item', comments: 'Received a different color than ordered', status: 'rejected' },
    { id: 4, orderId: 5, reason: 'Defective product', comments: "Console won't turn on', status: 'pending" },
    { id: 5, orderId: 7, reason: 'Changed mind', comments: 'Found a better deal elsewhere', status: 'pending' },
    { id: 6, orderId: 8, reason: 'Arrived too late', comments: 'Missed the event I needed it for', status: 'approved' },
    { id: 7, orderId: 10, reason: 'Not compatible', comments: "Doesn't work with my other smart devices', status: 'pending'" },
  ];