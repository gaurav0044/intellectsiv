import React from "react";
import {  StyleSheet } from "react-native";
import { scale } from "../fonts/size";
export const angerMeterStyle = StyleSheet.create({
    containerSize:{
        width: '80%',
    },
    meterContainer:{
        width: '100%',
        alignItems: "center",
        marginVertical: scale(25)
    },
    meterInnerContainer:{
        width: (scale(130) + scale(3)) * scale(2),
        height: (scale(130) + scale(3)) * scale(2),
        borderRadius: (scale(130) + scale(3)) * scale(2),
        justifyContent: "center",
        alignItems: "center",
        borderWidth: scale(4),
        borderStyle: "dashed",
        borderColor: "rgb(132,158,168)"
    },
    meterInner2Container:{
        width: (scale(90) + scale(3)) * scale(2),
        height: (scale(90) + scale(3)) * scale(2),
        backgroundColor: 'rgb(66,117,134)',
        borderRadius: (scale(90) + scale(3)) * scale(2),
        justifyContent: "center",
        alignItems: "center"
    },
    position:{
        position: "absolute"
    },
    angerLevelTextContainer:{ 
        borderRadius: scale(100), 
        height: scale(100), 
        width: scale(100), 
        backgroundColor: "rgb(117,219,230)", 
        justifyContent: "center", 
        alignItems: "center", 
    },
    angerLevelText:{
        overflow: 'hidden',
        fontSize: scale(30), 
        fontWeight: "bold", 
        color: 'white', 
        textAlign: "center", 
        textAlignVertical: "center"
    },
    sliderTrack:{
        height: scale(15),
        width: '100%',
        borderRadius: scale(15),
        backgroundColor: 'white',
    },
    thumbStyle:{
        height: scale(25),
        width: scale(25),
        borderRadius: scale(25),
        borderWidth: scale(4),
        borderColor: 'rgb(186,235,245)'
    }
});

