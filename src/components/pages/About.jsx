import Headings from "../utilities/Headings";
import bg from "../../assets/img.jpg";
import {useEffect, useState} from "react";

const About = () => {
  const [staffs, setStaffs] = useState([]);

  useEffect(() => {
    fetch("../unit/staff.json")
      .then((res) => res.json())
      .then((data) => setStaffs(data));
  }, []);

  return (
    <section className="h-[calc(100vh-130px)] py-10 px-20">
      <Headings title="About Us" liner={false} />

      <div className="grid grid-cols-4 gap-5 mt-16">
        {staffs.map((staff) => (
          <div
            className="hero place-items-end h-[40rem]"
            key={staff.id}
            style={{
              backgroundImage: `url(${bg})`,
            }}>
            <div className="hero-overlay bg-opacity-70 bg-black w-full"></div>
            <div className="w-full h-48 items-end text-center">
              <div className="text-white text-lg">
                <p>{staff.position}</p>
                <h1 className="text-2xl font-bold mt-1 mb-6"> {staff.name}</h1>
                <p className="text-gray-400">Favorite Food: {staff.favorite_food}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
