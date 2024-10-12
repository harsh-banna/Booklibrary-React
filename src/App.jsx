import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import  {Outlet} from "react-router-dom";
import Booklist from './components/Booklist';
import { Provider } from 'react-redux';
import appStore from "./utils/appStore";

function App() {

  return (
    <Provider store={appStore}>
      <h1>Assingment 02</h1>
      <Header></Header>
      {/* <Booklist/> */}
      <Outlet/>
    </Provider>
  )
}

export default App
