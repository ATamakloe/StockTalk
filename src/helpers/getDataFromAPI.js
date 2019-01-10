export const getDataFromAPI = async (url) => {
  try {
    let response = await fetch(url);
    let response2 = await response.json();
    return response2
  } catch (err) {
    return (err);
  }
}
