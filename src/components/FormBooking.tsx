import { z } from "zod";
import { Office } from "../types/type";
import { BASE_URL } from "../utils";
import { ChangeEvent } from "react";

interface FormBookingProps {
  office: Office | null;
  formErrors: z.ZodIssue[];
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FormBooking = ({
  office,
  formErrors,
  handleChange,
}: FormBookingProps) => {
  return (
    <div className="flex flex-col shrink-0 w-[500px] h-fit rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[30px] bg-white">
      <div className="flex items-center gap-4">
        <div className="flex shrink-0 w-[140px] h-[100px] rounded-[20px] overflow-hidden">
          <img
            src={`${BASE_URL}${office?.thumbnail}`}
            className="w-full h-full object-cover"
            alt="thumbnail"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-bold text-xl leading-[30px]">{office?.name}</p>
          <div className="flex items-center gap-[6px]">
            <img
              src="/assets/images/icons/location.svg"
              className="w-6 h-6"
              alt="icon"
            />
            <p className="font-semibold">{office?.city.name}</p>
          </div>
        </div>
      </div>
      <hr className="border-[#F6F5FD]" />
      <div className="flex flex-col gap-4">
        <h2 className="font-bold">Complete The Details</h2>
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-semibold">
            Full Name
          </label>
          <div className="flex items-center rounded-full border border-[#000929] px-5 gap-[10px] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#0D903A]">
            <img
              src="/assets/images/icons/security-user-black.svg"
              className="w-6 h-6"
              alt="icon"
            />
            <input
              type="text"
              name="name"
              id="name"
              className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#000929]"
              placeholder="Write your complete name"
              onChange={handleChange}
            />
          </div>
          {formErrors.find((err) => err.path.includes("name")) && (
            <p style={{ color: "red" }}>Name is required</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="font-semibold">
            Phone Number
          </label>
          <div className="flex items-center rounded-full border border-[#000929] px-5 gap-[10px] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#0D903A]">
            <img
              src="/assets/images/icons/call-black.svg"
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
        <div className="flex flex-col gap-2">
          <label htmlFor="date" className="font-semibold">
            Started At
          </label>
          <div className="flex items-center rounded-full border border-[#000929] px-5 gap-[10px] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#0D903A] overflow-hidden">
            <img
              src="/assets/images/icons/calendar-black.svg"
              className="w-6 h-6"
              alt="icon"
            />
            <input
              type="date"
              name="started_at"
              id="started_at"
              className="relative appearance-none outline-none w-full py-3 font-semibold [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:opacity-0"
              onChange={handleChange}
            />
          </div>
          {formErrors.find((err) => err.path.includes("started_at")) && (
            <p style={{ color: "red" }}>Started date is required</p>
          )}
        </div>
      </div>
      <hr className="border-[#F6F5FD]" />
      <div className="flex items-center gap-3">
        <img
          src="/assets/images/icons/shield-tick.svg"
          className="w-[30px] h-[30px]"
          alt="icon"
        />
        <p className="font-semibold leading-[28px]">
          Kami akan melindungi privasi Anda sebaik mungkin sehingga dapat fokus
          bekerja
        </p>
      </div>
      <hr className="border-[#F6F5FD]" />
      <div className="flex flex-col gap-[30px]">
        <h2 className="font-bold">Bonus Packages For You</h2>
        <div className="grid grid-cols-2 gap-[30px]">
          <div className="flex items-center gap-4">
            <img
              src="/assets/images/icons/coffee.svg"
              className="w-[34px] h-[34px]"
              alt="icon"
            />
            <div className="flex flex-col gap-[2px]">
              <p className="font-bold text-lg leading-[24px]">Extra Snacks</p>
              <p className="text-sm leading-[21px]">Work-Life Balance</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img
              src="/assets/images/icons/group.svg"
              className="w-[34px] h-[34px]"
              alt="icon"
            />
            <div className="flex flex-col gap-[2px]">
              <p className="font-bold text-lg leading-[24px]">Free Move</p>
              <p className="text-sm leading-[21px]">Anytime 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormBooking;
