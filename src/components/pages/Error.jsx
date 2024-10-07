import {Link} from "react-router-dom";

const Error = () => {
  return (
    <section className="h-screen py-10 bg-white font-serif">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="text-center">
            <div className="bg-[url('https://i.ibb.co.com/NWpDY5b/error.gif')] w-screen h-[550px] bg-center bg-no-repeat">
              <h1 className="text-8xl">404</h1>
            </div>

            <div className="-mt-12">
              <h3 className="text-2xl">Look like you&lsquo;re lost</h3>
              <p>The page you are looking for is not available!</p>
              <Link to="/" className="text-white bg-[#39ac31] py-2 px-5 mt-5 inline-block">
                Go to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
