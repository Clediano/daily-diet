import styled, { css } from "styled-components/native";

import { Logo } from '@assets/Logo';

export const DefaultContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 40px;
`;

export const BackButtonContainer = styled.View`
    flex-direction: row;
    align-items: center;

    height: 40px;
`;

export const BackButton = styled.TouchableOpacity`
    /* flex: 1; */
`;

export const Logotype = styled(Logo)``;

export const Avatar = styled.Image``;

export const Title = styled.Text`
    flex: 1;
    text-align: center;
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE._18}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_100};
    `};
`;