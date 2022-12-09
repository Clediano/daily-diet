import { DietStatus } from "@components/MealItem/styles";

import { Container, Label, Status } from "./styles";


type ChipProps = {
    status: DietStatus;
}

export function Chip({ status }: ChipProps) {
    return (
        <Container>
            <Status status={status} />
            <Label>
                {status === 'WITHIN_THE_DIET' ?
                    "dentro da dieta" :
                    "fora da dieta"}
            </Label>
        </Container>
    );
}