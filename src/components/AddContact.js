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
        } else {
            console.log(this.state.name);
            console.log(this.state.email);
        }
        
        this.setState({name: ''});
        this.setState({email: ''});
    }
    
    render() {
        const {name,email} = this.state;

        return (
            <div className="ui main">
            <h2>Add Contact</h2>
            <form className="ui form">
                <div className="ui field">
                    <label>Name</label>
                    <input type="text" value={name} name="name" placeholder="Add your name" onChange={this.nameHandler} />
                </div>
                <div className="ui field">
                    <label>Email</label>
                    <input type="email" value={email} name="email" placeholder="Add your email" onChange={this.emailHandler} />
                </div>
                <button className="ui button blue" onClick={this.addContact}>Add</button>
            </form>
        </div>
        )
    }
}

export default AddContact
