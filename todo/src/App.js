import React, { Component } from 'react'
import Header from './Component/Header';
import ToDo from './Component/ToDo';
import Footer from './Component/Footer';

 class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <ToDo/>
        <Footer/>
      </div>
    )
  }
}
export default App;

