import React, { Component } from "react";
 
class Customer extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
        customers : [],
        customer:{name:''}
    };
}
  render() {
    return (
      <div>
        <h2>Customers</h2>
        <form onSubmit={this.handleSubmit}>
          <h3>Add Customer</h3>
          <label>
            Name:
            <input type="text" name="name" value={this.state.customer.name} onChange={this.handleInputChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <h3>Existing customers:</h3>
          {this.state.customers === null && <p>Loading customers...</p>}
          {
            this.state.customers && this.state.customers.map(item => (
              <div key={item.name}>
                  <div>Name:{item.name}</div>
                  
              </div>
            ))
          }
      </div>
    );
  }
  async handleSubmit(event) {
    event.preventDefault();
    let res = await fetch('http://localhost:3001/customers', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.customer)});
    let resJson = await res.json();
    if (res.status === 201) {
      fetch('http://localhost:3001/customers')
        .then(res => res.json())
        .then((data) => {
            this.setState({ customers: data.message,customer:{
              ...this.state.customer,
              name: ''
            } })
        })
        .catch(console.log)
    } 
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    this.setState({
      customer: {
            ...this.state.customer,
            name: value
      }
    });
  }
  componentDidMount() {
    fetch('http://localhost:3001/customers')
        .then(res => res.json())
        .then((data) => {
            this.setState({ customers: data.message })
        })
        .catch(console.log)
  }
}
 
export default Customer;