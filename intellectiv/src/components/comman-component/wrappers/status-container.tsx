import React from "react";
import { View, ViewProps } from "react-native";
import { angerLevelStyle } from "../../../assets/styles/anger-level-style";
export const StatusContainer = (props: ViewProps) => (
    <View
        style={angerLevelStyle.container}
    >
        {props.children}
    </View>
)