import React from "react"
import { render } from "react-dom"

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state ={
            name:"",
            email:"",
            phone:"",
        }
    }

    onSubmitForm =() =>{
        preventDefault()
        const name = this.state.name
        const email = this.state.email
        const phone = this.state.phone
    }

    render() {

        return(
            <form onSubmit={this.onSubmitForm}>
                <label htmlFor="name">Name</label>
                <input type ="text" id="name" value={this.state.name} />
                <label htmlFor="email">Email</label>
                <input type ="email" id="email" value={this.state.email} />
                <label htmlFor="phone">Phone</label>
                <input type ="text" id="phone" value={this.state.phone} />
            </form>
        )
    }
}



export default Login