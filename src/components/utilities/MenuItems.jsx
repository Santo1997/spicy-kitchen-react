import Headings from "./Headings";
import Items from "./Items";

const MenuItems = ({title, sub, menus}) => {
  return (
    <>
      <div className="mb-16">
        <Headings title={title} sub={sub} />
        <div className="grid grid-cols-3 gap-x-16 gap-y-5 mt-5">
          <Items items={menus} />
        </div>
      </div>
    </>
  );
};

export default MenuItems;
