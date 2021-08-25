import React , { useState } from 'react'
import {View,Text,StyleSheet} from "react-native"
import SearchBar from '../Components/SearchBar'
import useResults from "../Hooks/UseResults"
import ResultsList from "../Components/ResultsList"


const SearchScreen =  () => {
    const  [term,setTerm] = useState("")
    const [searchApi, results , errorMessage] = useResults()

    return (
        <View >
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <SearchBar
            term = {term}
            onTermChange = {(abc) => setTerm(abc)}
            onTermSubmit = {() => searchApi()}
            />
             <ResultsList title="Cost Effective"/>
            <ResultsList title="Bit Pricier"/>
            <ResultsList title="Big Spender"/>
            {   
                results.map((element) => {
                   return (
                    <View style= {styles.dataStyling}>
                    {/* <Text  key={Math.random()}>Adaptability : {element.adaptability}</Text>
                    <Text key={Math.random()}>description : {element.description}</Text>
                    <Text  key={Math.random()}>intelligence : {element.intelligence}</Text> */}
                    {/* <Text>We have {results.length} values</Text> */}
                   



                    </View>

                   )
                })
            }
          
        </View>
    )
}

const styles = StyleSheet.create({
    dataStyling :{
        borderColor : "red",
        borderWidth : 3
    }
})
export default SearchScreen
