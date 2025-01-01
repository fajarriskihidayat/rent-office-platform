import { AxiosError } from "axios";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { z } from "zod";
import axiosInstance from "../api/axios";
import FormBooking from "../components/FormBooking";
import Navbar from "../components/Navbar";
import TransactionDetailCard from "../components/TransactionDetailCard";
import { Office } from "../types/type";
import { bookingSchema } from "../types/validationBooking";
import { generateUniqueCode } from "../utils";

const BookOffice = () => {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();

  const [office, setOffice] = useState<Office | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
    started_at: "",
    office_space_id: "",
    total_amount: 0,
  });

  const [formErrors, setFormErrors] = useState<z.ZodIssue[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [uniqueCode, setUniqueCode] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  useEffect(() => {
    getOffice();
  }, []);

  const getOffice = async () => {
    try {
      const { data } = await axiosInstance.get(`/office/${slug}`);

      setOffice(data.data);

      const generateCode = generateUniqueCode();
      const grandTotal = data.data.price - generateCode;

      setUniqueCode(generateCode);
      setTotalAmount(grandTotal);

      setFormData({
        ...formData,
        office_space_id: data.data.id,
        total_amount: grandTotal,
      });

      setLoading(false);
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.data) {
          setError(error.response.data.message);
        } else setError(error.message);
      }
      setLoading(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const validation = bookingSchema.safeParse(formData);

    if (!validation.success) {
      setFormErrors(validation.error.issues);
      return;
    }

    setIsLoading(true);

    try {
      const { data } = await axiosInstance.post("/booking-transaction", {
        ...formData,
      });

      navigate("/success-booking", {
        state: {
          office,
          booking: data.data,
        },
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.data) {
          setError(error.response.data.message);
        } else setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      {loading ? (
        <p className="text-center p-5">Loading...</p>
      ) : error ? (
        <p className="text-center p-5">{error}</p>
      ) : (
        <>
          <div
            id="Banner"
            className="relative w-full h-[240px] flex items-center shrink-0 overflow-hidden -mb-[50px]"
          >
            <h1 className="text-center mx-auto font-extrabold text-[40px] leading-[60px] text-white mb-5 z-20">
              Start Booking Your Office
            </h1>
            <div className="absolute w-full h-full bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,#000000_91.83%)] z-10" />
            <img
              src="/assets/images/thumbnails/thumbnail-details-4.png"
              className="absolute w-full h-full object-cover object-top"
              alt=""
            />
          </div>
          <form
            onSubmit={handleSubmit}
            className="relative flex justify-center max-w-[1130px] mx-auto gap-[30px] mb-20 z-20"
          >
            <FormBooking
              office={office}
              formErrors={formErrors}
              handleChange={handleChange}
            />
            <TransactionDetailCard
              office={office}
              uniqueCode={uniqueCode}
              totalAmount={totalAmount}
              isLoading={isLoading}
            />
          </form>
        </>
      )}
    </>
  );
};

export default BookOffice;
