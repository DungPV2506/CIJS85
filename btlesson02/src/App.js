
import './App.css';
import Category from './Category';

const App = () => {
  return (
    <div className='App'>
      <Category  name='Clean up bedroom' />
      <Category  name="Buy some milk"/>
      <Category  name = "Jogging"/>
      <Category  name = "Learn React"/>
      <Category  name = "Doing Exercises"/>
    </div>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
