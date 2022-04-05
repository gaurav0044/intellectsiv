import React, { PureComponent } from 'react'
import {  View,Text,StyleProp, TextProps} from "react-native";
import { styles } from '../../../assets/styles/comman-styles';
type Props = {
    title:string;
    textProps?:TextProps
}
export const SmallTitle = (props:Props) => <Text style={[props.textProps?.style]} {...props.textProps}>{props.title}</Text>