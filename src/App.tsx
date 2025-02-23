import React from 'react';
import BookingList from './components/BookingList';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <Layout>
      <BookingList />
    </Layout>
  );
};

export default App;