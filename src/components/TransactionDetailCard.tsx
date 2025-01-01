import { Office } from "../types/type";
import { rupiahFormat } from "../utils";

interface TransactionDetailCardProps {
  office: Office | null;
  uniqueCode: number;
  totalAmount: number;
  isLoading: boolean;
}

const TransactionDetailCard = ({
  office,
  uniqueCode,
  totalAmount,
  isLoading,
}: TransactionDetailCardProps) => {
  return (
    <div className="flex flex-col shrink-0 w-[400px] h-fit rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[30px] bg-white">
      <h2 className="font-bold">Your Order Details</h2>
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <p className="font-semibold">Duration</p>
          <p className="font-bold">{office?.duration} Days Working</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-semibold">Sub Total</p>
          <p className="font-bold">{office && rupiahFormat(office?.price)}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-semibold">Unique Code</p>
          <p className="font-bold text-[#FF2D2D]">-Rp {uniqueCode}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-semibold">Grand Total</p>
          <p className="font-bold text-[22px] leading-[33px] text-[#0D903A]">
            {rupiahFormat(totalAmount)}
          </p>
        </div>
        <div className="relative rounded-xl p-[10px_20px] gap-[10px] bg-[#000929] text-white">
          <img
            src="/assets/images/icons/Polygon 1.svg"
            className="absolute -top-[15px] right-[10px] "
            alt=""
          />
          <p className="font-semibold text-sm leading-[24px] z-10">
            Tolong perhatikan kode unik berikut ketika melakukan pembayaran
            kantor
          </p>
        </div>
      </div>
      <hr className="border-[#F6F5FD]" />
      <h2 className="font-bold">Send Payment to</h2>
      <div className="flex flex-col gap-[30px]">
        <div className="flex items-center gap-3">
          <div className="w-[71px] flex shrink-0">
            <img
              src="/assets/images/logos/bca.svg"
              className="w-full object-contain"
              alt="bank logo"
            />
          </div>
          <div className="flex flex-col gap-[2px]">
            <div className="flex items-center gap-1">
              <p className="font-semibold">FirstOffice Angga</p>
              <img
                src="/assets/images/icons/verify.svg"
                className="w-[18px] h-[18px]"
                alt="icon"
              />
            </div>
            <p>8008129839</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-[71px] flex shrink-0">
            <img
              src="/assets/images/logos/mandiri.svg"
              className="w-full object-contain"
              alt="bank logo"
            />
          </div>
          <div className="flex flex-col gap-[2px]">
            <div className="flex items-center gap-1">
              <p className="font-semibold">FirstOffice Angga</p>
              <img
                src="/assets/images/icons/verify.svg"
                className="w-[18px] h-[18px]"
                alt="icon"
              />
            </div>
            <p>12379834983281</p>
          </div>
        </div>
      </div>
      <hr className="border-[#F6F5FD]" />
      <button
        type="submit"
        disabled={isLoading}
        className="flex items-center justify-center w-full rounded-full p-[16px_26px] gap-3 bg-[#0D903A] font-bold text-[#F7F7FD]"
      >
        <span>{isLoading ? "Loading..." : "I’ve Made The Payment"}</span>
      </button>
    </div>
  );
};

export default TransactionDetailCard;
