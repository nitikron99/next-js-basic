"use client";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";

async function getUser() {
  let result = await axios.get("http://3.25.197.83:4000/get/personnel");

  return result.data;
}

export default function SecondPage() {
  const [user, setUser] = useState([]);

  const initUser = async () => {
    try {
      const result = await getUser();
      setUser(result);
    } catch (err) {
      return err;
    }
  };
  useEffect(() => {
    initUser();
  }, []);
  return (
    <div>
      <h1>Second Page!!</h1>
      <Link href={"/"} className="rounded-full bg-red-200 text-black">
        Back to main page
      </Link>

      {user.map((userItem) => (
        <li key={userItem.pl_id}>
          {userItem.pl_firstname} | {userItem.pl_lastname}
        </li>
      ))}
    </div>
  );
}
