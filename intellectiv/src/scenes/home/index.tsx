import React from 'react';
import { View, Text, Pressable, Animated} from 'react-native';
import { homeStyles } from '../../assets/styles/home-style';
import { SafeView } from '../../components/comman-component/wrappers/safeareaview';
import { AngerFrustrationModalInput } from '../../components/anger-frustration-modal-input';
import { CardContainer } from '../../components/comman-component/wrappers/card-container';

type HomePropsType = {

}

type HomeStateType = {
    cardAnimation: any;
    buttonAnimation: any;
    value: number,
    selectedAngerLevel: number;
    slideNo: number;
    activeStatus: number;
    isModal: boolean;
}

class HomeScreen extends React.Component<HomePropsType, HomeStateType>{
    constructor(props: HomePropsType) {
        super(props);
        this.state = {
            cardAnimation: new Animated.Value(0),
            buttonAnimation: new Animated.Value(0),
            value: 0,
            selectedAngerLevel: 0,
            slideNo: 1,
            activeStatus: 1,
            isModal: false
        }
    }

    /***
     * This is function is used for animate the buttons or card
     * @param toValue is used to animate upto.
     * @param value is used for detecting animated progress.
     */

    animateBtn = (toValue, value) => {
        Animated.spring(value, {
            toValue: toValue,
            useNativeDriver: true,
        }).start();
    }

    /***
     * This function is use for start the animation
     */

    onPressInContinueBtn = () => {
        this.animateBtn(1, this.state.buttonAnimation)
    };

    /***
     * This function is use for end the animation
     */

    onPressOutContinueBtn = () => {
        this.animateBtn(0, this.state.buttonAnimation)
        this.setState({ isModal: true })
    };

    setModal = () => this.setState({isModal:false})

    render() {
        const inputRange = [0, 1];
        const outputRange = [1, 0.93];
        const continueBtnscale = this.state.buttonAnimation.interpolate({ inputRange, outputRange });
        const { isModal } = this.state;
        return (
            <SafeView style={homeStyles.container}>
                <CardContainer>
                    <View style={homeStyles.innerScope}>
                        <View
                            style={homeStyles.scopeAlignment}
                        >
                            <Text style={homeStyles.cardTitle}>Start your journey</Text>
                            <Text style={homeStyles.cardDesc}>Start your journey on intellect with a quick session on understanding who you are</Text>
                            <Animated.View style={[{ transform: [{ scale: continueBtnscale }], }, homeStyles.continueBtnContainer]}>
                                <Pressable
                                    style={homeStyles.continueBtn}
                                    onPressIn={this.onPressInContinueBtn}
                                    onPressOut={this.onPressOutContinueBtn}
                                >
                                    <Text style={homeStyles.btninnerText}>Continue Process</Text>
                                </Pressable>
                            </Animated.View>
                        </View>
                    </View>
                </CardContainer>
                <AngerFrustrationModalInput
                    {...{ isModal, setModal:this.setModal }}
                />
            </SafeView>
        )
    }
}

export default HomeScreen;

