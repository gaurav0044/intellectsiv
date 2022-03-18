import React, { PureComponent } from 'react';
import {  View,Text} from "react-native";
type Props = {
    top:string|number;
}
export const MarginTop = (props:Props) => <View style={{marginTop:typeof props.top === 'string'?`${props.top}`:props.top}}/>