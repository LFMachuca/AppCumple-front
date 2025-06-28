import React from "react";
import { CiUser } from "react-icons/ci";
import { MdDone } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
const Item = ({ id, name, email, attendance, additionalGuests }) => {
  return (
    <div className=" flex border-b justify-between items-center gap-4 py-1 px-2 ">
      <div className=" flex items-center gap-1 p-2 grow-1">
        <CiUser size={"2.5em"}/>
        <div>
          <p>{name}</p>
          <p className="text-sm ">{email}</p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <span>{attendance ? <MdDone/> : <RxCross1/>}</span>
      </div>
      <div className="flex items-center justify-end">
        <span>{additionalGuests}</span>
      </div>
    </div>
  );
};

export default Item;
