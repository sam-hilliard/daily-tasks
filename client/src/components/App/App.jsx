import React from 'react';

// material ui
import { Container } from '@material-ui/core';

// custom components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import List from '../List/List';

function App() {
  return (
    <div>
        <Header />
        <Container maxWidth="sm">
            <List />
        </Container>
        <Footer />
    </div>
  );
}

export default App;
