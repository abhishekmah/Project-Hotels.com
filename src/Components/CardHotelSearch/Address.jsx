export function Address({ address }) {
  const { line1, line2, city, countryName, postalCode } = address;
  return <>{line1+","+city+","+countryName}</>;
}
