import React, { useState } from "react";
import { toast } from "react-toastify";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase-config";

export default function FormField() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [country, setCountry] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [town, setTown] = useState("");
  const [province, setProvince] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [isLoading, setLoading] = useState(false);

  const createUserAccount = async () => {
    setLoading(true);
    if (!firstName || !lastName || !country || !streetAddress || !town || !province || !zipCode || !phone || !email || !additionalInfo) {
      toast.error("All fields are required", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setLoading(false);
      return;
    }

    const billing_details = {
      firstName,
      lastName,
      companyName,
      country,
      streetAddress,
      town,
      province,
      zipCode,
      phone,
      additionalInfo,
      email,
      appName: "Ecommerce",
      time: new Date(), // Simplified date setting
    };

    try {
      const billingRef = collection(db, "billing_details");
      await addDoc(billingRef, billing_details);
      toast.success("Account successfully created!");
      // Clear form fields
      setFirstName("");
      setLastName("");
      setCompanyName("");
      setCountry("");
      setStreetAddress("");
      setTown("");
      setProvince("");
      setZipCode("");
      setPhone("");
      setEmail("");
      setAdditionalInfo("");
    } catch (error) {
      console.error(error);
      toast.error("Failed to create account.");
    }
    setLoading(false);
  };

  return (
    <section className="px-5">
      <h1 className="text-3xl font-bold mb-5">Billing details</h1>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label className="block mb-2 text-sm font-medium ">First name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Akorede"
            className="bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">Last name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Salaudeen"
            className="bg-gray-30 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3.5"
            required
          />
        </div>
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium">
          Company Name (Option)
        </label>
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className=" mb-5 bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300"
          required
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium">
          Country / Region
        </label>
        <select
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className=" mb-4 bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300"
        >
          <option >Choose a country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium">Street address</label>
        <input
          type="text"
          value={streetAddress}
          onChange={(e) => setStreetAddress(e.target.value)}
          className=" mb-5 bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300"
          required
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium">Town / City</label>
        <input
          type="text"
          value={town}
          onChange={(e) => setTown(e.target.value)}
          className=" mb-5 bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium">Province</label>
        <select
          type="text"
          value={province}
          onChange={(e) => setProvince(e.target.value)}
          className="bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300"
        >
          <option >Choose a country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium">Zip code</label>
        <input
          type="text"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          className="bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium">Phone</label>
        <input
          type="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium">Email address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300"
          required
        />
      </div>

      <div className="mb-6">
        <input
          type="type"
          value={additionalInfo}
          onChange={(e) => setAdditionalInfo(e.target.value)}
          className="bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300"
          placeholder="Additional Information"
          required
        />
      </div>
    </section>
  );
}
