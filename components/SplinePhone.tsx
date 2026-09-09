"use client";

import { useEffect, useRef, useState } from "react";

export default function SplinePhone() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let app: any = null;
    let isMounted = true;

    async function initSpline() {
      if (!canvasRef.current) return;
      try {
        const { Application } = await import("@splinetool/runtime");
        if (!isMounted || !canvasRef.current) return;

        app = new Application(canvasRef.current);
        await app.load("/iphone14pro.splinecode");

        if (!isMounted) {
          app.dispose();
          return;
        }

        // Hide Notes text and Floor to leave ONLY the floating 3D iPhone
        const notes = app.findObjectByName("Notes");
        if (notes) notes.visible = false;

        const floor = app.findObjectByName("Floor");
        if (floor) floor.visible = false;

        // Set true transparent background
        if (app._scene && app._scene.activePage) {
          app._scene.activePage.bgColor.a = 0;
        }
        if (app._renderer) {
          app._renderer.clearAlphaOverride = 0;
          app._renderer.setClearAlpha(0);
        }
        if (canvasRef.current) {
          canvasRef.current.style.backgroundColor = "transparent";
        }

        // Disable accidental scroll zoom so page scrolling is smooth
        if (app._controls?.orbitControls) {
          app._controls.orbitControls.enableZoom = false;
        }

        setIsLoading(false);
      } catch (err) {
        console.error("Failed to load Spline 3D iPhone:", err);
      }
    }

    initSpline();

    return () => {
      isMounted = false;
      if (app) {
        try {
          app.dispose();
        } catch (e) {
          // ignore cleanup errors
        }
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[600px] sm:h-[680px] lg:h-[740px] flex items-center justify-center">
      {/* Loading state indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white/50 z-10">
          <div className="w-10 h-10 rounded-full border-2 border-brand-perk border-t-transparent animate-spin" />
          <span className="text-xs font-semibold tracking-wider uppercase text-white/60">Loading 3D iPhone...</span>
        </div>
      )}

      {/* Floating 3D WebGL Canvas */}
      <canvas
        ref={canvasRef}
        className={`w-full h-full max-w-[550px] cursor-grab active:cursor-grabbing outline-none transition-opacity duration-700 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Ambient glow behind the floating phone */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-brand-perk/15 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-brand-orange/10 rounded-full blur-[90px] pointer-events-none -z-10" />
    </div>
  );
}
