import logo from './logo.svg';
import './App.css';
import Nav from './Navbar/Nav';
import Head from './Header/Head';
import PageHome from './Page/HomePage/HomePage';


function App() {
  return (
    <div className="App">
      <Nav />
      <Head />
      <PageHome />
    </div>
  );
}

export default App;
