import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';



import "./style/style.scss";
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

import { modifyquantity } from '../../../redux/addToCart';
import { modifyquantitydecrese } from '../../../redux/addToCart';
import { removeFromCart } from '../../../redux/addToCart';
import { useNavigate } from 'react-router';





export default function Modal_addtocart(dataUse) {
    const dispatch=useDispatch();
    const quintityItem=useRef();
    const Navi=useNavigate()

    
    const rows=dataUse.datause;
    let totalPrice=dataUse.datause.reduce((acc,current)=>(acc+(current.price*current.quantity)),0)

    const increseQuntity=(e)=>{
      let postId=e.currentTarget.getAttribute("datatype");
      dispatch(modifyquantity({id:postId}))        
    }

    const decreseQuntity=(e)=>{
        let postId=e.currentTarget.getAttribute("datatype");
        dispatch(modifyquantitydecrese({id:postId}));
    }

    const DeleteItem=(e)=>{
      let postId=e.currentTarget.getAttribute("datatype");
      dispatch(removeFromCart(postId));
    }






    const columns = [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'item', headerName: 'Items ', width: 250 ,
        renderCell:(params)=>{
          return(
            <>
              <img src={params.row.image} className="Addtocard-image" />
              <p style={{marginLeft:"10px"}}>{params.row.Name_Product}</p>
            </>
          )
        }
      },
      { field: 'price', headerName: 'price', width: 70  },
      { field: 'number_item', headerName: 'Total Quntain', width: 100  },

      { field: 'quantity',headerName: 'Quantity', type: 'number',width: 150,
          renderCell:(params)=>{
            return(
              <ul className='quintity-button'>
                <li style={{cursor:"pointer",color:"blue"}} onClick={increseQuntity} datatype={params.row.id}><ArrowCircleUpIcon/></li>
                <li ref={quintityItem} >{params.row.quantity}</li>
                <li style={{cursor:"pointer",color:"red"}} onClick={decreseQuntity}  datatype={params.row.id}><ArrowCircleDownIcon/></li>
              </ul>
            )
          }
        },
      { field: 'catagories',headerName: 'catagories', type: 'text',width: 80,},
      { field: 'tatalPrice',headerName: 'Total-Price', type: 'number',width: 90,
        renderCell:(params)=>{
          return(
            <>
              <p>{params.row.price*params.row.quantity}</p>
            </>
          )
        }
    },
    { field: 'Modify',headerName: 'Veiw-Delete', type: 'number',width: 220,
    renderCell:(params)=>{
      return(
        <>
        <div  datatype={params.row.id}>
          <Button variant="contained" style={{fontSize:".9em",fontWeight:"bold"}}  >view</Button>
        </div>
        <div onClick={DeleteItem} datatype={params.row.id}>
          <Button variant="contained" style={{fontSize:".9em",color:"white",backgroundColor:"red",marginLeft:"10px",fontWeight:"bold"}}  >Delete</Button>
        </div>
        </>
      )
    }
},
    ];
    


const gotopayment=()=>{
  Navi("/creadit")
}


  return (
    <div className="add-tocart-container" style={{marginBottom:"30px"}}>
        <div className='header-addToCart'> 
        <h1>Number Of Products {dataUse.datause.length}</h1>
        <h1>Total Price $ {totalPrice}</h1>
        </div>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
        <div style={{width:"30vw",margin:"50px auto 50px auto"}} >
          <Button variant="contained" style={{width:"100%"}}  onClick={gotopayment}>Add To Payment</Button>
        </div>

    </div>
  );
}



