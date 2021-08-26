import React , { useState, useEffect } from 'react'
const axios = require('axios').default;

const UseResults = () => {
    const  [results,setResults] = useState([])
    const  [errorMessage,setErrorMessage] = useState('')


    async function searchApi() {
        try {
            
            const response = await axios.get('https://api.thecatapi.com/v1/breeds',{
                params : {
                    limit : 70,

                }
            });
            const list = response.data;
              for(var i = 0; i < 25; i++) {
                const listObject = {
                    adaptability : list[i].adaptability,
                    description : list[i].description,
                    intelligence : list[i].intelligence,
                    name : list[i].name,
                    id : list[i].id,
                    image : list[i].image.url
                }
                setResults((prevState) => ([
                    ...prevState,listObject
                   ]))
            }
            
        
        } catch (error) {
          console.error(error);
          setErrorMessage("Something went wrong")
        }
      }
 
      useEffect(() => {
        searchApi()
      }, [])

    return [searchApi, results,errorMessage ]
}



export default UseResults
