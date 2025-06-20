
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
    { name: "handwriting-2", size: "35px", paddingTop: "2.7cm" },
    { name: "handwriting-3", size: "35px", paddingTop: "2.6cm" },
    { name: "handwriting-4", size: "35px", paddingTop: "2.7cm" },
    { name: "handwriting-5", size: "35px", paddingTop: "2.6cm" },
    { name: "handwriting-6", size: "30px", paddingTop: "2.7cm" },
    { name: "handwriting-7", size: "35px", paddingTop: "2.6cm" },
    { name: "handwriting-8", size: "30px", paddingTop: "2.7cm" },
  ];

  return (
    <div className="w-full h-dvh max-w-[2000px] flex flex-col items-center z-30 mt-4">
      <div className="w-full flex flex-col items-center">
        <Header />
        <Herro />
        <div className="flex flex-row-reverse relative max-sm:flex-col">
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
    </div>
  );
}

// "use client";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";
// import { useRef, useState } from "react";
// import Loading from "./comonents/Loading";
// import PaginatedNotebook from "./comonents/Notebook";
// import { useMyContext } from "./ContextApi/CreateContext";
// import "./Globle.css";
// import Header from "./Home/Header";
// import Herro from "./Home/Herro";
// export default function Page() {
//   const { Answer } = useMyContext();
//   const notebookRef = useRef(null);
//   const Handwriting=[{name:'Deepali Font',size:"55px",paddingTop:'3.3cm'},{name:"GloriaHallelujah",size:'20px',paddingTop:'3cm'}]
//   const [HNumber,setHnumber]=useState(0)
//   const generatePDF = async () => {
//     const input = notebookRef.current;
//     const canvas = await html2canvas(input, { scale: 2 });
//     const imgData = canvas.toDataURL("image/png");

//     const pdf = new jsPDF("p", "mm", "a4");
//     const pdfWidth = pdf.internal.pageSize.getWidth();
//     const pdfHeight = pdf.internal.pageSize.getHeight();

//     const imgProps = pdf.getImageProperties(imgData);
//     const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;

//     let heightLeft = imgHeight;
//     let position = 0;

//     pdf.addImage(imgData, "PNG", 0, position, pdfWidth, imgHeight);
//     heightLeft -= pdfHeight;

//     while (heightLeft > 0) {
//       position = heightLeft - imgHeight;
//       pdf.addPage();
//       pdf.addImage(imgData, "PNG", 0, position, pdfWidth, imgHeight);
//       heightLeft -= pdfHeight;
//     }

//     pdf.save("notebook.pdf");
//   };

//   console.log(Answer);
//   return (
//     <div className="w-full h-dvh max-w-[2000px] flex flex-col items-center z-30 mt-4">
//       <div className="w-[100%] flex flex-col items-center ">
//         <Header />
//         <Herro />
//         <div className=" flex flex-row-reverse relative max-sm:flex-col">
//           {
//             Answer!=="Loading" && Answer!=='Default'?<div className=" sticky top-0 ">
//             <button
//               onClick={generatePDF}
//               className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
//             >
//               Generate PDF
//             </button>
//             <p className="p-2 bg-pink-100 m-2 cursor-pointer" onClick={()=>setHnumber(0)} >Handwriting 1</p>
//             <p className="p-2 bg-pink-100 m-2  cursor-pointer" onClick={()=>setHnumber(1)} style={{fontFamily:Handwriting[1].name}}>Handwriting 2</p>

//           </div>:<></>
//           }
//           {Answer == "Loading" ? (
//           <div className="flex flex-col justify-center items-center">
//             <Loading />
//             <p className="text-2xl">Generating Assignment...</p>
//           </div>
//         ) : Answer !== "Default" ? (
//           <div className="h-[80dvh]  overflow-y-scroll mt-4 max-sm:h-[10dvh] PaginatedNotebok">
//             <div ref={notebookRef} >
//               <PaginatedNotebook Handwriting={Handwriting[HNumber]}  />
//             </div>
//           </div>
//         ) : (
//           <></>
//         )}
//         </div>
//       </div>
//     </div>
//   );
// }
