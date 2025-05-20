"use client";

import { useState } from "react";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import { useDispatch } from "react-redux";
import { searchQuery } from "@/store/slices/searchSlice";


export function VanishInput() {

  const dispatch = useDispatch()
  const placeholders = [
    "search...",
    "rent car...",
    "How to assemble your own PC?",
  ];

  const [query, setQuery] = useState<string>('')


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)

  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(searchQuery(query))

  };
  return (
    <div className="text-[#fff] bg-[#fff]   w-full">

      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        value={query}
        setValue={setQuery}
        onChange={handleChange}
        onSubmit={onSubmit}
        
      />
    </div>
  );
}
