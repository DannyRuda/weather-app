function testPageLoadData(currentWeather, daysForecast, kelvinToCelsius,kelvinToFahrenheit) {
  console.log("CURRENT WEATHER CARD!!!!!!!!!!!!!!");
  console.log("Icon: ", currentWeather.getIconLink());
  console.log(
    "temperature in °C: ",
    kelvinToCelsius(currentWeather.temperature)
  );
  console.log(
    "temperature in °F: ",
    kelvinToFahrenheit(currentWeather.temperature)
  );
  console.log("pop: ", currentWeather.precipitation);
  console.log("windspeed: ", currentWeather.windspeed);
  console.log("humidity: ", currentWeather.humidity);
  console.log("Day: ", currentWeather.getWeekDay());
  console.log("Month and Day Date: ", currentWeather.getMonthAndDayDate("DE"));
  currentWeather
    .getCityNameAndCountryCode()
    .then((cityCountry) => {
      console.log("City and Country: ", cityCountry);
    })
    .then(() => {
      console.log("Time: ", currentWeather.getCurrentTime());
      console.log("HOUR DATA SECTION !!!!!!!!!!!!!!!!!!");
      daysForecast[0].data.forEach((hour) => {
        console.log("Time: ", hour.time);
        console.log("Icon: ", hour.getIconLink());
        console.log("Temperature in °C: ", kelvinToCelsius(hour.temperature));
        console.log("Temperature in °F: ", kelvinToFahrenheit(hour.temperature));
      });
      console.log("DAY CARDS SECTION!!!!!!!!!!!!!!!!!");
      daysForecast.forEach((day) => {
        console.log(
          "Weekday: ",
          day.getWeekDay() !== currentWeather.getWeekDay()
            ? day.getWeekDay()
            : "today"
        );
        console.log("MonthAndDay: ", day.getMonthAndDayDate("DE"));
        console.log("Icon: ", day.getIconLink());
        console.log("Min Temperature in °C: ", kelvinToCelsius(day.getMinTemp()));
        console.log("Max Temperature in °C: ", kelvinToCelsius(day.getMaxTemp()));
        console.log("Min Temperature in °F: ", kelvinToFahrenheit(day.getMinTemp()));
        console.log("Max Temperature in °F: ", kelvinToFahrenheit(day.getMaxTemp()));
      });
    });
}
export { testPageLoadData };
