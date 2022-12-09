import { ArrowLeft } from 'phosphor-react-native';

import theme from '@theme/index';

import avatarImg from '@assets/avatar.png';

import {
    Avatar,
    DefaultContainer,
    BackButtonContainer,
    Logotype,
    Title,
    BackButton
} from "./styles";

type HeaderProps = {
    title?: string;
    showBackButton?: boolean;
    backButtonColor?: string;
    onPressBackButton?: () => void;
}

export function Header({ backButtonColor = theme.COLORS.GRAY_200, title = "", showBackButton = false, onPressBackButton }: HeaderProps) {
    return (
        <>
            {showBackButton ? (
                <BackButtonContainer>
                    <BackButton onPress={onPressBackButton}>
                        <ArrowLeft size={24} color={backButtonColor} />
                    </BackButton>
                    {title && <Title>{title}</Title>}
                </BackButtonContainer>
            ) : (
                <DefaultContainer>
                    <Logotype />
                    <Avatar source={avatarImg} />
                </DefaultContainer>
            )}
        </>
    );
}