import React, {useState} from 'react';
import {Pages} from './Navbar/Pages';
import './App.css';
import styles from './Common/style/styles.module.css'
import photo from './images/men/men.jpg'

const App = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="App">
      <img className={'photo'} src={photo} alt="me"/>
      <div className={`${styles.pages_routs}  ${styles.container_app}`}>
        <Pages isOpen={isOpen} setIsOpen={setIsOpen}/>
      </div>
    </div>
  );
};

export default App;
