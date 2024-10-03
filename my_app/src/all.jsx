import React from 'react'
import Footer from './Footer';
import  Header from './Header'
export default function All() {
    let name="Explore More"
  return (
    <>
      <div className="App">
       <Header/>
       <div id='name'>
       {name}
       </div>
       </div>
      <div id="Footer">
      <div className="footer class1"> <Footer/></div>
      <div className="footer class2"> <h2>Events</h2></div>
      </div>
      </>
  )
}
