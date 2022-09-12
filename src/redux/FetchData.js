import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

//initial value 
const initialState = {
  value: false
}



//function we will invoke to fetch the data
export const AllPostes = createAsyncThunk(
    'allpostesHave/AllPostes',
    //userid to send argement with calling function
    async (arrgement, thunkAPI) => {
    //     const DataUse=await axios.get(`${process.env.REACT_APP_DATA}allpostes`)
    // return DataUse
    }
  )
  

//the data will come here will shere with all page
export const allpostesHave = createSlice({
  name: 'allpostesHave',
  initialState,
  reducer:{

  },
  //extraReducer Use to Shaer the Information but the fetching information
  extraReducers:{
    //the data will have 3 state fulfiled for sucses and reject for reject and payload
      [AllPostes.fulfilled]:(state,action)=>{
          state.value=action
      },
      [AllPostes.rejected]:(state,action)=>{
        state.value=action
      }
  }
})


export default allpostesHave.reducer
