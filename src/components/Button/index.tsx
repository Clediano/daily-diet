import { TouchableOpacityProps } from "react-native";
import { IconContext } from 'phosphor-react-native';
import { useTheme } from "styled-components/native";

import { ButtonTypeStyleProps, Container, Title } from "./styles";

type ButtonProps = TouchableOpacityProps & {
    title: string;
    type?: ButtonTypeStyleProps;
    icon?: JSX.Element;
}

export function Button({ title, icon, type = 'SOLID', ...rest }: ButtonProps) {
    const theme = useTheme();

    return (
        <Container type={type} {...rest}>
            <IconContext.Provider
                value={{
                    color: type === 'SOLID' ?
                        theme.COLORS.WHITE :
                        theme.COLORS.GRAY_100,

                    size: theme.FONT_SIZE._18,
                    style: {
                        marginRight: 12
                    }
                }}
            >
                {icon}
            </IconContext.Provider>
            <Title type={type}>{title}</Title>
        </Container>
    );
}