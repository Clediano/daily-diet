import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { DietStatus } from "@components/MealItem/styles";

import styled, { css } from "styled-components/native";

type CheckButtonProps = TouchableOpacityProps & {
    checked: boolean;
    status: DietStatus;
}

type StatusItemProps = {
    status: DietStatus;
}

export const Container = styled(TouchableOpacity).attrs(({ ...rest }) => ({
    ...rest
}))<CheckButtonProps>`
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 100%;

    min-height: 50px;
    max-height: 50px;

    padding: 16px;

    border-radius: 6px;
    border: ${({ theme, status, checked }) =>
        (status === 'WITHIN_THE_DIET' && checked) ?
            `1px solid ${theme.COLORS.GREEN_DARK}` :
            (status === 'OUT_OF_DIET' && checked) ?
                `1px solid ${theme.COLORS.RED_DARK}` :
                'none'
    };

    background-color: ${({ theme, status, checked }) =>
        (status === 'WITHIN_THE_DIET' && checked) ?
            theme.COLORS.GREEN_LIGHT :
            (status === 'OUT_OF_DIET' && checked) ?
                theme.COLORS.RED_LIGHT :
                theme.COLORS.GRAY_600
    };
`;

export const Status = styled.View<StatusItemProps>`
    width: 14px;
    height: 14px;
    border-radius: 99px;
    margin-right: 8px;

    background-color: ${({ theme, status }) =>
        status === 'OUT_OF_DIET' ?
            theme.COLORS.RED_DARK :
            theme.COLORS.GREEN_DARK};
`;

export const Title = styled.Text`
        ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE._14}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_100};
    `} ;
`;
