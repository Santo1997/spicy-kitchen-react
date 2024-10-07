import bg from "../../../assets/kitchenbg.jpg";

const Hero = () => {
  return (
    <div
      className="hero min-h-[calc(100vh-45px)] bg-cover bg-center bg-no-repeat bg-[#141414] bg-opacity-80"
      style={{
        backgroundImage: `url(${bg})`,
      }}>
      <div className="bg-black bg-opacity-0"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="text-white bg-opacity-20 bg-black">
          <h2 className="mb-5 text-lg font-bold uppercase">Delight in an exceptional moment</h2>
          <h1 className="mb-10 text-6xl font-bold uppercase tracking-[.7rem]">Spicy Kitchen</h1>
          <div className="flex justify-around">
            <button className="btn btn-outline border-white text-white text-base hover:bg-stone-300 rounded-sm">See Menu</button>
            <button className="btn btn-outline border-white text-white text-base hover:bg-stone-300 rounded-sm">Book Your Table</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
