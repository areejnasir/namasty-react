// reduc toolkit
import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1,
  },
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer

// simple redux

// export default Reducer = (state = 0, action) => {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       console.log(action.number);
//       return { ...state, number: state + 1 };
//     case "REMOVE_ITEM":
//       console.log(action.number);
//       if (state.number > 0) {
//         return { ...state, number: state - 1 };
//       }

//     default:
//       return state;
//   }
// };
