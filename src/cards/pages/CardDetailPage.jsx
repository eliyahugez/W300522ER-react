import { Container } from "@mui/material";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";
import { useEffect } from "react";

const CardDetailPage = () => {
  const { id } = useParams();
  const { value: { card }, handleGetCard} = useCards();

  useEffect(() => {
    handleGetCard(id);
  }, []);

  return (
    <Container maxWidth="lg">
      <PageHeader
        title="Business Details"
        subtitle="Here you can find more details about the business"
      ></PageHeader>
      <div>Details of card: {id}</div>

      {card && <h1>{card.title}</h1>}
    </Container>
  );
};

export default CardDetailPage;
