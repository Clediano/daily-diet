import { Container, OpenIcon, Title, Subtitle } from "./styles";

import { TouchableOpacityProps } from "react-native";
import { Loading } from "@components/Loading";
import { DietStatus } from "@components/MealItem/styles";

type PercentProps = TouchableOpacityProps & {
    percent: number;
};

export function Percent({ percent, ...rest }: PercentProps) {
    const formatedPercent = percent.toPrecision(4).concat("%");
    const status: DietStatus = percent < 40 ? 'OUT_OF_DIET' : 'WITHIN_THE_DIET'
    return (
        <Container status={status} {...rest}>
            <OpenIcon status={status} />
            {percent === 0 ? <Loading /> : <Title>{formatedPercent}</Title>}
            <Subtitle>das refeições dentro da dieta</Subtitle>
        </Container>
    );
}