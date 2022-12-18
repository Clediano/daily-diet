import AsyncStorage from '@react-native-async-storage/async-storage';

import { MEAL_COLLECTION } from '@storage/storageConfig';

import { mealGetAll } from './mealGetAll';

export async function mealDelete(id: string) {
    try {

        const storedMeals = await mealGetAll();

        const meals = storedMeals.filter(meal => meal.id !== id);

        await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(meals))
    } catch (error) {
        throw error;
    }
}