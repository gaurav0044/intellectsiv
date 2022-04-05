import React from "react";
import { StyleSheet } from "react-native";
import { scale } from "../fonts/size";
export const homeStyles = StyleSheet.create({
    container: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: "white" 
    },
    innerScope: {
        height: '100%',
        width: '98%',
        backgroundColor: 'rgb(234,227,214)',
        marginBottom: scale(20),
        borderRadius: scale(10),
        position: "relative",
        bottom: scale(5),
    },
    buttonContainer: {
        height: '41%',
        width: '81%',
        backgroundColor: '#222222',
        marginBottom: scale(20),
        borderRadius: scale(22),
        borderBottomRightRadius: scale(14),
    },
    scopeAlignment: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardTitle: {
        color: '#222222',
        fontSize: scale(22),
        fontWeight: "bold"
    },
    btninnerText: {
        color: '#fff',
        fontSize: scale(16),
        fontWeight: "bold"
    },
    cardDesc: {
        color: 'grey',
        fontSize: scale(13),
        paddingHorizontal: scale(10),
        textAlign: "center",
        marginVertical: scale(20)
    },
    continueBtnContainer: { 
        width: '80%', 
        paddingVertical: scale(5), 
    },
    continueBtn: {
        width: '100%',
        paddingVertical: scale(12),
        backgroundColor: '#231F20',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: scale(15)
    },
})