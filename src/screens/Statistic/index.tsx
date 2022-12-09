import { Card } from "@components/Card";
import { Header } from "@components/Header";
import { DietStatus } from "@components/MealItem/styles";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";

import {
    Container,
    ContentBody,
    ContentHeader,
    Subtitle,
    HeaderTitle,
    BodyTitle,
    ContentCardBody,
    WrapCard,
    WrapContentCardBody
} from "./styles";

type StatisticProps = {
    status?: DietStatus;
}

export function Statistic({ status = 'WITHIN_THE_DIET' }: StatisticProps) {
    const navigation = useNavigation();
    const theme = useTheme();

    function handleBackButton() {
        navigation.navigate("home");
    }

    return (
        <Container status={status}>
            <ContentHeader>
                <Header
                    backButtonColor={theme.COLORS.GREEN_DARK}
                    showBackButton
                    onPressBackButton={handleBackButton}
                />
                <HeaderTitle>90,86%</HeaderTitle>
                <Subtitle>das refeições dentro da dieta</Subtitle>
            </ContentHeader>
            <ContentBody>
                <BodyTitle>Estatísticas gerais</BodyTitle>

                <WrapCard>
                    <Card
                        title="22"
                        subtitle="melhor sequência de pratos dentro da dieta"
                    />
                </WrapCard>
                <WrapCard>
                    <Card
                        title="109"
                        subtitle="refeições registradas"
                    />
                </WrapCard>
                <ContentCardBody>
                    <WrapContentCardBody>
                        <Card
                            type="SUCCESS"
                            title="99"
                            subtitle="refeições dentro da dieta"
                        />
                    </WrapContentCardBody>
                    <WrapContentCardBody>
                        <Card
                            type="FAILURE"
                            title="10"
                            subtitle="refeições fora da dieta"
                        />
                    </WrapContentCardBody>
                </ContentCardBody>
            </ContentBody>
        </Container>
    );
}