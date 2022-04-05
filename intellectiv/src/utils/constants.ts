import React from 'react'
import {  Platform} from "react-native";
import HomeScreen from '../scenes/home';
import { IMAGES } from "../assets/images";
import ProfileScreen from '../scenes/profile';


export const DEBIT_CARD = "Debit card";
export const DEBIT_SPENDING_LIMIT='Debit card spending limit';
export const SPENDING_LIMIT="Spending limit";
export const SPENDING_LIMIT_NOTE ='Here weekly means the last 7 days - not the calendar week';
export const DECIMAL_PAD='decimal-pad';
export const SPEND_LIMIT_OPTIONS = ['5000','10000','20000'];
export const BASE_URL = `http://${Platform.OS==="ios"?'localhost':'10.0.2.2'}:3000/`;

export const STACKS = [
    {
        icon:IMAGES.HOME,
        label:"Home",
        screen:HomeScreen,
        name:"HomeScreen"
    }
]

export const ANGER_LEVEL = {
    0:{
        level:""
    },
    1:{
      level:"Low"
    },
    2:{
      level:"Somewhat"
    },
    3:{
        level:"Moderate"
    },
    4:{
        level:"High"
    },
    5:{
        level:"Extreme"
    }
}

export const STATUS_MODAL_ANIMATION_TYPE = "slide";
export const RESCUE_SESSION = "RESCUE SESSION";
export const ANGER_AND_FRUSTRATION = "ANGER AND FRUSTRATION";
export const ANGER_LEVEL_NOTE = "Pick the level your anger & frustration right now";
export const NEXT = "Next";
export const FINISH = "Close";