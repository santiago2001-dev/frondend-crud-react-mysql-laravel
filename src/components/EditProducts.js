
 import React,{useState,useEffect} from 'react'
 import axios from 'axios';
 
 import { useNavigate,useParams } from 'react-router-dom';
 const endpoint = "http://localhost:8000/api/product";
 const EditProduct = () => {
  const [description,setDescription] = useState('')
  const [price,setPrice] = useState(0)
  const [stock,setStock] = useState(0)
  const navigate = useNavigate()
  const {id} = useParams()

  const updateProduct = async(e)=>{

    e.preventDefault();
    await axios.put(`${endpoint}/${id}`,{
      description: description,
      price: price,
      stock:stock
    })
    navigate('/')
  }
  useEffect(()=>{

    const getproductById =  async()=>{
      const response  = await axios.get(`${endpoint}/${id}`)
      setDescription(response.data.description)
      setStock(response.data.stock)
      setPrice(response.data.price)

    }
    getproductById()
  },[])


   return (
    <div>
    <h1>editar producto</h1>
      <form onSubmit={updateProduct}>
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


export default EditProduct