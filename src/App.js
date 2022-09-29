import { useEffect, useState } from 'react';
//import Header from './Components/Header';
import Card from './Components/Card'

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const response = async () => {
      await fetch(`https://api.openbrewerydb.org/breweries${input}`)
        .then(res => res.json())
        .then((res) => {
          console.log(res);
          setItems(res);
        })
    }
    response();
  }, [input]);

  const values = {
    "type": true,
    "country": true,
    "city": true,
    "address": true
  };

  const inputHandler = (e) => {
    console.log(e.target.value.toLowerCase());
    setInput(`/search?query={${e.target.value.toLowerCase()}}`);
  }

  return (
    <div className='App'>
      <form className='d-flex justify-content-center m-3'>
        <input type="text" placeholder="Search...." onChange={inputHandler}/>
      </form>
    
      <Card items={items} values={values}/>
    </div>
  );
}

export default App;