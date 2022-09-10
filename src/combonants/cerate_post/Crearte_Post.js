import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Create_post_Image from './Create_post_Image';
import "./style/style.scss"
function Crearte_Post() {
    const [image,setImage]=useState("")
    const [catago,setcatago]=useState("food");
    const Navi=useNavigate()

    const getimagesection=(data)=>{
        setImage(data)
    }

    const SendData=(e)=>{
        e.preventDefault();
        let DataUse={
            Name_Product:e.currentTarget.Name_Product.value,
            postDescription:e.currentTarget.postDescription.value,
            price:e.currentTarget.price.value,
            image:image[0],
            catagories:catago,
            number_item:e.currentTarget.number_item.value,
        }

        
        axios.post(`${process.env.REACT_APP_DATA}createpost`,DataUse)
        Navi("/")


    }

    const Addcatagoty=(e)=>{
        setcatago(e.currentTarget.value)
    }

  return (
    <div className='create-post-container'>
        <form onSubmit={SendData} className="form-section">
            <div>
                <input type="text" name="Name_Product" className='imnput' placeholder='Name_Product' />
                <input type="text" name="postDescription" className='imnput' placeholder='postDescription'/>
            </div>
            <div>
                <input type="text" name="price" className='imnput' placeholder='price' />
                <input type="text" name='number_item' className='imnput' placeholder='number_item'/>
            </div>
            <div>
            <select onChange={Addcatagoty}>
                <option value="food" key="">food</option>
                <option value="electronics" key="">electronics</option>
            </select>
            <input type="text" name='country' className='imnput' placeholder='country'/>

            </div>
            

            <Create_post_Image getimagesection={getimagesection}/> 
            <button type="submit"> submit</button>
        </form>
    </div>
  )
}

export default Crearte_Post
