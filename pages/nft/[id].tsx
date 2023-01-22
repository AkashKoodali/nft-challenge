import React, { useEffect, useState } from "react";
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import { GetServerSideProps } from "next";
import { sanityClient, urlFor } from "../../sanity";
import { Collection } from "../../typings";
import Link from "next/link";
import { BigNumber } from "ethers";
import { NFTDrop } from "@thirdweb-dev/sdk";

interface Props {
  collection: Collection
}

const NFTDropPage = ({collection}: Props) => {

  // const [claimedSupply, setClaimedSupply] = useState<Number>(0);
  // const [totalSupply, setTotalSupply] = useState<BigNumber>();
  // const [loading, setLoading] = useState<boolean>(true);
  // const [priceInEth, setPriceInEth] = useState<string>();

  const address = "Oxsjshjhjhd738393983839te76";
  const loading = false;
  
  

  
  

  //Auth
  // const connectWithMetamask = useMetamask();
  // const address = useAddress();
  // const disconnect = useDisconnect();
  
  
  //--


  // useEffect(() => {
  //   if(!nftDrop) return

  //   const fetchPrice = async () => {
  //     const claimConditions = await nftDrop.claimConditions.getAll();
  //     setPriceInEth(claimConditions?.[0].currencyMetadata.displayValue)
  //   }
  //   fetchPrice();

  // }, [nftDrop]);

  // useEffect(() => {
  //   if(!nftDrop) return

  //   const fetchNFTDropData = async () => {
  //     setLoading(true);

  //     const claimed = await nftDrop.totalClaimedSupply();
  //     const total = await nftDrop.totalSupply();

  //     setTotalSupply(total);


  //     setLoading(false);
  //   }
  //   fetchNFTDropData();

  // }, [nftDrop]);

  // console.log(totalSupply?.toNumber());
  

  // const mintNft = () => {
  //   if(!nftDrop || !address) return;

  //   const quantity = 1; // how many unique NFT's you want to claim

  //   setLoading(true);

  //   nftDrop?.claimTo(address, quantity).then(async (tx) => {
  //     const receipt = tx[0].receipt //the transaction receipt
  //     const claimedTokenId = tx[0].id //the id of the NFT claimed
  //     const claimedNFT = await tx[0].data // (optional) get the claimed NFT metadata


  //     console.log(receipt);
  //     console.log(claimedTokenId);
  //     console.log(claimedNFT);


  //   }).catch((err) => console.log(err)
  //   ).finally(() => {
  //     setLoading(false);
  //   });
  // }
  

  return (
    
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
      
      {/* left */}
      <div className="bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="bg-gradient-to-br from-yellow-400 to-purple-600 p-2 rounded-xl">
            <img
              src={urlFor(collection.previewImage).url()}
              alt=""
              className="w-44 object-cover rounded-xl lg:h-96 lg:w-72"
            />
          </div>

          <div className="space-y-2 p-5 text-center">
            <h1 className="text-4xl font-bold text-white">{collection.nftCollectionName}</h1>
            <h2 className="text-xl text-gray-300">
            {collection.description}
            </h2>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="flex flex-1 flex-col lg:col-span-6 p-12">
        <header className="flex items-center justify-between ">

          <Link href={'/'}>
            <h1 className="sm:w-80 w-52 cursor-pointer text-xl font-extralight">
              The{" "}
              <span className="font-extrabold underline decoration-pink-600/50">
                BEARVERSE
              </span>{" "}
              NFT Market Place
            </h1>
          </Link>

          <button
            onClick={() => {}}
            className="rounded-full bg-rose-400 px-4 py-2 text-xs font-bold text-white lg:px-5 lg:py-3 lg:text-base"
          >
            {address ? "Singn Out" : "Singn In"}
          </button>
        </header>
        <hr className="my-2 border" />


        {address && <p className="text-center text-sm text-rose-400">You're logged in with wallet 
        {address?.substring(0, 5)}.....{address?.substring(address.length - 5)}</p>}

        {/* content */}
        <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:space-y-0 lg:justify-center">
          <img
            className="w-80 object-cover pb-10 lg:h-40 "
            src={urlFor(collection.mainImage).url()}
            alt=""
          />
          <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">
          {collection?.title}
          </h1>

          { loading ? (
             <p className="animate-pulse p-2 text-xl text-green-500">
             Loading Supply Count...</p>
          ) : (
            <p className="p-2 text-xl text-green-500">
              NFT's claimed</p>
          )}

          { loading && (
            <img 
            className="h-52 w-52 object-contain"
            src="https://cdn.hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif" alt="" />
          )}

         
        </div>

        {/* mint button */}
        <button 
        // onClick={mintNft}
        disabled={loading || !address }
        className="h-14 w-[80%] mx-auto bg-red-600 rounded-full text-white mt-2 font-bold disabled:bg-gray-400">
          {/* { loading ? (
            <>Loading</>
          ) : claimedSupply === totalSupply?.toNumber() ? (
            <>SOLD OUT</>
          ) : !address ? (
            <>Sign in to Mint</>
          ): ( */}
            <span className="font-bold">Mint NFT ({"priceInEth"} ETH)</span> 
        
          
        </button>
      </div>
    </div>
  );
};

export default NFTDropPage;


export const getServerSideProps: GetServerSideProps = async ({params}) => {
  const query = `*[_type == "collection" && slug.current == $id][0]{
    _id,
    title,
    address,
    description,
    nftCollectionName,
    mainImage{
    asset,
  },
  previewImage{
    asset
  },
  slug{
    current
  },
  creator-> {
    _id,
    name,
    address,
    slug {
    current
  },
  },
  }`

  const collection = await sanityClient.fetch(query, {
    id: params?.id
  });

  if(!collection) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      collection
    }
  }

}
