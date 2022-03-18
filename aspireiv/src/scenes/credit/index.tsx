import  React,{Component} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import { styles } from '../../assets/styles/comman-styles';
import { SafeView } from '../../components/comman-component/wrappers/safeareaview';

type CreditCardPropsType = {

}

type CreditCardStateType = {

}

class CreditScreen extends React.Component<CreditCardPropsType,CreditCardStateType>{
    constructor(props:CreditCardPropsType){
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

export default CreditScreen;

