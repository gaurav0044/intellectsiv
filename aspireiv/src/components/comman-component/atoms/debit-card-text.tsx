import React from 'react';
import { Platform, Text, UIManager, View } from "react-native";
import { styles } from '../../../assets/styles/comman-styles';
import { scale } from "../../../assets/fonts/size";

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}


export const DebitCardUserName = () => (
    <Text
        style={styles.debitCardUserName}
    >
        Mark Henry
    </Text>
)

export const DebitCardNumber = (props: any) => (
    <Text
        numberOfLines={1}
        adjustsFontSizeToFit
        style={[{ fontSize: props.currentFont, color: 'white' }]}
        onTextLayout={props.onTextLayoutChange}
    >      
            
            {
            props.isVisible?'5647341124132020'.split('').map((item: string, index: number) => item + ((index + 1) % 4 ? ' ' : `     `))
            :
            '●●●●●●●●●●●●2020'.split('').map((item: string, index: number) => item + ((index + 1) % 4 ? ' ' : `     `))}
        
    </Text>
)

export const ThruCVV = () => (
    <View
        style={{
            flexDirection: 'row',
            width: '55%',
            marginTop: scale(5),
            justifyContent: 'space-between'

        }}
    >
        <Text
            style={{
                fontSize: scale(14),
                color: 'white'
            }}
        >
            Thru: 12/20
        </Text>
        <Text
            style={{
                fontSize: scale(14),
                color: 'white'
            }}
        >
            CVV :456
        </Text>
    </View>
)