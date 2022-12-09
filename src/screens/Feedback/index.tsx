import { ContinueAssim } from "@assets/ContinueAssim";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";

import { Bold, Container, Description, Title } from "./styles";

export function Feedback() {
    const navigation = useNavigation();

    function handleBackHome() {
        navigation.navigate("home");
    }

    return (
        <Container>
            <View>
                <Title status="WITHIN_THE_DIET">Continue assim!</Title>
                <Description>Você continua <Bold>dentro da dieta</Bold>. Muito bem!</Description>
            </View>
            <ContinueAssim />
            <Button
                title="Ir para a página inicial"
                onPress={handleBackHome}
            />
        </Container>
    );
}