import React from "react";

const shots = [
  { x: 70, y: 100, type: "goal" },
  { x: 95, y: 120, type: "saved" },
  { x: 80, y: 130, type: "goal" },
  { x: 65, y: 140, type: "off" },
  { x: 60, y: 110, type: "off" },
  { x: 100, y: 150, type: "saved" },
  { x: 85, y: 155, type: "off" },
  { x: 90, y: 135, type: "goal" },
];

const getColor = (type) => {
  switch (type) {
    case "goal": return "#facc15"; // yellow
    case "off": return "#f87171"; // red
    case "saved": return "#6ee7b7"; // teal
    default: return "#d1d5db"; // gray
  }
};

export default function SetPieceMap() {
  return (
    <div className="bg-white p-4 rounded shadow w-fit">
      <h2 className="text-sm font-bold mb-2">Set Piece Position</h2>
      <svg viewBox="0 0 200 200" width="300" height="300" className="bg-white">
        {/* Goal Box */}
        <rect x="50" y="20" width="100" height="20" stroke="black" fill="none" />
        <rect x="30" y="20" width="140" height="60" stroke="black" fill="none" />
        <circle cx="100" cy="60" r="1" fill="black" />
        <path d="M 30 80 Q 100 130 170 80" stroke="black" fill="none" />

        {/* Shot Circles */}
        {shots.map((shot, i) => (
          <circle
            key={i}
            cx={shot.x}
            cy={shot.y}
            r="5"
            fill={getColor(shot.type)}
            stroke="black"
            strokeWidth="0.5"
          />
        ))}
      </svg>
    </div>
  );
}

