"use client";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function DownloadSection({
  generatePDFRef,
  setHnumber,
  Handwriting,
}) {
  const generatePDF = async () => {
    const input = generatePDFRef.current;
    const canvas = await html2canvas(input, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgProps = pdf.getImageProperties(imgData);
    const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, pdfWidth, imgHeight);
    heightLeft -= pdfHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, pdfWidth, imgHeight);
      heightLeft -= pdfHeight;
    }

    pdf.save("notebook.pdf");
  };

  return (
    <div className="sticky top-0 FontSelectorContainer">
      <button
        onClick={generatePDF}
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
      >
        Generate PDF
      </button>
      <p
        className="text-white animate-[fadeInOut_2s_ease-in-out_infinite] AlertDesktop"
        style={{
          animationName: "fadeInOut",
          animationDuration: "2s",
          animationIterationCount: "infinite",
          animationTimingFunction: "ease-in-out",
        }}
      >
        To access full customization features, please switch to a desktop
        device.
      </p>

      <div className="FontSelector">
        <p
          className="p-2 bg-pink-100 m-2 cursor-pointer"
          onClick={() => setHnumber(0)}
        >
          Handwriting 1
        </p>
        <p
          className="p-2 bg-pink-100 m-2 cursor-pointer "
          onClick={() => setHnumber(1)}
          style={{ fontFamily: Handwriting[1].name }}
        >
          Handwriting 2
        </p>
        <p
          className="p-2 bg-pink-100 m-2 cursor-pointer text-xl"
          onClick={() => setHnumber(2)}
          style={{ fontFamily: Handwriting[2].name }}
        >
          Handwriting 3
        </p>
        <p
          className="p-2 bg-pink-100 m-2 cursor-pointer text-xl"
          onClick={() => setHnumber(3)}
          style={{ fontFamily: Handwriting[3].name }}
        >
          Handwriting 4
        </p>
        <p
          className="p-2 bg-pink-100 m-2 cursor-pointer text-xl"
          onClick={() => setHnumber(4)}
          style={{ fontFamily: Handwriting[4].name }}
        >
          Handwriting 5
        </p>
        <p
          className="p-2 bg-pink-100 m-2 cursor-pointer text-xl"
          onClick={() => setHnumber(5)}
          style={{ fontFamily: Handwriting[5].name }}
        >
          Handwriting 6
        </p>
        <p
          className="p-2 bg-pink-100 m-2 cursor-pointer text-xl"
          onClick={() => setHnumber(6)}
          style={{ fontFamily: Handwriting[6].name }}
        >
          Handwriting 7
        </p>
        <p
          className="p-2 bg-pink-100 m-2 cursor-pointer text-xl"
          onClick={() => setHnumber(7)}
          style={{ fontFamily: Handwriting[7].name }}
        >
          Handwriting 8
        </p>
        <p
          className="p-2 bg-pink-100 m-2 cursor-pointer text-xl"
          onClick={() => setHnumber(8)}
          style={{ fontFamily: Handwriting[8].name }}
        >
          Handwriting 9
        </p>
      </div>
    </div>
  );
}
