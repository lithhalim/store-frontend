import { createSlice } from '@reduxjs/toolkit'



const initialState = {
  value: 0,
  allProduct:[]
}

if(window.localStorage.AddToCartElement){
  initialState.value=JSON.parse(window.localStorage.AddToCartElement).value;
  initialState.allProduct=JSON.parse(window.localStorage.AddToCartElement).allProduct;
}



export const addToCartSlice = createSlice({
  name: 'addToCart',
  initialState,
  reducers: {
    addtocart: (state, action) => {
        state.value=state.value+=1;
        state.allProduct=[...state.allProduct,action.payload]
        window.localStorage.AddToCartElement=JSON.stringify(state)
    },
    removeFromCart: (state, action) => {
        state.value=state.value-=1;
        state.allProduct=state.allProduct.filter((a,i)=>(a.id!=action.payload))
        window.localStorage.AddToCartElement=JSON.stringify(state)
      },
    clearAll: (state) => {
          state.value=0
          state.allProduct=[]
          window.localStorage.AddToCartElement=JSON.stringify(state)
    },

  
  },
})

// Action creators are generated for each case reducer function
export const {  addtocart,removeFromCart,clearAll } = addToCartSlice.actions

export default addToCartSlice.reducer

