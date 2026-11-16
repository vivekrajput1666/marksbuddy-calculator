import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Calculator from "./components/calculator";
import CGPACalculator from "./components/CGPACalculator";
import PercentageCalculatorPage from "./pages/PercentageCalculatorPage";
function HomePage() {
  const [activeTab, setActiveTab] = useState<"percentage" | "cgpa">(
    "percentage"
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-purple-600 flex items-center justify-center text-2xl shadow-lg shadow-purple-200">
                🎓
              </div>

              <div>
                <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                  Marks<span className="text-purple-600">Buddy</span>
                </h1>
                <p className="text-xs text-gray-500">
                  Your academic companion
                </p>
              </div>
            </div>
<a
  href="/percentage-calculator"
  className="text-blue-600 hover:text-blue-800 font-medium"
>
  Percentage Calculator Guide
</a>
            <nav
              className="flex items-center gap-2 bg-gray-100 p-1.5 rounded-xl w-full sm:w-auto"
              aria-label="Calculator navigation"
            >
              <button
                onClick={() => setActiveTab("percentage")}
                aria-pressed={activeTab === "percentage"}
                className={`flex-1 sm:flex-none px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activeTab === "percentage"
                    ? "bg-purple-600 text-white shadow-md"
                    : "text-gray-600 hover:bg-white hover:text-purple-700"
                }`}
              >
                Percentage
              </button>

              <button
                onClick={() => setActiveTab("cgpa")}
                aria-pressed={activeTab === "cgpa"}
                className={`flex-1 sm:flex-none px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activeTab === "cgpa"
                    ? "bg-purple-600 text-white shadow-md"
                    : "text-gray-600 hover:bg-white hover:text-purple-700"
                }`}
              >
                CGPA
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Calculators */}
      <main>
        {activeTab === "percentage" ? (
          <Calculator />
        ) : (
          <CGPACalculator />
        )}

        {/* SEO Educational Content */}
        <section className="max-w-5xl mx-auto px-5 py-16 space-y-12">
          {/* Introduction */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Free Online Percentage and CGPA Calculator
            </h2>

            <p className="text-gray-600 leading-7 max-w-3xl mx-auto">
              MarksBuddy provides free online academic calculators to help
              students calculate examination percentages and CGPA easily.
              Enter your marks or subject grades and get your results in
              seconds. No registration required.
            </p>
          </div>

          {/* Percentage Guide */}
          <article className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How to Calculate Percentage of Marks?
            </h2>

            <p className="text-gray-600 leading-7 mb-5">
              Percentage represents the marks obtained by a student compared
              with the total possible marks. It is commonly used to measure
              academic performance in school and college examinations.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Percentage Formula
            </h3>

            <div className="bg-purple-50 border border-purple-100 rounded-xl p-5 text-center mb-5">
              <p className="text-xl font-bold text-purple-700">
                Percentage = (Obtained Marks / Total Marks) × 100
              </p>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Example
            </h3>

            <p className="text-gray-600 leading-7">
              Suppose a student scores 450 marks out of 500.
            </p>

            <div className="bg-gray-50 rounded-xl p-5 mt-3">
              <p className="font-medium text-gray-800">
                (450 / 500) × 100 = 90%
              </p>
              <p className="text-green-700 font-semibold mt-2">
                Final Percentage: 90%
              </p>
            </div>

            <p className="text-gray-600 leading-7 mt-5">
              You can use the MarksBuddy percentage calculator above to
              calculate your examination percentage instantly.
            </p>
          </article>

          {/* CGPA Guide */}
          <article className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How to Calculate CGPA?
            </h2>

            <p className="text-gray-600 leading-7 mb-5">
              CGPA stands for Cumulative Grade Point Average. It represents
              a student's overall academic performance using grade points.
              Some institutions also consider subject credits when calculating
              CGPA.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Credit-Weighted CGPA Formula
            </h3>

            <div className="bg-purple-50 border border-purple-100 rounded-xl p-5 text-center mb-5">
              <p className="text-lg font-bold text-purple-700">
                CGPA = Σ (Credit × Grade Point) / Σ Credits
              </p>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Example
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-3 border text-gray-800">Subject</th>
                    <th className="p-3 border text-gray-800">Credits</th>
                    <th className="p-3 border text-gray-800">Grade Point</th>
                  </tr>
                </thead>

                <tbody className="text-gray-600">
                  <tr>
                    <td className="p-3 border">Mathematics</td>
                    <td className="p-3 border">4</td>
                    <td className="p-3 border">9</td>
                  </tr>

                  <tr>
                    <td className="p-3 border">Physics</td>
                    <td className="p-3 border">3</td>
                    <td className="p-3 border">8</td>
                  </tr>

                  <tr>
                    <td className="p-3 border">English</td>
                    <td className="p-3 border">2</td>
                    <td className="p-3 border">10</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 mt-5">
              <p className="font-medium text-gray-800">
                CGPA = (4×9 + 3×8 + 2×10) / (4+3+2)
              </p>
              <p className="text-green-700 font-semibold mt-2">
                Final CGPA = 8.89
              </p>
            </div>

            <p className="text-gray-600 leading-7 mt-5">
              Different universities may use different grading systems.
              Always check your institution's official CGPA rules.
            </p>
          </article>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">
                  1. Is MarksBuddy free to use?
                </h3>
                <p className="text-gray-600 leading-7">
                  Yes. MarksBuddy offers free online percentage and CGPA
                  calculators without requiring registration.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">
                  2. How do I calculate my exam percentage?
                </h3>
                <p className="text-gray-600 leading-7">
                  Divide your obtained marks by the total marks and multiply
                  the result by 100.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">
                  3. Can I calculate CGPA using subject credits?
                </h3>
                <p className="text-gray-600 leading-7">
                  Yes. MarksBuddy supports credit-weighted CGPA calculations
                  using subject credits and grade points.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">
                  4. Is CGPA the same as percentage?
                </h3>
                <p className="text-gray-600 leading-7">
                  No. CGPA represents grade points, while percentage
                  represents marks as a proportion of total marks. Conversion
                  rules depend on your institution.
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-6 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} MarksBuddy. Made for students.
          </p>

          <p className="text-xs text-gray-400 mt-2">
            Simple tools to make academic calculations easier.
          </p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/percentage-calculator"
        element={<PercentageCalculatorPage />}
      />
    </Routes>
  );
}

export default App;