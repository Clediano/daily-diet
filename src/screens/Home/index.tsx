import { Plus } from 'phosphor-react-native';
import { useCallback, useState } from "react";
import { Alert, SectionList } from "react-native";

import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { MealItem } from "@components/MealItem";
import { DietStatus } from "@components/MealItem/styles";
import { Percent } from '@components/Percent';

import { LinearGradientColor } from '@components/LinearGradient';
import { ListEmpty } from "@components/ListEmpty";
import { Loading } from "@components/Loading";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { mealGetAll } from "@storage/meals/mealGetAll";
import { convertToView } from "@utils/convertToView";
import { Container, ContentPercent, SectionHeader, Title } from './styles';


type Meals = {
  title: string;
  data: {
    id: string;
    name: string;
    hour: string;
    status: DietStatus;
  }[]
}

export function Home() {
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(true);
  const [meals, setMeals] = useState<Meals[]>([]);
  const [percent, setPercent] = useState<number>(0);

  function handleStatistic() {
    navigation.navigate('statistic');
  }

  function handleNewMeal() {
    navigation.navigate('new-meal', {});
  }

  function handleMeal(mealId: string) {
    navigation.navigate('meal', { mealId });
  }

  async function fetchMeals() {
    try {
      setIsLoading(true);
      const meals = await mealGetAll();

      const response = convertToView(meals);
      setMeals(response);
    } catch (error) {
      console.error(error);
      Alert.alert("Refeições", "Houve um erro ao carregar as refeições.");
    } finally {
      setIsLoading(false);
    }
  }

  async function calculatePercentMeals() {
    try {
      setIsLoading(true);
      const meals = await mealGetAll();

      const withinTheDietMeals = meals.filter(meal => meal.status === "WITHIN_THE_DIET").length;

      const percent = (withinTheDietMeals / meals.length) * 100;
      setPercent(percent);
    } catch(error) {
      console.error(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
      calculatePercentMeals();
    }, [])
  );

  return (
    <Container>
      <Header />

      <ContentPercent>
        <Percent
          percent={percent}
          onPress={handleStatistic}
        />
      </ContentPercent>

      <Title>Refeições</Title>

      <Button
        title='Nova refeição'
        icon={<Plus />}
        onPress={handleNewMeal}
      />

      {isLoading ? <Loading /> : <SectionList
        showsVerticalScrollIndicator={false}
        sections={meals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealItem {...item} onPress={() => handleMeal(item.id)} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <SectionHeader>{title}</SectionHeader>
        )}
        ListEmptyComponent={
          <ListEmpty message='Que tal cadastrar a primeira refeição?' />
        }
        contentContainerStyle={[
          { paddingBottom:  160},
          meals.length === 0 && { flex: 1 }
      ]}
      />}
      <LinearGradientColor />
    </Container>
  );
}
