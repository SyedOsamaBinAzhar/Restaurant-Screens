import React from 'react'
import {View,Text,StyleSheet, FlatList, Image} from "react-native"

const ResultsDetail = ({ result , id }) => {
    return (
        <View style={styles.listStyle}>
            <Text>{id}</Text>
            <Image style={styles.image} source = {{uri : result.image}}/>
            <Text style={styles.name}>{result.name}</Text>
            <Text >{result.intelligence}-Ratings {result.adaptability}-Price </Text>

        </View>
    )
}

const styles = StyleSheet.create({
   image : {
       width : 200,
       borderRadius : 4,
       height : 200
   },
   name : {
       fontWeight : 'bold',
       fontSize : 16
   },
   listStyle : {
     marginRight : 10,
     marginLeft : 10
   }
})

export default ResultsDetail
