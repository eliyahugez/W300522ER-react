import { Container } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import { useEffect } from "react";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";


const CardsPage = () => {
  const {cards, error, isPending, handleGetCards} = useCards()

  useEffect(() => {
    handleGetCards();
  }, []);

  const onDeleteCard = (cardId) => console.log(`Delete card: ${cardId}`)
  
  return (
    <Container>
      <PageHeader title="Cards" subtitle="Here you can find business cards from all categories" />

      <CardsFeedback
        isPending={isPending}
        error={error}
        cards={cards}
        onDelete={onDeleteCard}
      />
      
    </Container>
  )
};

export default CardsPage;
