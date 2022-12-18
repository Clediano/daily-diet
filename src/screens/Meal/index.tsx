import { Alert } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import { PencilLine, Trash } from 'phosphor-react-native';

import { Button } from '@components/Button';
import { Chip } from '@components/Chip';
import { Header } from '@components/Header';

import { Loading } from '@components/Loading';
import { DietStatus } from '@components/MealItem/styles';
import { mealDelete } from '@storage/meals/mealDelete';
import { mealGetOne } from '@storage/meals/mealGetOne';
import format from 'date-fns/format';
import { useEffect, useState } from 'react';
import {
    Container,
    ContentBody,
    ContentFooter,
    ContentHeader,
    Description,
    Label,
    Title
} from "./styles";

type RouteParams = {
    mealId: string;
}

export type Meal = {
    id: string;
    title: string;
    description: string;
    date: Date;
    time: Date;
    status: DietStatus;
}

export function Meal() {
    const [loading, setLoading] = useState(true);
    const [meal, setMeal] = useState<Meal>();
    const navigation = useNavigation();

    const route = useRoute();
    const { mealId } = route.params as RouteParams;

    function handleBackButton() {
        navigation.navigate("home");
    }

    function handleEditMeal() {
        navigation.navigate("new-meal", { mealId });
    }

    function handleDeleteMeal() {
        Alert.alert("Refeições", "Deseja realmente excluir o registro da refeição?", [
            {
                text: "Cancelar",
                style: "cancel"
            },
            {
                onPress: () => deleteMeal(),
                text: "Sim, excluir",
                style: "destructive"
            },
        ]);
    }

    async function deleteMeal() {
        try {
            await mealDelete(mealId);
        } catch (error) {
            console.error(error);
            Alert.alert("Refeições", "Houve um erro ao deletar esta refeição.");
        } finally {
            navigation.navigate("home");
        }
    }

    async function loadMeal() {
        try {
            const storedMeal = await mealGetOne(mealId);

            if (!storedMeal) {
                throw new Error("Refeição não encontrada na lsita de refeições.");
            }

            const meal = {
                id: storedMeal.id,
                title: storedMeal.name,
                description: storedMeal.description,
                date: new Date(storedMeal.day),
                time: new Date(storedMeal.hour),
                status: storedMeal.status
            };

            setMeal(meal);
        } catch (error) {
            console.error(error);
            Alert.alert("Refeições", "Houve um erro ao carregar a refeição.");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadMeal();
    }, []);

    return (
        <Container>
            <ContentHeader>
                <Header
                    title="Refeição"
                    showBackButton
                    onPressBackButton={handleBackButton}
                />
            </ContentHeader>
            <ContentBody>
                {loading ? <Loading /> : (
                    <>
                        <Title>{meal?.title}</Title>
                        <Description>{meal?.description || 'Nenhuma descrição adicionada'}</Description>

                        <Label>Data e hora</Label>
                        <Description>{format(meal!.date, "dd/MM/yyyy")} às {format(meal!.time, "hh:mm")}</Description>

                        <Chip status={meal?.status ?? 'WITHIN_THE_DIET'} />
                    </>
                )}
            </ContentBody>
            <ContentFooter>
                <Button
                    title="Editar refeição"
                    icon={<PencilLine />}
                    style={{ marginBottom: 10 }}
                    disabled={!meal}
                    onPress={handleEditMeal}
                />
                <Button
                    title="Excluir refeição"
                    icon={<Trash />}
                    type="OUTLINE"
                    disabled={!meal}
                    onPress={handleDeleteMeal}
                />
            </ContentFooter>
        </Container>
    );
}