import React , { useState } from 'react'
import {View,Text,StyleSheet} from "react-native"
import SearchBar from '../Components/SearchBar'

const SearchScreen = () => {
    const  [term,setTerm] = useState("")

    return (
        <View >
            <Text>Search Screen</Text>
            <SearchBar
            term = {term}
            onTermChange = {(abc) => setTerm(abc)}
            onTermSubmit = {() => console.log("term was submitted")}
            />
            <Text>{term}</Text>
        </View>
    )
}


export default SearchScreen
