import React from "react";
import { Text, View } from "react-native";
import { ANGER_AND_FRUSTRATION, RESCUE_SESSION,ANGER_LEVEL_NOTE } from "../utils/constants";
import {  angerLevelStyle } from "../assets/styles/anger-level-style";
export const BriefScope = () => (
    <View
        style={angerLevelStyle.titleSectionContainer}
    >
        <Text
            style={angerLevelStyle.statusTitleText}
        >
            {RESCUE_SESSION} : {ANGER_AND_FRUSTRATION}
        </Text>

        <Text
            style={angerLevelStyle.statusNote}
        >
            {ANGER_LEVEL_NOTE}
        </Text>
    </View>
)