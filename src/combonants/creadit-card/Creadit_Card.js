import React, { useEffect, useState } from 'react';
import "./style/style.scss";
import {motion} from "framer-motion"


import { Formik, Form, Field,useFormik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

//images using in creadit card 
import visa from "../../assest/add-cart/visa.png";
import cart from "../../assest/add-cart/card.png";


//you schema style validation 
const SignupSchema = Yup.object().shape({
 cardNumber: Yup.string()
    .label('Card number')
    .max(16)
    .required(),
  cvc: Yup.string()
    .label('CVC')
    .min(3)
    .max(4)
    .required(),
  nameOnCard: Yup.string()
    .label('Name on card')
    .required(),
  expiryMonth: Yup.string()
    .label('Expiry month')
    .min(2)
    .max(2)
    .required(),
  expiryYear: Yup.string()
    .label('Expiry year')
    .min(4)
    .max(4)
    .required(),
  });
 



function Creadit_Card() {
    const [typeVise,settypeVise]=useState({image:visa,backGround:"rgb(65, 65, 252)"});
    const [changing,setChanging]=useState("default");

    const [sideCard,setsideCard]=useState(true)


    //----------------------------------switvh depend select type ------------------------------//
    useEffect(()=>{
        switch (changing) {
            case "visa":
                settypeVise({image:visa,backGround:"blue"})
                break;
    
            case "Mastercard":
                settypeVise({image:visa,backGround:"orange"})
                break;
    
            case "default":
                settypeVise({image:visa,backGround:"silver"})
                break;    
        }
    },[changing])

    //------------------------------------Formik section ------------------------------------------//
    const initialValues={
        cardNumber: '',
        cvc: '',
        nameOnCard: '',
        expiryMonth:'',
        expiryYear:''
    }

    

    const Get_AllData=(data)=>{
        console.log(data)
    }


    const gotopass=()=>{
        sideCard==true? setsideCard(false):setsideCard(true)
    }

    

  return (
    <motion.div className='AllData-container' initial={{x:"-100vw"}} animate={{x:0}} transition={{duration:".5"}}>
        <div className='creadit-card' style={{backgroundColor:typeVise.backGround}}>
            <div className='header-card'>
                <h1>Payment Information</h1>
                <div className='middel-section'>
                    <img src={cart} alt=""  className='card-image'/>
                    <p onClick={gotopass}>{sideCard==true?<p>Insert Cvc</p>:<>retrun to input</>}   </p>
                </div>
            </div>

            <Formik
                initialValues={initialValues}
                validationSchema={SignupSchema}
                onSubmit={Get_AllData}
                >
                {({ errors, touched }) => (
                    <Form>
                {sideCard===true?
                    <>
                    <Field name="cardNumber"  placeholder="1234 5678 9101 1213" type="number" className="cardNumber" />



                    <div className='expire-date'>
                        <p>GOOD THRU</p>
                        <Field name="expiryMonth" type="number" placeholder="12" className="month-expire"/>
                        <p>/</p>
                        <Field name="expiryYear" type="number" placeholder="20" className="year-expire" />
                    </div>


                    <Field name="nameOnCard" type="text" placeholder="FULL NAME YOU HAVE"  className="cardName"/>

                    <button type="submit" className='submit-buttom'>Submit paymant Information</button>
                    </>
                    :<></>}

                    {sideCard===false?
                    <>
                    <Field name="cvc"  type="number"  className="cardCvs" />
                    </>
                    :<></>}

                    <div>
                        {errors.cardNumber && touched.cardNumber ? (<div className='error-section'>{errors.cardNumber}</div>) : null}
                        {errors.expiryMonth && touched.expiryMonth ? <div className='error-section'>{errors.expiryMonth}</div> : null}
                        {errors.expiryYear && touched.expiryYear ? <div className='error-section'>{errors.expiryYear}</div> : null}
                        {errors.nameOnCard && touched.nameOnCard ? <div className='error-section'>{errors.nameOnCard}</div> : null}
                        {errors.cvc && touched.cvc ? (<div className='error-section' >{errors.cvc}</div>) : null}
                    </div>

                    </Form>
                )}
            </Formik>
            <img src={visa} alt="" className='image-creadite'/>
        </div>


    
    </motion.div>
  )
}

export default Creadit_Card