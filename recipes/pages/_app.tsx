import "../styles/globals.css";
import type { AppProps } from "next/app";
import FlipCard from "../components/FlipCard";
import { Container, Row } from "./styled-components";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";

const cards = [
  {
    id: "1",
    front: "Lamb Noodles",
    back: "Back",
  },
  {
    id: "2",
    front: "Stir Fry Meat + Asian Veggie Rice",
    back: "Back",
  },
  {
    id: "3",
    front: "Pork Lotus Root Soup",
    back: "Back",
  },
  {
    id: "3",
    front: "Leek Soup",
    back: "Back",
  },
  {
    id: "3",
    front: "Pasta",
    back: "Back",
  },
  {
    id: "3",
    front: "Udon",
    back: "Back",
  },
];

export default function App() {
  return (
    <Container>
      <Row>
        {cards.map((card) => (
          <FlipCard key={card.id} card={card} />
        ))}
      </Row>
    </Container>
  );
}
