import Button from "@/app/components/Button";
import Image from "next/image";
import React from "react";

import image from "@/public/image.jpg";

const Mission = () => {
  return (
    <div>
      <h1>Mission page</h1>
      <div className="w-[400px]">
        <Image placeholder="blur" src={image} alt="image for mission" quality={100} />
      </div>
      <div className="my-5">
        <Button />
      </div>
    </div>
  );
};

export default Mission;
