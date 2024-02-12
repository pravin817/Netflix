import Background from "../assets/login.jpg";
import styled from "styled-components";

const BackgroundImage = () => {
  return (
    <Container>
      <img src={Background} alt="Background Image" />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;

  img {
    height: 100vh;
    width: 100vw;
  }
`;
export default BackgroundImage;
