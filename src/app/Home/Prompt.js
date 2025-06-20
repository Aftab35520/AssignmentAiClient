"use client";
import Image from "next/image";
import { useState } from "react";
import pngwing from "../asset/awd.png";
import image from "../asset/download.png";
import PdfLogo from "../asset/PdfLogo.png";
import LiveUrl from "../comonents/Url";
import { useMyContext } from "../ContextApi/CreateContext";
export default function Prompt() {
  const { setAnswer } = useMyContext();
  const [question, setQuestion] = useState("");
  const [file, setfile] = useState(null);

  const GetApiResponse = async (e) => {
    setAnswer("Loading")
    const formData = new FormData();
    if (file && question) {
      formData.append("pdf", file);
      formData.append("question", question);
    } else if (file) {
      formData.append("pdf", file);
    } else if (question) {
      formData.append("question", question);
    }
    setQuestion("");
    setfile(null);
    try {
      const response = await fetch(`${LiveUrl}extract`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setAnswer(data.text);
    } catch (error) {
      setAnswer("Default");
    }
  };

  return (
    <div className="w-[110%] h-[70px] max-lg:w-[90%]   rounded-[40px] mt-8 bg-white text-black flex items-center p-5">
      <Image src={image} alt="d" width={50} />
      <div style={{ position: "relative" }}>
        <input
        
          type="file"
          accept="application/pdf"
          id="file-upload"
          onChange={(e) => setfile(e.target.files[0])}
          style={{
            display: "none", // Hide the default file input
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%", // Make the input cover the area
            height: "100%", // Make the input cover the area
            opacity: 0,
          }}
        />
        <label htmlFor="file-upload">
          <Image
            src={PdfLogo}
            alt="Upload PDF"
            width={40}
            height={40}
            className="cursor-pointer"
          />
        </label>
      </div>
      <input
        
        type="text"
        placeholder="Enter Prompt.."
        value={question}
        className="w-full m-1.5 p-1.5 outline-0 text-black/50"
        onChange={(e) => setQuestion(e.target.value)}
      />
      <Image

        src={pngwing}
        alt=""
        width={37}
        className={`${
          question || file ? "cursor-pointer" : "pointer-events-none grayscale" 
        }`}
        onClick={GetApiResponse}
      />
    </div>
  );
}
