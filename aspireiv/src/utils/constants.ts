import React from 'react'
import {  Platform} from "react-native";
import HomeScreen from '../scenes/home';
import { IMAGES } from "../assets/images";
import DebitCardScreen from '../scenes/debit-card';
import PaymentScreen from '../scenes/payment';
import CreditScreen from '../scenes/credit';
import ProfileScreen from '../scenes/profile';

export const DEBIT_CARD_OPTION_LIST = [
    {
        title:'Top-up account',
        description:"Deposite money to your account to use with card",
        icons:IMAGES.METER
    },
    {
        title:'Weekly spending limit',
        description:"Your weekly spending limit is $5000",
        icons:IMAGES.METER
    },
    {
        title:'Freeze Card',
        description:"Your weekly spending limit is $5000",
        icons:IMAGES.METER
    },
    {
        title:'Get a new card',
        description:"This deactivates your current debit card",
        icons:IMAGES.METER
    },
    {
        title:'Deactivated cards',
        description:"Your previously deactivated cards",
        icons:IMAGES.METER
    }
]

export const SET_WEEKLY_DEBIT_CARD_SPENDING_LIMIT = 'Set a weekly debit cart spending limit';
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
    },
    {
        icon:IMAGES.PAY,
        label:"Debit Card",
        screen:DebitCardScreen,
        name:"DebitCardScreen"
    },
    {
        icon:IMAGES.HOME,
        label:"Payments",
        screen:PaymentScreen,
        name:"PaymentScreen"
    },
    {
        icon:IMAGES.PAY,
        label:"Credit",
        screen:CreditScreen,
        name:"CreditScreen"
    },
    {
        icon:IMAGES.HOME,
        label:"Profile",
        screen:ProfileScreen,
        name:"ProfileScreen"
    },

]