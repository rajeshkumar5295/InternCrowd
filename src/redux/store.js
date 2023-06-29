import { configureStore } from '@reduxjs/toolkit';
import userSliceReducer from "./userSlice";

export const store= configureStore({
    reducer: {
      user:userSliceReducer,
    
    },
  })


  //import { configureStore } from '@reduxjs/toolkit'

// export default configureStore({
//     reducer: {}
//   })