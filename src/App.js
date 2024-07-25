import './App.css';
import Footer from './components/Footer.jsx';
import Nav from './components/Nav.js';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
      <Nav title="TextUtils" home="HOME"/>
      <div className="container" id='home'>
      <TextForm />
      <Footer/>
    
      </div>
    </>
  );
}

export default App;
