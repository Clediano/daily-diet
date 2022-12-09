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
    title: string;
    hour: string;
    status: DietStatus
}

export function MealItem({ title, hour, status, ...rest }: MealItemProps) {
    return (
        <Container {...rest}>
            <Content>
                <Hour>{hour}</Hour>
                <Pipe>|</Pipe>
                <Title>{title}</Title>
            </Content>
            <Status status={status} />
        </Container>
    );
}
