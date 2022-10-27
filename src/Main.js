import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import CheckinForm from "./steps/CheckinForm";
  // import Customer from "./Customer";
  // import Product from "./Product";
  // import Order from "./Order";
  // import Payment from "./Payment";

class Main extends Component {
  render() {
    const params = new URLSearchParams(window.location.pathname);
    console.log(`payload test:${params.get("/payload")}`);

    return (
        <HashRouter>
          <div>
            <h1>BizToolz</h1>
            {/* <ul className="header">
                <li><NavLink to="/">Check in</NavLink></li>
                <li><NavLink to="/customer">Customers</NavLink></li>
                <li><NavLink to="/product">Products</NavLink></li>
                <li><NavLink to="/order">Orders</NavLink></li>
                <li><NavLink to="/payment">Payments</NavLink></li>
            </ul> */}
            <div className="content">
                <Route exact path="/" component={CheckinForm}/>
                {/* <Route path="/customer" component={Customer}/>
                <Route path="/product" component={Product}/>
                <Route path="/order" component={Order}/>
                <Route path="/payment" component={Payment}/> */}
            </div>
          </div>
        </HashRouter>
      );
  }
}
 
export default Main;