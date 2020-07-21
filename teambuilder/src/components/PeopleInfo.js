import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import axios from 'axios'


function PeopleInfo(props) {
  const [currentFilms, setCurrentFilms] = useState([])
    

    const getFilms = (url) => {
        axios.get(url).then((res) => {
          setCurrentFilms(res.data.name.films)
          
          console.log('films', res.data.name)
        }).catch((err) => {
          console.log('broke', err)
        })
      }
    return (
        
    <div>
        <h2>{props.person.name}</h2><div>⬇</div> 
    <p>height: {props.person.height}</p>
    </div>
   
    )
    
  }
export default PeopleInfo