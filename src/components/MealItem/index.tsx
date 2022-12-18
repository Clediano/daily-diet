import { TouchableOpacityProps } from 'react-native';

import {
    Container,
    Hour,
    DietStatus,
    Title,
    Status,
    Content,
    Pipe
} from "./styles";

type MealItemProps = TouchableOpacityProps & {
    name: string;
    hour: string;
    status: DietStatus
}

export function MealItem({ name, hour, status, ...rest }: MealItemProps) {
    return (
        <Container {...rest}>
            <Content>
                <Hour>{hour}</Hour>
                <Pipe>|</Pipe>
                <Title>{name}</Title>
            </Content>
            <Status status={status} />
        </Container>
    );
}
