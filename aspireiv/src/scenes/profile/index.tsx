import  React,{Component} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import { styles } from '../../assets/styles/comman-styles';
import { SafeView } from '../../components/comman-component/wrappers/safeareaview';

type ProfilePropsType = {

}

type ProfileStateType = {

}

class ProfileScreen extends React.Component<ProfilePropsType,ProfileStateType>{
    constructor(props:ProfilePropsType){
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

export default ProfileScreen;

