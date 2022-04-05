import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import { COLORS } from "..//assets/colors/comman-colors";
import { scale } from "../assets/fonts/size";
import { angerLevelStyle } from "../assets/styles/anger-level-style";
import {  useDispatch,useSelector } from "react-redux";
import { getAngers } from "../redux/actions/index";
import {  get } from "lodash";



export const AngerRsult = (props) => {
    const result :any = useSelector((state) => state)
    console.log(result)
    // const {appData:{action:{data:{data:{anger:{angerLevel,angerMeter}}}}}} = result;
    
    const angerLevel = get(result,"appData.action.data.data.anger.angerLevel","");
    const angerMeter = get(result,"appData.action.data.data.anger.angerMeter","");

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAngers());
    },[props])

    return(
        <View style={[angerLevelStyle.fullWidth,]}>
            <View
                style={{
                   
                    justifyContent:"center",
                    alignItems:"center",
                   
                }}
            >
                <Text
                    style={{
                        marginTop:"30%",
                        fontSize:scale(30),
                        fontWeight:"bold",
                        textAlign:"center",
                        color:COLORS.WHITE
                    }}
                >
YOUR ANGER & FRUSTRATION IS ABOUT {'\n'}
{Number.parseInt(angerMeter)} - {angerLevel}
                </Text>
            </View>
        </View>
    )
}

const mapStateToProps = (state) => ({
    state
  });
  
  export default connect(
    mapStateToProps,
    {  }
  )(AngerRsult);