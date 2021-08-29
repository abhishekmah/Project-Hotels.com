export function Address({ address }) {
  const { line1, city, countryName } = address;
  return <>{line1+","+city+","+countryName}</>;
}
