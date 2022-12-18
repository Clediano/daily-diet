import { useCallback, useState } from 'react';
import { Alert, View } from 'react-native';

import { Button } from '@components/Button';
import { CheckButton } from '@components/CheckButton';
import { Header } from "@components/Header";
import { DietStatus } from '@components/MealItem/styles';
import { TextInput } from "@components/TextInput";

import {
    Container,
    ContentBody,
    ContentFooter,
    ContentHeader,
    InlineInputContent,
    InputContent,
    Label
} from "./styles";

import { Loading } from '@components/Loading';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import { mealCreate } from '@storage/meals/mealCreate';
import { mealGetOne } from '@storage/meals/mealGetOne';
import format from 'date-fns/format';

type RouteParams = {
    mealId?: string;
}

export function NewMeal() {
    const navigation = useNavigation();
    const route = useRoute();

    const [date, setDate] = useState<Date>(new Date());
    const [time, setTime] = useState<Date>(new Date());
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [checkedStatusDiet, setCheckedStatusDiet] = useState<DietStatus>("WITHIN_THE_DIET");

    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);

    const [loading, setLoading] = useState(true);

    const { mealId } = route.params as RouteParams;

    function handleChangeDate(event: DateTimePickerEvent, selectedDate?: Date) {
        setShowDatePicker(false);
        setDate(selectedDate || new Date());
    };

    function handleChangeTime(event: DateTimePickerEvent, selectedDate?: Date) {
        setShowTimePicker(false);
        setTime(selectedDate || new Date());
    };

    function handlePressBackButton() {
        navigation.navigate("home");
    };

    async function handleSaveMeal() {
        try {
            await mealCreate({
                name: name,
                description: description,
                day: date,
                hour: time,
                status: checkedStatusDiet
            }, mealId);
            handlePressBackButton();
        } catch (error) {
            console.error(error);
            Alert.alert("Nova refeição", "Houve um erro ao adicionar uma nova refeição.");
        }
    }

    async function loadMeal(mealId: string) {
        try {
            const storedMeal = await mealGetOne(mealId);

            if (!storedMeal) {
                throw new Error("Refeição não encontrada na lista de refeições.");
            }

            setDate(new Date(storedMeal.day))
            setName(storedMeal.name)
            setTime(new Date(storedMeal.hour))
            setDescription(storedMeal.description)
            setCheckedStatusDiet(storedMeal.status)
        } catch (error) {
            console.error(error);
            Alert.alert("Refeições", "Houve um erro ao carregar a refeição.");
        } finally {
            setLoading(false);
        }
    }

    useFocusEffect(
        useCallback(() => {
            if (mealId) {
                loadMeal(mealId);
            } else {
                setLoading(false);
            }
        }, [])
    );


    return (
        <Container>
            {loading ? <Loading /> :
                <>
                    <ContentHeader>
                        <Header
                            title="Nova refeição"
                            showBackButton
                            onPressBackButton={handlePressBackButton} />
                    </ContentHeader><ContentBody>
                        <InputContent>
                            <TextInput
                                label="Nome"
                                value={name}
                                onChangeText={setName} />
                        </InputContent>
                        <InputContent>
                            <TextInput
                                multiline
                                numberOfLines={5}
                                label="Descrição"
                                value={description}
                                onChangeText={setDescription} />
                        </InputContent>
                        <InlineInputContent>
                            <View style={{ flex: 1, marginRight: 10 }}>
                                <TextInput
                                    label="Data"
                                    placeholder="dd/MM/aaaa"
                                    value={format(date, 'dd/MM/yyyy')}
                                    onPressOut={() => setShowDatePicker(true)}
                                    showSoftInputOnFocus={false} />
                                {showDatePicker && <DateTimePicker
                                    value={date}
                                    onChange={handleChangeDate}
                                    maximumDate={new Date()} />}
                            </View>
                            <View style={{ flex: 1, marginLeft: 10 }}>
                                <TextInput
                                    label="Hora"
                                    placeholder="hh:mm"
                                    value={format(time, 'hh:mm')}
                                    onPressOut={() => setShowTimePicker(true)}
                                    showSoftInputOnFocus={false} />
                                {showTimePicker && <DateTimePicker
                                    value={time}
                                    onChange={handleChangeTime}
                                    mode="time" />}
                            </View>
                        </InlineInputContent>

                        <View style={{ marginBottom: 24 }}>
                            <Label>Está dentro da dieta?</Label>
                            <InlineInputContent>
                                <View style={{ flex: 1, marginRight: 4 }}>
                                    <CheckButton
                                        onPress={() => setCheckedStatusDiet("WITHIN_THE_DIET")}
                                        checked={checkedStatusDiet === "WITHIN_THE_DIET"}
                                        status="WITHIN_THE_DIET" />
                                </View>
                                <View style={{ flex: 1, marginLeft: 4 }}>
                                    <CheckButton
                                        onPress={() => setCheckedStatusDiet("OUT_OF_DIET")}
                                        checked={checkedStatusDiet === "OUT_OF_DIET"}
                                        status="OUT_OF_DIET" />
                                </View>
                            </InlineInputContent>
                        </View>
                    </ContentBody><ContentFooter>
                        <Button
                            title={mealId ? "Salvar alterações" : "Cadastrar refeição"}
                            onPress={handleSaveMeal} />
                    </ContentFooter>
                </>
            }
        </Container>
    );
}