import React from "react";
import { Link } from "react-router-dom";
// import {createSlice, configureStore, PayloadAction} from "@reduxjs/toolkit";

const Layout: React.FunctionComponent = ({children}) => (
  <div>
    <h1>KillerNews.net</h1>
    {children}
    <Link to="/archives">archives</Link>,
    <Link to="/settings">settings</Link>
  </div>
);

export default Layout;

// // stateの型定義
// export type State = {
//   count: number;
// };

// // 初期状態。インラインで書いても良いですが・・・・
// const initialState: State = {
//   count: 0
// };

// // createSliceでreducerとactionを同時に定義
// const slice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//       incrementCounter: (state, action: PayloadAction<number>) => ({
//         ...state,
//         count: state.count + action.payload,
//       }),
//       decrementCounter: (state, action: PayloadAction<number>) => ({
//         ...state,
//         count: state.count - action.payload,
//       }),
//   },
// })

// export const store = configureStore({
//   reducer: {
//     auth: slice.reducer,
//   },
// });