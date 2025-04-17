import React from "react";
import OriginalApproach from "@components/useTransition/OriginalApproach";
import OptimizedComponent from "@components/useTransition/OptimizedComponent";

export default function MassiveSearchFilter() {
  return (
    <div className="w-full min-h-screen bg-gray-50 py-12 px-6 sm:px-10 lg:px-20">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-12">
        Massive Search Filter Comparison
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Original */}
        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Original Approach</h2>
          <OriginalApproach />
        </div>

        {/* Optimized */}
        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Optimized Component</h2>
          <OptimizedComponent />
        </div>
      </div>
    </div>
  );
}
