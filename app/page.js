import Link from "next/link";
import axios from "axios";

async function getUser() {
  let result = await axios.get(`${process.env.ROOT_API}/get/personnel`);

  return result.data;
}

export default async function RootPage() {
  const user = await getUser();
  return (
    <div>
      <h1>Hi!!, Nitikron Piew-on</h1>
      <Link href={"/second-page"} className="rounded-full bg-blue-400">
        Go to second page
      </Link>

      {user.map((userItem) => (
        <li key={userItem.pl_id}>
          {userItem.pl_firstname} | {userItem.pl_lastname}
        </li>
      ))}
    </div>
  );
}
