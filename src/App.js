import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import data from './data.json'
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header></Header>
      <Main data={data}></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
