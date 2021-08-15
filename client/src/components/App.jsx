import React from 'react';

// styles
import '../styles/App.css';

// material ui
import { Container } from '@material-ui/core';

// custom components
import Header from './Header';
import Footer from './Footer';
import List from './List';

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
