import { Container } from "@mui/material";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";

const CardDetailPage = () => {
  const { id } = useParams();
    
  return (
    <Container maxWidth="lg">
      <PageHeader
        title="Business Details"
        subtitle="Here you can find more details about the business"
      ></PageHeader>
      <div>Details of card: {id}</div>
    </Container>
  );
};

export default CardDetailPage;
