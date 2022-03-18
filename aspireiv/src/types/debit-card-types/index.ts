import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ImageSourcePropType } from "react-native";

export interface DebitCardPropsType {
    navigation: NativeStackScreenProps<any, any>,
    appData:any;
    getSpends:any;
}
export type DebitCardOptionlist = {
    title:string;
    description:string;
    icons:ImageSourcePropType;
 
}

export interface DebitCardStateType {
    currentFont: number,
    isSelected: boolean,
    amount:string;
    debitCardOptionList: DebitCardOptionlist[]
}