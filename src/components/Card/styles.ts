import styled, { css } from "styled-components/native";

export type CardType = 'SUCCESS' | 'FAILURE' | 'DEFAULT';

type ContainerProps = {
    type: CardType;
}

export const Container = styled.View<ContainerProps>`
    align-items: center;

    border-radius: 8px;

    padding: 24px;

    background-color: ${({ theme, type }) =>
        type === 'DEFAULT' ?
            theme.COLORS.GRAY_600 :
            type === 'SUCCESS' ?
                theme.COLORS.GREEN_LIGHT :
                theme.COLORS.RED_LIGHT
    };
`;

export const Title = styled.Text`
    text-align: center;
    margin-bottom: 8px;
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE._24}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_100};
    `};
`;

export const Subtitle = styled.Text`
    text-align: center;
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE._14}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_200};
    `};
`;
