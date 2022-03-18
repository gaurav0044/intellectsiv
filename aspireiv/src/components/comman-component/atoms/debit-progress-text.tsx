import React, { PureComponent } from 'react';
import { View, Text, ViewProps } from 'react-native'
import { styles } from '../../../assets/styles/comman-styles';
import { SmallTitle } from './small-title';
export const DebitProgressText = (props: any) => (
    <>
        <SmallTitle
            title='Debit card spending limit'
        />
        <View
            style={styles.row}
        >
            <Text
                style={styles.spendText}
            >
                $325
            </Text>

            <Text
                style={styles.limitText}
            >{`  |  `}
                ${props.amount}
            </Text>
        </View>
    </>
)

export const RemainingSpendAmount = (props: any) => (
    <View
        style={styles.row}
    >
        <Text
            style={styles.spendText}
        >
            $325
        </Text>

        <Text
            style={styles.limitText}
        >{`  |  `}
            ${props.amount}
        </Text>
    </View>
)

export const DebitProgressBar = () => (
    <View
        style={styles.debitProgressContainer}
    >
        <View
            style={styles.debitProgress}
        />
    </View >
)
