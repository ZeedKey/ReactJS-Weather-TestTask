import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #001733;
  box-shadow: 8px 9px 7px 2px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin: 1em 1em 1em 0;
  padding: 1em;
  color: white;
  width: 20rem;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  width: 2em;
`;
const CityName = styled.h1`
  margin: 0.5em;
  font-family: Inter-Bold;
  font-size: 2ch;
  text-transform: uppercase;
`;
const StatsTable = styled.table`
  margin-top: 1em;
  text-transform: uppercase;
  font-size: 1.4ch;
  padding: 1em;
  width: 70%;
`;
const Item = styled.td`
  text-align: right;
`;
const ItemName = styled.th`
  font-family: Inter-Bold;
  text-align: left;
`;
const Temp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5ch;
  border-bottom: 1px solid white;
`;

const Card = (props) => {
  const link = "http://openweathermap.org/img/wn/" + props.icon + "@2x.png";

  return (
    <Container>
      <CityName>{props.name}</CityName>

      <Temp>
        <Image src={link} />
        {Math.round(props.temp - 273)} C
      </Temp>
      <StatsTable>
        <tbody>
          <tr>
            <ItemName scope="row">wind speed</ItemName>
            <Item>{props.wind} M/S</Item>
          </tr>
          <tr>
            <ItemName scope="row">air humidity</ItemName>
            <Item>{props.humidity}%</Item>
          </tr>
          <tr>
            <ItemName scope="row">pressure</ItemName>
            <Item>{props.pressure} hPa</Item>
          </tr>
        </tbody>
      </StatsTable>
    </Container>
  );
};

export default Card;
