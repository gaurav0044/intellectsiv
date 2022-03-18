import React, { PureComponent } from 'react';
import { Image, TextInput } from "react-native";
import { IMAGES } from '../../../assets/images';
import { styles } from '../../../assets/styles/comman-styles';
import { DECIMAL_PAD, SET_WEEKLY_DEBIT_CARD_SPENDING_LIMIT, SPENDING_LIMIT_NOTE, SPEND_LIMIT_OPTIONS } from '../../../utils/constants';
import { DollarBox } from './available-balance';
import { MarginTop } from './margin-top';
import { GreyNote } from './note-text';
import { Row } from './row';
import { SmallTitle } from './small-title';
interface SpendingInputProps {
    spendLimit:string;
    onSpendChange:(value:string) => void;
    spendLimitButton:(value:string) => JSX.Element
}
export const SpendingInput = ({spendLimit,onSpendChange,spendLimitButton}:SpendingInputProps) => (
    <>
        <Row
            style={styles.alignCenter}
        >
            <Image
                source={IMAGES.T_METER}
                style={styles.t_meterIcon}
            />
            <SmallTitle
                title={SET_WEEKLY_DEBIT_CARD_SPENDING_LIMIT}
                textProps={{
                    style: styles.spendingLimitTitle
                }}
            />
        </Row>
        <Row
            style={styles.customSpendingLimitRowCon}
        >
            <DollarBox
                viewProps={{
                    style: [styles.dollarBoxCustomStyle],
                }}
            />
            <TextInput
                style={[styles.spendingLimitInputBox]}
                keyboardType={DECIMAL_PAD}
                value={spendLimit}
                onChangeText={onSpendChange}
            />
        </Row>
        <MarginTop top={'3%'} />
        <GreyNote
            note={SPENDING_LIMIT_NOTE}
        />
        <Row
            style={styles.spendLimitAddmoneyCon}
        >
            {SPEND_LIMIT_OPTIONS.map(spendLimitButton)}
        </Row>
    </>
)