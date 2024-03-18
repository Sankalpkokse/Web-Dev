import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const[text, setText] = useState('');
  const[name, setName] = useState(' ');
  // Variation 1 : jabbhi rendering hogi tab
  // useEffect( ()=>{
  //   console.log("rendering Ho gayi..");
  // }
  // )

  // Variation 2: First time hi jab Rendering ho gi site ki
  // useEffect(()=>{
  //     console.log("abhi toh sirf pehli baar hi hui rendering... ");
  //   },[]);

  // variation 3: jabh koi dependancy change ho matlab kuch change ho tab useeffect chale
  // useEffect(()=>{
  //       console.log("abhi toh sirf pehli baar hi hui rendering... ");
  //     },[name]);

  // variation 4: to handle unmounting of a component
  useEffect(()=>{
    // consider this is event listener: adding event listener
    console.log("added event listener");
    return ()=>{
      console.log("event listener removed.");
    }
  },[name]);
  function inputHandler(event){
    setText(event.target.value);
    console.log(event.target.value)
  }
  function submitHandler(event){
    event.preventDefault();
    setName(text);
    console.log(name);
  }
  return (
    <>
    <div>Hello... app is running good</div>
    <form onSubmit={submitHandler}>
      <input type="text" placeholder='input daalo bhai...' onChange={inputHandler} value={text}/>
      <button type='submit' >Submit</button>
    </form>
    </>
  )
}

export default App
