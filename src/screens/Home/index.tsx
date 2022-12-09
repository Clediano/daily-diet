import { SectionList } from "react-native";
import { Plus } from 'phosphor-react-native';

import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Percent } from '@components/Percent';
import { MealItem } from "@components/MealItem";
import { DietStatus } from "@components/MealItem/styles";
import { LinearGradientColor } from "@components/LinearGradient";

import { Container, ContentPercent, SectionHeader, Title } from './styles';
import { useNavigation } from "@react-navigation/native";

export type MealItemProps = {
  title: string;
  hour: string;
  status: DietStatus;
}

const DATA = [
  {
    title: "12.08.22",
    data: [
      { title: 'X-tudo', hour: '20:00', status: 'OUT_OF_DIET' } as MealItemProps,
      { title: 'Whey protein com leite', hour: '16:00', status: 'WITHIN_THE_DIET' } as MealItemProps,
      { title: 'Salada cesar com frango grelhado', hour: '12:30', status: 'WITHIN_THE_DIET' } as MealItemProps,
      { title: 'Vitamina de banana com abacate', hour: '09:30', status: 'WITHIN_THE_DIET' } as MealItemProps,
      { title: 'Vitamina de banana com abacate', hour: '08:00', status: 'WITHIN_THE_DIET' } as MealItemProps,
    ]
  },
  {
    title: "11.08.22",
    data: [
      { title: 'Whey protein com leite', hour: '16:00', status: 'WITHIN_THE_DIET' } as MealItemProps,
      { title: 'Salada cesar com frango grelhado com muito molho', hour: '12:30', status: 'WITHIN_THE_DIET' } as MealItemProps,
      { title: 'Vitamina de banana com abacate', hour: '09:30', status: 'WITHIN_THE_DIET' } as MealItemProps,
      { title: 'Vitamina de banana com abacate', hour: '08:00', status: 'WITHIN_THE_DIET' } as MealItemProps,
    ]
  },
];

export function Home() {
  const navigation = useNavigation();

  function handleStatistic() {
    navigation.navigate('statistic');
  }

  function handleNewMeal() {
    navigation.navigate('new-meal');
  }

  function handleMeal() {
    navigation.navigate('meal');
  }

  return (
    <Container>
      <Header />

      <ContentPercent>
        <Percent
          title="90,86%"
          onPress={handleStatistic}
        />
      </ContentPercent>

      <Title>Refeições</Title>

      <Button
        title='Nova refeição'
        icon={<Plus />}
        onPress={handleNewMeal}
      />

      <SectionList
        showsVerticalScrollIndicator={false}
        sections={DATA}
        keyExtractor={(item, index) => item.title + index}
        renderItem={({ item }) => (
          <MealItem {...item} onPress={handleMeal} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <SectionHeader>{title}</SectionHeader>
        )}
      />

      <LinearGradientColor />
    </Container>
  );
}
