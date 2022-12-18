import AsyncStorage from '@react-native-async-storage/async-storage';

import { MEAL_COLLECTION } from '@storage/storageConfig';

import { MealStorageDTO } from './MealStorageDTO';

export async function mealGetOne(mealId: string) {
    try {

        const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

        const meals: MealStorageDTO[] = storage ? JSON.parse(storage) : [];

        return meals.find(meal => meal.id === mealId);
    } catch (error) {
        throw error;
    }
}
