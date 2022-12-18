export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            statistic: undefined;
            'new-meal': {
                mealId?: string;
            };
            feedback: undefined;
            meal: {
                mealId: string;
            };
        }
    }
}