"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push("/api/weather");
  };

  return (
    <div>
      <button
        className="bg-blue-300 cursor-pointer rounded-xl"
        onClick={handleButtonClick}
      >
        날씨 데이터 전체조회
      </button>
    </div>
  );
}
