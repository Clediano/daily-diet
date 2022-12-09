import { TouchableOpacityProps } from "react-native";

import { DietStatus } from "@components/MealItem/styles";

import { Container, Status, Title } from "./styles";

type Props = TouchableOpacityProps & {
    checked: boolean;
    status: DietStatus;
}

export function CheckButton({ status = 'WITHIN_THE_DIET', checked = false, ...rest }: Props) {
    return (
        <Container status={status} checked={checked} {...rest}>
            <Status status={status} />
            {status === 'OUT_OF_DIET' ? <Title>Não</Title> : <Title>Sim</Title>}
        </Container>
    );
}