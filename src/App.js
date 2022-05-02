import React,{useState,useEffect,useRef} from 'react';
import useRandomJoke from "./useRandomJoke";
import './App.css';

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  // Custom Hooks



  const [firstName,setFirstName] = useState('Rahul ');
  const [lastName, setLastName] = useState('Aryan');

const generateJoke = e =>{
  e.preventDefault();
  setFirstName(firstNameRef.current.value)
  setLastName(lastNameRef.current.value)
}




const joke = useRandomJoke(firstName,lastName);

  return (
    <div className="App">
      <h1>The Joke Generator</h1>

       <h2>{joke}</h2>

       <form action="">
         <input

          placeholder="first name" 
          ref={firstNameRef}
          // value={firstName} 
          // onChange={e => setFirstName(e.target.value)}
          />

         <input
          placeholder="last name" 
          ref={lastNameRef}
          // value={lastName} 
          // onChange={e => setLastName(e.target.value)} 
          />

         <button onClick={generateJoke}>Generate Joke</button>
       </form>

 
    </div>
  );
}

export default App;
