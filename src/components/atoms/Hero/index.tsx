import styled from "styled-components";

const Hero = styled.duv`
  width: 100%;
  min-height: 7.5rem;
  margin-bottom: 3.125rem;
  position: relative;
  background: #eb2e3e;
  background: linear-gradient(90deg, rgba(235, 46, 62, 0.6), rgba(249, 180, 45, 0.6));
`;

const HeroInner = styled.div`
  display: flex;
  position: absolute;
  bottom: -30%;
  left: 2rem;
`;

export default Hero;
export default HeroInner;
