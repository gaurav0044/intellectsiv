import React from 'react';
import { View, FlatList } from 'react-native';
import { styles } from '../../assets/styles/comman-styles';
import { SafeView } from '../../components/comman-component/wrappers/safeareaview';
import AspireLogo from '../../components/comman-component/atoms/logo';
import { Container } from '../../components/comman-component/wrappers/container';
import { Balance } from '../../components/comman-component/atoms/available-balance';
import { DebitCard, DebitCardOption } from '../../components/debit-card-component';
import { DebitProgress, DebitProgressTextContainer } from '../../components/comman-component/wrappers/debit-progress';
import { DebitProgressBar, DebitProgressText, RemainingSpendAmount } from '../../components/comman-component/atoms/debit-progress-text';
import { DEBIT_CARD, DEBIT_CARD_OPTION_LIST, DEBIT_SPENDING_LIMIT } from '../../utils/constants';
import { DebitCardPropsType, DebitCardStateType } from '../../types/debit-card-types';
import { ScreenheaderText } from '../../components/comman-component/atoms/screen-header-text';
import { connect } from 'react-redux'
import { getSpends } from "../../redux/actions";
import { SmallTitle } from '../../components/comman-component/atoms/small-title';


class DebitCardScreen extends React.Component<DebitCardPropsType, DebitCardStateType>{
    constructor(props: DebitCardPropsType) {
        super(props);
        this.state = {
            currentFont: 16,
            isSelected: false,
            debitCardOptionList: DEBIT_CARD_OPTION_LIST,
            amount: ''
        }
    }

    debitCardOptions = ({ item, index }) => {

        const { navigation } = this.props;
        return (
            <DebitCardOption
                key={index}
                navigation={navigation}
                {...{ item }}
            />
        )
    }

    /** 
     *  Here we will set card number (font size) to fit it into one line
    */

    setDebitCarNumberSize = (e) => {
        const { lines } = e.nativeEvent;
        const { currentFont } = this.state;
        if (lines.length > 1) {
            this.setState({ currentFont: currentFont - 1 });
        }
    }

    componentDidMount() {
        this.props.getSpends();
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (!nextProps.appData.error) {
            this.setState({ amount: nextProps?.appData?.action?.data?.data?.spending })
        }
    }

    render() {
        const { currentFont, isSelected, debitCardOptionList, amount } = this.state
        return (
            <SafeView>
                <AspireLogo />
                <Container>
                    <ScreenheaderText
                        title={DEBIT_CARD}
                    />
                    <Balance
                        amount={amount}
                    />
                    <DebitCard
                        {...{ currentFont, isSelected }}
                        onTextLayoutChange={this.setDebitCarNumberSize}
                    />
                    <DebitProgress>
                        <DebitProgressTextContainer>
                            <SmallTitle
                                title={DEBIT_SPENDING_LIMIT}
                            />
                            <RemainingSpendAmount amount={amount} />
                        </DebitProgressTextContainer>
                        <DebitProgressBar />
                    </DebitProgress>
                    <FlatList
                        data={debitCardOptionList}
                        contentContainerStyle={styles.flatListBottomPadding}
                        renderItem={this.debitCardOptions}
                    />
                </Container>
                <View
                    style={styles.whiteBgContainer}
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
        getSpends: () => dispatch(getSpends())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DebitCardScreen);


