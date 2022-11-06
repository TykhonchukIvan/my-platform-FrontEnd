export const getItemLocalStorage = (key) => {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    console.error(e.message)
  }
}

export const setItemLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    console.error(e.message)
  }
}