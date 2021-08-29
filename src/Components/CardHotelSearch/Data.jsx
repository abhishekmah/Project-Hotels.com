import axios from "axios";

const city = [];

const extractCities = (data) => {
  let i = 0;
  data.forEach((el) => {
    city[i] = el.address.city + ", " + el.address.countryName;
    i++;
  });
  console.log(city);
};

export function GetData() {
  axios
    .get("http://localhost:3004/data")
    .then(({ data }) => {
      extractCities(data);
    })
    .catch((err) => console.log(err));

  return <></>;
}

// export { GetData };
