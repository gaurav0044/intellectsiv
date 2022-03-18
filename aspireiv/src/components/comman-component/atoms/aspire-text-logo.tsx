import React, { PureComponent } from 'react';
import { View, Text, Image, ViewProps } from "react-native";
import { IMAGES } from '../../../assets/images';
import { styles } from '../../../assets/styles/comman-styles';
export const AspireTextLogoContainer = (props: ViewProps) => (
    <View
        style={styles.aspireLogoTextContainer}>
        {props.children}
    </View>
)
export const AspireTextLogo = () => (
    <AspireTextLogoContainer>
        <Image
            source={IMAGES.HOME}
            style={styles.homeIcon}
        />
        <Text
            style={styles.apireText}
        >
            aspire
        </Text>
    </AspireTextLogoContainer>
)