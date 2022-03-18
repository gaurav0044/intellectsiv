import React from 'react';
import { Text, TextProps, View, ViewProps } from "react-native";
import { styles } from '../../../assets/styles/comman-styles';
import { scale } from "../../../assets/fonts/size";

export const AvailableBalanceText = () => (
    <Text
        style={styles.availBalCheck}
    >
        Available balance
    </Text>
)
type DollarBoxSignProps = {
    textProps?:TextProps
}
export const DollarBoxSign = ({textProps}:DollarBoxSignProps) => (
    <Text
        style={[styles.dollarSign,textProps?.style]}
    >
        S$
    </Text>
)
type DollaBoxType = {
    viewProps?: ViewProps
}
export const DollarBox = ({ viewProps }: DollaBoxType) => (
    <View
        style={[styles.dollarCon, viewProps?.style]}
    >
        <DollarBoxSign/>
    </View>
)

type AvailBalanceProps = {
    balance: string;
}
export const AvailableBalance = ({ balance }: AvailBalanceProps) => (
    <View
        style={styles.availBalanceCon}
    >
        <DollarBox />
        <Text
            style={styles.dollarText}
        >
            {`  `}{balance}
        </Text>
    </View>
)

type BalanceProps = {
    amount:string
}

export const Balance = ({amount}:BalanceProps) => (
    <>
        <AvailableBalanceText />
        <AvailableBalance balance={amount} />
    </>
)