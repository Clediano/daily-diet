import AsyncStorage from '@react-native-async-storage/async-storage';

import { BEST_RECORD } from '@storage/storageConfig';



export async function statisticNewSequence(): Promise<void> {
    try {
        const bestRecord = Number(await AsyncStorage.getItem(BEST_RECORD) ?? 0);
        await AsyncStorage.setItem(BEST_RECORD, String(bestRecord + 1));
    } catch (error) {
        throw error;
    }
}