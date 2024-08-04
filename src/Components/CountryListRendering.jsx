/* eslint-disable react/prop-types */
import styles from "./CountryListRendering.module.css";
function CountryListRendering({ countries }) {
  const { country, emoji } = countries;
  return (
    <div className={styles.countryList}>
      <span>{emoji}</span>
      <p>{country}</p>
    </div>
  );
}
export default CountryListRendering;
