import { useRouter } from "next/router";

function User() {
  const router = useRouter();
  console.log(router);

  return <h1>Localhost/user/[id]</h1>;
}

export default User;
