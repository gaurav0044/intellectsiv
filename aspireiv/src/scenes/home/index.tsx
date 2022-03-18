import  React,{Component} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import { styles } from '../../assets/styles/comman-styles';
import { SafeView } from '../../components/comman-component/wrappers/safeareaview';

type HomePropsType = {

}

type HomeStateType = {

}

class HomeScreen extends React.Component<HomePropsType,HomeStateType>{
    constructor(props:HomePropsType){
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

export default HomeScreen;

