import { Container, Grid } from "@mui/material";
import PageHeader from "../components/PageHeader";

const AboutPage = () => {
  return (
    <Container maxWidth="lg">
      <PageHeader
        title="About Page"
        subtitle="On this page you can find explanations about using the application"
      />

      <Grid container spacing={2}>
        <Grid item xs={12} md={8} alignSelf="center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel facere
          eaque veritatis enim, omnis nesciunt soluta reprehenderit sunt.
          Perspiciatis eius et dolorem possimus id explicabo debitis veniam iste
          consectetur fuga? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Debitis quod distinctio accusamus dolorem ut odit reprehenderit
          aut delectus similique soluta expedita eos ab aliquid, suscipit et
          dignissimos libero, ratione harum! Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Officiis repellendus sit sunt voluptatum
          veniam enim qui quia, nulla ad? Saepe iste accusantium doloribus ea
          molestiae dolorem adipisci repellendus animi blanditiis.
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: { md: "flex", xs: "none" }, justifyContent: "center" }}
        >
          <img src="/assets/images/card.jpg" alt="card" width="100%" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
