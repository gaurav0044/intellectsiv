import { Alert } from "react-native";
import { AlertBoxProps } from "../../../types/comman-components-types";
export const AlertBox = (props:AlertBoxProps) => {
    Alert.alert(
        props.title,
        props.description,
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
}