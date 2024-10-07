import img from "../../../assets/img.jpg";
import Headings from "../../utilities/Headings";

const GalleryView = () => {
  return (
    <div className="min-h-screen mt-16">
      <Headings title="Gallery" sub="Our Gallery" />
      <div className="grid grid-cols-5 h-screen mt-5">
        <div className="col-span-1 overflow-hidden">
          <img src={img} alt="" className="w-full h-full object-cover object-center" />
        </div>
        <div className="col-span-2 overflow-hidden">
          <img src={img} alt="" className="w-full h-full object-cover object-center" />
        </div>
        <div className="col-span-1 row-span-2 overflow-hidden">
          <img src={img} alt="" className="w-full h-full object-cover object-center" />
        </div>
        <div className="col-span-1 overflow-hidden">
          <img src={img} alt="" className="w-full h-full object-cover object-center" />
        </div>
        <div className="col-span-2 overflow-hidden">
          <img src={img} alt="" className="w-full h-full object-cover object-center" />
        </div>
        <div className="col-span-1 overflow-hidden">
          <img src={img} alt="" className="w-full h-full object-cover object-center" />
        </div>
        <div className="col-span-1 overflow-hidden">
          <img src={img} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default GalleryView;
