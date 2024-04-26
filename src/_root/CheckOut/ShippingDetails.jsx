import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { PaystackButton } from "react-paystack";

export default function Grid({
  createUserAccount,
  isLoading,
  email,
  name,
  phone,
  isEdited,
}) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const savedTotal = localStorage.getItem("total");
    if (savedTotal) {
      setTotal(parseFloat(savedTotal));
    }
  }, []);

  const publicKey = "pk_test_07d817c447d4459aa3bd06f78eac1e72ff675e3c";
  const componentProps = {
    email: email,
    amount: total * 100,
    metadata: { name: name, phone: phone },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      toast.success("Thanks for doing business with us! Come back soon!!"),
    onClose: () => toast.error("Wait! Don't leave :("),
  };

  return (
    <section className="flex flex-col bg-white p-5 mt-3">
      <main className="flex flex-row justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-4">Product</h3>
          {/* <p className="text-xs font-medium mb-4 text-[#94a3b8]">
              MIRAGE MR-AT172 285/65
            </p> */}
          <p className="text-xs font-semibold mb-4">Subtotal</p>
          <p className="text-xs font-semibold mb-4">Total</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Subtotal</h3>
          {/* <p className="text-xs font-medium mb-4">${total.toFixed(2)}</p> */}
          <p className="text-xs font-medium mb-4">${total.toFixed(2)}</p>
          <p className="text-xl font-semibold mb-4 text-[#fcd34d]">
            ${total.toFixed(2)}
          </p>
        </div>
      </main>

      <hr className="h-px my-3 bg-gray-200 border-1 dark:bg-gray-400"></hr>
      <main className="flex flex-col gap-3">
        <section>
          <div className="flex flex-row gap-3">
            <input type="radio" className="bg-gray-50" />
            <p className="text-sm">Direct Bank Transfer</p>
          </div>
          <p className="text-sm font-normal w-[12cm] text-[#9ca3af]">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>
        </section>

        <section>
          <div className="flex flex-row gap-3">
            <input type="radio" className="bg-dark" />
            <p className="text-[#9ca3af] text-sm">Direct Bank Transfer</p>
          </div>
          <div className="flex flex-row gap-3">
            <input type="radio" className="bg-dark" />
            <p className="text-[#9ca3af] text-sm">Cash On Delivary</p>
          </div>
        </section>

        <p className="text-sm font-normal w-[12cm] text-[#9ca3af]">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our{" "}
          <span className="font-bold text-black">privacy policy.</span>
        </p>

        <div className="mt-4">
          <button
            // disabled={!isEdited}
            type="submit"
            onClick={createUserAccount}
            className="py-4 max-w-[5cm] mx-[4cm] justify-center px-12 me-2 mb-2 text-sm font-normal focus:outline-none bg-white rounded-xl border hover:bg-[#fcd34d] hover:text-white"
          >
            {isLoading ? (
              <div className="flex gap-3 justify-center items-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-4 border-white"></div>
                Loading...
              </div>
            ) : (
              <PaystackButton {...componentProps} />
            )}
          </button>
        </div>
      </main>
    </section>
  );
}
