import React from "react";
import { Link } from "react-router-dom";
import { players } from "./players"; // Adjust path if players.js is elsewhere

export default function TopScorersChart() {
  return (
    <div className="w-full px-6 py-10 bg-gradient-to-br from-slate-900 to-black text-white rounded-xl shadow-xl relative">

      {/* Title block inside bar area, top-right */}
      <div className="absolute top-4 right-6 text-right max-w-[250px]">
        <h2 className="text-3xl font-extrabold uppercase leading-tight mb-1">
          Top Scorers<br />Clausura Liga MX 2025
        </h2>
      {/*
  <p className="text-sm text-gray-300">
    Players ranked by total goals scored this season. The vertical bars create a visual flag pattern for added style.
  </p>
*/}

      </div>

      {/* Bars Section */}
      <div className="flex justify-center items-end gap-[1px] min-h-[360px]">
        {players.map((entry) => (
          <Link to={`/player/${entry.pos}`} key={entry.pos} className="group">
            <div className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
              <img
                src={entry.img}
                alt={entry.name}
                className="w-10 h-10 mb-1 rounded-full object-cover"
              />

              <div
                className="w-[8px] rounded-t transition-all duration-500 bg-no-repeat bg-cover"
                style={{
                  height: `${entry.goals * 18}px`,
                  backgroundImage: "url('/flag.jpeg')",
                  backgroundPosition: `${(entry.pos - 1) / players.length * 100}% center`,
                  backgroundSize: `${players.length * 100}% 100%`,
                  backgroundClip: "content-box",
                  WebkitBackgroundClip: "content-box",
                }}
              ></div>

              <div className="w-[70px] text-center text-xs mt-1">
                <div className="font-semibold">{entry.pos}. {entry.name}</div>
                <div className="text-gray-300">{entry.team}</div>
                <div className="text-green-400 font-bold">{entry.goals} G</div>
              </div>

              <img
                src={entry.logo}
                alt={`${entry.team} logo`}
                className="w-6 h-6 mt-1 rounded-full object-cover"
              />
            </div>
          </Link>
        ))}
      </div>

      {/* 🔽 Full Summary Text Section */}
      <div className="mt-8 text-center text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed">
        Paulinho of Toluca leads the Liga MX 2025 scoring chart with 14 goals, standing out as the league’s most prolific striker. He’s followed closely by Raúl Zúñiga (Club Tijuana) and Alexis Vega (Toluca), who both netted 12 goals, showcasing Toluca’s strong offensive presence. Diber Cambindo (Necaxa) secured 5th place with 11 goals, helping elevate Necaxa’s attacking profile. The race was tight among mid-table scorers, with Salomón Rondón and Germán Berterame each scoring 10 goals for Pachuca and Monterrey, respectively. John Kennedy (Pachuca) added 9 goals, while Jhonder Cádiz (León) and José Paradela (Necaxa) rounded out the top 10 with 8 goals each.

        <br /><br />
        📊 These rankings reflect total goals scored during the 2025 season. The vertical bars in the graphic offer a stylized visual inspired by national flag colors.
      </div>
    </div>
  );
}
