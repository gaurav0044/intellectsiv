import * as React from "react";
import { Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { IMAGES } from "../../../assets/images";
import { styles } from "../../../assets/styles/comman-styles";

const AspireLogo = () => {
    const insets = useSafeAreaInsets();

    return (<Image
        source={IMAGES.HOME}
        style={[styles.aspireLogo, { top: insets.top + 10, }]}
    />
    )
}
export default AspireLogo;