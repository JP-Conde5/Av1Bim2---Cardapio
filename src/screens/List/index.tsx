import { View, Text, FlatList } from "react-native";
import { globalStyles } from "../../style/globalStyle";
import { FoodTypes } from "../../navigation/food.navigation"
import { useEffect, useState } from "react";
import { apiFood } from "../../services/data";
import { IResponseFood } from "../../services/data/cardapio";
import { styles } from "./style";

export function ListFood({navigation}:FoodTypes){
    const [food, setFood] = useState<IResponseFood[]>([])
    useEffect(() => {
        async function loadFood(){
            const response = await apiFood.index()
            setFood(response.data)
        }
        navigation.addListener("focus", () => loadFood())
    }, [])
    interface itemFood{
        item: IResponseFood
    }
    const renderItem = (({item}:itemFood) => {
        return(
            <View style={styles.item}>
                <Text style={styles.prato}>Prato: {item.prato}</Text>
                <Text style={styles.item}>Ingredientes: {item.ingredientes}</Text>
            </View>
        )
    })
    return(
        <>
            <View style={globalStyles.container}>
                <Text style={styles.title}>Pratos</Text>
                <View>
                {
                    food.length > 0 && (
                        <FlatList
                            data={food}
                            renderItem={renderItem}
                            keyExtractor={(item)=>String(item.id)}
                        />
                    )
                }
                </View>
            </View>
        </>
    )
}