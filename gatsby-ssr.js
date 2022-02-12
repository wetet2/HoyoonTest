import React from 'react'
import { Provider } from "react-redux";
import { store } from "./src/store";

export const wrapPageElement = ({ element, props }) => {
  return <Provider store={store}>{element}</Provider>;
}