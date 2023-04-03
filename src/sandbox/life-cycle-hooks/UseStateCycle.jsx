import { Container } from "@mui/material";

const UseStateCycle = () => {
  const [count, setCount] = useState(() => {
    console.log("in useState function");
    setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 2000);
    return 0;
  });

  return (
    <Container>
      {console.log(new Date().toLocaleTimeString())}
      Count: {count}
    </Container>
  );
};
export default UseStateCycle;
