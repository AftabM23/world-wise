/* eslint-disable react/prop-types */
import styles from "./CountryListRendering.module.css";
function CountryListRendering({ countries }) {
  // function countryCodeToFlagEmoji(countryCode) {
  //   if (countryCode.length !== 2) {
  //     throw new Error("Invalid flag emoji length. It must be two characters.");
  //   }

  //   return countryCode
  //     .split("")
  //     .map((char) => String.fromCodePoint(char.codePointAt(0) - 127397))
  //     .join("");
  // }

  const { country, emoji } = countries;

  return (
    <div className={styles.countryList}>
      <span>{emoji}</span>
      <p>{country}</p>
    </div>
  );
}
export default CountryListRendering;
