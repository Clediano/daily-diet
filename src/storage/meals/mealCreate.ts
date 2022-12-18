import AsyncStorage from '@react-native-async-storage/async-storage';
import format from 'date-fns/format';

import { MEAL_COLLECTION } from '@storage/storageConfig';
import { UID } from '@utils/uid';

import { statisticNewSequence } from '@storage/statistic/statisticNewSequence';
import { mealGetAll } from './mealGetAll';
import { MealStorageDTO } from './MealStorageDTO';

type NewMeal = Omit<MealStorageDTO, "id" | "title"> & {
    id?: string;
    title?: string;
}

export async function mealCreate(newMeal: NewMeal, _id?: string) {
    try {
        const id = _id ?? UID();
        const title = format(newMeal.day, "dd.MM.yyyy");

        const storedMeals = await mealGetAll();

        let meals = [] as MealStorageDTO[];
        if(_id) {
            meals = storedMeals.map(meal => {
                if(meal.id === id) {
                    return { ...newMeal, id, title };
                }
                return meal;
            })
        } else {
            meals = [...storedMeals, { ...newMeal, id, title }]
        }

        await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(meals))
        await statisticNewSequence();
    } catch (error) {
        throw error;
    }
}