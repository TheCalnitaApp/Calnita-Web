import React, { Component } from "react";
import Userreviewcard from "./Userreviewcard";

const Reviewscard = () => {
  return (
    <div className="flex flex-col items-center justify-between w-[auto] h-auto bg-white rounded-xl px-6 py-4">
      <span className="mt-2 font-bold">Reviews</span>
      <div className="w-full mt-3 h-3/4 flex flex-col items-start">
        <Userreviewcard
          rating={2}
          userName="Miraim Enene"
          userPhoto="errerer"
          productName="Calvin kien Beauty"
        />
      </div>
      <div>
        <span className="mb-3">Paginator</span>
      </div>
    </div>
  );
};

export default Reviewscard;
