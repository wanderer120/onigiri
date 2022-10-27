import React, { Component } from "react";
 
class Product extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
        products : [],
        product:{name:'',price:0.00}
    };
  }
  render() {
    return (
      <div>
        <h2>Products</h2>
        <form onSubmit={this.handleSubmit}>
          <h3>Add Product</h3>
          <label>
            Name:
            <input type="text" name="name" value={this.state.product.name} onChange={this.handleInputChange} />
          </label>
          <label>
            Price:
            <input type="number" name="price" value={this.state.product.price} onChange={this.handleInputChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <h3>Existing Products:</h3>
          {this.state.products === null && <p>Loading products...</p>}
          {
            this.state.products && this.state.products.map(item => (
              <div key={item.name}>
                  <div>{item.name} - {item.price}</div>
              </div>
            ))
          }
      </div>
    );
  }
  componentDidMount() {
    fetch('http://localhost:3001/products')
        .then(res => res.json())
        .then((data) => {
            this.setState({ products: data.message })
        })
        .catch(console.log)
  }
  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      product: {
            ...this.state.product,
            [name]: value
      }
    });
  }
  async handleSubmit(event) {
    event.preventDefault();
    console.log(`product:${JSON.stringify(this.state.product)}`);
    let res = await fetch('http://localhost:3001/products', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.product)});
    let resJson = await res.json();
    if (res.status === 201) {
      fetch('http://localhost:3001/products')
        .then(res => res.json())
        .then((data) => {
            this.setState({ products: data.message,product:{
              ...this.state.product,
              name: '',
              price:0
            } })
        })
        .catch(console.log)
    }
  }
}
 
export default Product;