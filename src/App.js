
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const[product1,setproduct]=useState([]);
  const[search,setSearch]=useState("");
useEffect(()=>{
  fetch("https://fakestoreapi.com/products")
  .then(response=>response.json())
  .then(data=>{
    setproduct(data)
  })
})
const SearchHandler=(e)=>{
  setSearch(e.target.value)
}
const filtredProduct = product1.filter(product1=> product1.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className="App">
      <div className='form-group my-3 w-50 mx-auto'>
        <input onChange={SearchHandler} className='form-control' placeholder='search' type="text" />

      </div>
      {
        filtredProduct.map(prod=>{
          return(
            <product
            id={prod.id}
            name={prod.name}
            price={prod.price}
            image={prod.image}
            />
          )
        })
      }
    </div>
  );
}

export default App;
