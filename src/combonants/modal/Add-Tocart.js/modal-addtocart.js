import * as React from 'react';
import "./style/style.scss";
import Button from '@mui/material/Button';


import { DataGrid } from '@mui/x-data-grid';
import { useDispatch } from 'react-redux';
import { AllPostes } from '../../../redux/FetchData';
import axios from 'axios';
import { removeFromCart } from '../../../redux/addToCart';



export default function Modal_addtocart(dataUse) {
    const dispatch=useDispatch();
    
    const rows=dataUse.datause;
    console.log(rows)

    let totalPrice=dataUse.datause.reduce((acc,current)=>(acc+(current.price)),0)


    const DeleteItem=(e)=>{
      let postId=e.currentTarget.getAttribute("datatype");
      let number_item=e.currentTarget.getAttribute("dataType2")

      axios.post(`${process.env.REACT_APP_DATA}updateData`,{dataCard:{id:postId,number_item:number_item},type:"remove Cart"});
      dispatch(removeFromCart(postId));
      dispatch(AllPostes())
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
      { field: 'price', headerName: 'Price', width: 100  },
      { field: 'catagories',headerName: 'Catagoreys', type: 'number',width: 150,},
      { field: 'Modify',headerName: 'Veiw-Delete', type: 'number',width: 220,
      renderCell:(params)=>{
      return(
        <>
        <div onClick={DeleteItem} datatype={params.row.id} dataType2={params.row.number_item}>
          <Button variant="contained" style={{fontSize:".9em",color:"white",backgroundColor:"red",marginLeft:"10px",fontWeight:"bold"}}  >Delete</Button>
        </div>
        </>
      )
    }
},
    ];
    





  return (
    <div className="add-tocart-container">
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
    </div>
  );
}




