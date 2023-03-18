import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';

import "./css/style.css";

import App from "./App";

// Old Way 
// ReactDOM.render(<App />, document.getElementById("root"));
// After React 18
const root = createRoot(document.getElementById('root'));
root.render(<App />);
