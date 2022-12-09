import { useNavigation } from '@react-navigation/native';
import { Trash, PencilLine } from 'phosphor-react-native';

import { Button } from '@components/Button';
import { Header } from "@components/Header";

import {
    Container,
    ContentBody,
    ContentFooter,
    ContentHeader,
    Description,
    Label,
    Title
} from "./styles";
import { Chip } from '@components/Chip';


export function Meal() {
    const navigation = useNavigation();

    function handleBackButton() {
        navigation.navigate("home");
    }

    function handleEditMeal() {
        navigation.navigate("home");
    }

    function handleDeleteMeal() {
        navigation.navigate("new-meal");
    }

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
                <Title>Sanduíche</Title>
                <Description>
                    Sanduíche de pão integral com atum e salada de alface e tomate
                </Description>

                <Label>Data e hora</Label>
                <Description>12/08/2022 às 16:00</Description>

                <Chip status="WITHIN_THE_DIET" />
            </ContentBody>
            <ContentFooter>
                <Button
                    title="Editar refeição"
                    icon={<PencilLine />}
                    style={{ marginBottom: 10 }}
                    onPress={handleEditMeal}
                />
                <Button
                    title="Excluir refeição"
                    icon={<Trash />}
                    type="OUTLINE"
                    onPress={handleDeleteMeal}
                />
            </ContentFooter>
        </Container>
    );
}