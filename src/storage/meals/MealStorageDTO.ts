import { DietStatus } from "@components/MealItem/styles";

export interface MealStorageDTO {
    id: string;
    title: string;
    name: string;
    description: string;
    day: Date;
    hour: Date;
    status: DietStatus;
}
