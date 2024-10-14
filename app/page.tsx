'use client';

import WebApp from "@twa-dev/sdk";
import { useEffect, useState } from "react";

interface Userdata {
  id: number;
  firstName?: string;
  lastName?: string;
  userName?: string;
}

export default function Home() {
  const [userdata, setUserData] = useState<Userdata | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if WebApp.initDataUnsafe is available
    const initData = WebApp.initDataUnsafe.user as Userdata;

    if (initData) {
      setUserData(initData);
      setLoading(false); // Data is loaded
    } else {
      setLoading(false); // No data found, still loading finished
    }
  }, []); // Run once when the component mounts

  return (
    <main className="p-4">
      {loading ? (
        <div>Loading...</div>
      ) : userdata ? (
        <>
          <h1 className="text-2xl font-bold mb-4">User Data</h1>
          <ul>
            <li>ID: {userdata.id}</li>
            <li>First Name: {userdata.firstName}</li>
            <li>Last Name: {userdata.lastName}</li>
            <li>Username: {userdata.userName}</li>
          </ul>
        </>
      ) : (
        <div>No user data available.</div>
      )}
    </main>
  );
}
