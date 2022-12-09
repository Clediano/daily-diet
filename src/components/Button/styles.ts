import styled, { css } from "styled-components/native";

import { TouchableOpacity } from "react-native";

export type ButtonTypeStyleProps = 'SOLID' | 'OUTLINE';

type ButtonProps = {
    type: ButtonTypeStyleProps
}

type TitleProps = {
    type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity) <ButtonProps>`
    flex-direction: row;
    justify-content: center;
    align-items: center;

    min-height: 50px;
    max-height: 50px;

    padding: 16px 24px;

    background-color: ${({ theme, type }) => type === 'SOLID' ? theme.COLORS.GRAY_200 : 'transparent'}
    ;

    border: ${({ theme, type }) => type === 'OUTLINE' && `1px solid ${theme.COLORS.GRAY_100}`};
    border-radius: 6px;
`;

export const Title = styled.Text<TitleProps>`
    ${({ theme, type }) => css`
        font-size: ${theme.FONT_SIZE._14}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${type === 'SOLID' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
    `} ;
`;
