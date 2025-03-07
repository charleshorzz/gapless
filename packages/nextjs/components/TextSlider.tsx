import { useEffect, useState } from "react";
import { IconCircle } from "@tabler/icons-react";

export const TextSlider = ({ chunks }: { chunks: string[] }) => {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage(prev => (prev + 1) % chunks.length);
    }, 10000000000);

    return () => clearInterval(interval);
  }, [chunks.length]);

  return (
    <div className="relative h-full flex flex-col">
      {/* Current Page Content */}
      <div className="prose max-w-none flex-1 overflow-y-auto">{chunks[currentPage]}</div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {chunks.map((_, index) => (
          <IconCircle
            key={index}
            className={`h-4 w-4 cursor-pointer ${index === currentPage ? "text-black" : "text-gray-300"}`}
            onClick={() => setCurrentPage(index)}
          />
        ))}
      </div>
    </div>
  );
};
