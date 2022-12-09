import { useState } from 'react';
import { View } from 'react-native';

import { Button } from '@components/Button';
import { Header } from "@components/Header";
import { TextInput } from "@components/TextInput";
import { CheckButton } from '@components/CheckButton';
import { DietStatus } from '@components/MealItem/styles';

import {
    Container,
    ContentBody,
    ContentFooter,
    ContentHeader,
    InlineInputContent,
    InputContent,
    Label
} from "./styles";

import format from 'date-fns/format';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';

export function NewMeal() {
    const navigation = useNavigation();
    const [date, setDate] = useState<Date>(new Date());
    const [time, setTime] = useState<Date>(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [checkedStatusDiet, setCheckedStatusDiet] = useState<DietStatus>("WITHIN_THE_DIET");

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

    return (
        <Container>
            <ContentHeader>
                <Header
                    title="Nova refeição"
                    showBackButton
                    onPressBackButton={handlePressBackButton}
                />
            </ContentHeader>
            <ContentBody>
                <InputContent>
                    <TextInput
                        label="Nome"
                    />
                </InputContent>
                <InputContent>
                    <TextInput
                        multiline
                        numberOfLines={5}
                        label="Descrição"
                    />
                </InputContent>
                <InlineInputContent>
                    <View style={{ flex: 1, marginRight: 10 }}>
                        <TextInput
                            label="Data"
                            placeholder="dd/MM/aaaa"
                            value={format(date, 'dd/MM/yyyy')}
                            onPressOut={() => setShowDatePicker(true)}
                            showSoftInputOnFocus={false}
                        />
                        {showDatePicker && <DateTimePicker
                            value={date}
                            onChange={handleChangeDate}
                            maximumDate={new Date()}
                        />}
                    </View>
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <TextInput
                            label="Hora"
                            placeholder="hh:mm"
                            value={format(time, 'hh:mm')}
                            onPressOut={() => setShowTimePicker(true)}
                            showSoftInputOnFocus={false}
                        />
                        {showTimePicker && <DateTimePicker
                            value={time}
                            onChange={handleChangeTime}
                            mode="time"
                        />}
                    </View>
                </InlineInputContent>

                <View style={{ marginBottom: 24 }}>
                    <Label>Está dentro da dieta?</Label>
                    <InlineInputContent>
                        <View style={{ flex: 1, marginRight: 4 }}>
                            <CheckButton
                                onPress={() => setCheckedStatusDiet("WITHIN_THE_DIET")}
                                checked={checkedStatusDiet === "WITHIN_THE_DIET"}
                                status="WITHIN_THE_DIET"
                            />
                        </View>
                        <View style={{ flex: 1, marginLeft: 4 }}>
                            <CheckButton
                                onPress={() => setCheckedStatusDiet("OUT_OF_DIET")}
                                checked={checkedStatusDiet === "OUT_OF_DIET"}
                                status="OUT_OF_DIET"
                            />
                        </View>
                    </InlineInputContent>
                </View>
            </ContentBody>
            <ContentFooter>
                <Button
                    title="Cadastrar refeição"
                />
            </ContentFooter>
        </Container>
    );
}