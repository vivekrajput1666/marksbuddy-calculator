
import { useState } from "react";
import { calculatePercentage } from "../api/calculatorApi";

function Calculator() {
  const [obtained, setObtained] = useState("");
  const [total, setTotal] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCalculate = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");
    setResult(null);

    const obtainedMarks = Number(obtained);
    const totalMarks = Number(total);

    if (obtained.trim() === "" || total.trim() === "") {
      setError("Please fill in all fields.");
      return;
    }

    if (
      !Number.isFinite(obtainedMarks) ||
      !Number.isFinite(totalMarks) ||
      obtainedMarks < 0 ||
      totalMarks <= 0 ||
      obtainedMarks > totalMarks
    ) {
      setError("Please enter valid marks. Obtained marks cannot exceed total marks.");
      return;
    }

    try {
      setLoading(true);

      const data = await calculatePercentage(obtainedMarks, totalMarks);
      setResult(data.percentage);
    } catch {
      setError("Unable to connect to the server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setObtained("");
    setTotal("");
    setResult(null);
    setError("");
  };

  return (
    <section className="min-h-[75vh] bg-gradient-to-br from-slate-50 via-purple-50 to-white px-4 py-12 sm:py-16">

      <div className="max-w-5xl mx-auto">

        {/* Introduction */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-5">
            ✨ Free Student Tool
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Percentage Calculator
          </h2>

          <p className="text-gray-500 mt-4 max-w-xl mx-auto leading-relaxed">
            Calculate your exam percentage instantly. Enter your obtained
            marks and total marks to check your academic performance.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl shadow-purple-100/60 border border-purple-50 overflow-hidden">

          <div className="bg-purple-600 px-6 py-5 text-white">
            <h3 className="text-xl font-bold">
              🎓 Calculate Your Percentage
            </h3>
            <p className="text-purple-100 text-sm mt-1">
              Enter your examination details below.
            </p>
          </div>

          <div className="p-6 sm:p-8">

            <form onSubmit={handleCalculate}>

              {/* Obtained Marks */}
              <div className="mb-5">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Obtained Marks
                </label>

                <input
                  type="number"
                  min="0"
                  step="any"
                  value={obtained}
                  onChange={(e) => setObtained(e.target.value)}
                  placeholder="e.g. 450"
                  className="w-full border border-gray-200 bg-gray-50 rounded-xl p-4 outline-none transition focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                />
              </div>

              {/* Total Marks */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Total Marks
                </label>

                <input
                  type="number"
                  min="1"
                  step="any"
                  value={total}
                  onChange={(e) => setTotal(e.target.value)}
                  placeholder="e.g. 500"
                  className="w-full border border-gray-200 bg-gray-50 rounded-xl p-4 outline-none transition focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                />
              </div>

              {/* Error */}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl p-3 mb-5">
                  {error}
                </div>
              )}

              {/* Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white font-bold py-4 rounded-xl transition-all duration-200 shadow-lg shadow-purple-200"
                >
                  {loading ? "Calculating..." : "Calculate"}
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-4 rounded-xl transition"
                >
                  Reset
                </button>
              </div>

            </form>

            {/* Result */}
            {result !== null && (
              <div className="mt-8 bg-purple-50 border border-purple-200 rounded-2xl p-7 text-center">
                <p className="text-sm font-semibold text-purple-700">
                  YOUR RESULT
                </p>

                <h3 className="text-6xl font-extrabold text-purple-700 mt-3">
                  {result.toFixed(2)}%
                </h3>

                <p className="text-gray-500 text-sm mt-3">
                  Great job! Keep moving forward. 🚀
                </p>
              </div>
            )}

          </div>
        </div>

        {/* Formula Section */}
        <div className="max-w-xl mx-auto mt-8 bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm">
          <h3 className="font-bold text-gray-800">
            Percentage Formula
          </h3>

          <p className="text-purple-700 font-semibold mt-3">
            (Obtained Marks ÷ Total Marks) × 100
          </p>

          <p className="text-xs text-gray-400 mt-3">
            Example: (450 ÷ 500) × 100 = 90%
          </p>
        </div>

      </div>
    </section>
  );
}

export default Calculator;