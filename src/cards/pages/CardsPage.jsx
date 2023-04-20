import { Container } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import Cards from "../components/Cards";


const CardsPage = () => {
  

    return (
        <Container>
            <PageHeader title="Cards" subtitle="Here you can find business cards from all categories" />
            <Cards cards={cards}/>
            
        </Container>
    )
};

export default CardsPage;
