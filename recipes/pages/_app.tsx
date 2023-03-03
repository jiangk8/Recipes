import "../styles/globals.css";
import type { AppProps } from "next/app";
import FlipCard from "../components/FlipCard";
import { Container, Row } from "./styled-components";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";

const cards = [
  {
    id: "1",
    front: "Hover",
    back: "Back",
  },
  {
    id: "2",
    front: "Click",
    back: "Back",
  },
  {
    id: "3",
    front: "Focus",
    back: "Back",
  },
  {
    id: "3",
    front: "Focus",
    back: "Back",
  },
  {
    id: "3",
    front: "Focus",
    back: "Back",
  },
  {
    id: "3",
    front: "Focus",
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
