import React from "react";
import { View, ViewProps } from "react-native";
import {  cardStyles } from "../../../assets/styles/card-style";

export const CardContainer = (props:ViewProps) => (
    <View style={cardStyles.buttonContainer}>
        {props.children}
    </View>
)