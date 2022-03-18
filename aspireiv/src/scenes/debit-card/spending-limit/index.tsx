import React from 'react';
import { ActivityIndicator, Alert, View,Dimensions } from 'react-native';
import { ScreenheaderText } from '../../../components/comman-component/atoms/screen-header-text';
import { styles } from '../../../assets/styles/comman-styles';
import { SafeView } from '../../../components/comman-component/wrappers/safeareaview';
import AspireLogo from '../../../components/comman-component/atoms/logo';
import { Container } from '../../../components/comman-component/wrappers/container';
import { MarginBottom } from '../../../components/margin-bottom';
import { BackButton } from '../../../components/comman-component/atoms/back-button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SPENDING_LIMIT, SPEND_LIMIT_OPTIONS } from '../../../utils/constants';
import { MarginTop } from '../../../components/comman-component/atoms/margin-top';
import { AddMoneyButton } from '../../../components/comman-component/atoms/pricing-button';
import { SubmitButton } from '../../../components/comman-component/atoms/submit-button';
import { SpendingInput } from '../../../components/comman-component/atoms/spending-inputs';
import { connect } from 'react-redux';
import {  getSpends,addSpends} from "../../../redux/actions";
import { AlertBox } from '../../../components/comman-component/atoms/alert';
import { Loader } from '../../../components/comman-component/atoms/loader';
import { scale } from '../../../assets/fonts/size';



interface SpendLimitScreenPropsType {
    navigation: NativeStackScreenProps<any, any>,
    getSpends:any;
    addSpends:any;
    appData:any;
}

interface SpendLimitScreenStateType {
    spendLimit: string;
    loading:boolean;
}

class SpendLimitScreen extends React.Component<SpendLimitScreenPropsType, SpendLimitScreenStateType>{
    constructor(props: SpendLimitScreenPropsType) {
        super(props);
        this.state = {
            spendLimit: '',
            loading:true,
        }
    }
    onSpendChange = (e: string) => {
        this.setState({
            spendLimit: e
        })
    }

    /** 
     * If you already add some spending to inputbox then this function will perform addition in that value  
     * 
     * @param item This will take default amount while you press on default amount button
    */

    onAdd = (spend: string) => {
        const { spendLimit } = this.state;
        const limit = spendLimit ? spendLimit : '0'
        const spending = spend ? spend : '0'
        this.setState({
            spendLimit: Number(parseFloat(limit) + parseFloat(spending)) + ""
        })
    }

    /** 
     * AddMoneyButton is dynamic , if you add more items in SPEND_LIMIT_OPTIONS array then it will settle accordingly 
     * 
     * @param item This will take default amount
     * @returns AddMoneyButton component
    */

    spendLimitButton = (item: string) => <AddMoneyButton length={SPEND_LIMIT_OPTIONS.length} balText={item} onAdd={this.onAdd} />

    componentDidMount(){
        this.props.getSpends()
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        if(!nextProps.appData.error){
            this.setState({
                loading:false,
                spendLimit:nextProps?.appData?.action?.data?.data?.spending
            })
        }
    }

    onSubmit = () => {
        const {spendLimit}=this.state;
        const {navigation}=this.props;
        if(spendLimit){
            this.props.addSpends({
                "spend":spendLimit
            });
            this.props.navigation.goBack()
        }else{
            AlertBox({title:"Spend alert",description:"Please add some amount"});
        }
    }

    render() {
        const { navigation } = this.props;
        const { spendLimit,loading } = this.state;
        const {spendLimitButton,onSpendChange} = this;
        return (
            <SafeView>
                <AspireLogo />
                <Container
                    style={styles.customSpendingContainer}
                >
                    <View>
                        <BackButton
                            navigation={navigation}
                        />
                        <MarginBottom bottom={20} />
                        <ScreenheaderText
                            title={SPENDING_LIMIT}
                        />
                        <MarginTop top={'22%'} />
                        <SpendingInput
                            {...{
                                spendLimit,
                                spendLimitButton,
                                onSpendChange
                            }}
                        />
                    </View>
                    <SubmitButton
                        text="Save"
                        onSubmit={this.onSubmit}
                    />
                    {loading&&<Loader/>}
                </Container>
                <View
                    style={[styles.whiteBgContainer, { height: Dimensions.get("window").height-scale(180) }]}
                />
            </SafeView>
        )
    }
}

function mapStateToProps(state) {
    return {
      appData: state.appData
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      getSpends: () => dispatch(getSpends()),
      addSpends:(data) => dispatch(addSpends(data))
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SpendLimitScreen);

