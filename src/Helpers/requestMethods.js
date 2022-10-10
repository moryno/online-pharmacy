import axios from "axios";

const BASE_URL = "http://localhost:3000/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo4LCJleHAiOjE2NjU0MTQxOTR9.nJJTFTIqmgl-z5NHJk4qJsofG37k8oluow-UZ0kc4nc";

export const publicRequest = axios.create({ baseURL: BASE_URL });

export const authUserRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
