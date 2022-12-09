import styled, { css } from "styled-components/native";
import { SafeAreaView, ScrollView } from 'react-native';

import theme from "@theme/index";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${() => theme.COLORS.GRAY_500};
`;

export const ContentHeader = styled.View`
    margin-top: 30px;
    padding: 24px;
`;

export const ContentBody = styled(ScrollView)`
    flex: 1;
    padding: 24px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const InputContent = styled.View`
    margin-bottom: 24px;
`;

export const InlineInputContent = styled.View`
    flex-direction: row;
    margin-bottom: 24px;
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
    flex: 0.2;
    justify-content: flex-end;

    padding: 24px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;
