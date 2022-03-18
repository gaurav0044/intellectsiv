import React, { Children, PureComponent } from 'react';
import { View, Text, Image, ViewProps } from "react-native";
import { styles } from '../../../assets/styles/comman-styles';

export const DebitCardContainer = (props: ViewProps) => (
    <View
        style={styles.debitCardContainer}>
        {props.children}
    </View>
)
export const CardContainer = (props: ViewProps) => (
    <View
        style={styles.debitCard}
    >
        {props.children}
    </View>
)