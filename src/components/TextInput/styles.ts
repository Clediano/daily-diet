import { TextInput, TextInputProps } from 'react-native';
import styled, { css } from "styled-components/native";

export const Container = styled.View``;

export const InputContainer = styled(TextInput).attrs<TextInputProps>(({ theme, ...rest }) => ({
    cursorColor: theme.COLORS.GRAY_100,
    ...rest
}))`
    padding: 14px 14px;

    border-radius: 6px;
    border: ${({ theme }) => `1px solid ${theme.COLORS.GRAY_500}`};

    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-weight: ${theme.FONT_SIZE._16}px;
    `};
`;

export const Label = styled.Text`
    margin-bottom: 4px;
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_200};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-weight: ${theme.FONT_SIZE._14}px;
    `};
`;