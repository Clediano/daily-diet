import { DietStatus } from "@components/MealItem/styles";
import { MealStorageDTO } from "@storage/meals/MealStorageDTO";
import format from 'date-fns/format';
import { groupBy } from "./groupBy";

type DataView = {
    title: string;
    data: {
        id: string;
        name: string;
        hour: string;
        status: DietStatus;
    }[]
}

export function convertToView(meals: MealStorageDTO[]) {
    const response: DataView[] = [];
    const groupedMeals = groupBy(meals, "title");

    const keys = Object.keys(groupedMeals);

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const details = groupedMeals[key] as MealStorageDTO[];

        response.push({
            title: key,
            data: details.map(detail => {
                return {
                    id: detail.id,
                    name: detail.name,
                    hour: format(new Date(detail.hour), "hh:mm"),
                    status: detail.status,
                }
            })
        })
        
    }
    return response;
}
