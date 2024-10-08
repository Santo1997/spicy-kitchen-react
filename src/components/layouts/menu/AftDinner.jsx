import Items from "../../utilities/Items";

const AftDinner = ({menus}) => {
  const {teas, desserts, after_dinner_drinks, coffee} = menus;
  console.log("menus: ", menus);

  return (
    <>
      <div className="grid grid-cols-3 my-5 mx-32 bg-[#191a19] p-10">
        <div className="row-span-2 border-4 border-[#292a29] p-10">
          <h1 className="text-3xl text-white font-bold uppercase">Tea Menu</h1>
          <p className="text-base text-gray-400 mt-2">Tea Rituals for Focus, Health & Slowness</p>
          <div className="flex flex-col gap-5 mt-10">
            <Items items={teas} />
          </div>
        </div>
        <div className="col-span-2 px-14">
          <h1 className="text-3xl text-white font-bold uppercase">Desserts</h1>
          <div className="grid grid-cols-2 gap-3 gap-x-16 mt-6">
            <Items items={desserts} />
          </div>
        </div>
        <div className="col-span-1 py-10 px-14">
          <h1 className="text-3xl text-white font-bold uppercase">After Dinner Drinks</h1>
          <div className="flex flex-col gap-3 gap-x-16 mt-6">
            <Items items={after_dinner_drinks} />
          </div>
        </div>

        <div className="col-span-1 my-14 mx-5 p-6 bg-black h-fit">
          <h1 className="text-3xl text-white font-bold uppercase">Coffee</h1>
          <div className="flex flex-col gap-3 gap-x-16 mt-6">
            <Items items={coffee} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AftDinner;
