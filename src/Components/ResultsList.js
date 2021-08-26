import React from 'react'
import {View,Text,StyleSheet, FlatList, TouchableOpacity} from "react-native"
import ResultsDetail from './ResultsDetail'
import { useNavigation } from '@react-navigation/native';


const ResultsList = ({ title, results }) => {
    const navigation = useNavigation();
    return (
        <View >
            <Text style={styles.title}>{title}</Text>
            <Text>Results: {results.length}</Text>
            <FlatList
            
            horizontal
            showsHorizontalScrollIndicator = {false}
            data = {results}
            keyExtractor = {result => results.id}
            renderItem = {({item}) => {
                return (
                    <TouchableOpacity key={Math.random()} onPress={() => navigation.navigate("screen",{
                        itemId: item.id
                        
                      })}>
                        <ResultsDetail result={item} />
                    </TouchableOpacity>
                )
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
  title : {
      fontSize : 18,
      fontWeight : 'bold'
  }
})

export default ResultsList
