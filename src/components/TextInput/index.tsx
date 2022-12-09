import { TextInputProps } from 'react-native';

import { Container, InputContainer, Label } from "./styles";

type Props = TextInputProps & {
    label: string;
}

export function TextInput({ label, ...rest }: Props) {
    return (
        <Container>
            <Label>{label}</Label>
            <InputContainer autoComplete='off' {...rest}></InputContainer>
        </Container>
    );
}