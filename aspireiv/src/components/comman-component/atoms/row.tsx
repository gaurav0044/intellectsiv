import React, { PureComponent } from 'react';
import {  View,Text, ViewProps} from "react-native";
import { styles } from '../../../assets/styles/comman-styles';
export const Row = (props:ViewProps) => <View style={[styles.row,props.style]}>{props.children}</View>