import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "../../assets/styles/comman-styles";

export const StatusLines = (props: {
    active: number
    totalStatus: number
}) => {
    const { active, totalStatus } = props;
    const LEVEL_LENGTH = new Array(totalStatus).fill("")
    return (
        <View
            style={[styles.statusLineContainer, {
                marginTop: useSafeAreaInsets().top + 10
            }]}
        >
            {
                LEVEL_LENGTH.map((item, index) => {
                    return (
                        <View 
                            style={[styles.statusLines, {
                                backgroundColor: (index + 1) <= active ? "white" : 'grey',
                            }]} 
                        />
                    )
                })
            }
        </View>
    )
}