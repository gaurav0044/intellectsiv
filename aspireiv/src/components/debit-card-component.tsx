import React, { useState } from "react";
import { View, Pressable, Text, Image, Switch, LayoutAnimation, Platform, UIManager } from "react-native";
import { styles } from "../assets/styles/comman-styles";
import { scale } from "../assets/fonts/size";
import { ShowCardNumberButton } from "./comman-component/atoms/show-card-button";
import { DebitCardContainer, CardContainer } from "./comman-component/wrappers/debitcard-container";
import { AspireTextLogo } from "./comman-component/atoms/aspire-text-logo";
import { DebitCardNumber, DebitCardUserName, ThruCVV } from "./comman-component/atoms/debit-card-text";
import { VisaLogo } from "./comman-component/atoms/visa-logo";
import { DebitCardOptionlist } from "../types/debit-card-types";
import { DebitCardprops } from "../types/debit-card-component-type/indes";

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}
export const DebitCard = (props: DebitCardprops) => {
    const [isVisible, setVisibility] = useState(false);
    const onVisibile = () => setVisibility(!isVisible)
    return (
        <DebitCardContainer>
            <ShowCardNumberButton
                {...{
                    setVisibility,
                    isVisible,
                    onVisibile
                }}
            />
            <CardContainer>
                <AspireTextLogo />
                <DebitCardUserName />
                <DebitCardNumber {...{ isVisible }} />
                <ThruCVV />
                <VisaLogo />
            </CardContainer>
        </DebitCardContainer>
    )
}

export const DebitCardOption = (props: { item: DebitCardOptionlist, navigation: any }) => {
    const { title, icons, description } = props.item
    const { navigation } = props
    const [isSwitched, setSwitch] = useState(false);
    return (
        <View
            style={styles.listContainer}
        >
            <View
                style={styles.width15}
            >
                <Image
                    source={icons}
                    style={styles.listIcon}
                />

            </View>
            <View
                style={styles.listTextContainer}
            >
                <View
                    style={styles.width90}
                >
                    <Text
                        style={styles.listConTitle}
                    >
                        {title}
                    </Text>
                    <Text
                        style={styles.listConDesc}
                    >
                        {description}
                    </Text>

                </View>
                <View
                    style={styles.listSwitchCon}
                >
                    <Switch
                        trackColor={{ false: "#767577", true: "#01D167" }}
                        thumbColor={'white'}
                        ios_backgroundColor="#3e3e3e"
                        style={styles.switchStyle}
                        onValueChange={() => {
                            if (title === "Weekly spending limit" && !isSwitched) {
                                navigation.navigate("SpendLimitScreen")
                            }
                            setSwitch(!isSwitched)
                        }}
                        value={isSwitched}
                    />
                </View>
            </View>
        </View>
    )
}