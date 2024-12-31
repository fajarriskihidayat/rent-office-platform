import { ChangeEvent, FormEvent } from "react";
import { z } from "zod";

interface FormCheckBookingProps {
  isLoading: boolean;
  formErrors: z.ZodIssue[];
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent) => void;
}

const FormCheckBooking = ({
  isLoading,
  formErrors,
  handleChange,
  handleSubmit,
}: FormCheckBookingProps) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-end rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[16px] bg-white"
    >
      <div className="flex flex-col w-full gap-2">
        <label className="font-semibold">Booking TRX ID</label>
        <div className="flex items-center rounded-full border border-[#000929] px-5 gap-[10px] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#0D903A]">
          <img
            src="assets/images/icons/receipt-text-black.svg"
            className="w-6 h-6"
            alt="icon"
          />
          <input
            type="text"
            name="booking_trx_id"
            id="booking_trx_id"
            className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#000929]"
            placeholder="Write your booking trx id"
            onChange={handleChange}
          />
        </div>
        {formErrors.find((err) => err.path.includes("booking_trx_id")) && (
          <p style={{ color: "red" }}>Booking TRX id is required</p>
        )}
      </div>
      <div className="flex flex-col w-full gap-2">
        <label htmlFor="phone" className="font-semibold">
          Phone Number
        </label>
        <div className="flex items-center rounded-full border border-[#000929] px-5 gap-[10px] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#0D903A]">
          <img
            src="assets/images/icons/call-black.svg"
            className="w-6 h-6"
            alt="icon"
          />
          <input
            type="tel"
            name="phone_number"
            id="phone_number"
            className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#000929]"
            placeholder="Write your valid number"
            onChange={handleChange}
          />
        </div>
        {formErrors.find((err) => err.path.includes("phone_number")) && (
          <p style={{ color: "red" }}>Phone number is required</p>
        )}
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="flex items-center justify-center rounded-full p-[12px_30px] gap-3 bg-[#0D903A] font-bold text-[#F7F7FD]"
      >
        <span className="text-nowrap">
          {isLoading ? "Loading..." : "Check Booking"}
        </span>
      </button>
    </form>
  );
};

export default FormCheckBooking;
