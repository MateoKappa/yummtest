"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
function Form() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  console.log(data);
  return (
    <form
      className="z-10 relative flex flex-col w-full mt-[100px] "
      onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
    >
      <div className=" flex flex-col font-sans gap-[42px]  w-full text-[20px]">
        <div className="grid   ">
          <label>Your Full Name</label>
          <input
            {...register("firstName")}
            placeholder="Value"
            className="p-2 b border h-[65px] border-solid border-[#CBD2E0] rounded-[9px] px-[18px] text-[25px] font-Inter"
          />
        </div>
        <div className="grid ">
          <label>Phone</label>
          <input
            {...register("Phone")}
            className="p-2 b border h-[65px] border-solid border-[#CBD2E0] rounded-[9px] px-[18px] text-[25px] font-Inter"
            placeholder="Value"
          />
        </div>
        <div className="grid ">
          <label>E-mail</label>
          <input
            {...register("E-mail")}
            className="p-2 b border h-[65px] border-solid border-[#CBD2E0] rounded-[9px] px-[18px] text-[25px] font-Inter"
            placeholder="Value"
          />
        </div>
        <div className="grid ">
          <label>Your Message</label>
          <textarea
            {...register("aboutYou")}
            placeholder="Value"
            className="p-2 b border h-[140px] border-solid border-[#CBD2E0] rounded-[9px] px-[18px] text-[25px] font-Inter"
          />
        </div>
      </div>
      <input
        type="submit"
        value="SUBMIT"
        className="m-auto text-[16px] text-white items-center gap-2 w-[105px] h-[43px] bg-[#00A1AD] rounded-[20px] mt-[34px]"
      />
    </form>
  );
}

export default Form;
