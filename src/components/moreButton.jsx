"use client";
import BeatLoader from "react-spinners/BeatLoader";
import { useState } from "react";
export default function MoreButton({ data, size, style }) {
  let [loading, setLoading] = useState(false);
  return (
    <>
      <button
        className={style}
        onClick={() => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
          }, 5000);
        }}
      >
        {loading ? (
          <BeatLoader color="#808080" size={size ? size : 12} />
        ) : (
          data
        )}
      </button>
    </>
  );
}
