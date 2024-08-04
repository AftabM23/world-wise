/* eslint-disable react/prop-types */
function CountryListRendering({ countries }) {
  const { country, emoji } = countries;
  return (
    <div>
      <span>{emoji}</span>
      <h3>{country}</h3>
    </div>
  );
}
export default CountryListRendering;
