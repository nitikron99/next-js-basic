"use client";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";

async function getUser() {
  let result = await axios.get("https://674df3fd635bad45618d5148.mockapi.io/mock-data/User");

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
        <li key={userItem.us_id}>
          {userItem.us_firstname} | {userItem.us_lastname}
        </li>
      ))}
    </div>
  );
}
