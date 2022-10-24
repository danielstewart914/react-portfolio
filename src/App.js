import { useState } from 'react';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import Main from './components/Main';

function App() {
  const [ currentPage, setCurrentPage ] = useState( 'about' );

  const renderPage = () => {
      if ( currentPage === 'about' ) return <About />;
      if ( currentPage === 'portfolio' ) return <Portfolio />;
      if ( currentPage === 'contact' ) return <Contact />;
      if ( currentPage === 'resume' ) return <Resume />;
      
  }

  const changePage = ( page ) => setCurrentPage( page );

  return (
      <>
          <Header />
          <Navigation  currentPage={ currentPage } changePage={ changePage } />
          <Main renderPage={ renderPage } />
          <Footer />
      </>
  )
  
}

export default App;
