import { StyleSheet } from "react-native";
import { COLORS } from "../colors/comman-colors";
import { scale } from "../fonts/size";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.DARKNAVY
    },
    containerWithPadding: {
        padding: scale(20),
    },
    tabText: {
        fontSize: scale(13),
        fontWeight: 'bold'
    },
    tabIcon: { height: scale(25), width: scale(37), resizeMode: 'contain', marginTop: scale(5) },
    bottomBtnCon: {
        width: "80%",
        backgroundColor: "white",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        borderRadius: scale(100),
        paddingVertical: scale(10),
        position: "absolute",
        bottom: scale(30)
    },
    bottomBtnTxt: {
        fontSize: scale(20),
        color: '#222222',
        fontWeight: "bold"
    },
    statusLineContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    statusLines: {
        height: scale(4),
        width: '28%',
        borderRadius: scale(2)
    }
})