import CountryListRendering from "./CountryListRendering";
import styles from "./CountryList.module.css";
import { useCitiesData } from "../Contexts/CitiesContext";
/* eslint-disable react/prop-types */
function CountryList() {
  const { citiesData } = useCitiesData();

  const countriesL = citiesData.reduce((arr, currentItem) => {
    if (
      !arr.some((el) =>
        el.country
          ? el.country === currentItem.country
          : el.countryName === currentItem.countryName
      )
    ) {
      return [
        ...arr,
        {
          country: `${
            currentItem.country ? currentItem.country : currentItem.countryName
          }`,
          emoji: currentItem.emoji,
        },
      ];
    } else {
      return arr;
    }
  }, []);

  return (
    <div className={styles.countryList}>
      {countriesL.map((country) => (
        <div key={country.id}>
          <CountryListRendering countries={country} />
        </div>
      ))}
    </div>
  );
}

export default CountryList;
