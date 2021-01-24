import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { SnowFallEffect, CloudWaveEffect } from 'react-background-animation';
import './index.css';



const Body= ()=>{
  return(
    <div id='body'>
      <Header/>
      <Card
        className='animate__animated animate__zoomIn animate__slower-4s'
        img='./imgs/IMG_8588 copy.png'
        // title='About the HeidtMoore'
        // description='Welcome to our store. Shop till you drop!'
      />
      {/* <ContactContainer/> */}
      <React.Fragment>
      <SnowFallEffect />
      <CloudWaveEffect />
      </React.Fragment>
    </div>
  )
}

const Header = () =>{
  return(
    <div className='header'>
      <span className='header-title'>
        <button a href='./game.js'>PLAY THE GAME</button>
      </span>
      <br/>
      <span className='header-text'>
       Champagne wishes and retail nightmares
      </span>
    </div>
  );
}

const Card = (props) =>{
  return(
    <div className={props.className} >
      <div className='small-div'>
        <i className={props.className}></i>
        <img src={props.img} alt=''/>
      </div>

      <div className='big-div'>
        <span className='div-title'>
          {props.title}
        </span>
        <br/>
        <span>
          {props.description}
        </span>
      </div>
    </div>
  )
}

ReactDOM.render(<Body/>, document.getElementById('root'));