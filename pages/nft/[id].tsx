import React from "react";

const NFTDropPage = () => {
  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
      {/* left */}
      <div className="bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="bg-gradient-to-br from-yellow-400 to-purple-600 p-2">
            <img
              src="https:/links.papareact.com/8sg"
              alt=""
              className="w-44 object-cover rounded-xl lg:h-96 lg:w-72"
            />
          </div>

          <div className="space-y-2 p-5 text-center">
            <h1 className="text-4xl font-bold text-white">PAPAFAM Apes</h1>
            <h2 className="text-xl text-gray-300">
              A Collection Of PAPAFAM Apes Who live & breath react!
            </h2>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="flex flex-1 flex-col lg:col-span-6 p-12">
        <header className="flex items-center justify-between ">
          <h1 className="sm:w-80 w-52 cursor-pointer text-xl font-extralight">
            The{" "}
            <span className="font-extrabold underline decoration-pink-600/50">
              PAPAFAM
            </span>{" "}
            NFT Market Place
          </h1>
          <button className="rounded-full bg-rose-400 px-4 py-2 text-xs font-bold text-white lg:px-5 lg:py-3 lg:text-base">
            Sign In
          </button>
        </header>
        <hr className="my-2 border" />

        {/* content */}
        <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:space-y-0 lg:justify-center">
            <img className="w-80 object-cover pb-10 lg:h-40 " src="https:/links.papareact.com/bdy" alt="" />
            <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">The PAPAFAM Ape Coding Club | NFT Drop</h1>
            <p className="p-2 text-xl text-green-500">13 / 21 NFT's claimed</p>
        </div>

        {/* mint button */}
        <button className="h-16 w-full bg-red-600 rounded-full text-white mt-10 font-bold">Mint NFT (0.01 ETH)</button>
      </div>
    </div>
  );
};

export default NFTDropPage;
