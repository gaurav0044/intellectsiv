import React from 'react'
import { View, ViewProps } from 'react-native'
import { styles } from '../../../assets/styles/comman-styles'
import { scale } from '../../../assets/fonts/size'
export const Container = (props: ViewProps) => (
    <View
        style={[styles.containerWithPadding,props.style]}>
        {props.children}
    </View>
)