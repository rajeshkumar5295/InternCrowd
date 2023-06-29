import { createSlice } from '@reduxjs/toolkit';

const initialState={
    
   
    userList:[]

}

export const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
              loginRedux:(state,action)=>{
           
             
            console.log(action)
            state.userList=[...action.payload]

          },

       

    }
})


export const {loginRedux  }=userSlice.actions

export default userSlice.reducer
