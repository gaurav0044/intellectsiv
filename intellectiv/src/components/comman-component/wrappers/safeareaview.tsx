import React from 'react';
import { SafeAreaView, ViewProps } from "react-native";
import { styles } from "../../../assets/styles/comman-styles"


export const SafeView = (props:any) => (
    <SafeAreaView
        style={[styles.container,props.style]}
    >
        {props.children}
    </SafeAreaView>
)