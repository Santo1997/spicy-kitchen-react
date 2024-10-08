const Lunch = ({menus}) => {
  const {lunches} = menus;
  return (
    <>
      <div className="flex justify-center my-5 mx-32 bg-[#191a19] p-10">
        <div className=" text-center">
          <h1 className="text-3xl text-white font-bold uppercase">Lunch Menu</h1>
          <p className="text-base text-gray-400 my-2">11:30 am - 3:00 pm</p>

          {lunches.map((menu) => (
            <p className="flex flex-col mt-5" key={menu.id}>
              <span className="text-lg text-white font-bold">{menu.name}</span>
              <span className="text-sm text-gray-400">{menu.ingredients}</span>
              <span className="text-base text-gray-400 font-bold">{menu.price}</span>
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Lunch;
