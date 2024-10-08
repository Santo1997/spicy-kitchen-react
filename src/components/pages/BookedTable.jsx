import {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookedTable = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <section className="min-h-[calc(100vh-130px)] mb-10">
      <div
        className="hero h-[30rem]"
        style={{
          backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}>
        <div className="hero-overlay bg-opacity-75 bg-black"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <p className="mb-3 text-lg uppercase">Enjoy an unforgettable Experience </p>
            <h1 className="text-4xl font-bold">Book Your Table</h1>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 items-start">
        <div className="p-10 flex justify-center text-gray-400 text-base">
          <div>
            <p>We will confirm your reservation within 24 hours via Email.</p> <br />
            <p className="font-bold text-white">OPENING TIMES</p> <br />
            <p>
              <span>Monday - Friday</span> <br /> <span>7am - 6pm</span>
            </p>
            <br />
            <p>
              <span>Saturday/Sunday</span> <br /> <span>8am - 6pm</span>
            </p>
          </div>
        </div>
        <div className="p-10">
          <p>For more than 10 people, please email us at reservations@soulkitchen.com</p> <br />
          <form className="flex flex-col gap-4">
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <div>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} placeholderText="Select Date" isClearable className="w-96 input input-bordered" />
              </div>
            </div>

            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Time</span>
              </label>
              <div>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
                  isClearable
                  className="w-96 input input-bordered"
                />
              </div>
            </div>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Person</span>
              </div>
              <select className="w-96 select select-bordered">
                <option disabled selected>
                  Pick one
                </option>
                <option value="2">2 Person</option>
                <option value="3">3 Person</option>
                <option value="4">4 Person</option>
                <option value="5">5 Person</option>
                <option value="6">6 Person</option>
              </select>
            </label>

            <div className="form-control mt-6">
              <button className="btn w-80 btn-primary">Find A Table</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookedTable;
