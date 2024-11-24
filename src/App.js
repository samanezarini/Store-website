import React from 'react';
import Home from './components/home/Home';
import Shop from './components/shop/shop';
import Pages from './components/pages/page';
import Blog from './components/blog/blog';
import Contact from './components/contacts/contacts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div>
      {/* <Home></Home> */}

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/pages' element={<Pages/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contacts' element={<Contact/>}/>
        {/* <Route path='/*' element={<Notfound/>}/> */}
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
