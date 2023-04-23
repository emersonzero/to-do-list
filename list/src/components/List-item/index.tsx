import { Container } from "./styles";
import { Item } from "../../types/Item";

type Props = {
    item: Item
}

export const List_item = ({ item }: Props) => {
    return (
        <Container>
            {item.name}
        </Container>
    );
}