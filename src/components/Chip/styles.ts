import styled, { css } from 'styled-components/native';

import { DietStatus } from '@components/MealItem/styles';

type StatusProps = {
    status: DietStatus;
}

export const Container = styled.View`
    flex-basis: auto;
    flex-direction: row;
    align-items: center;

    border-radius: 99px;

    padding: 8px 16px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Label = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-weight: ${theme.FONT_SIZE._14}px;
    `};
`;

export const Status = styled.View<StatusProps>`
    width: 8px;
    height: 8px;
    border-radius: 99px;
    margin-right: 8px;

    background-color: ${({ theme, status }) =>
        status === 'OUT_OF_DIET' ?
            theme.COLORS.RED_DARK :
            theme.COLORS.GREEN_DARK};
`;