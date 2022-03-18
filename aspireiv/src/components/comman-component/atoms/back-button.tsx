import React, { PureComponent } from 'react';
import { View, Text, Image, Pressable } from "react-native";
import { styles } from '../../../assets/styles/comman-styles';
import { scale } from '../../../assets/fonts/size';
export const BackButton = (props:any) => (
    <Pressable
        onPress={()=>props.navigation.goBack()}
    >
    <Image
        source={require('../../../assets/images/left-arrow.png')}
        style={styles.backArrow}
    />
    </Pressable>
)