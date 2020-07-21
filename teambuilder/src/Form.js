import React, { useState, useEffect } from 'react'
import styled from 'styled-components'


const Form = () => {
   
    
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //       username: '',
    //       email: '',


        

    //     };
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [hobbies, setHobbies] = useState("dawgs")
    const [age, setAge] = useState("13-18")
    const [title, setTitle] = useState([])


  
    //   this.handleChange = this.handleChange.bind(this);
    //   this.handleSubmit = this.handleSubmit.bind(this);
  
    const handleNameChange = (event) => {
      setUsername(event.target.value);
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
      }
      const handleAnimalChange = (event) => {
          setHobbies(event.target.value)
      }

      const handleAgeChange = (event) => {
          setAge(event.target.value)
      }
  
    const handleSubmit = (event) => {
        
      setTitle([...title, `A name was submitted: ${username.trim()}, their email is: ${email.trim()}, and their hobby is: ${hobbies}. his age is ${age}`]);
      event.preventDefault();
      
    }
  
      return (
          <div>
        <form onSubmit={handleSubmit}>
            
            <div>
                <label htmlFor="title"></label>
                    Name:
                    <input 
                    id="title"
                    type="text" 
                    placeholder="enter your name"
                    value={username} 
                    onChange={handleNameChange} />
                
                
            </div>
            <div>
            <label htmlFor="email"></label>
                    Email:
                    <input
                    id="email"
                    type="text" 
                    placeholder="enter your email"
                    value={email} 
                    onChange={handleEmailChange} />
                
                
            </div>
            <div>
            <label htmlFor="hobbies"></label>
                    hobbies:
                    <select 
                    id="animal"
                    value={hobbies}
                    onChange={handleAnimalChange}
                    >
                        <option value="dawgs">dawgs</option>
                        <option value="kats">kats</option>
                        <option value="phish">phish</option>
                    </select>
            </div>
            <div>
                <label htmlFor="age">
                    13-18
                    <input 
                    id="age"
                    type="radio"
                    value={age}
                    onChange ={handleAgeChange} />
                    19-24
                      <input 
                    id="age"
                    type="radio"
                    value="yes"
                    onChange ={event => handleAgeChange(event)} />
                </label>

            </div>
            <div>
                <input type="checkbox" name="nameOfChoice" value="yes"></input>
            </div>
            <button type='submit'>submit</button>
        </form>
        <Card>{title.map(item => <div>{item}</div>)}</Card>
        
        </div>
      );
    }
    const Card = styled.div`
    color: blue;
    border: 2px solid black;
    `

  export default Form;