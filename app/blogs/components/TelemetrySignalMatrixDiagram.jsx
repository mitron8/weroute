"use client";

import React from "react";

export default function TelemetrySignalMatrixDiagram() {
  const rows = [
    {
      signal: "Metrics",
      answers: "How much, and how often",
      limitation: "Which request was slow"
    },
    {
      signal: "Logs",
      answers: "What happened on one system",
      limitation: "How events on different systems connect"
    },
    {
      signal: "Traces",
      answers: "Where one request spent its time",
      limitation: "What the network path looked like"
    },
    {
      signal: "Flow data",
      answers: "Who talked to whom, how much, when",
      limitation: "Payload, or traffic inside a tunnel"
    },
    {
      signal: "Synthetic tests",
      answers: "Latency, loss and path changes",
      limitation: "What real users saw between tests"
    },
    {
      signal: "Packet capture",
      answers: "Full detail of one conversation",
      limitation: "Long-term history, too costly to store"
    }
  ];

  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr className="bg-[#050849] text-white">
              <th className="py-3 px-4 font-bold rounded-tl-xl w-1/4">Signal</th>
              <th className="py-3 px-4 font-bold w-3/8">What it answers</th>
              <th className="py-3 px-4 font-bold rounded-tr-xl w-3/8">What it cannot answer alone</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((row, idx) => (
              <tr
                key={idx}
                className={`transition-colors ${
                  idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"
                } hover:bg-slate-50`}
              >
                <td className="py-3 px-4 font-bold text-[#050849]">
                  {row.signal}
                </td>
                <td className="py-3 px-4 text-[#050849]/85">
                  {row.answers}
                </td>
                <td className="py-3 px-4 text-slate-600">
                  {row.limitation}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
