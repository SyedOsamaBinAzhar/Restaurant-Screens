import React from 'react'
import {View,TextInput ,StyleSheet} from "react-native"
import { Feather } from "@expo/vector-icons"

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            
            <TextInput Search Bar
            placeholder="Search"
            autoCapitalize = "none"
            autoCorrect = {false}
            style={styles.inputStyle}
            value = {term}
            onChangeText = { (newTerm) => {
                console.log(newTerm)
                return (
                    onTermChange(newTerm)
                )
            }
        }
        onEndEditing = {onTermSubmit}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop :10,
        backgroundColor: "red",
        height: 50,
        borderRadius : 5,
        marginHorizontal: 15,
        flexDirection : "row",
    },
    inputStyle : {
        // borderColor: "orange",
        
        // borderWidth : 3,
        flex : 1,
        fontSize : 18
    },
    iconStyle : {
        fontSize  : 35,
        alignSelf : "center",
        marginHorizontal : 15
    }
});


export default SearchBar
