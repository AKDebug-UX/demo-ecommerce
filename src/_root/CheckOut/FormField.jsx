import React from "react";

export default function FormField() {
  return (
    <form className="px-5">
      <h1 className="text-3xl font-bold mb-5">Billing details</h1>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label for="first_name" className="block mb-2 text-sm font-medium ">
            First name
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300"
            required
          />
        </div>
        <div>
          <label for="last_name" className="block mb-2 text-sm font-medium">
            Last name
          </label>
          <input
            type="text"
            id="last_name"
            className="bg-gray-30 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3.5"
            required
          />
        </div>
      </div>

      <div>
        <label for="company" className="block mb-2 text-sm font-medium">
          Company Name (Option)
        </label>
        <input
          type="text"
          id="company"
          className=" mb-5 bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300"
          required
        />
      </div>
      <div>
        <label for="phone" className="block mb-2 text-sm font-medium">
          Country / Region
        </label>
        <select
          type="phone"
          id="email"
          className=" mb-4 bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300"
        >
          <option selected>Choose a country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>

      <div>
        <label for="website" className="block mb-2 text-sm font-medium">
          Street address
        </label>
        <input
          type="url"
          id="website"
          className=" mb-5 bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300"
          required
        />
      </div>
      <div>
        <label for="visitors" className="block mb-2 text-sm font-medium">
          Town / City
        </label>
        <input
          type="text"
          id="visitors"
          className=" mb-5 bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300"
          required
        />
      </div>
      <div class="mb-6">
        <label for="email" className="block mb-2 text-sm font-medium">
          Province
        </label>
        <select
          type="email"
          id="email"
          className="bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300"
        >
          <option selected>Choose a country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>

      <div class="mb-6">
        <label for="password" className="block mb-2 text-sm font-medium">
          Zip code
        </label>
        <input
          type="password"
          id="password"
          className="bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300"
          required
        />
      </div>
      <div class="mb-6">
        <label
          for="confirm_password"
          className="block mb-2 text-sm font-medium"
        >
          Phone
        </label>
        <input
          type="password"
          id="confirm_password"
          className="bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300"
          required
        />
      </div>

      <div class="mb-6">
        <label
          for="confirm_password"
          className="block mb-2 text-sm font-medium"
        >
          Email address
        </label>
        <input
          type="password"
          id="confirm_password"
          className="bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300"
          required
        />
      </div>

      <div class="mb-6">
        <input
          type="password"
          id="confirm_password"
          className="bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300"
          placeholder="Additional Information"
          required
        />
      </div>
    </form>
  );
}