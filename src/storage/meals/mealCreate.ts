import format from 'date-fns/format';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { UID } from '@utils/uid';
import { MEAL_COLLECTION } from '@storage/storageConfig';

import { MealStorageDTO } from './MealStorageDTO';
import { mealGetAll } from './mealGetAll';

type NewMeal = Omit<MealStorageDTO, "id" | "title"> & {
    id?: string;
    title?: string;
}

export async function mealCreate(newMeal: NewMeal) {
    try {
        const id = UID();
        const title = format(newMeal.day, "dd.MM.yyyy");

        const meals = await mealGetAll();

        await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify([...meals, { ...newMeal, id, title }]))
    } catch (error) {
        throw error;
    }
}