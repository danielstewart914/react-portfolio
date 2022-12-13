import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { HashRouter as Router, } from 'react-router-dom';
import Main from './components/Main';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Navigation />
        <Main />
        <Footer />
      </Router>
    </>
  )
}

export default App;