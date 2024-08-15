import { View, Text, Alert, KeyboardAvoidingView, TextInput, TouchableOpacity } from "react-native";
import {globalStyles} from "../../style/globalStyle"
import { FoodTypes } from "../../navigation/food.navigation";
import React, { useEffect, useState } from "react";
import { IFood } from "../../services/data/cardapio";
import { apiFood } from "../../services/data";
import { AxiosError } from "axios";
import { Entypo } from '@expo/vector-icons'
import { colors } from "../../style/colors";
import { styles } from "./style";

export function CadFood({navigation}:FoodTypes){
    const [data, setData] = useState<IFood>({})
    function handleChange(itemFood:IFood){
        setData({...data, ...itemFood})
    }
    async function handleCadFood(){
        if(data?.prato && data.ingredientes){
            try{
                await apiFood.store(data)
                Alert.alert("Prato cadastrado!!!")
                navigation.navigate('Cardápio')
            } catch(error){
                const err = error as AxiosError
                const msg = err.response?.data as string
                Alert.alert(msg)
            }
        } else{
            Alert.alert("Preencha todos os campos!!!")
        }
    }
    return(
        <>
            <KeyboardAvoidingView style={globalStyles.container}>
                <Text style={styles.title}>Cadastrar Prato</Text>
                    <View>
                        <View style={styles.spaceWrite}>
                            <Entypo size={20} color={colors.secondary} name='flower'/>
                            <TextInput
                                 style={styles.write}
                                placeholder="Prato"
                                onChangeText={(letter) => handleChange({prato:letter})}>
                            </TextInput>
                        </View>
                        <View style={styles.spaceWrite}>
                            <Entypo size={20} color={colors.secondary} name='flower'/>
                            <TextInput
                                style={styles.write}
                                multiline={true}
                                numberOfLines={4}
                                placeholder="Ingredientes"
                                onChangeText={(letter) => handleChange({ingredientes:letter})}>
                            </TextInput>
                        </View>
                    </View>
                    <View style={styles.buttons}>
                        <TouchableOpacity style={styles.confirm} onPress={handleCadFood}><Text>Confirmar</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.cancel} onPress={() => navigation.navigate('Cardápio')}><Text>Cancelar</Text></TouchableOpacity>
                    </View>
            </KeyboardAvoidingView>
        </>
    )
}