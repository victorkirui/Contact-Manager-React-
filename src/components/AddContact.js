import React, { Component } from 'react'

export class AddContact extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:'',
            email:''
        }
    }

    emailHandler = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    nameHandler = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    addContact = (e) => {
        e.preventDefault();
        if(this.state.name === '' || this.state.email === ''){
            alert('All fields must be filled!');
            return;
        } else {
            this.props.addContactHandler(this.state);
        }
        
        this.setState({name: '', email:''})
    }
    
    render() {
        const {name,email} = this.state;

        return (
            <div className="ui main" style={{margin:"60px 0px"}}>
            <h3>Add Contact</h3>
            <form className="ui form" onSubmit={this.addContact}>
                <div className="ui field">
                    <label>Name</label>
                    <input type="text" value={name} name="name" placeholder="Add your name" onChange={this.nameHandler} />
                </div>
                <div className="ui field">
                    <label>Email</label>
                    <input type="email" value={email} name="email" placeholder="Add your email" onChange={this.emailHandler} />
                </div>
                <button className="ui button blue" >Add</button>
            </form>
        </div>
        )
    }
}

export default AddContact
