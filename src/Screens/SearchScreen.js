import React , { useState } from 'react'
import {View,Text,StyleSheet, ScrollView} from "react-native"
import SearchBar from '../Components/SearchBar'
import useResults from "../Hooks/UseResults"
import ResultsList from "../Components/ResultsList"


const SearchScreen =  () => {
    const  [term,setTerm] = useState("")
    const [searchApi, results , errorMessage] = useResults()

    const filterResultsByIntelligence = (intelligence) => {
        return results.filter(result => result.intelligence === intelligence)
    }

    return (
        <>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <SearchBar
            term = {term}
            onTermChange = {(abc) => setTerm(abc)}
            onTermSubmit = {() => searchApi()}
            />

            <ScrollView>
            <ResultsList key={Math.random+4} results = {filterResultsByIntelligence(3)} title="Cost Effective"/>
            <ResultsList key={Math.random+2} results = {filterResultsByIntelligence(4)} title="Bit Pricier"/>
            <ResultsList key={Math.random+5} results = {filterResultsByIntelligence(5)} title="Big Spender"/>
             </ScrollView>
           
          
        </>
    )
}

const styles = StyleSheet.create({
    // dataStyling :{
    //     borderColor : "red",
    //     borderWidth : 3
    // }
})
export default SearchScreen
