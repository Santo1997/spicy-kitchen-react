import {FaRegHeart} from "react-icons/fa";
import {FiMail} from "react-icons/fi";
import {PiShoppingBagBold} from "react-icons/pi";
import {TiLeaf} from "react-icons/ti";

const Intro = () => {
  return (
    <section className="min-h-screen flex justify-around items-center">
      <div>
        <div className="w-1/3 mx-auto p-5 text-center mb-16">
          <h1 className="text-5xl font-bold mb-10 text-white">The Taste of Asia</h1>
          <p className="text-base text-gray-300">
            <span>
              SPICY KITCHEN, founded in 2024, is dedicated to all those who love to wander far and wide. We invite you on a wholesome culinary adventure, where you’ll explore
              undiscovered gourmet experiences.
            </span>
            <br /> <br />
            <span> Thank you for creating lasting memories with us.</span>
          </p>
        </div>

        <div className=" flex flex-row justify-around gap-16">
          <div className="w-96 flex flex-col justify-center text-center text-white">
            <PiShoppingBagBold className="text-6xl mx-auto mb-3" />
            <h1 className="text-lg font-bold mb-6">We Deliver to Your Home</h1>
            <p className="text-base text-gray-300">Order on-demand or schedule delivery up to a week in advance.</p>
          </div>
          <div className="w-96 flex flex-col justify-center text-center text-white">
            <FaRegHeart className="text-6xl mx-auto mb-3" />
            <h1 className="text-lg font-bold mb-6">Follow on Social Media</h1>
            <p className="text-base text-gray-300">Or subscribe to our newsletter to stay updated.</p>
          </div>
          <div className="w-96 flex flex-col justify-center text-center text-white">
            <TiLeaf className="text-6xl mx-auto mb-3" />
            <h1 className="text-lg font-bold mb-6">From Farm to Table</h1>
            <p className="text-base text-gray-300">An exceptional culinary experience starts with only the best ingredients.</p>
          </div>
          <div className="w-96 flex flex-col justify-center text-center text-white">
            <FiMail className="text-6xl mx-auto mb-3" />
            <h1 className="text-lg font-bold mb-6">We&#39;d Love to Hear from You!</h1>
            <p className="text-base text-gray-300">Whether it&#39;s feedback or if you&#39; want to join our lovely team.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
