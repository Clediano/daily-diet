import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import styled, { css } from "styled-components/native";

export type DietStatus = 'WITHIN_THE_DIET' | 'OUT_OF_DIET';

type StatusMealItemProps = {
    status: DietStatus;
};

export const Container = styled(TouchableOpacity).attrs<TouchableOpacityProps>(({ ...rest }) => ({
    ...rest
}))`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-radius: 6px;

    padding: 14px 12px;
    margin-bottom: 8px;

    border: ${({ theme }) => `1px solid ${theme.COLORS.GRAY_500}`};
`;

export const Content = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Pipe = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_400};
    margin: 0px 8px;
`;

export const Hour = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE._12}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_100};
    `};
`;

export const Title = styled(Text).attrs(({ numberOfLines, ellipsizeMode }) => ({
    numberOfLines: 1,
    ellipsizeMode: 'tail'
}))`
    width: 80%;
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE._16}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_200};
    `};
`;

export const Status = styled.View<StatusMealItemProps>`
    width: 14px;
    height: 14px;
    border-radius: 99px;
    position: absolute;
    right: 16px;

    background-color: ${({ theme, status }) =>
        status === 'OUT_OF_DIET' ?
            theme.COLORS.RED_MID :
            theme.COLORS.GREEN_MID};
`;
