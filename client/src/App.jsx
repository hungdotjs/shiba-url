import React from 'react';
import Container from '@material-ui/core/Container';
import Header from './components/Header';
import Shorten from './components/Shorten';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Container maxWidth="md">
        <div className="container">
          <p className="title">
            Shorter <span className="color-blue">links</span> , greater
            <span className="color-orange"> results</span>.
            <br /> No more long text.
          </p>
          <Shorten />
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
