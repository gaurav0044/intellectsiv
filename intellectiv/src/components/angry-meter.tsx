import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import CircleSlider from "./circular-slider";
import Slider from 'react-native-slider';
import { angerMeterStyle } from "../assets/styles/angry-meter";
import { angerLevelStyle } from "../assets/styles/anger-level-style";
import { ANGER_LEVEL } from "../utils/constants";
import { scale } from "../assets/fonts/size";
import { COLORS } from "../assets/colors/comman-colors";

type Props = {
    value:number;
    setValue:(value:number) => void;
}

export const AngryMeter = (props:Props) => {
    
    return (
        <View
            style={angerMeterStyle.containerSize}
        >
            <View
                style={angerMeterStyle.meterContainer}
            >
                <View
                    style={angerMeterStyle.meterInnerContainer}
                >
                    <View
                        style={angerMeterStyle.meterInner2Container}
                    >
                        <View
                            style={angerMeterStyle.position}
                        >
                            <CircleSlider
                                meterColor={COLORS.WHITE}
                                strokeColor={COLORS.GREY}
                                value={props.value}
                                dialRadius={scale(90)}
                                btnRadius={scale(3)}
                                textSize={0}
                                strokeWidth={scale(6)}
                            />
                        </View>
                        <View
                            style={angerMeterStyle.angerLevelTextContainer}
                        >
                            <Text style={angerMeterStyle.angerLevelText}>
                                {parseInt((props.value / 359 * 10).toString())}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <Slider
                onValueChange={(value) => props.setValue(value * 359)}
                trackStyle={angerMeterStyle.sliderTrack}
                minimumTrackTintColor={COLORS.BLUE}
                thumbStyle={angerMeterStyle.thumbStyle}
                animateTransitions={true}
                thumbTintColor={COLORS.BLUE}
            />
        </View>
    )
}
type AngerProps = {
    selectedAngerLevel:number;
    setAngerLevel:(value:number) => void;
}
export const AngerLevel = (props:AngerProps) => {
    return (
        <View style={angerLevelStyle.fullWidth}>
            <Text style={angerLevelStyle.angerLevelText}>{ANGER_LEVEL[props.selectedAngerLevel].level}</Text>
            <View
                style={angerLevelStyle.levelContainer}
            >

                {
                    new Array(5).fill("").map((ite, index) => {
                        return (
                            <Pressable
                                key={index}
                                style={[angerLevelStyle.levels,{
                                    width: `${100 - (index * 20)}%`,
                                    backgroundColor: 5 - index <= props.selectedAngerLevel ? COLORS.WHITE : COLORS.MEDIUM_GREY,
                                }]}
                                onPress={() => props.setAngerLevel(5 - index ) }
                            />
                        )
                    })
                }
            </View>
        </View>
    )
}