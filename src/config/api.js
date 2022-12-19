import ky from "ky";

const kyApi = ky.create({
  prefixUrl: "https://jsonplaceholder.typicode.com/",
});

export { kyApi };
