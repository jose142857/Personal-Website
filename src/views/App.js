import logo from './logo.svg';
import './App.scss';
import Home from '../components/home/home';
import Sidebar from '../components/menuSidebar/sidebar';
import '../components/menuSidebar/sidebar.scss';
import '../components/home/home.scss';



function App() {
  return (
    <div className="App">
      <body className="App-header">
        <Home/>
        <Sidebar/>
                
      </body>
      
    </div>
  );
}

export default App;
