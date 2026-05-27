import { useState, useEffect } from 'react';

import img1 from '../assets/north/image-1.jpg';
import img2 from '../assets/north/image-2.jpg';
import img3 from '../assets/north/image-3.jpeg';
import img4 from '../assets/north/image-4.jpeg';
import img5 from '../assets/north/image-5.jpeg';
import img6 from '../assets/north/image-6.jpeg';

export interface CardItem {
  id: number;
  src: string;
  matched: boolean;
}

const CARD_IMAGES = [
  { src: img1, matched: false },
  { src: img2, matched: false },
  { src: img3, matched: false },
  { src: img4, matched: false },
  { src: img5, matched: false },
  { src: img6, matched: false },
];

export function MemoPlay() {
  const [cards, setCards] = useState<CardItem[]>([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState<CardItem | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<CardItem | null>(null);
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    const shuffledCards = [...CARD_IMAGES, ...CARD_IMAGES]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card: CardItem) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            }
            return card;
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  useEffect(() => {
    shuffleCards();
  }, []);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  return (
    <div className="my-8 flex flex-col items-center">
      <button
        onClick={shuffleCards}
        className="mb-8 rounded bg-primary px-6 py-2 text-white transition-colors hover:bg-blue-800"
      >
        Nuevo Juego
      </button>

      <div className="grid grid-cols-3 gap-4 md:grid-cols-4 md:gap-6">
        {cards.map((card) => {
          const isFlipped = card === choiceOne || card === choiceTwo || card.matched;

          return (
            <div key={card.id} className="relative h-24 w-24 sm:h-32 sm:w-32 perspective-1000">
              <div
                className={`relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] cursor-pointer`}
                onClick={() => {
                  if (!disabled && !card.matched && card !== choiceOne) {
                    handleChoice(card);
                  }
                }}
              >
                {/* Back (Visible initially) */}
                <div
                  className={`absolute inset-0 flex items-center justify-center rounded-xl bg-secondary shadow-md border-2 border-blue-200 transition-opacity duration-300 ${
                    isFlipped ? 'opacity-0 z-0' : 'opacity-100 z-10'
                  }`}
                >
                  <span className="text-4xl font-bold text-white">?</span>
                </div>

                {/* Front (Image) */}
                <div
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    isFlipped ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <img
                    src={card.src}
                    alt="card front"
                    className="h-full w-full rounded-xl object-cover shadow-md border-2 border-primary"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <p className="mt-8 text-lg font-medium text-slate-700">Turnos: {turns}</p>
    </div>
  );
}
