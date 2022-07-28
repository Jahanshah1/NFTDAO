export default async (contract) => {
  const API_KEY = process.env.REACT_APP_TATUM_API_KEY;
  const res = await (
    await fetch(
      `https://api-eu1.tatum.io/v3/nft/collection/CELO/${contract}?pageSize=10`,
      {
        headers: {
          accept: "application/json",
          // "x-api-key": API_KEY,
        },
        method: "GET",
      }
    )
  ).json();
  console.log(res);
  return res;
};
