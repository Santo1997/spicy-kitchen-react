import Headings from "./Headings";

const MenuItems = ({title, sub, menus}) => {
  return (
    <>
      <div className="mb-16">
        <Headings title={title} sub={sub} />
        <div className="grid grid-cols-3 gap-x-16 gap-y-5 mt-5">
          {menus.map((menu) => (
            <div className="flex justify-between items-center gap-40" key={menu.id}>
              <p>
                <span className="text-lg text-white font-bold">{menu.name}</span>
                <br />
                <span className="text-sm text-gray-400">{menu.ingredients}</span>
              </p>
              <p className="text-base text-gray-400 font-bold">{menu.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MenuItems;
