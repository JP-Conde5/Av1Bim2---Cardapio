import {createBottomTabNavigator, BottomTabNavigationProp} from '@react-navigation/bottom-tabs'
import {ScreenListFood, ScreenCadFood} from '../screens'
import { Entypo } from '@expo/vector-icons'
import { colors } from '../style/colors' 
type FoodTabParam = {
    Cardápio: undefined
    Cadastrar: undefined
}
type FoodScreenNavigationProp = BottomTabNavigationProp<FoodTabParam,'Cardápio'>
export type FoodTypes ={
    navigation: FoodScreenNavigationProp
}
export function FoodNavigation(){
    const Tab = createBottomTabNavigator<FoodTabParam>() 
    return(
        <Tab.Navigator screenOptions={{
            tabBarActiveBackgroundColor: colors.primary,
            tabBarInactiveBackgroundColor: colors.secondary,
            tabBarActiveTintColor: colors.white,
            tabBarInactiveTintColor: colors.white,
            headerTintColor: colors.white,
            headerStyle: {backgroundColor: colors.primary},
        }}>
            <Tab.Screen options={{
                tabBarIcon: ()=>(
                    <Entypo size={20} color={colors.white} name="cake" />
                )
            }} name='Cardápio' component={ScreenListFood}/>
            <Tab.Screen options={{
                tabBarIcon: ()=>(
                    <Entypo size={20} color={colors.white} name="book" />
                )
            }} name='Cadastrar' component={ScreenCadFood}/>
        </Tab.Navigator>
    )
}