import styled from "styled-components";

const ButtonStyled = styled.button`
  color: white;
  font-family: Inter-Bold;
  padding: 0.4em 1.2em 0.4em 1.2em;
  background-color: #0066ff;
  transition-property: background-color;
  transition: 0.5s;
  border-radius: 5px;

  &:hover {
    background-color: #3284ff;
  }
`;

const Button = () => {
  return <ButtonStyled type="submit">Add</ButtonStyled>;
};

export default Button;
