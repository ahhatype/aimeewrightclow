"use client";

import { Card, CardTitle } from "@/components/ui/card";
import Draggable from "react-draggable";
import { useRef, useState } from "react";

interface Poem {
  title: string;
  content: string;
  actionImage: string;
}

interface Rotation {
  cardSpin: number;
  textSpin: number;
}

interface PoemCardsProps {
  poems: Poem[];
  rotations: Rotation[];
}

export default function PoemCards({ poems, rotations }: PoemCardsProps) {
  const nodeRefs = useRef(poems.map(() => ({ current: null as HTMLDivElement | null })));
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const handleDragStart = (imagePath: string) => () => {
    setActiveImage(imagePath);
    setTimeout(() => setActiveImage(null), 1500);
  };

  return (
    <>
      <div className="relative flex items-center justify-center min-h-[inherit]">
        {poems.map((poem, index) => {
          const { cardSpin, textSpin } = rotations[index];
          const zIndex = poems.length - index;
          return (
            <Draggable key={poem.title} nodeRef={nodeRefs.current[index]} onStart={handleDragStart(poem.actionImage)}>
              <div
                ref={(el) => { nodeRefs.current[index].current = el; }}
                className="absolute cursor-grab active:cursor-grabbing"
                style={{ zIndex }}
              >
                <Card className="bg-plum-900/90 w-fit shadow-md shadow-black/10 p-12" style={{ transform: `rotate(${cardSpin}deg)` }}>
                  <CardTitle className="sr-only">{poem.title}</CardTitle>
                  <div style={{ transform: `rotate(${textSpin}deg)` }}>
                    <p className="whitespace-pre-line text-white font-light leading-[1.3]">{poem.content}</p>
                  </div>
                </Card>
              </div>
            </Draggable>
          );
        })}
      </div>
      {activeImage && (
        <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center animate-appear-dissolve">
          <img
            src={activeImage}
            alt=""
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </>
  );
}
