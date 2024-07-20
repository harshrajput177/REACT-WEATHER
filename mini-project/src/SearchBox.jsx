import "./SearchBox.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";

export default function Search({ updateInfo }) {
  let [City, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "fdb21cf61cdf8c33e6d0caed8fbca430";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${City}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      //  console.log(jsonResponse);

      let result = {
        City: City,
        feels_like: jsonResponse.main.feels_like,
        humidity: jsonResponse.main.humidity,
        pressure: jsonResponse.main.pressure,
        temp: jsonResponse.main.temp,
        temp_max: jsonResponse.main.temp_max,
        temp_min: jsonResponse.main.temp_min,
        Wind_speed: jsonResponse.wind.speed,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleSearch = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      // console.log(City);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="City-Name"
          variant="outlined"
          value={City}
          onChange={handleSearch}
          className="search-input"
        />
        <br></br> <br></br>
        <Button variant="contained" type="submit" className="search-button">
          {" "}
          Search &nbsp;<SearchIcon></SearchIcon> 
        </Button>
        {error && <p  className="error-message">No such place in this App</p>}
      </form>
      
    </div>
  );
}
