import React from 'react';
import Modal_Section from '../../../modal/modal';

import IconButton from '@mui/material/IconButton';

//badge import section 
import { useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';


function NavbarIcon() {
    const AddTocart=useSelector((state)=>(state.addToCartSlice));
    const Navi=useNavigate();

    const gotopage=()=>{
      Navi("/createPost")
    }
  return (
        <ul className="show-icon" style={{display:"flex",alignItems:"center"}}>
                              <li style={{marginRight:"15px",cursor:"pointer"}} onClick={gotopage}>
                                Create Post 
                              </li>

                              <li>
                                  <IconButton aria-label="cart">
                                          <Modal_Section dataUse={AddTocart} typeButton="addTocart"/>
                                  </IconButton>
                              </li>
        </ul>

  )
}

export default NavbarIcon


