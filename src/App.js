import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import BankLogin from './components/BankLogin';
import Details from './components/Details';
import Errror from './components/Errror';
import BankerRegistration from './components/BankerRegistration';
import UserRegistration from './components/UserRegistration';
import {Routes,Route} from "react-router-dom"

function App() {
  return (
  <>
    <Header />
    <Routes>
    /*  <Route path='/' element={<Home />} />*/
      <Route path='/login' element={<Login />} />
      <Route path='/bankerLogin' element={<BankLogin />} />
      <Route path='/details' element={<Details />} />
      <Route path='/bankerDetails' element={<Details />} />
      <Route path='/userRegistration' element={<UserRegistration />} />
      <Route path='/bankerRegistration' element={<BankerRegistration />} />
      <Route path='*' element={<Errror />} />
    </Routes>
  </>
  );
}

export default App;
