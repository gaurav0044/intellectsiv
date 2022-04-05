import { Text } from "react-native";
import React, { PureComponent } from 'react';
import { Image } from "react-native";
import { COLORS } from "../../../assets/colors/comman-colors";
import { styles } from "../../../assets/styles/comman-styles";
import { IMAGES } from "../../../assets/images";
type Props = {
    focused: boolean;
    text: string
}

export const TabBarText = ({ focused, text }: Props) => {
    const isFocused = {
        color: focused ? COLORS.GREEN : COLORS.TABTEXT,
    }
    return (
    <Text
        style={[styles.tabText, {
            color: focused ? COLORS.WHITE : COLORS.GREY,
        }]}
    >
        {text}
    </Text>
    )
}

export const TabBarIcon = ({ focused, icon }) => <IMAGES.HOME/>