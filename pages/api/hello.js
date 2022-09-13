// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const People = [
  {
    id: 1,
    name: "Jonh Doe",
    age: 32,
  },
  {
    id: 2,
    name: "David",
    age: 22,
  },
  {
    id: 3,
    name: "Hanie",
    age: 26,
  },
  {
    id: 4,
    name: "Johana",
    age: 34,
  },
];
export default function handler(req, res) {
  res.status(200).json(People);
}
