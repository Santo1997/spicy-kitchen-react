const Headings = ({title, sub}) => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold uppercase">{title}</h1>
      <p className="text-base text-gray-400 my-5">{sub}</p>
      <hr className="bg-white h-9 w-[3px] mx-auto" />
    </div>
  );
};

export default Headings;
