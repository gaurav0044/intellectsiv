import React, { PureComponent } from 'react'
import { Text, View } from "react-native";
import { styles } from "../../../assets/styles/comman-styles";

export const ScreenheaderText = ({title}) => (
    <View
        style={styles.fullWidth}
    >
        <Text
            style={styles.debitCardText}
        >
            {title}
        </Text>
    </View>
)