import React, { PureComponent } from 'react';
import {  View,Text} from "react-native";

type Props = {
    bottom:string|number;
}
export const MarginBottom = (props:Props) => <View style={{marginBottom:typeof props.bottom === 'string'?`${props.bottom}`:props.bottom}}/>