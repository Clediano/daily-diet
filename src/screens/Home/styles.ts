import { SafeAreaView } from "react-native-safe-area-context";

import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};

    padding: 24px;
`;

export const SectionHeader = styled.Text`
    margin-top: 32px;
    margin-bottom: 8px;
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE._18}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_100};
    `};
`;

export const Title = styled.Text`
    margin-bottom: 8px; 
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE._16}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_100};
    `};
`;

export const ContentPercent = styled.View`
    margin: 40px 0px;
`;