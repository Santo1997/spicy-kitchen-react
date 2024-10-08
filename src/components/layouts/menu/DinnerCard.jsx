import Items from "../../utilities/Items";

const DinnerCard = ({menus}) => {
  const {small_bites, the_land, the_sea, the_sky, sides} = menus;

  return (
    <>
      <div className="grid grid-cols-3 my-5 mx-32 bg-[#191a19] p-10">
        <div className="row-span-2 border-4 border-[#292a29] p-10">
          <h1 className="text-3xl text-white font-bold uppercase">Small Bites</h1>
          <p className="text-base text-gray-400 mt-2">Order for the table and spread the love.</p>
          <div className="flex flex-col gap-5 mt-10">
            <Items items={small_bites} />
          </div>
        </div>
        <div className="col-span-2 px-16">
          <h1 className="text-3xl text-white font-bold uppercase">The Land</h1>
          <div className="grid grid-cols-2 gap-3 gap-x-16 mt-6">
            <Items items={the_land} />
          </div>
        </div>
        <div className="col-span-2 py-10 px-16">
          <h1 className="text-3xl text-white font-bold uppercase">The Sea</h1>
          <div className="grid grid-cols-2 gap-3 gap-x-16 mt-6">
            <Items items={the_sea} />
          </div>
        </div>
        <div className="bg-[#292a29] p-10 mt-14">
          <h1 className="text-3xl text-white font-bold uppercase">Sides</h1>
          <div className="flex flex-col gap-5 mt-10">
            <Items items={sides} />
          </div>
        </div>
        <div className="col-span-2 px-16">
          <h1 className="text-3xl text-white font-bold uppercase">The Sky</h1>
          <div className="grid grid-cols-2 gap-3 gap-x-16 mt-6">
            <Items items={the_sky} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DinnerCard;
