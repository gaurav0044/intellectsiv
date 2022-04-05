import React, { PureComponent } from 'react';
import { Pressable, Text } from "react-native";
import { scale } from '../../../assets/fonts/size';
import { styles } from '../../../assets/styles/comman-styles';

type Props = {
    text: string
    onSubmit: () => void
}


export const BottomButton = ({ text, onSubmit }: Props) => (
    <Pressable
        style={styles.bottomBtnCon}
        onPress={onSubmit}
    >
        <Text
            style={styles.bottomBtnTxt}
        >
            {text}
        </Text>

    </Pressable>
)