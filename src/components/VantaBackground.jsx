import { useEffect, useRef } from "react";
import * as THREE from "three";
import DOTS from "vanta/dist/vanta.dots.min";

export const VantaBackground = () => {
  const ref = useRef(null);

  useEffect(() => {
    const effect = DOTS({
      el: ref.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x99e600,
      color2: 0x99e600,
      backgroundColor: 0x070b14,
      size: 3,
      spacing: 35,
      showLines: true,
    });

    return () => effect.destroy();
  }, []);

  return <div ref={ref} className="fixed inset-0 z-0" />;
};