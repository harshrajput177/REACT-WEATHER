import "./Info.css";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function Info_Box({info}){

//   let info = {
// City : "delhi",
// Humidity: 45.5,
// temp : 34.4,
// temp_max : 45.3,
// temp_min : 23.5,
// wind_speed : 4.5,
// pressure: 5.7,
//   }
const main_image = 
"https://www.un.org/sites/un2.un.org/files/styles/large-article-image-style-16-9/public/field/image/2023/03/52196025795_06f077377a_c.jpg";
const Rain_image =
 "https://images.pexels.com/photos/125510/pexels-photo-125510.jpeg?cs=srgb&dl=pexels-kaique-rocha-125510.jpg&fm=jpg";
const hot_image =
 "https://media.istockphoto.com/id/1312596921/photo/summer-noon-sun.webp?b=1&s=170667a&w=0&k=20&c=IFZS5JrL8LQbsu9KkMCToxJpZfUYy5A87g1YWBzZD-w=";
const cold_image =
 "https://www.popsci.com/uploads/2019/03/18/7PWF2DFYP6NDYPTMN3PUBRSYU4.jpg?auto=webp";

    return(
        <div className="info">
        <Card     className="info-card" sx={{ maxWidth: 345, width:"100%" }}>
      <CardMedia
       className="info-media"
        sx={{ height: 150 }}
        image={info.humidity > 80 ? Rain_image : info.temp > 15 ? hot_image : cold_image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.City} &nbsp; {
          info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ?
          <WbSunnyIcon /> :  <AcUnitIcon />
          } 

        </Typography>
        <Typography variant="body2" color="text.secondary">
       
      <p> <b>Humidity : {info.humidity}</b></p>
      <p><b>Temperature : {info.temp}&deg;C</b></p>
      <p><b>Temperature_max : {info.temp_max}&deg;C</b></p>
      <p><b>Temperature_min : {info.temp_min}&deg;C</b></p>
      <p><b>Wind_speed: {info.Wind_speed}</b></p>
      <p><b>Pressure: {info.pressure}</b></p>
      <p><b>There can be described as overcast clouds and feels_like: &nbsp;{info.feels_like}&deg;C</b></p>
      <p></p>
     
        </Typography>
      </CardContent>
      <CardActions>

      </CardActions>
    </Card>
    </div>
  );
}
    