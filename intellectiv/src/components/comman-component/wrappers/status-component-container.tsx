import React from "react";
import { View, ViewProps } from "react-native";
import { angerLevelStyle } from "../../../assets/styles/anger-level-style";

export const StatusComponentContainer = (props: ViewProps) => (
    <View
        style={angerLevelStyle.statusCoponentContainer}>
        {props.children}
    </View>
)