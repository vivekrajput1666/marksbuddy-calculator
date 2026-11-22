import CGPACalculator from "../components/CgpaCalculatorPage";

function CGPACalculatorPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-4">
          Free Online CGPA Calculator
        </h1>

        <p className="text-gray-600 text-center mb-8">
          Calculate your Cumulative Grade Point Average easily using
          subject credits and grade points.
        </p>

        <CGPACalculator />

        <section className="mt-12 bg-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">
            How to Calculate CGPA?
          </h2>

          <p className="text-gray-600 leading-7 mb-5">
            CGPA represents the overall academic performance of a student.
            It can be calculated using the credit-weighted average of
            subject grade points.
          </p>

          <div className="bg-purple-50 p-5 rounded-xl text-center">
            <p className="font-bold text-purple-700">
              CGPA = Σ (Credit × Grade Point) / Σ Credits
            </p>
          </div>

          <h2 className="text-xl font-bold mt-8 mb-3">
            Why use MarksBuddy?
          </h2>

          <p className="text-gray-600 leading-7">
            MarksBuddy provides a simple, free CGPA calculator to help
            students calculate their academic performance without
            registration.
          </p>
        </section>
      </section>
    </main>
  );
}

export default CGPACalculatorPage;