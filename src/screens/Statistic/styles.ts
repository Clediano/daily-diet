import { SafeAreaView } from 'react-native';
import styled, { css } from "styled-components/native";

import { DietStatus } from "@components/MealItem/styles";

type ContainerProps = {
    status: DietStatus;
}

export const Container = styled(SafeAreaView) <ContainerProps>`
    flex: 1;
    background-color: ${({ theme, status }) =>
        status === 'WITHIN_THE_DIET' ?
            theme.COLORS.GREEN_LIGHT :
            theme.COLORS.RED_LIGHT
    };
`;

export const ContentHeader = styled.View`
    margin-top: 30px;
    padding: 24px;
`;

export const ContentBody = styled.View`
    flex: 1;
    padding: 30px 12px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const HeaderTitle = styled.Text`
    text-align: center;
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE._32}px;
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

export const BodyTitle = styled.Text`
    text-align: center;
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE._14}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_100};
    `};
`;

export const ContentCardBody = styled.View`
    flex-direction: row;
`;

export const WrapContentCardBody = styled.View`
    flex: 1;
    margin: 6px;
`;

export const WrapCard = styled.View`
    margin: 6px;
`;
