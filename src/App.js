import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
          <Header />
          <Navigation />
            <main className='Main'>
              <h2 className='Banner'>Welcome to my Portfolio</h2>
                <Routes>
                  <Route
                    path={'/'}
                    element={<About />}
                  />
                  <Route
                    path={'portfolio'}
                    element={<Portfolio />}
                  />
                  <Route
                    path={'contact'}
                    element={<Contact />}
                  />
                  <Route
                    path={'resume'}
                    element={<Resume />}
                  />
                </Routes>
            </main>
          <Footer />
      </Router>
    </>
  )
  
}

export default App;
