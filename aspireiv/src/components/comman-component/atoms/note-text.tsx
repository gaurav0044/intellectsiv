import React, { PureComponent } from 'react';
import { Text } from "react-native";
import { styles } from '../../../assets/styles/comman-styles';
import { SPENDING_LIMIT_NOTE } from "src/utils/constants";
type Props = {
    note:string
}
export const GreyNote = ({note}:Props) => <Text style={styles.greyNoteText}>{note}</Text> 