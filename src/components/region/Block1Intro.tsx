import React from "react";
import { ZoomableImage } from "../ui/ZoomableImage";

interface Block1IntroProps {
  data: {
    videoSrc: string;
    audioSrc: string;
    audioTitle: string;
    quotes: string[];
    landscapes: string[];
  };
}

export const Block1Intro: React.FC<Block1IntroProps> = ({ data }) => {
  return (
    <div className="flex flex-col space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#020042] mb-2">
          BLOQUE 1 — Introducción
        </h2>
      </div>

      {/* Video Section */}
      <div className="w-full bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center min-h-[300px]">
        {data.videoSrc ? (
          <iframe
            width="560"
            height="315"
            src={data.videoSrc}
            title="Video de YouTube"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="text-gray-400 flex flex-col items-center">
            <svg
              className="w-12 h-12 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Video introductorio (30s - 1min) [Espacio para video]</span>
          </div>
        )}
      </div>

      {/* Audio Section */}
      {data.audioSrc && (
        <div className="bg-blue-50 p-4 rounded-lg flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <svg
              className="w-6 h-6 text-[#307ffe]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
              />
            </svg>
            <span className="font-medium text-[#020042]">
              {data.audioTitle}
            </span>
          </div>
          {data.audioSrc ? (
            <audio
              src={data.audioSrc}
              controls
              className="h-8"
              title={data.audioTitle}
            />
          ) : (
            <span className="text-sm text-gray-500 italic">
              [Espacio para audio]
            </span>
          )}
        </div>
      )}

      {/* Quotes */}
      {data.quotes && data.quotes.length > 0 && (
        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#307ffe]">
          <h3 className="font-semibold text-lg mb-3 text-[#020042]">
            Frases representativas
          </h3>
          <ul className="list-disc list-inside space-y-2">
            {data.quotes.map((quote, idx) => (
              <li key={idx} className="text-gray-700 italic">
                "{quote}"
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Landscapes (Images) */}
      <div>
        <h3 className="font-semibold text-lg mb-3 text-[#020042]">
          Paisajes emblemáticos
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.landscapes.map((src, idx) => (
            <div
              key={idx}
              className="h-32 rounded-lg flex items-center justify-center overflow-hidden"
            >
              <ZoomableImage
                src={src}
                className="w-full h-full"
                placeholderText={`[Paisaje ${idx + 1}]`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
