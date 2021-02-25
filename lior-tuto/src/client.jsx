import React, { Component } from 'react';

class Customer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return ( < li > { this.props.details.name } < button onClick = {
            () => { this.handleDelete(this.props.details.id) } } > X < /button></li > )
    }


}

export default Customer;