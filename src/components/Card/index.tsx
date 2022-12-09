import { Container, Title, Subtitle, CardType} from "./styles";

type CardProps = {
    title: string;
    subtitle: string;
    type?: CardType;
};

export function Card({ title, subtitle, type = 'DEFAULT' }: CardProps) {
    return (
        <Container type={type}>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </Container>
    );
}