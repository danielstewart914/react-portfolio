import {    
  Routes, 
  Route,
  useLocation
} from 'react-router-dom';

import {
  CSSTransition,
  TransitionGroup
} from "react-transition-group";

import About from '../../pages/About';
import Portfolio from '../../pages/Portfolio';
import Contact from '../../pages/Contact';
import Resume from '../../pages/Resume';

const Main = () => {
  const location = useLocation();
  return (
    <main className='Main'>
      <h2 className='Banner'>Welcome to my Portfolio</h2>
      <div className='Page'>
        <TransitionGroup
          component={null}
        >
          <CSSTransition
            key={location.pathname}
            classNames='fade'
            timeout={400}
          >
            <Routes location={location}>
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
          </CSSTransition>
        </TransitionGroup>
      </div>
    </main>
  )
}

export default Main;