import { Card } from "@components/Card";
import { Header } from "@components/Header";
import { Loading } from "@components/Loading";
import { DietStatus } from "@components/MealItem/styles";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { statisticLoad } from "@storage/statistic/statisticLoad";
import { useCallback, useState } from "react";
import { Alert } from "react-native";
import { useTheme } from "styled-components/native";

import {
    BodyTitle, Container,
    ContentBody, ContentCardBody, ContentHeader, HeaderTitle, Subtitle, WrapCard,
    WrapContentCardBody
} from "./styles";

type StatisticProps = {
    status?: DietStatus;
    percent: number;
    bestSequence: number;
    registredMeals: number;
    inDiet: number;
    outDiet: number;
}

export function Statistic({ status = 'WITHIN_THE_DIET' }: StatisticProps) {
    const navigation = useNavigation();
    const theme = useTheme();

    const [isLoading, setIsLoading] = useState(true);
    const [percent, setPercent] = useState<string>("");
    const [bestSequence, setBestSequence] = useState<string>("");
    const [registredMeals, setRegistredMeals] = useState<string>("");
    const [inDiet, setInDiet] = useState<string>("");
    const [outDiet, setOutDiet] = useState<string>("");

    function handleBackButton() {
        navigation.navigate("home");
    }


    async function loadStatistic() {
        try {
            const statistics = await statisticLoad();

            setPercent(Number(statistics.percent).toPrecision(4).concat("%"));
            setBestSequence(String(statistics.bestSequence || "0"));
            setRegistredMeals(String(statistics.registredMeals || "0"));
            setInDiet(String(statistics.inDiet || "0"));
            setOutDiet(String(statistics.outDiet || "0"));
        } catch (error) {
            console.error(error);
            Alert.alert("Statistics", "Houve um erro ao carregar as estatísticas.");
        } finally {
            setIsLoading(false);
        }
    }

    useFocusEffect(
        useCallback(() => {
            loadStatistic();
        }, [])
    );


    return (
        <Container status={status}>
            {isLoading ? <Loading /> : (
                <>
                    <ContentHeader>
                        <Header
                            backButtonColor={theme.COLORS.GREEN_DARK}
                            showBackButton
                            onPressBackButton={handleBackButton}
                        />
                        <HeaderTitle>{percent}</HeaderTitle>
                        <Subtitle>das refeições dentro da dieta</Subtitle>
                    </ContentHeader>
                    <ContentBody>
                        <BodyTitle>Estatísticas gerais</BodyTitle>

                        <WrapCard>
                            <Card
                                title={bestSequence}
                                subtitle="melhor sequência de pratos dentro da dieta"
                            />
                        </WrapCard>
                        <WrapCard>
                            <Card
                                title={registredMeals}
                                subtitle="refeições registradas"
                            />
                        </WrapCard>
                        <ContentCardBody>
                            <WrapContentCardBody>
                                <Card
                                    type="SUCCESS"
                                    title={inDiet}
                                    subtitle="refeições dentro da dieta"
                                />
                            </WrapContentCardBody>
                            <WrapContentCardBody>
                                <Card
                                    type="FAILURE"
                                    title={outDiet}
                                    subtitle="refeições fora da dieta"
                                />
                            </WrapContentCardBody>
                        </ContentCardBody>
                    </ContentBody>
                </>
            )}
        </Container>
    );
}