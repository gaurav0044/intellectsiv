import React from "react";
import {  StyleSheet } from "react-native";
import { scale } from "../fonts/size";
export const angerLevelStyle = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "rgb(53,93,110)",
    },
    titleSectionContainer:{
        width: '100%',
        paddingHorizontal: scale(20)
    },
    statusTitleText:{
        fontSize: scale(14),
        fontWeight: "bold",
        color: 'white',
        marginTop: scale(17)
    },
    statusNote:{
        fontSize: scale(20),
        color: 'white',
        marginTop: scale(17)
    },
    statusCoponentContainer:{
        flex: 1,
        alignItems: "center",
        marginTop: scale(40)
    },
    fullWidth:{width:'100%',},
    angerLevelText:{ 
        color: "white", 
        fontWeight: "bold", 
        fontSize: scale(19) ,
        textAlign:"center"
    },
    levelContainer:{
        width: '100%',
        paddingHorizontal: scale(60),
        alignItems: "center",
        marginTop:scale(15)
    },
    levels:{                                   
        height: scale(40),
        borderTopLeftRadius: scale(10),
        borderTopRightRadius: scale(10),
        borderBottomLeftRadius: scale(25),
        borderBottomRightRadius: scale(25),
        marginVertical: scale(10),
    }
})