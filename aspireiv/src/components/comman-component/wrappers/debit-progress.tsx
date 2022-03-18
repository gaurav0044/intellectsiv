import React, { Children, PureComponent } from 'react';
import { View, ViewProps } from 'react-native'
import { styles } from '../../../assets/styles/comman-styles';
import { scale } from '../../../assets/fonts/size';
export const DebitProgress = (props: ViewProps) => (
    <View
        style={styles.marginBottom10}
    >
        {props.children}
    </View>
)
export const DebitProgressTextContainer = (props: ViewProps) => (
    <View
        style={styles.debitProgressTextContainer}>
        {props.children}
    </View>
)