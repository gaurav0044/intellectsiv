import React, { PureComponent } from 'react';
import { View, Text, Pressable } from "react-native";
import { styles } from '../../../assets/styles/comman-styles';
import { scale } from '../../../assets/fonts/size';
import { DollarBoxSign } from './available-balance';
type AddMoneyButtonProps = {
    balText:string,
    onAdd:(balText:string) => void;
    length:number
}
export const AddMoneyButton = ({balText,onAdd,length}:AddMoneyButtonProps) => (
    <Pressable
        style={[styles.addMoneyCon,{width:`${((100/length)-2)}%`}]}
        onPress={() => onAdd(balText)}
    >
        <DollarBoxSign
            textProps={{
                style: {
                    color: '#01D167'
                }
            }}
        />
        <Text style={styles.addMoneyButtonText}>
            {` `}{balText}
        </Text>
    </Pressable>
)