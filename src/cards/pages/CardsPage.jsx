import { Container } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import Cards from "../components/Cards";
import { useEffect, useState } from "react";
import { getCards } from "../services/cardApiService";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import CardsFeedback from "../components/CardsFeedback";


const CardsPage = () => {
  const [cards, setCards] = useState();
  const [error, setError] = useState(null);
  const [isPending, setPending] = useState(false);

  useEffect(() => {
    setPending(true);
    getCards()
      .then((data) => {
        setCards(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setPending(false);
      });
  }, []);

  return (
    <Container>
      <PageHeader title="Cards" subtitle="Here you can find business cards from all categories" />

      <CardsFeedback
        isPending={isPending}
        error={error}
        cards={cards}
      />
      
    </Container>
  )
};

export default CardsPage;
