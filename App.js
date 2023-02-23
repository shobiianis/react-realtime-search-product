import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Card from './Component/Card';


function App() {
    
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');

  let showName=(name) => {
    
    if(name==""){
      getHandler();
      }
      else{
        let filterData = products.filter((item)=>{
          return item.title.toLowerCase().includes(name.toLowerCase());
        });
        setProducts(filterData);
      }

  }  



  const getHandler = () => {
   axios.get('https://fakestoreapi.com/products').then((res) => {
     setProducts(res.data).catch((err) => {console.log(err)});
   }); 
 }
 
 useEffect(() => {
   getHandler();
 }, []);

 

  return (
    
    <>

    <input className='extraWidth' type="text" placeholder="Search Bar" onChange={(e)=>{
     
     setName(e.target.value);

     showName(name);

    }} />

<div className='borderLeft'>
    <div className='flex'>

    {products.map((item,i)=>{
     
         return <Card title={item.title} image={item.image} desc={item.description} price={item.price}/>
    })}

  </div>
</div>
  </>

  );
}

export default App;
