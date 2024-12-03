import Link from "next/link";
import axios from "axios";

function getUser() {
  let result = axios.get(`${process.env.ROOT_API}`);

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

      {/* {user.map((userItem) => (
        <li key={userItem.us_id}>
          {userItem.us_firstname} | {userItem.us_lastname}
        </li>
      ))} */}
    </div>
  );
}
