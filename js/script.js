const apiKey = "59e9d15a2a6107b33bcdfcd5da053779";

const COUNTRIES = {
  BR: "BR",
  US: "US",
  GB: "GB",
  CA: "CA",
  DE: "DE",
  IT: "IT",
  ES: "ES",
  FR: "FR",
  JP: "JP",
  AU: "AU",
  CN: "CN",
  RU: "RU",
  KR: "KR",
  IN: "IN",
  SA: "SA",
};

const UNITS = {
  METRIC: "metric",
  IMPERIAL: "imperial",
  STANDART: "standart",
};

const LANG = {
  PT_BR: "pt_br",
  EN: "en",
  ES: "es",
  IT: "it",
  DE: "de",
  RU: "ru",
  PT: "pt",
  SV: "sv",
  JA: "ja",
  FR: "fr",
  ZH_CN: "zh_cn",
  ZH_TW: "zh_tw",
  TR: "tr",
};

function getWeather({
  city,
  country = COUNTRIES.BR,
  units = UNITS.METRIC,
  lat,
  lon,
  lang = LANG.PT_BR,
}) {
  let query = "";

  if (city) {
    query = `q=${city},${country}`;
  } else if (lat && lon) {
    query = `lat=${lat}&lon=${lon}`;
  } else {
    return console.error(
      "Cidade ou latitude e longitude não foram informadas."
    );
  }

  query += `&units=${units}&lang=${lang}`;

  const api = `https://api.openweathermap.org/data/2.5/weather?${query}&appid=${apiKey}`;

  fetch(api)
    .then((response) => response.json())
    .then((weather) => {
      console.log(weather);
    });
}

function setMoment() {
  const date = new Date();
  const hours = date.getHours();
  if (hours >= 6 && hours < 18) {
    document.body.classList.add("morning");
    document.body.classList.remove("night");
  } else {
    document.body.classList.add("night");
    document.body.classList.remove("morning");
  }

  //   getWeather({
  //     city: "Brasília",
  //   });
}

document.addEventListener("DOMContentLoaded", () => {
  setMoment();
});

setInterval(() => {
  setMoment();
}, 5000);
