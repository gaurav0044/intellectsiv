import React, { PureComponent } from 'react';
import { Pressable, Text } from "react-native";
import { styles } from '../../../assets/styles/comman-styles';

type Props = {
    text:string
    onSubmit:()=>void
}

export const SubmitButton = ({text,onSubmit}:Props) => (
    <Pressable
        style={styles.submitButton}
        onPress={onSubmit}
    >
        <Text
            style={styles.submitBtnText}
        >
            {text}
        </Text>
    </Pressable>
)