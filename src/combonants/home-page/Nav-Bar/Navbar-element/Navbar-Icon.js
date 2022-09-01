import React from 'react';
import Modal_Section from '../../../modal/modal';

import IconButton from '@mui/material/IconButton';

//badge import section 
import { useSelector} from "react-redux";


function NavbarIcon() {


    const AddTocart=useSelector((state)=>(state.addToCartSlice))

  return (
        <ul className="show-icon">
                              <li>
                                  <IconButton aria-label="cart">
                                          <Modal_Section dataUse={AddTocart} typeButton="addTocart"/>
                                  </IconButton>
                              </li>
        </ul>

  )
}

export default NavbarIcon


