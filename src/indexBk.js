import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import "./index.css";

import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Main/>);