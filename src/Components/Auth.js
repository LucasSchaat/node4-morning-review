import React, { Component } from 'react'
import axios from 'axios'

class Auth extends Component{
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    submitAuth = () => {
        const {username, password} = this.state
        axios.post(`/auth/${this.props.match.params.authType}`, {username, password})
            .then(res => {
                this.setState({
                    username: '',
                    password: ''
                })
                this.props.history.push('/home')
            })
    }

    render(){
        return(
            <div>
                {this.props.match.params.authType === 'login' ? (
                    <div>
                        <h1>Please Login Below</h1>
                        <input type='text' placeholder='Email' maxLength='200' name='username' value={this.state.username} onChange={this.handleChange}/>
                        <input type='password' placeholder='Password' maxLength='20' name='password' value={this.state.password} onChange={this.handleChange}/>
                        <button onClick={this.submitAuth}>Login</button>
                    </div>
                ): (
                    <div>
                        <h1>Please Register Below</h1>
                        <input type='text' maxLength='200' name='username' value={this.state.username} onChange={this.handleChange}/>
                        <input type='password' maxLength='20' name='password' value={this.state.password} onChange={this.handleChange}/>
                        <button onClick={this.submitAuth}>Register</button>
                    </div>
                )}
            </div>
        )
    }
}

export default Auth