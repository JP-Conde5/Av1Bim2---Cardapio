import { StyleSheet } from "react-native";
import { colors } from "../../style/colors";

export const styles = StyleSheet.create({
    title:{
        fontSize: 30,
        fontWeight: '900',
        marginBottom: 20,
    },
    spaceWrite:{
        flexDirection: 'row',
        alignItems: 'center',
        width: 200,
        margin: 10,
    },
    write:{
        margin: 10,
        width: 200,
    },
    buttons:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: 200,
    },
    confirm:{
        backgroundColor: colors.primary,
        borderWidth: 10,
        borderColor: colors.primary,
        borderRadius: 20,
    },
    cancel:{
        backgroundColor: colors.secondary,
        borderWidth: 10,
        borderColor: colors.secondary,
        borderRadius: 20,
    }
})