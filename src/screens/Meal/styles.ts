import styled, { css } from "styled-components/native";
import { SafeAreaView } from 'react-native';

import theme from "@theme/index";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${() => theme.COLORS.GREEN_LIGHT};
`;

export const ContentHeader = styled.View`
    margin-top: 30px;
    padding: 24px;
`;

export const ContentBody = styled.View`
    flex: 1;
    padding: 24px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Label = styled.Text`
    margin-bottom: 4px;
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_200};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-weight: ${theme.FONT_SIZE._14}px;
    `};
`;

export const ContentFooter = styled.View`
    justify-content: flex-end;

    padding: 24px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Title = styled.Text`
    margin-bottom: 8px;
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE._24}px;
    `};
`;

export const Description = styled.Text`
    margin-bottom: 24px;
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_200};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE._16}px;
    `};
`;