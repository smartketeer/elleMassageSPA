"use client";

import { useState } from "react";
import { Check, QrCode } from "lucide-react";

export default function LoyaltyCard() {
  const [stamps, setStamps] = useState(0);

  const handleStamp = () => {
    if (stamps < 10) {
      setStamps((prev) => prev + 1);
    } else {
      setStamps(0); // reset after completion
    }
  };

  return (
    <div className="bg-spa-card rounded-2xl p-8 shadow-sm border border-spa-accent/20 flex flex-col items-center md:flex-row gap-8 max-w-4xl mx-auto my-12">
      {/* Left side: Punch card */}
      <div className="flex-1 w-full">
        <h3 className="text-3xl font-bold mb-2 text-spa-text">Elle's Spa Rewards</h3>
        <p className="text-spa-text/80 mb-6 font-medium text-lg">
          Book 10 sessions, get your 11th massage completely free!
        </p>

        <div className="grid grid-cols-5 gap-3 sm:gap-4 mb-6">
          {Array.from({ length: 10 }).map((_, index) => {
            const isStamped = index < stamps;
            return (
              <div
                key={index}
                className={`relative aspect-square rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                  isStamped
                    ? "bg-spa-accent border-spa-accent text-white"
                    : "bg-spa-bg border-spa-accent/30 text-spa-accent/30"
                }`}
              >
                {isStamped ? (
                  <Check className="w-6 h-6 animate-in zoom-in duration-300" strokeWidth={3} />
                ) : (
                  <span className="font-semibold text-lg">{index + 1}</span>
                )}
              </div>
            );
          })}
        </div>

        <button
          onClick={handleStamp}
          className="bg-spa-accent hover:bg-spa-accent-hover text-white px-6 py-2 rounded-full font-medium transition-colors shadow-sm cursor-pointer"
        >
          {stamps < 10 ? "Demo Stamp" : "Reset Card"}
        </button>
      </div>

      {/* Right side: QR Code placeholder */}
      <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-inner border border-gray-100 min-w-[200px]">
        <QrCode className="w-32 h-32 text-spa-text mb-4 opacity-80" />
        <p className="text-sm text-center text-spa-text/70 font-medium">
          Scan at the spa<br />to collect stamps
        </p>
      </div>
    </div>
  );
}
