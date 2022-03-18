import React from 'react';
import { View, Pressable, Text, Image, Platform, UIManager, LayoutAnimation } from "react-native";
import { IMAGES } from '../../../assets/images/index';
import { styles } from '../../../assets/styles/comman-styles';
type Props = {
    setVisibility: (value: boolean) => void,
    isVisible: boolean;
    onVisibile:()=>void;
}

export const ShowCardNumberButton = (props: Props) => {
    const { setVisibility, isVisible,onVisibile } = props;
   
    return (<Pressable
        style={styles.showCardNumberButtonContainer}
        onPress={onVisibile}
    >
        <View
            style={styles.showCardNumberButton}
        >

            <Image
                source={!isVisible?IMAGES.EYES_OPEN:IMAGES.CLOSE_EYE}
                style={styles.eyeIcon}
            />
            <Text
                style={styles.showCardButtonText}
            >
                {isVisible?`Hide`:`Show`} card number
            </Text>
        </View>
    </Pressable>)
}
