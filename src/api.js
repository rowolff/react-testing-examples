export const getTitle = () => {
  return new Promise((resolve) => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Horrible Error!");
        }
        return res.json();
      })
      .then((data) => resolve([data.title, null]))
      .catch((e) => resolve([null, e]));
  });
};
