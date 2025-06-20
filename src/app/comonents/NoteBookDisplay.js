"use client";
import Loading from "./Loading";
import PaginatedNotebook from "./Notebook";

export default function NotebookDisplay({ Answer, notebookRef, Handwriting, HNumber }) {
  if (Answer === "Loading") {
    return (
      <div className="flex flex-col justify-center items-center">
        <Loading />
        <p className="text-2xl">Generating Assignment...</p>
      </div>
    );
  }

  if (Answer === "Default") return null;

  return (
    <div className="h-[80dvh] overflow-y-scroll mt-4 max-sm:h-[10dvh] PaginatedNotebok">
      <div ref={notebookRef}>
        <PaginatedNotebook Handwriting={Handwriting[HNumber]} />
      </div>
    </div>
  );
}
