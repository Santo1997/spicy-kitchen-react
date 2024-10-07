import Headings from "../../utilities/Headings";
import bg from "../../../assets/img.jpg";

const Visit = () => {
  return (
    <section className="mt-16">
      <Headings title="Visit Us" sub="Our Location" />
      <div className="grid grid-cols-2 items-center gap-28 py-16 px-28">
        <div
          style={{
            backgroundImage: `url(${bg})`,
          }}
          className="h-96 text-white bg-cover bg-center bg-no-repeat bg-opacity-5">
          <div className="flex items-end p-16 text-4xl text-white h-full w-full bg-opacity-20 bg-black">Laguna Beach</div>
        </div>
        <div
          style={{
            backgroundImage: `url(${bg})`,
          }}
          className="h-96 text-white bg-cover bg-center bg-no-repeat bg-opacity-5">
          <div className="flex items-end p-16 text-4xl text-white h-full w-full bg-opacity-20 bg-black">San Francisco</div>
        </div>
      </div>
    </section>
  );
};

export default Visit;
