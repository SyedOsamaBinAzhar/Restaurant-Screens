import React, { useState, useEffect } from 'react'
import { View,Text, Image, StyleSheet , Button} from "react-native";
import axios from 'axios';



const ResultsShowScreen = ({route,navigation}) => {
    const [description,setDescription] = useState("");
    const [name,setName] = useState("");
    const [temperament,setTemperament] = useState("");


    var getResults = async(itemId) => {
        const response = await axios.get(`https://api.thecatapi.com/v1/breeds/${itemId}`);
        return response.data;
    }

        useEffect(async() => {
        const {itemId} = route.params;
        var data = await getResults(itemId);
        setName(data.name)
        setTemperament(data.temperament)
        setDescription(data.description)

    }, [])


    return (
        <View>
        <Text>{name}</Text>
        <Text>{temperament}</Text>
        <Text>{description}</Text>
        </View>
    )
}

export default ResultsShowScreen
