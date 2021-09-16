import React, { useState } from "react";

//import Form from 'react-bootstrap/Form';
import logo from "./logo.svg";
import Navbar from "react-bootstrap/Navbar";
//import Button from "react-bootstrap/Button";
import './App.css';
import { Container } from "react-bootstrap";

function App() {

  //es6문법 destructuring 문법
  let [title, title_change] = useState(['남자 코트 추천','여자 코트 추천','아동 코트 추천']); //array[a,b]

  let posts = "강남 고기 맛집";
  
  return (
    <div className="App">
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#home" style={{color: "white"}}>React-Blog</Navbar.Brand>
        </Container>
      </Navbar>
      <h4>{ posts }</h4>
      <div className="list">
        <h3>{ title[0] }</h3>
        <p>9월 16일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ title[1] }</h3>
        <p>9월 16일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ title[2] }</h3>
        <p>9월 16일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
