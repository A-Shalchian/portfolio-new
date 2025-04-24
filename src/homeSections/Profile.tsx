import pfpic from "../assets/images/pfpic.jpg";

export const Profile = () => {
  return (
    <section className="w-full py-12 px-4 flex justify-center items-center mt-4">
      <div className="bg-[#1E2934] rounded-lg shadow-2xl max-w-md w-full overflow-hidden border border-gray-700 relative">
        {/* Profile Header with Image */}
        <div className="flex flex-col items-center pt-8 pb-4">
          <div className="relative w-[150px] h-[150px] md:w-[180px] md:h-[180px] rounded-full overflow-hidden shadow-md border-4 border-gray-400 mb-4">
            <img
              src={pfpic}
              alt="Profile headshot"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-1 leading-none tracking-tight">
            Arash Shalchian
          </h1>
          <h2 className="text-lg md:text-xl text-gray-400 font-medium tracking-tight">
            Software Developer
          </h2>
        </div>

        {/* Description */}
        <div className="px-6 py-4 ">
          <p className="text-gray-600 text-center">
            Passionate about creating beautiful, responsive web applications
            with React and modern web technologies.
          </p>
        </div>
      </div>
    </section>
  );
};
