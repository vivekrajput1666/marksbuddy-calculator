import { useState } from "react";
import { calculateCGPA } from "../api/cgpaApi";

interface Subject {
  name: string;
  credits: string;
  gradePoint: string;
}

function CGPACalculator() {
  const [subjects, setSubjects] = useState<Subject[]>([
    { name: "", credits: "", gradePoint: "" },
    { name: "", credits: "", gradePoint: "" },
  ]);

  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const addSubject = () => {
    setSubjects([
      ...subjects,
      { name: "", credits: "", gradePoint: "" },
    ]);
    setResult(null);
    setError("");
  };

  const removeSubject = (index: number) => {
    if (subjects.length <= 1) return;

    setSubjects(subjects.filter((_, i) => i !== index));
    setResult(null);
    setError("");
  };

  const updateSubject = (
    index: number,
    field: keyof Subject,
    value: string
  ) => {
    const updated = [...subjects];
    updated[index] = { ...updated[index], [field]: value };
    setSubjects(updated);
    setResult(null);
    setError("");
  };

  const handleCalculate = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");
    setResult(null);

    const valid = subjects.every((subject) => {
      const credits = Number(subject.credits);
      const gradePoint = Number(subject.gradePoint);

      return (
        subject.name.trim() !== "" &&
        subject.credits.trim() !== "" &&
        subject.gradePoint.trim() !== "" &&
        Number.isFinite(credits) &&
        Number.isFinite(gradePoint) &&
        credits > 0 &&
        gradePoint >= 0 &&
        gradePoint <= 10
      );
    });

    if (!valid) {
      setError(
        "Please enter valid details for every subject. Grade points must be between 0 and 10."
      );
      return;
    }

    try {
      setLoading(true);

      const formattedSubjects = subjects.map((subject) => ({
        name: subject.name.trim(),
        credits: Number(subject.credits),
        gradePoint: Number(subject.gradePoint),
      }));

      const data = await calculateCGPA(formattedSubjects);
      setResult(data.cgpa);
    } catch {
      setError("Unable to connect to the server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const resetCalculator = () => {
    setSubjects([
      { name: "", credits: "", gradePoint: "" },
      { name: "", credits: "", gradePoint: "" },
    ]);
    setResult(null);
    setError("");
  };

  return (
    <section className="min-h-[75vh] bg-gradient-to-br from-slate-50 via-purple-50 to-white px-4 py-12 sm:py-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-5">
            ✨ Free Student Tool
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            CGPA Calculator
          </h2>

          <p className="text-gray-500 mt-4 max-w-xl mx-auto leading-relaxed">
            Calculate your CGPA using subject credits and grade points.
            Get your result instantly.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl shadow-purple-100/60 border border-purple-50 overflow-hidden">
          <div className="bg-purple-600 px-6 py-5 text-white">
            <h3 className="text-xl font-bold">
              🎓 Calculate Your CGPA
            </h3>
            <p className="text-purple-100 text-sm mt-1">
              Add your subjects, credits and grade points below.
            </p>
          </div>

          <div className="p-5 sm:p-8">
            <form onSubmit={handleCalculate}>
              <div className="flex justify-between items-center mb-5">
                <h3 className="font-bold text-gray-800">
                  Subject Details
                </h3>
                <span className="text-xs font-semibold bg-purple-50 text-purple-700 px-3 py-1.5 rounded-full">
                  {subjects.length} Subjects
                </span>
              </div>

              <div className="space-y-4">
                {subjects.map((subject, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-2xl p-4 sm:p-5 hover:border-purple-200 transition"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-bold text-gray-800">
                        Subject {index + 1}
                      </h4>

                      {subjects.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeSubject(index)}
                          className="text-red-500 hover:bg-red-50 px-3 py-1.5 rounded-lg text-sm font-semibold transition"
                        >
                          Remove
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Subject Name
                        </label>
                        <input
                          type="text"
                          value={subject.name}
                          onChange={(e) =>
                            updateSubject(index, "name", e.target.value)
                          }
                          placeholder="e.g. Mathematics"
                          className="w-full border border-gray-200 bg-gray-50 rounded-xl p-3 outline-none transition focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Credits
                        </label>
                        <input
                          type="number"
                          min="0"
                          step="any"
                          value={subject.credits}
                          onChange={(e) =>
                            updateSubject(index, "credits", e.target.value)
                          }
                          placeholder="e.g. 4"
                          className="w-full border border-gray-200 bg-gray-50 rounded-xl p-3 outline-none transition focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Grade Point
                        </label>
                        <input
                          type="number"
                          min="0"
                          max="10"
                          step="any"
                          value={subject.gradePoint}
                          onChange={(e) =>
                            updateSubject(index, "gradePoint", e.target.value)
                          }
                          placeholder="0–10"
                          className="w-full border border-gray-200 bg-gray-50 rounded-xl p-3 outline-none transition focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={addSubject}
                className="w-full mt-5 border-2 border-dashed border-purple-300 text-purple-600 font-semibold py-3.5 rounded-xl hover:bg-purple-50 transition"
              >
                + Add Another Subject
              </button>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl p-3 mt-5">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-2 gap-3 mt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white font-bold py-4 rounded-xl transition shadow-lg shadow-purple-200"
                >
                  {loading ? "Calculating..." : "Calculate CGPA"}
                </button>

                <button
                  type="button"
                  onClick={resetCalculator}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-4 rounded-xl transition"
                >
                  Reset
                </button>
              </div>
            </form>

            {result !== null && (
              <div className="mt-8 bg-purple-50 border border-purple-200 rounded-2xl p-7 text-center">
                <p className="text-sm font-semibold text-purple-700">
                  YOUR CGPA
                </p>

                <h3 className="text-6xl font-extrabold text-purple-700 mt-3">
                  {result.toFixed(2)}
                </h3>

                <p className="text-gray-500 text-sm mt-3">
                  Keep working hard! 🚀
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-8 bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm">
          <h3 className="font-bold text-gray-800">
            Weighted CGPA Formula
          </h3>

          <p className="text-purple-700 font-semibold mt-3">
            Σ (Grade Point × Credits) ÷ Σ Credits
          </p>

          <p className="text-xs text-gray-400 mt-3">
            This calculator uses a 10-point grading scale.
            Check your institution's grading rules.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CGPACalculator;