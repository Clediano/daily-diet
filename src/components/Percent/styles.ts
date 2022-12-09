import styled, { css } from "styled-components/native";
import { ArrowUpRight, IconProps } from "phosphor-react-native";
import { TouchableOpacity } from 'react-native';

import { DietStatus } from "@components/MealItem/styles";

type ContainerProps = {
    type: DietStatus;
}

type OpenIconProps = IconProps & {
    status: DietStatus;
}

export const Container = styled(TouchableOpacity) <ContainerProps>`
    align-items: center;

    border-radius: 8px;

    padding: 20px 16px;

    background-color: ${({ theme, type }) =>
        type === 'WITHIN_THE_DIET' ?
            theme.COLORS.GREEN_LIGHT :
            theme.COLORS.RED_LIGHT};
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE._32}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_100};
    `};
`;

export const Subtitle = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE._14}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_200};
    `};
`;

export const OpenIcon = styled(ArrowUpRight).attrs<OpenIconProps>(({ theme, status, ...rest }) => ({
    size: 24,
    color: status === 'WITHIN_THE_DIET' ?
        theme.COLORS.GREEN_DARK :
        theme.COLORS.RED_DARK,

    ...rest,
}))`
    position: absolute;
    right: 8px;
    top: 8px;
`;
