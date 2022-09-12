import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Create_post_Image from './Create_post_Image';
import "./style/style.scss";
import { Formik, Form, Field,useFormik } from 'formik';
import * as Yup from 'yup';


   //you schema style validation 
   const SignupSchema = Yup.object().shape({
    Name_Product: Yup.string()
       .label('Name Product')
       .max(16)
       .required(),
    postDescription: Yup.string()
       .label('Post Description ')
       .min(3)
       .max(100)
       .required(),
    price: Yup.number()
       .label('Price Must')
       .required(),
    catagories: Yup.string()
       .label('Catagory'),
    number_item: Yup.number()
       .label('Number Item')
       .min(1)
       .max(1000000000)
       .required(),
     });













function Crearte_Post() {
    const [image,setImage]=useState("")
    const [catago,setcatago]=useState("food");
    const Navi=useNavigate()

    const getimagesection=(data)=>{
        setImage(data)
    }


    const initialValues={
        Name_Product: '',
        postDescription: '',
        price: '',
        catagories:'',
        number_item:''
    }

    

    const Get_AllData=(data)=>{
        const {Name_Product,number_item,postDescription,price}=data;

        let DataUse={
            Name_Product:Name_Product,
            postDescription:postDescription,
            price:price,
            image:image[0],
            catagories:catago,
            number_item:number_item,
        }

        
        axios.post(`${process.env.REACT_APP_DATA}createpost`,DataUse)
        setTimeout(() => {
            window.location.href="/"
        }, 1000);


    }


    const Addcatagoty=(e)=>{
        setcatago(e.currentTarget.value)
    }

  return (

    <div className='create-post-container'>
            <Formik
            initialValues={initialValues}
            validationSchema={SignupSchema}
            onSubmit={Get_AllData}
            >
            {({ errors, touched }) => (
                <Form className="form-section">
                    <label>Name Product</label>
                    <Field type="text" name="Name_Product" className='name-product' placeholder='Name_Product' />
                    {errors.Name_Product && touched.Name_Product ? (<div className='error-section'>{errors.Name_Product}</div>) : null}

                    <label>Post Description</label>
                    <Field type="text" as="textarea" name="postDescription" className='postDescription' placeholder='postDescription'/>
                    {errors.postDescription && touched.postDescription ? <div className='error-section'>{errors.postDescription}</div> : null}

                    <div className='item2'>
                        <label>Price</label>
                        <Field type="text" name="price" className='price' placeholder='price'/>
                        {errors.price && touched.price ? <div className='error-section'>{errors.price}</div> : null}
                    </div>
                    
                    <div className='item2'>
                        <label>numberItem</label>
                        <Field type="text" name='number_item' className='numberItem' placeholder='number_item'/>
                        {errors.number_item && touched.number_item ? <div className='error-section'>{errors.number_item}</div> : null}
                    </div>

                    <label>Select Item</label>
                    <select onChange={Addcatagoty} className="selectorr">
                        <option value="food" key="">food</option>
                        <option value="electronics" key="">electronics</option>
                    </select>

                    <Create_post_Image getimagesection={getimagesection}/> 
                    <button type="submit" className='buttomm'> submit</button>

                </Form>
            )}
            </Formik>
    </div>
  )
}

export default Crearte_Post
