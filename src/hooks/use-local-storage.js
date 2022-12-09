export default function useLocalStorage(key, initializer) {
  const items = JSON.parse(localStorage.getItem(key)) ?? initializer;

  const setItem = (items) => localStorage.setItem(key, JSON.stringify(items));

  return [items, setItem];
}
