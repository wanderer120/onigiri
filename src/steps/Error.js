import React, { Component } from "react";
import { Field } from 'react-final-form'
class Error extends React.Component {
    constructor(props){
        super(props);
        const { name } = props;
    }
    render() {
        return (
            <Field
                name={this.props.name}
                subscribe={{ touched: true, error: true }}
                render={({ meta: { touched, error } }) =>
                touched && error ? <span>{error}</span> : null
                }
            />
        );
      }
}
export default Error;