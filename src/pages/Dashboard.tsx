import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/router";
import { supabase } from "../lib/supabaseClient";


export default function Dashboard() {
  const [userData, setUserData] = useState(null);
  const [userType, setUserType] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const storedEmail = localStorage.getItem("userEmail");
      if (!storedEmail) {
        router.push("/");
        return;
      }

      // Check if user is a DJ in D_PARTNERS
      // eslint-disable-next-line prefer-const
      let { data: djData } = await supabase
        .from("D_PARTNERS")
        .select("*")
        .eq("partner_type", "Disk Jockey")
        .eq("EMAIL", storedEmail)
        .single();

      if (djData) {
        setUserData(djData);
        setUserType("DJ");
        return;
      }

      // Check if user is a Company in D_CLIENTS
      // eslint-disable-next-line prefer-const
      let { data: companyData } = await supabase
        .from("D_CLIENTS")
        .select("*")
        .eq("EMAIL", storedEmail)
        .single();

      if (companyData) {
        setUserData(companyData);
        setUserType("Company");
        return;
      }
    };

    fetchData();
  }, [router]);

  if (!userData) {
    return <p>Loading dashboard...</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to Your Dashboard</h1>
      <h2 className="text-xl text-gray-700 mb-2">User Type: {userType}</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        {userType === "DJ" ? (
          <div>
            <h3 className="text-2xl font-semibold">DJ Profile</h3>
            <p><strong>Full Name:</strong> {userData.FIRST_NAME} {userData.LAST_NAME}</p>
            <p><strong>Email:</strong> {userData.EMAIL}</p>
            <p><strong>Expertise:</strong> {userData.EXPERTISE}</p>
            <p><strong>Specialty:</strong> {userData.SPECIALTY}</p>
          </div>
        ) : (
          <div>
            <h3 className="text-2xl font-semibold">Company Profile</h3>
            <p><strong>Client Name:</strong> {userData.FIRST_NAME} {userData.LAST_NAME}</p>
            <p><strong>Email:</strong> {userData.EMAIL}</p>
            <p><strong>Phone:</strong> {userData.PHONE}</p>
          </div>
        )}
      </div>
    </div>
  );
}
