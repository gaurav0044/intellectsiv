import { StyleSheet } from "react-native";
import { COLORS } from "../colors/comman-colors";
import { scale } from "../fonts/size";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.DARKNAVY
    },
    containerWithPadding:{
        padding: scale(20),
    },
    whiteBgContainer: {
        height: '65%',
        width: '100%',
        position: "absolute",
        bottom: 0,
        backgroundColor: "white",
        borderTopLeftRadius: scale(15),
        borderTopRightRadius: scale(15),
        zIndex: -1
    },
    listContainer: {
        width: '100%',
        paddingVertical: scale(2),
        flexDirection: "row",
        marginVertical: scale(5)
    },
    listIcon: {
        height: scale(43),
        width: '100%',
        resizeMode: 'contain',
        marginTop: scale(2),
    },
    t_meterIcon: { height: scale(15), width: scale(15), resizeMode: "contain" },
    backArrow: {
        height: scale(25),
        width: scale(25),
        resizeMode: 'contain',
        tintColor: 'white',
    },
    spendingLimitTitle:{
        marginLeft:scale(15),
        color:COLORS.BLACK,
        fontSize:scale(14)
    },
    dollarBoxCustomStyle:{
        marginTop:'4%',
        width:'16%'
    },
    customSpendingLimitRowCon:{
        borderBottomWidth:0.2,
        borderBottomColor:'grey',
        paddingBottom:scale(10),
        alignItems:"flex-start"
    },
    width90: {
        width: "90%"
    },
    listConTitle: {
        fontSize: scale(15),
        color: COLORS.DARK_BLUE
    },
    listConDesc: {
        fontSize: scale(15),
        color: COLORS.LIGHT_GREY,
    },
    listTextContainer: {
        marginLeft: scale(6),
        width: '85%',
        justifyContent: "space-between",
        flexDirection: "row"
    },
    listSwitchCon: { position: "absolute", right: 2, top: scale(-5) },
    switchStyle: {
        transform: [{ scaleX: .8 }, { scaleY: .8 }]
    },
    fullWidth: {
        width: '100%',
    },
    flatListBottomPadding: {
        paddingBottom: scale(360)
    },
    debitCardContainer: {
        width: '100%',
        marginVertical: scale(15),
    },
    width15: {
        width: '15%'
    },
    fullWidthAlignEnd: {
        width: '100%',
        alignItems: 'flex-end'
    },
    availBalCheck: {
        fontSize: scale(13),
        color: COLORS.WHITE,
        marginTop: scale(15)
    },
    availBalanceCon: {
        flexDirection: 'row',
        width: scale(100),
        marginTop: '4%',
        alignItems: "center",
        justifyContent: "space-between"
    },
    alignCenter:{
        alignItems:"center"
    },
    dollarCon: {
        paddingVertical: scale(4),
        width: '35%',
        backgroundColor: '#01D167',
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dollarSign: {
        fontSize: scale(12),
        color: COLORS.WHITE,
        fontWeight: 'bold'
    },
    dollarText: {
        fontSize: scale(22),
        color: COLORS.WHITE,
        fontWeight: 'bold',
    },
    aspireLogo: {
        height: 25,
        width: 24,
        tintColor: '#01D167',
        resizeMode: 'contain',
        position: "absolute",
        right: '5%'
    },
    debitCardText: {
        color: COLORS.WHITE,
        fontSize: scale(24),
        fontWeight: 'bold',
        fontFamily: 'Avenir Next'
    },
    debitCardUserName: {
        fontSize: scale(20),
        color: COLORS.WHITE,
        marginVertical: scale(15),
        fontWeight: 'bold'
    },
    showCardNumberButtonContainer: {
        paddingVertical: scale(3),
        backgroundColor: 'white',
        borderRadius: scale(8),
        width: scale(160),
        position: 'absolute',
        top: scale(-30),
        right: scale(0.5),
        paddingTop: scale(4),
        height: scale(50)
    },
    showCardNumberButton: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    eyeIcon: {
        resizeMode: 'contain',
        height: scale(20),
        width: scale(20)
    },
    homeIcon: {
        height: scale(19),
        width: scale(19),
        resizeMode: 'contain'
    },
    visaIcon: {
        height: scale(30),
        width: scale(50),
        resizeMode: 'contain'
    },
    marginBottom10: {
        marginBottom: scale(10),
    },
    row: {
        flexDirection: "row",
        // width: '100%'
    },
    spendText: {
        fontSize: scale(12),
        color: COLORS.GREEN
    },
    customSpendingContainer:{
        flex: 1,
        justifyContent: "space-between"
    },
    submitButton:{
        width:"90%",
        alignSelf:"center",
        justifyContent:"center",
        alignItems:"center",
        padding:scale(10),
        backgroundColor:"#01D167",
        borderRadius:scale(100)
    },
    submitBtnText:{
        color:COLORS.WHITE,
        fontWeight:"bold",
        fontSize:scale(15)
    },
    loaderStyle:{
        position: "absolute",
        top: "55%",
        left: "50%"
    },
    spendingLimitInputBox:{
        color:COLORS.BLACK,
        fontWeight:'bold',
        fontSize:scale(22),
        width:'84%',
        marginTop:scale(10),
        padding:0,
        paddingLeft:scale(10)
    },
    spendLimitAddmoneyCon:{
        height:'10%',
        marginVertical:scale(15),
        justifyContent:"space-between"
    },
    addMoneyCon:{
        height: '100%',
        backgroundColor: "rgb(236,252,242)",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: scale(3),
        flexDirection: "row"
    },
    addMoneyButtonText:{
        color: '#01D167',
        fontSize: scale(14),
        fontWeight: "bold"
    },
    greyNoteText:{color:'grey',fontSize:scale(12)},
    debitProgressContainer: {
        width: "100%",
        height: scale(15),
        marginTop: scale(4),
        backgroundColor: 'rgb(225,250,238)',
        borderRadius: scale(20)
    },
    debitProgress: {
        width: '35%',
        height: scale(15),
        borderRadius: scale(20),
        backgroundColor: COLORS.GREEN
    },
    limitText: {
        fontSize: scale(12),
        color: "#DDDDDD"
    },
    showCardButtonText: {
        fontSize: scale(13),
        color: COLORS.GREEN,
        fontWeight: 'bold'
    },
    debitCard: {
        width: '100%',
        padding: scale(17),
        backgroundColor: '#01D167',
        borderRadius: scale(9)
    },
    aspireLogoTextContainer: {
        width: '100%',
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    apireText: {
        fontSize: scale(16),
        color:COLORS.WHITE,
        fontWeight: 'bold',
        marginBottom: scale(4),
        marginLeft: scale(3)
    },
    debitProgressTextContainer: {
        flexDirection: "row",
        width: '100%',
        justifyContent: "space-between",
    },
    debitCardSpeindingLimit: {
        fontSize: scale(12),
        color: COLORS.BLACK
    },
    tabText:{
        fontSize:scale(13),
        fontWeight:'bold'
    },
    tabIcon:{height:25,width:37,resizeMode:'contain',marginTop:5}
})