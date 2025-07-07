
"use client";
import { useRef, useState } from "react";
import { useMyContext } from "./ContextApi/CreateContext";
import Header from "./Home/Header";
import Herro from "./Home/Herro";

import DownloadSection from "./comonents/Downloadpdf";
import NotebookDisplay from "./comonents/NoteBookDisplay";
import "./Globle.css";

export default function Page() {
  const { Answer } = useMyContext();
  const notebookRef = useRef(null);
  const [HNumber, setHnumber] = useState(0);

  const Handwriting = [
    { name: "Deepali Font", size: "55px", paddingTop: "3.3cm" },
    { name: "GloriaHallelujah", size: "20px", paddingTop: "3cm" },
    { name: "handwriting-2", size: "35px", paddingTop: "2.8cm" },
    { name: "handwriting-3", size: "35px", paddingTop: "3.4cm" },
    { name: "handwriting-4", size: "35px", paddingTop: "3.4cm" },
    { name: "handwriting-5", size: "35px", paddingTop: "3.3cm" },
    { name: "handwriting-6", size: "30px", paddingTop: "3.5cm" },
    { name: "handwriting-7", size: "35px", paddingTop: "3.3cm" },
    { name: "handwriting-8", size: "30px", paddingTop: "2.85cm" },
  ];

  return (
    <div className="w-full h-dvh max-w-[2000px] flex flex-col items-center z-30 mt-4">
      <div className="w-full flex flex-col items-center">
        <Header />
        <Herro />
        <div className="flex flex-row-reverse relative FlexingCol">
          {Answer !== "Loading" && Answer !== "Default" && (
            <DownloadSection
              generatePDFRef={notebookRef}
              setHnumber={setHnumber}
              Handwriting={Handwriting}
            />
          )}

          <NotebookDisplay
            Answer={Answer}
            notebookRef={notebookRef}
            Handwriting={Handwriting}
            HNumber={HNumber}
          />
          
        </div>
        
      </div>
      <p  className="text-white fixed top-[-400px]">d</p>
    </div>
  );
}
