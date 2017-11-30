
import React, { Component } from 'react'

class ContactForm extends Component {
  state = {
    firstName: '',
    lastName: '', 
    email: ''
  }

  //Updates form fields and stores form_data in ContactForm's state
  formChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  //Submits ContactForm's state-the form data- as a POST request to backend
  onSubmit = form_data => {
    form_data.preventDefault(); //Prevents page from auto-refreshing and putting form_data into url
    console.log(this.state);
    this.setState({
      firstName: '',
      lastName: '', 
      email: ''
    })
  }

  render() {
    return (
      <div className="container">
        <h3>Contact Form Boilerplate</h3>

        <form>
          <input 
            name="firstName" 
            placeholder="First Name" 
            value={this.state.firstName} 
            onChange={ event => this.formChange(event)}
            />
          <input 
            name="lastName" 
            placeholder="Last Name" 
            value={this.state.lastName} 
            onChange={ event => this.formChange(event)}
            />
          <input 
            name="email" 
            placeholder="Email" 
            value={this.state.email} 
            onChange={ event => this.formChange(event)}
            />
            <button onClick={form_data => this.onSubmit(form_data)}>Submit</button> 
        </form>

        
      </div>
    )
  }


}


export default ContactForm