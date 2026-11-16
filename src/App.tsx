import { useState } from "react";
import Calculator from "./components/calculator";
import CGPACalculator from "./components/CGPACalculator";

function App() {
  const [activeTab, setActiveTab] = useState<"percentage" | "cgpa">(
    "percentage"
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

            {/* Logo */}
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

            {/* Calculator Tabs */}
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

      {/* Main Content */}
      <main>
        {activeTab === "percentage" ? (
          <Calculator />
        ) : (
          <CGPACalculator />
        )}
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

export default App;