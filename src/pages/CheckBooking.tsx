import { ChangeEvent, FormEvent, useState } from "react";
import Navbar from "../components/Navbar";
import { z } from "zod";
import { BookingDetail } from "../types/type";
import FormCheckBooking from "../components/FormCheckBooking";
import DetailBooking from "../components/DetailBooking";
import { viewBookingSchema } from "../types/validationBooking";
import axiosInstance from "../api/axios";
import { AxiosError } from "axios";

const CheckBooking = () => {
  const [formData, setFormData] = useState({
    phone_number: "",
    booking_trx_id: "",
  });

  const [formErrors, setFormErrors] = useState<z.ZodIssue[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [bookingDetail, setBookingDetail] = useState<BookingDetail | null>(
    null
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const validation = viewBookingSchema.safeParse(formData);

    if (!validation.success) {
      setFormErrors(validation.error.issues);
      return;
    }

    setIsLoading(true);

    try {
      const { data } = await axiosInstance.post("/check-booking", {
        ...formData,
      });

      setBookingDetail(data.data);
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
      <div
        id="Banner"
        className="relative w-full h-[240px] flex items-center shrink-0 overflow-hidden -mb-[50px]"
      >
        <h1 className="text-center mx-auto font-extrabold text-[40px] leading-[60px] text-white mb-5 z-20">
          View Your Booking Details
        </h1>
        <div className="absolute w-full h-full bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,#000000_91.83%)] z-10" />
        <img
          src="assets/images/thumbnails/thumbnail-details-5.png"
          className="absolute w-full h-full object-cover object-top"
          alt=""
        />
      </div>
      <section
        id="Check-Booking"
        className="relative flex flex-col w-[930px] shrink-0 gap-[30px] mx-auto mb-[100px] z-20"
      >
        <FormCheckBooking
          isLoading={isLoading}
          formErrors={formErrors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        {error ? (
          <p className="text-center">{error}</p>
        ) : (
          bookingDetail && <DetailBooking data={bookingDetail} />
        )}
      </section>
    </>
  );
};

export default CheckBooking;
