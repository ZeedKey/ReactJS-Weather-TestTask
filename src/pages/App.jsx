import Card from "../components/Card";
import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";

const Container = styled.div`
  margin: 2em;
`;
const Title = styled.h1`
  color: black;
  font-family: Inter-Bold;
  font-size: 4.3ch;
  font-weight: 900;
`;
const Subtitle = styled.h2`
  color: grey;
  font-size: 1.5ch;
  font-weight: 300;
  padding-bottom: 1em;
  border-bottom: 2px solid purple;
`;

const Text = styled.h3`
  margin-top: 2em;
  font-family: Inter-Bold;
  font-size: 1.4ch;
`;

const Input = styled.input`
  appearance: none;
  box-shadow: 2px 2px 3px grey;
  padding: 0.125rem;
  border-radius: 3px;
  border: 1px solid grey;
  margin-right: 1em;
`;

const Form = styled.form`
  display: flex;
  margin-bottom: 2em;
`;

const CardsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function App() {
  const [cities, setCities] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let cityName = e.target[0].value;
    if (cityName.trim() !== "") {
      await fetch(
        "http://api.openweathermap.org/data/2.5/weather?q=" +
          cityName +
          "&appid=" +
          process.env.REACT_APP_WEATHER_API_KEY
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.cod === 200) {
            let isIncluded = false;

            cities.map((el) => {
              if (el.name === data.name) isIncluded = true;
            });

            !isIncluded
              ? setCities([...cities, data])
              : alert("ERROR!\nOoops! This city has been already added!");
          } else {
            alert("ERROR!\nOoops! Unable to find the city.");
          }
        })
        .catch((error) => console.log("Oops\n", error));
    }
  };

  return (
    <Container>
      <Title>City weather display</Title>
      <Subtitle>Shows current weather in your city</Subtitle>
      <Text>CHOOSE YOUR CITY</Text>

      <Form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Enter the name of your city" />
        <Button />
      </Form>

      <Title>Your cities</Title>

      <CardsBlock>
        {cities.map((item) => (
          <Card
            name={item.name}
            key={item.name}
            icon={item.weather[0].icon}
            temp={item.main.temp}
            wind={item.wind.speed}
            humidity={item.main.humidity}
            pressure={item.main.pressure}
          />
        ))}
      </CardsBlock>
    </Container>
  );
}

export default App;
