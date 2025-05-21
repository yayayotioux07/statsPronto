import React from "react";

export default function SoccerShotMap({ shots = [] }) {
  return (
    <div className="bg-green-700 p-4 rounded shadow-lg w-fit">
      <h2 className="text-white text-sm font-semibold mb-2">Shot Map (Top View)</h2>
      <svg viewBox="0 0 300 200" width="300" height="200">
        {/* Background */}
        <rect width="300" height="200" fill="#15803d" />

        {/* Goal Box */}
        <rect x="90" y="30" width="120" height="20" stroke="white" strokeWidth="2" fill="none" />
        <rect x="60" y="30" width="180" height="60" stroke="white" strokeWidth="2" fill="none" />
        <circle cx="150" cy="60" r="2" fill="white" />
        <path d="M 60 90 Q 150 130 240 90" stroke="white" strokeWidth="2" fill="none" />

        {/* Shots */}
        {shots.map((shot, index) => (
          <circle
            key={index}
            cx={shot.x}
            cy={shot.y}
            r="5"
            fill={shot.type === "goal" ? "#facc15" : shot.type === "saved" ? "#6ee7b7" : "#f87171"}
            stroke="white"
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
}
