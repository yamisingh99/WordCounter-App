import './App.css';
import Nav from './components/Nav.js';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
      <Nav title="TextUtils" home="HOME"/>
      <div className="container">
      <TextForm />
    
      </div>
    </>
  );
}

export default App;
