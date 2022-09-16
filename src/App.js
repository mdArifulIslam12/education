import './App.css';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home/Home/Home'
import Navbar from './Pages/shared/Navbar/Navbar/Navbar'
import About from './Pages/About/About'
import { Route, Routes } from 'react-router-dom';
import NotFound from './Pages/shared/NotFound/NotFound';
import Login from './Pages/Login/Login'
import SignUp from './Pages/Login/SignUp'
import RequireAuth from './Pages/Login/RequireAuth'
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddBlog from "./Pages/Dashboard/AddBlog";
import User from './Pages/Dashboard/User';


function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path="dashboard" element={
          <RequireAuth>
            <Dashboard/>
          </RequireAuth>}
          >
            <Route index element={<AddBlog/>}/>
            <Route path="user" element={<User/>}/>
            {/* <Route path="myReview" element={<MyReview/>}/>
            <Route path="payment/:id" element={<Payment/>}/> */}
        </Route>
        <Route path='*' element={<NotFound/>}></Route>
        
      </Routes>
      <Toaster 
       position="top-right"
       reverseOrder={false}
      />
    </div>
  );
}

export default App;
