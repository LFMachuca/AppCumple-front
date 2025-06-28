import React from "react";
import { CiUser } from "react-icons/ci";
const Item = ({ id, name, confirmedAt, email }) => {
  return (
    <div className=" border-b flex items-center justify-between p-2 ">
      <div className="flex items-center justify-center gap-2">
        <CiUser size={"2em"} />
        <div className="">
          <p>{name}</p>
          <p>{email}</p>
        </div>
      </div>
      <span>{confirmedAt ? "Attended" : "Not Attended"}</span>
    </div>
  );
};

export default Item;
