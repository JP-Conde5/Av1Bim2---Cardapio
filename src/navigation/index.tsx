import { FoodNavigation} from "./food.navigation"
import { NavigationContainer } from '@react-navigation/native'

export function Navigation(){
    return(
        <NavigationContainer>
            <FoodNavigation/>
        </NavigationContainer>
    );
}