import React , { useState, useEffect } from 'react'
const axios = require('axios').default;

const UseResults = () => {
    const  [results,setResults] = useState([])
    const  [errorMessage,setErrorMessage] = useState('')


    async function searchApi() {
        try {
            
            const response = await axios.get('https://api.thecatapi.com/v1/breeds',{
                params : {
                    limit : 50,

                }
            });
            const list = response.data;
              for(var i = 0; i < 5; i++) {
                const listObject = {
                    adaptability : list[i].adaptability,
                    description : list[i].description,
                    intelligence : list[i].intelligence
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
      console.log("hello")
        searchApi()
      }, [])
    return [searchApi, results,errorMessage ]
}



export default UseResults
