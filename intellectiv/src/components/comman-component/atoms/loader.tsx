import React, { PureComponent } from 'react';
import { ActivityIndicator } from "react-native";
import { styles } from '../../../assets/styles/comman-styles';

export const Loader = () => (
    <ActivityIndicator
        size={'large'}
        color={'#20D167'}
    />
)