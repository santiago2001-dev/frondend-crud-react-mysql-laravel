 import React,{useState} from 'react'
 import axios from 'axios';
 import { useNavigate } from 'react-router-dom';
 const endpoint = "http://localhost:8000/api/product";

 const CreateProducts = () => {
  const [description,setDescription] = useState('')
  const [price,setPrice] = useState(0)
  const [stock,setStock] = useState(0)
  const navigate = useNavigate()

    const store =  async(e) =>{
      e.preventDefault()
      await axios.post(endpoint,{description: description,price:price,stock:stock})
        navigate('/');

    }
  
   return (
     <div>
      <h1>Crear producto</h1>
        <form onSubmit={store}>
        <div className='mb-3'>
          <label className='form-label'>description</label>
          <input  
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            type ='text'
            className='form-control'
            placeholder='descripcion de el producto'
          
          />

          
          </div>    
          <div className='mb-3'>
          <label className='form-label'>precio</label>
          <input  
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
            type ='number'
            className='form-control'
            placeholder='precio de el producto'
          
          />

          
          </div> 

            <div className='mb-3'>
          <label className='form-label'>unidades</label>
         
          <input  
            value={stock}
            onChange={(e)=>setStock(e.target.value)}
            type ='number'
            className='form-control'
            placeholder='unidades existentes'
          
          />

          
          </div>    
          <button className='btn btn-primary' type='submit'>enviar</button>   

        </form>
     </div>
   )
 }
 
 export default CreateProducts