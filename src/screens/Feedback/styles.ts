import { DietStatus } from '@components/MealItem/styles';
import { SafeAreaView } from 'react-native';
import styled, { css } from "styled-components/native";

type TitleProps = {
    status: DietStatus;
}

export const Container = styled(SafeAreaView)`
    flex: 1;
    justify-content: space-evenly;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Title = styled.Text<TitleProps>`
    margin-bottom: 8px;
    text-align: center;
    ${({ theme, status }) => css`
        font-size: ${theme.FONT_SIZE._24}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${status === 'OUT_OF_DIET' ? theme.COLORS.RED_DARK : theme.COLORS.GREEN_DARK};
    `} ;
`;

export const Description = styled.Text`
    text-align: center;
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE._16}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_100};
    `} ;
`;

export const Bold = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;