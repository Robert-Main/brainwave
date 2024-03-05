import { Loader2 } from "lucide-react";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center gap-2 h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <Loader2
        size={20}
        className="!font-extrabold text-purple-700 animate-spin"
      />
      AI is Generating...
    </div>
  );
};

export default Generating;
