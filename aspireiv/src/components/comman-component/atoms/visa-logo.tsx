import React, { PureComponent } from 'react';
import { View, Image } from 'react-native'
import { IMAGES } from '../../../assets/images';
import { styles } from '../../../assets/styles/comman-styles';
export const VisaLogo = () => (
    <View
        style={styles.fullWidthAlignEnd}
    >
        <Image
            source={IMAGES.VISA_LOGO}
            style={styles.visaIcon}
        />
    </View>
)