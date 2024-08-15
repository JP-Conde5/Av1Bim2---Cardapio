import { StyleSheet } from "react-native";
import { colors } from "../../style/colors";

export const styles = StyleSheet.create({
    title:{
        fontSize: 30,
        fontWeight: '900',
        marginTop: 40,
    },
    item:{
        backgroundColor: colors.secondary,
        borderWidth: 20,
        borderColor: colors.secondary,
        borderRadius: 10,
        margin: 20,
        flexDirection: 'column',
        textAlign: 'justify',
    },
    prato:{
      fontSize: 18,
      fontWeight: '600'  
    },
    ingredientes:{
        fontSize: 12,
        fontWeight: '200'
    }
})