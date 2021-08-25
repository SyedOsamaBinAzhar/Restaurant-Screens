import React , { useState } from 'react'
import {View,Text,StyleSheet} from "react-native"
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
        <View >
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <SearchBar
            term = {term}
            onTermChange = {(abc) => setTerm(abc)}
            onTermSubmit = {() => searchApi()}
            />
            <Text>We have {results.length} values</Text>

             <ResultsList results = {filterResultsByIntelligence(3)} title="Cost Effective"/>
            <ResultsList results = {filterResultsByIntelligence(4)} title="Bit Pricier"/>
            <ResultsList results = {filterResultsByIntelligence(5)} title="Big Spender"/>
            {   
                results.map((element) => {
                   return (
                    <View style= {styles.dataStyling}>
                    {/* {/* <Text  key={Math.random()}>Adaptability : {element.adaptability}</Text> */}
                    {/* <Text key={Math.random()}>description : {element.description}</Text> */}
                    {/* <Text  key={Math.random()}>intelligence : {element.intelligence}</Text>   */}
                   



                    </View>

                   )
                })
            }
          
        </View>
    )
}

const styles = StyleSheet.create({
    // dataStyling :{
    //     borderColor : "red",
    //     borderWidth : 3
    // }
})
export default SearchScreen
