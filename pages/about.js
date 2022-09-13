import { useState, useEffect } from "react";
import Link from "next/link";

function About() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  const handleDelete = (id) => {
    setData((data) => data.filter((person) => person.id !== id));
  };
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <h4>Danh sách nhân viên</h4>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td onClick={() => handleDelete(person.id)}>&times;</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default About;
