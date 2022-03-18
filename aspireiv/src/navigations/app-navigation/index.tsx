import * as React from 'react';
import {Image,Text} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DebitCardScreen from '../../scenes/debit-card';
import HomeScreen from '../../scenes/home';
import ProfileScreen from '../../scenes/profile';
import CreditScreen from '../../scenes/credit';
import PaymentScreen from '../../scenes/payment';
import SpendLimitScreen from '../../scenes/debit-card/spending-limit';
import { TabBarIcon, TabBarText } from '../../components/comman-component/atoms/tab-bar-text';
import { IMAGES } from '../../assets/images';
import { STACKS } from '../../utils/constants';
import { scale } from '../../assets/fonts/size';

// export type 
type DebitCardScreenStack = {
  DebitCardScreen:undefined
  SpendLimitScreenScreen:undefined,
}
type AppStack = {
  DebitCardScreen:DebitCardScreenStack,
  HomeScreen:undefined,
  PaymentScreen:undefined,
  ProfileScreen:undefined
}
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator<AppStack>();
function TabStack(){
  return(

        <Tab.Navigator
        screenOptions={{
          tabBarStyle:{
            minHeight:scale(60)
          },
          headerShown: false
        }}
        >
          {
            STACKS.map((item) => {
              <Tab.Screen options={{
                tabBarLabel:({focused}) => (
                  <TabBarText
                    text={item.label}
                    focused={focused}
                  />
                ),
                tabBarIcon:({focused}) => (
                  <TabBarIcon
                    focused={focused}
                    icon={item.icon}
                  />
                )
              }} name={item.name}
              component={item.screen} 
              />
            })
          }
        </Tab.Navigator>
  )
}
function App() {
    return (  
      <Stack.Navigator
        
      >
        <Stack.Screen
          name="Home"
          component={TabStack}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen
          name="SpendLimitScreen"
          component={SpendLimitScreen}
          options={{
            headerShown:false
          }}
        />
      </Stack.Navigator>
    );
  }
export default App;