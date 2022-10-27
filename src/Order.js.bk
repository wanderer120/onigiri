import React, { Component } from "react";
 
class Order extends Component {
  constructor(props) {
    super(props);

    this.handleCustomerChange = this.handleCustomerChange.bind(this);
    this.handleProductChange = this.handleProductChange.bind(this);
    // this.addFields = this.addFields.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    
    this.state = {
        orders : [],
        customers : [],
        products:[],
        orderedProduct:[{key:1,product_id:-1}],
        order:{user_id:-1,orderProduct:[]}
    };
  }
  render() {
    return (
      <div>
        <h2>Orders</h2>
        <form>
          <h3>Add Orders</h3>
          <label>
            <select name="user_id" onChange={this.handleCustomerChange}> 
            <option key={-1} value="Select Customer"> -- Select customer -- </option>
              {this.state.customers.map((customer) => <option key={customer.id} value={customer.id}>{customer.name}</option>)}
            </select>
          </label>
          <h4>Add Products</h4>
          
          {
            this.state.orderedProduct.map(((orderedProductItem,index)=>{
              // console.log(JSON.stringify(orderedProductItem));
              return (
                <p key={index}>
                <select name={index} onChange={this.handleProductChange}>
                <option value="Select Product"> -- Select Product -- </option>
                {
                  this.state.products.map((product)=><option key={product.id} value={product.id}>{product.name}</option>)
                }
                </select>
                </p>
                )
              
            }))
          }
          {/* <button onClick={this.addFields}>Add Product</button> */}
          <button onClick={this.handleSubmit}>Submit</button>
        </form>

        <h3>Existing Orders:</h3>
          {this.state.orders === null && <p>Loading orders...</p>}
          {
            this.state.orders && this.state.orders.map((item,index) => (
              <div key={index}>
                  <div>Customer:{item.name} - status:{item.status}</div>
                  {item.products.map(productItem =>(
                    <div key={productItem.id}>{productItem.name} - {productItem.price}</div>
                  )
                  )}
              </div>
            ))
          }
      </div>
    );
  }
  // addFields(event){
  //   event.preventDefault();
  //   this.setState({
  //     orderedProduct: [...this.state.orderedProduct, {key:this.state.orderedProduct.length+1,product_id:-1}]
  //   })
  // }
  async handleSubmit(event) {
    event.preventDefault();
    console.log(`order:${JSON.stringify(this.state.order)}`);
    console.log(`orderedProduct:${JSON.stringify(this.state.orderedProduct)}`);
    let param = this.state.order;
    param.userId = parseInt(param.user_id);
    param.orderProduct = this.state.orderedProduct.filter(item=>{
      return item.product_id !="-1";
    }).map(item=>{
      return {product_id:parseInt(item.product_id)};
    });
    // param.orderProduct = param.orderProduct.map(item=>{
    //   item.product_id = parseInt(item.product_id);
    // })
    console.log(`param:${JSON.stringify(param)}`);

    let res = await fetch('http://localhost:3001/orders', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(param)});
    let resJson = await res.json();
    if (res.status === 201) {
      let customersRes = await fetch('http://localhost:3001/customers')
      .catch(console.log);
        let customerJson = await customersRes.json(); 
        let customerData = customerJson?.message;
        console.log(`customers:${JSON.stringify(customerData)}`);

        let ordersRes = await fetch('http://localhost:3001/orders')
        .catch(console.log);
        let orderJson = await ordersRes.json(); 
        let orderData = orderJson?.message;
        console.log(`orders:${JSON.stringify(orderData)}`);

        let productRes = await fetch('http://localhost:3001/products')
        .catch(console.log);
        let productJson = await productRes.json();
        let productData = productJson?.message;
        console.log(`product:${JSON.stringify(productData)}`);

        let order_customer = orderData.map(t1=>({...t1,
          ...customerData.find(t2 => {
            if(t2.id === parseInt(t1.user_id)){
              return t2.name;
            }
          })
          }
        ));

        order_customer.forEach(joinItem=>{
          joinItem.products.forEach(element => {
            productData.forEach((productItem=>{
              if(element.id === parseInt(productItem.id)){
                console.log();
                element.name = productItem.name;
                element.price = productItem.price;
              }
            }))
          })
        });
        this.setState({ 
          orders: order_customer,
          customers: customerData,
          products: productData
        })
    }
  }
  handleProductChange(event){
    const target = event.target;
    const name = target.name;
    const value = target.value;
    console.log(`name:${name} value:${value}`);
    let temp = {product_id:value};
    this.setState({
      orderedProduct: [...this.state.orderedProduct, {key:name,product_id:value}]
    })
    // this.setState({
    //   orderedProduct: {
    //         ...this.state.orderedProduct,
    //         [name]: temp
    //   }
    // });
  }
  handleCustomerChange(event){
    const target = event.target;
    const name = target.name;
    const value = target.value;
    // console.log(`name:${name} value:${value}`);
    this.setState({
      order: {
            ...this.state.order,
            [name]: value
      }
    });
  }
  async componentDidMount() {
   let customersRes = await fetch('http://localhost:3001/customers')
   .catch(console.log);
    let customerJson = await customersRes.json(); 
    let customerData = customerJson?.message;
    console.log(`customers:${JSON.stringify(customerData)}`);

    let ordersRes = await fetch('http://localhost:3001/orders')
    .catch(console.log);
    let orderJson = await ordersRes.json(); 
    let orderData = orderJson?.message;
    console.log(`orders:${JSON.stringify(orderData)}`);

    let productRes = await fetch('http://localhost:3001/products')
    .catch(console.log);
    let productJson = await productRes.json();
    let productData = productJson?.message;
    console.log(`product:${JSON.stringify(productData)}`);

    let order_customer = orderData.map(t1=>({...t1,
      ...customerData.find(t2 => {
        if(t2.id === parseInt(t1.user_id)){
          return t2.name;
        }
      })
      }
    ));

    order_customer.forEach(joinItem=>{
      joinItem.products.forEach(element => {
        productData.forEach((productItem=>{
          if(element.id === parseInt(productItem.id)){
            console.log();
            element.name = productItem.name;
            element.price = productItem.price;
          }
        }))
      })
    });
    this.setState({ 
      orders: order_customer,
      customers: customerData,
      products: productData
    })
  }
}
 
export default Order;