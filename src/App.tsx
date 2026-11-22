import { Routes, Route, Link } from "react-router-dom";
import CGPACalculatorPage from "./pages/CgpaCalculatorPage";
import PercentageCalculatorPage from "./pages/PercentageCalculatorPage";

function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link to="/" className="flex items-center gap-3">
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
            </Link>

            <nav
              className="flex flex-wrap items-center justify-center gap-2"
              aria-label="Main navigation"
            >
              <Link
                to="/"
                className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-600 hover:bg-purple-50 hover:text-purple-700"
              >
                Home
              </Link>

              <Link
                to="/percentage-calculator"
                className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-600 hover:bg-purple-50 hover:text-purple-700"
              >
                Percentage Calculator
              </Link>

              <Link
                to="/cgpa-calculator"
                className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-600 hover:bg-purple-50 hover:text-purple-700"
              >
                CGPA Calculator
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Homepage Content */}
      <main>
        <section className="max-w-5xl mx-auto px-5 py-16 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Free Online Academic Calculators
          </h1>

          <p className="text-gray-600 leading-7 max-w-3xl mx-auto mb-10">
            MarksBuddy provides free online academic calculators to help
            students calculate examination percentages and CGPA easily.
            No registration required.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <Link
              to="/percentage-calculator"
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">📊</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Percentage Calculator
              </h2>
              <p className="text-gray-600">
                Calculate your exam percentage using obtained and total marks.
              </p>
              <span className="inline-block mt-5 text-purple-600 font-semibold">
                Calculate Percentage →
              </span>
            </Link>

            <Link
              to="/cgpa-calculator"
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">🎓</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                CGPA Calculator
              </h2>
              <p className="text-gray-600">
                Calculate your CGPA using subject credits and grade points.
              </p>
              <span className="inline-block mt-5 text-purple-600 font-semibold">
                Calculate CGPA →
              </span>
            </Link>
          </div>
        </section>

        {/* Educational Content */}
        <section className="max-w-5xl mx-auto px-5 pb-16 space-y-10">
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

            <p className="text-gray-600 leading-7">
              Example: If a student scores 450 marks out of 500:
            </p>

            <div className="bg-gray-50 rounded-xl p-5 mt-3">
              <p className="font-medium text-gray-800">
                (450 / 500) × 100 = 90%
              </p>
              <p className="text-green-700 font-semibold mt-2">
                Final Percentage: 90%
              </p>
            </div>

            <Link
              to="/percentage-calculator"
              className="inline-block mt-5 text-purple-600 font-semibold hover:underline"
            >
              Open Percentage Calculator →
            </Link>
          </article>

          <article className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How to Calculate CGPA?
            </h2>

            <p className="text-gray-600 leading-7 mb-5">
              CGPA stands for Cumulative Grade Point Average. It represents
              a student's overall academic performance using grade points.
              Some institutions consider subject credits when calculating
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

            <p className="text-gray-600 leading-7">
              Example: If the weighted grade points total 80 and total credits
              equal 9, the CGPA is 80 / 9 = 8.89.
            </p>

            <Link
              to="/cgpa-calculator"
              className="inline-block mt-5 text-purple-600 font-semibold hover:underline"
            >
              Open CGPA Calculator →
            </Link>
          </article>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Is MarksBuddy free to use?
                </h3>
                <p className="text-gray-600 leading-7">
                  Yes. MarksBuddy offers free online percentage and CGPA
                  calculators without requiring registration.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">
                  How do I calculate my exam percentage?
                </h3>
                <p className="text-gray-600 leading-7">
                  Divide your obtained marks by the total marks and multiply
                  the result by 100.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Can I calculate CGPA using subject credits?
                </h3>
                <p className="text-gray-600 leading-7">
                  Yes. MarksBuddy supports credit-weighted CGPA calculations
                  using subject credits and grade points.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Is CGPA the same as percentage?
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

      <Route
        path="/cgpa-calculator"
        element={<CGPACalculatorPage />}
      />
    </Routes>
  );
}

export default App;