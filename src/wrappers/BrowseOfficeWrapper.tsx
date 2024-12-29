import { useEffect, useState } from "react";
import OfficeCard from "../components/OfficeCard";
import { Office } from "../types/type";
import axiosInstance from "../api/axios";
import { AxiosError } from "axios";
import { Link } from "react-router-dom";

const BrowseOfficeWrapper = () => {
  const [offices, setOffices] = useState<Office[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getCities();
  }, []);

  const getCities = async () => {
    try {
      const { data } = await axiosInstance.get("/offices");

      setOffices(data.data);
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

  return (
    <section
      id="Fresh-Space"
      className="flex flex-col gap-[30px] w-full max-w-[1130px] mx-auto mt-[100px] mb-[120px]"
    >
      <h2 className="font-bold text-[32px] leading-[48px] text-nowrap text-center">
        Browse Our Fresh Space.
        <br />
        For Your Better Productivity.
      </h2>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center p-5">{error}</p>
      ) : (
        <div className="grid grid-cols-3 gap-[30px]">
          {offices.map((office, i) => (
            <Link to={`/office/${office.slug}`}>
              <OfficeCard office={office} key={i} />
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default BrowseOfficeWrapper;
