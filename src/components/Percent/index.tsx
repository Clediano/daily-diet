import { Container, OpenIcon, Title, Subtitle} from "./styles";

import { TouchableOpacityProps } from "react-native";
import { DietStatus } from "@components/MealItem/styles";

type PercentProps = TouchableOpacityProps & {
    type?: DietStatus;
    title: string;
};

export function Percent({ title, type = 'WITHIN_THE_DIET', ...rest }: PercentProps) {
    return (
        <Container type={type} { ...rest }>
            <OpenIcon status={type} />
            <Title>{title}</Title>
            <Subtitle>das refeições dentro da dieta</Subtitle>
        </Container>
    );
}