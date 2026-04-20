import React, { useRef, useEffect, useState } from 'react';
import { useScroll } from 'framer-motion';

const FRAME_COUNT = 240;

const ScrollytellingCanvas = () => {
  const canvasRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const [images, setImages] = useState([]);

  // Preload images
  useEffect(() => {
    const loadedImages = [];
    let loadedCount = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      const num = i.toString().padStart(3, '0');
      img.src = `/panther_moving/ezgif-frame-${num}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          drawFrame(1, loadedImages);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const drawFrame = (frameIndex, imgArray) => {
    if (!canvasRef.current || !imgArray[frameIndex - 1]) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = imgArray[frameIndex - 1];

    // Only draw if image is complete
    if (!img.complete || img.naturalWidth === 0) return;

    const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    const x = (canvas.width / 2) - (img.width / 2) * scale;
    const y = (canvas.height / 2) - (img.height / 2) * scale;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  };

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Re-draw current frame on resize
        const currentProgress = scrollYProgress.get();
        let frameIndex = Math.floor(currentProgress * (FRAME_COUNT - 1)) + 1;
        frameIndex = Math.max(1, Math.min(FRAME_COUNT, frameIndex));
        drawFrame(frameIndex, images);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call
    return () => window.removeEventListener('resize', handleResize);
  }, [scrollYProgress, images]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      let frameIndex = Math.floor(latest * (FRAME_COUNT - 1)) + 1;
      frameIndex = Math.max(1, Math.min(FRAME_COUNT, frameIndex));
      requestAnimationFrame(() => drawFrame(frameIndex, images));
    });

    return () => unsubscribe();
  }, [scrollYProgress, images]);

  return (
    <>
      <div className="canvas-wrapper">
        <canvas ref={canvasRef} />
      </div>
      <div className="canvas-overlay" />
    </>
  );
};

export default ScrollytellingCanvas;
