function getData(key) {
  try {
    let data = localStorage.getItem(key);
    data = JSON.parse(data);
    return data;
  } catch (err) {
    return undefined;
  }
}

function setData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export { getData, setData };
