import { BookingDetail } from "../types/type";
import { BASE_URL, dateFormat, rupiahFormat } from "../utils";

interface DetailBookingProps {
  data: BookingDetail;
}

const DetailBooking = ({ data }: DetailBookingProps) => {
  return (
    <div id="Result" className="grid grid-cols-2 gap-[30px]">
      <div className="flex flex-col h-fit shrink-0 rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[30px] bg-white">
        <div className="flex items-center gap-4">
          <div className="flex shrink-0 w-[140px] h-[100px] rounded-[20px] overflow-hidden">
            <img
              src={`${BASE_URL}${data.office.thumbnail}`}
              className="w-full h-full object-cover"
              alt="thumbnail"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl leading-[30px]">
              {data.office.name}
            </p>
            <div className="flex items-center gap-[6px]">
              <img
                src="/assets/images/icons/location.svg"
                className="w-6 h-6"
                alt="icon"
              />
              <p className="font-semibold">{data.office.city?.name}</p>
            </div>
          </div>
        </div>
        <hr className="border-[#F6F5FD]" />
        <div className="flex flex-col gap-4">
          <h2 className="font-bold">Customer Details</h2>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Full Name</h3>
            <div className="flex items-center rounded-full px-5 py-3 gap-[10px] bg-[#F7F7FD]">
              <img
                src="/assets/images/icons/security-user-black.svg"
                className="w-6 h-6"
                alt="icon"
              />
              <p className="font-semibold">{data.name}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Phone Number</h3>
            <div className="flex items-center rounded-full px-5 py-3 gap-[10px] bg-[#F7F7FD]">
              <img
                src="/assets/images/icons/call-black.svg"
                className="w-6 h-6"
                alt="icon"
              />
              <p className="font-semibold">{data.phone_number}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Started At</h3>
            <div className="flex items-center rounded-full px-5 py-3 gap-[10px] bg-[#F7F7FD]">
              <img
                src="/assets/images/icons/calendar-black.svg"
                className="w-6 h-6"
                alt="icon"
              />
              <p className="font-semibold">
                {dateFormat(data.started_at, "DD MMM YYYY")}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Ended At</h3>
            <div className="flex items-center rounded-full px-5 py-3 gap-[10px] bg-[#F7F7FD]">
              <img
                src="/assets/images/icons/calendar-black.svg"
                className="w-6 h-6"
                alt="icon"
              />
              <p className="font-semibold">
                {dateFormat(data.ended_at, "DD MMM YYYY")}
              </p>
            </div>
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
            Privasi Anda aman bersama kami.
          </p>
        </div>
      </div>
      <div className="flex flex-col h-fit shrink-0 rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[30px] bg-white">
        <h2 className="font-bold">Order Details</h2>
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <p className="font-semibold">Status Pembayaran</p>
            {data.is_paid ? (
              <p className="rounded-full w-fit p-[6px_16px] bg-[#0D903A] font-bold text-sm leading-[21px] text-[#F7F7FD]">
                SUCCESS
              </p>
            ) : (
              <p className="rounded-full w-fit p-[6px_16px] bg-[#FF852D] font-bold text-sm leading-[21px] text-[#F7F7FD]">
                PENDING
              </p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <p className="font-semibold">Booking TRX ID</p>
            <p className="font-bold">{data.booking_trx_id}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-semibold">Duration</p>
            <p className="font-bold">{data.duration} Days Working</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-semibold">Total Amount</p>
            <p className="font-bold text-[22px] leading-[33px] text-[#0D903A]">
              {rupiahFormat(data.total_amount)}
            </p>
          </div>
        </div>
        <hr className="border-[#F6F5FD]" />
        <h2 className="font-bold">Bonus Packages For You</h2>
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/assets/images/icons/coffee.svg"
              className="w-[34px] h-[34px]"
              alt="icon"
            />
            <div className="flex flex-col gap-[2px]">
              <p className="font-bold">Extra Snacks</p>
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
              <p className="font-bold">Free Move</p>
              <p className="text-sm leading-[21px]">Anytime 24/7</p>
            </div>
          </div>
        </div>
        <hr className="border-[#F6F5FD]" />
        <a
          href=""
          className="flex items-center justify-center w-full rounded-full border border-[#000929] p-[12px_20px] gap-3 bg-white font-semibold"
        >
          <img
            src="/assets/images/icons/call-black.svg"
            className="w-6 h-6"
            alt="icon"
          />
          <span>Call Customer Service</span>
        </a>
      </div>
    </div>
  );
};

export default DetailBooking;
