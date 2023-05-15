import { Container } from "@mui/material";
import { Navigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import ROUTES from "../../routes/routesModel";

const SignupPage = () => {
  //const user = null;
   const user = true;
  if (user) return <Navigate replace to={ROUTES.CARDS} />;

  return (
    <Container maxWidth="lg">
      <PageHeader
        title="Signup Page"
        subtitle="In order to register, fill out the form and click the submit button"
      ></PageHeader>
    </Container>
  );
};

export default SignupPage;
