import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feedback } from '@screens/Feedback';

import { Home } from '@screens/Home';
import { Meal } from '@screens/Meal';
import { NewMeal } from '@screens/NewMeal';
import { Statistic } from '@screens/Statistic';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRouter() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="home" component={Home} />
            <Screen name="statistic" component={Statistic} />
            <Screen name="new-meal" component={NewMeal} />
            <Screen name="feedback" component={Feedback} />
            <Screen name="meal" component={Meal} />
        </Navigator>
    );
}