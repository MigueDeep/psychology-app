import { useState, useEffect } from 'react';

import northImg1 from '../assets/north/image-1.jpg';
import northImg2 from '../assets/north/image-2.jpg';
import southImg1 from '../assets/south/image-4.jpeg';
import southImg2 from '../assets/south/image-5.jpeg';
import centerImg1 from '../assets/center/image-1.jpeg';
import centerImg2 from '../assets/center/image-2.jpeg';

interface ImageItem {
  id: string;
  src: string;
  region: string;
}

interface WordItem {
  id: string;
  label: string;
}

const ALL_IMAGES: ImageItem[] = [
  { id: 'n1', src: northImg1, region: 'Norte' },
  { id: 'n2', src: northImg2, region: 'Norte' },
  { id: 's1', src: southImg1, region: 'Sur' },
  { id: 's2', src: southImg2, region: 'Sur' },
  { id: 'c1', src: centerImg1, region: 'Centro' },
  { id: 'c2', src: centerImg2, region: 'Centro' },
];

const WORDS: WordItem[] = [
  { id: 'Norte', label: 'Zona Norte' },
  { id: 'Sur', label: 'Zona Sur' },
  { id: 'Centro', label: 'Zona Centro' },
];

export function JoinWord() {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [words, setWords] = useState<WordItem[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Set<string>>(new Set());
  const [errorId, setErrorId] = useState<string | null>(null);

  useEffect(() => {
    // Shuffle images and words on mount
    setImages([...ALL_IMAGES].sort(() => Math.random() - 0.5));
    setWords([...WORDS].sort(() => Math.random() - 0.5));
  }, []);

  const handleImageClick = (id: string, region: string) => {
    if (matchedPairs.has(id)) return;
    
    if (selectedWord) {
      checkMatch(id, region, selectedWord);
    } else {
      setSelectedImage(id);
      setErrorId(null);
    }
  };

  const handleWordClick = (wordId: string) => {
    if (selectedImage) {
      const img = images.find(i => i.id === selectedImage);
      if (img) {
        checkMatch(selectedImage, img.region, wordId);
      }
    } else {
      setSelectedWord(wordId);
      setErrorId(null);
    }
  };

  const checkMatch = (imgId: string, imgRegion: string, wordId: string) => {
    if (imgRegion === wordId) {
      // Match
      setMatchedPairs(prev => new Set(prev).add(imgId).add(wordId));
      setSelectedImage(null);
      setSelectedWord(null);
      setErrorId(null);
    } else {
      // Error
      setErrorId(imgId + wordId);
      setSelectedImage(null);
      setSelectedWord(null);
      setTimeout(() => setErrorId(null), 1000);
    }
  };

  const resetGame = () => {
    setMatchedPairs(new Set());
    setSelectedImage(null);
    setSelectedWord(null);
    setErrorId(null);
    setImages([...ALL_IMAGES].sort(() => Math.random() - 0.5));
    setWords([...WORDS].sort(() => Math.random() - 0.5));
  };

  return (
    <div className="my-8 flex flex-col items-center">
      <button
        onClick={resetGame}
        className="mb-8 rounded bg-primary px-6 py-2 text-white transition-colors hover:bg-blue-800"
      >
        Reiniciar Juego
      </button>

      <p className="mb-6 text-center text-slate-600 max-w-lg">
        Selecciona una imagen y luego selecciona la zona a la que pertenece para unirlas.
      </p>

      <div className="flex w-full max-w-5xl justify-between gap-8 flex-col md:flex-row">
        {/* Images Column */}
        <div className="grid grid-cols-2 gap-4 w-full md:w-2/3">
          {images.map(img => {
            const isMatched = matchedPairs.has(img.id);
            const isSelected = selectedImage === img.id;
            const isError = errorId?.includes(img.id);

            return (
              <div
                key={img.id}
                onClick={() => handleImageClick(img.id, img.region)}
                className={`relative h-40 rounded-xl border-4 cursor-pointer transition-all duration-300 overflow-hidden ${
                  isMatched ? 'border-green-500 opacity-50 cursor-default' :
                  isSelected ? 'border-yellow-400 scale-105' :
                  isError ? 'border-red-500 scale-95' :
                  'border-blue-200 hover:border-blue-400 hover:scale-105'
                }`}
              >
                <img src={img.src} alt="Región" className="w-full h-full object-cover" />
                {isMatched && (
                  <div className="absolute inset-0 bg-green-500 bg-opacity-30 flex items-center justify-center">
                    <span className="text-4xl text-white">✓</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Words Column */}
        <div className="flex flex-col gap-6 w-full md:w-1/3 justify-center">
          {words.map(word => {
            const isSelected = selectedWord === word.id;
            const isError = errorId?.includes(word.id);
            // Matched words stay visible but maybe indicate they are completed if we want, 
            // but multiple images match one word, so we don't disable the word entirely 
            // until all its images are matched. Let's just keep them active.

            return (
              <div
                key={word.id}
                onClick={() => handleWordClick(word.id)}
                className={`flex h-20 items-center justify-center rounded-xl border-4 font-heading text-2xl cursor-pointer transition-all duration-300 ${
                  isSelected ? 'border-yellow-400 bg-yellow-50 scale-105 text-yellow-700' :
                  isError ? 'border-red-500 bg-red-50 text-red-700 scale-95' :
                  'border-primary bg-white text-primary hover:bg-blue-50 hover:scale-105'
                }`}
              >
                {word.label}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
