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
    <Container maxWidth="sm">
        <Header />
        <List />
        <Footer />
    </Container>
  );
}

export default App;
