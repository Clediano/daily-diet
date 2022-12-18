import AsyncStorage from '@react-native-async-storage/async-storage';

import { mealGetAll } from '@storage/meals/mealGetAll';
import { BEST_RECORD } from '@storage/storageConfig';

export interface Statistics {
    percent: number;
    bestSequence: number;
    registredMeals: number;
    inDiet: number;
    outDiet: number;
}

export async function statisticLoad(): Promise<Statistics> {
    try {
        const storedMeals = await mealGetAll();
        const bestRecord = await AsyncStorage.getItem(BEST_RECORD);

        const bestSequence = Number(bestRecord) ?? 0;
        const registredMeals = storedMeals.length;
        const inDiet = storedMeals.filter(item => item.status === "WITHIN_THE_DIET").length;
        const outDiet = storedMeals.filter(item => item.status === "OUT_OF_DIET").length;
        const percent = await calculatePercentMeals(inDiet, registredMeals);

        return {
            percent,
            bestSequence,
            registredMeals,
            inDiet,
            outDiet,
        }
    } catch (error) {
        throw error;
    }
}


async function calculatePercentMeals(inDiet: number, registredMeals: number) {
    return (inDiet / registredMeals) * 100;
}