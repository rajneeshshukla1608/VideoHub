import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Video from './components/Video';
import Upload from './components/Upload';

function App() { 
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Register/>}/>
        <Route path='/videos' element={<Video/>}/>
        <Route path='/upload' element={<Upload/>}/>

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
