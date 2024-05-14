import BasicInfo from './Components/BasicInfo';
import CompleteYourProfile from './Components/CompleteYourProfile';
import ContactInfo from './Components/ContactInfo';
import Experience from './Components/Experience';
import PDFDownload from './Components/PDFDownload';
import PopupComponent from './Components/Popup';
import ReviewProfile from './Components/ReviewProfile';
import Home from './Screens/Home';
import Login from './Screens/Login';
import './index.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='max-w-[1440px] mx-auto border border-red-300 relative'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/basicinfo' element={<BasicInfo/>}/>
        <Route path='/contactinfo' element={<ContactInfo/>}/>
        <Route path='/experience' element={<Experience/>}/>
        <Route path='/completeyourprofile' element={<CompleteYourProfile/>}/>
        <Route path='/reviewprofile' element={<ReviewProfile/>}/>
        <Route path='/popup' element={<PopupComponent/>}/>
        <Route path='/download' element={<PDFDownload/>}/>


      </Routes>
    </div>
  );
}

export default App;
