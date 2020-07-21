import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PeopleInfo from './PeopleInfo'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

function People(props) {
    const [people, setPeople] = useState([])
    
    useEffect(() => {
      axios.get('https://swapi.dev/api/people').then((res) => {
        console.log('list of people', res.data.results)
        setPeople(res.data.results)
      }).catch((err) => {
        console.log('broke', err)
      })
    }, [])
      
    return (
        <>
    <h3>this is people</h3>
    <Link to='/'><button>Backhome</button></Link>
    <h2>{people.map((person, index) => <PeopleInfo key={person.name} person={person} index={index} />)}</h2>
    {/* {people.map(film => <InfoDiv><div>{film.name}</div><div onClick={() => getPokemon(film.url)}><Button>dope</Button></div></InfoDiv>)} */}
    </>
    )
   
  }
export default People