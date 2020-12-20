import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



const Body= ()=>{
  return(
    <div id='body'>
      <Header/>
      <Card
        className='rotate'
        img='./imgs/IMG_8588.jpg'
        // title='About the HeidtMoore'
        // description='Welcome to our store. Shop till you drop!'
      />
      {/* <ContactContainer/> */}
    </div>
  )
}

const Header = () =>{
  return(
    <div className='header'>
      <span className='header-title'>
        
      </span>
      <br/>
      <span className='header-text'>
       
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