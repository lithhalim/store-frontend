import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import Modal_addtocart from "./Add-Tocart.js/modal-addtocart"



function Modal_Section({typeButton,dataUse}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  
  return (
    <div>
      <div onClick={handleOpen}>
          <StyledBadge badgeContent={dataUse.value} sx={{color:"rgb(117, 103, 19)"}}>
                <ShoppingCartIcon />
          </StyledBadge>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Box sx={style}>
          <Modal_addtocart datause={dataUse.allProduct} />
      </Box>     
      </Modal>
    </div>
  )
}

export default Modal_Section

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "80%",
    bgcolor: 'background.paper',
    maxHeight: "80%",
    overflow: "auto",
  };
  