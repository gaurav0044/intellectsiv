import  React,{Component} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import { styles } from '../../assets/styles/comman-styles';
import { SafeView } from '../../components/comman-component/wrappers/safeareaview';

type PaymentPropsType = {
    navigation:any;
}

type PaymentStateType = {

}

class PaymentScreen extends React.Component<PaymentPropsType,PaymentStateType>{
    constructor(props:PaymentPropsType){
        super(props);
        this.state={}
    }
    render(){
        return(
            <SafeView>
                <Text>Hello</Text>
            </SafeView>
        )
    }
}

export default PaymentScreen;

