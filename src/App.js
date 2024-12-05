import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Shop from './components/shop/shop';
import Pages from './components/pages/page';
import Blog from './components/blog/blog';
import Contact from './components/contacts/contacts';
import NotFound from './components/notfound/Notfound';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/pages' element={<Pages/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contacts' element={<Contact/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
