import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Client from "./client"

class App extends React.Component{
    constructor(props){
        super(props);
    }

    /*clientInput = React.createRef();*/ // on of the methode used to access an element we can use ref or state

    state={
        customers:[
            {id:1, name:"Jean bonbeurre"},
            {id:2, name:"John Doe"},
            {id:3, name:"Jane Dae"},
            {id:4, name:"Lior Chamla"},
            {id:5, name:"Jean Dujardin"}
        ],
        newCustomer: ""
    }

    /*

    handelClick = () => {
        
        const customers = this.state.customers.slice(); //creat a copy to avoid working on the original
        customers.push({id:6, name:"Daniel Craig"}); //pusshing new obj to the copy
        this.setState({customers: customers}) //transform the original with the copy (update);


    }
*/

//Creating the methode to delet elements. Using function to keep the good this keyword

handleDelete = (id)=>{
    
const customers = this.state.customers.slice(); //creat a copy
const index = customers.findIndex((customer)=>{ //find index
    return customer.id === id
});
customers.splice(index, 1); //use index to remove it
this.setState({customers: customers}) //update the object state
}


handleSubmit = (event) => {
    event.preventDefault(); //avoid refreshing page
    /*console.log(this.clientInput.current.value);*/ //check above for the client input
    const id =  new Date().getTime();
    const name = this.state.newCustomer;
    const customer = {id:id, name: name}; // {id:id, name: name} === {id, name} javascript is smart and know that it need to find the same name
    const customers = this.state.customers.slice(); //this.state.customers.slice() === [...this.state.customers]
    customers.push(customer);
    this.setState({customers:customers, newCustomer: ""});
    console.log(id)
}

handelChange = (event)=>{
    event.preventDefault();
    const value = event.currentTarget.value;
    this.setState({newCustomer:value});
}
    render(){
        const title = "Customer list";
        return (
        <div>
            <h1>{title}</h1>
           {/*<button onClick={this.handelClick}>Click me</button>*/}
            <ul>
                {this.state.customers.map(x=>(<Client details={x}/>))}
            </ul>
            <form onSubmit={this.handleSubmit}>
                <input 
                onChange={this.handelChange}
                value={this.state.newCustomer}
                ref={this.clientInput}/*ref={this.clientInput}*/
                type="text" 
                placeholder="add a customer"/> 
                <button>Confirm</button>
            </form>
        </div>)
        
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render( 
    <App/>,
    rootElement
);