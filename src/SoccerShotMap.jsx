import React from "react";
import { useParams } from "react-router-dom";
import { players } from "./players";

export default function PlayerShotPage() {
  const { id } = useParams();
  const player = players.find((p) => p.pos === parseInt(id, 10));

  if (!player) return <p className="text-white p-6">Player not found</p>;

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-2xl font-bold mb-4">Shot Analysis for Player #{id}</h1>

      {/* Shot Type Filter */}
      <div className="bg-slate-800 p-4 rounded mb-4 max-w-sm">
        <label className="block mb-2">Shot Type</label>
        <select className="w-full p-2 rounded text-black">
          <option>All</option>
          <option>Free Kick</option>
          <option>Open Play</option>
        </select>
      </div>

      {/* Grid: Shot Stats + Map */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Shot Stats Table */}
        <div className="bg-gray-900 p-4 rounded h-auto">
          <h3 className="text-white text-sm font-semibold mb-2">Shot Stats</h3>
          <table className="w-full text-sm text-left text-white">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="py-2">Tipo</th>
                <th className="py-2 text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-800">
                <td className="py-2">Goles</td>
                <td className="py-2 text-right font-bold text-white">{player.goals}</td>
              </tr>
              <tr>
                <td className="py-2">Goles con la cabeza</td>
                <td className="py-2 text-right text-orange-400">{player.goalStats.head}</td>
              </tr>
              <tr className="bg-gray-800">
                <td className="py-2">Goles de penalti</td>
                <td className="py-2 text-right text-orange-400">{player.goalStats.penalty}</td>
              </tr>
              <tr>
                <td className="py-2">Goles con el pie derecho</td>
                <td className="py-2 text-right text-orange-400">{player.goalStats.rightFoot}</td>
              </tr>
              <tr className="bg-gray-800">
                <td className="py-2">Goles con el pie izquierdo</td>
                <td className="py-2 text-right text-orange-400">{player.goalStats.leftFoot}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Set Piece Map Image */}
        <div className="bg-gray-900 p-4 rounded">
          <h3 className="text-white text-sm font-semibold mb-2">Shot Map</h3>
          <img
            src={player.goalMapImg}
            alt={`Set piece map for ${player.name}`}
            className="w-full h-auto rounded"
          />
        </div>
      </div>
    </div>
  );
}
