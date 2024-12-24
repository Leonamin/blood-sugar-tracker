import { useEffect, useState } from 'react';

interface TextDimensions {
  width: number;
  height: number;
}

function getTextWidth(text: string, font?: string) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (!context) return 0;

  context.font = font || getComputedStyle(document.body).font;
  return context.measureText(text).width;
}

export function useTextDimensions(text: string, font?: string) {
  const [dimensions, setDimensions] = useState<TextDimensions>({ width: 0, height: 0 });

  useEffect(() => {
    const width = getTextWidth(text, font);
    // 높이는 대략적으로 폰트 크기의 1.2배로 계산
    const fontSize = parseInt(font?.match(/\d+/)?.[0] || 
      getComputedStyle(document.body).fontSize);
    const height = fontSize * 1.2;

    setDimensions({ width, height });
  }, [text, font]);

  return dimensions;
}

export function useTextsDimensions(texts: string[], font?: string) {
  const [dimensions, setDimensions] = useState<TextDimensions[]>([]);

  useEffect(() => {
    const newDimensions = texts.map(text => {
      const width = getTextWidth(text, font);
      const fontSize = parseInt(font?.match(/\d+/)?.[0] || 
        getComputedStyle(document.body).fontSize);
      const height = fontSize * 1.2;
      return { width, height };
    });

    setDimensions(newDimensions);
  }, [texts, font]);

  return {
    dimensions,
    maxWidth: Math.max(...dimensions.map(d => d.width)),
    maxHeight: Math.max(...dimensions.map(d => d.height))
  };
}