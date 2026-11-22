import { useEffect } from "react";
import { Link } from "react-router-dom";
import Calculator from "../components/calculator";

function PercentageCalculatorPage() {
useEffect(() => {
  const pageTitle =
    "Percentage Calculator Online – Free Exam Marks Calculator | MarksBuddy";

  const description =
    "Calculate your exam percentage online for free. Enter obtained marks and total marks to get instant results. Learn percentage formulas and examples with MarksBuddy.";

  const canonicalUrl =
    "https://marksbuddy-calculator.vercel.app/percentage-calculator";

  document.title = pageTitle;

  // Helper to create or update meta tags
  const updateMeta = (
    selector: string,
    attribute: string,
    value: string
  ) => {
    let element = document.head.querySelector<HTMLMetaElement>(selector);

    if (!element) {
      element = document.createElement("meta");
      document.head.appendChild(element);
    }

    element.setAttribute(attribute, value);
  };

  // Description
  updateMeta(
    'meta[name="description"]',
    "content",
    description
  );

  // Open Graph
  updateMeta(
    'meta[property="og:title"]',
    "content",
    pageTitle
  );

  updateMeta(
    'meta[property="og:description"]',
    "content",
    description
  );

  updateMeta(
    'meta[property="og:url"]',
    "content",
    canonicalUrl
  );

  // Twitter
  updateMeta(
    'meta[name="twitter:title"]',
    "content",
    pageTitle
  );

  updateMeta(
    'meta[name="twitter:description"]',
    "content",
    description
  );

  // Canonical URL
  let canonical =
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }

  canonical.href = canonicalUrl;

  // Restore homepage metadata when leaving this page
  return () => {
    document.title =
      "Free Percentage & CGPA Calculator Online | MarksBuddy";

    updateMeta(
      'meta[name="description"]',
      "content",
      "Calculate your exam percentage and CGPA instantly with MarksBuddy. Free online student calculators."
    );

    updateMeta(
      'meta[property="og:title"]',
      "content",
      "Free Percentage & CGPA Calculator Online | MarksBuddy"
    );

    updateMeta(
      'meta[property="og:description"]',
      "content",
      "Calculate your exam percentage and CGPA instantly with free online student calculators."
    );

    updateMeta(
      'meta[property="og:url"]',
      "content",
      "https://marksbuddy-calculator.vercel.app/"
    );

    updateMeta(
      'meta[name="twitter:title"]',
      "content",
      "Free Percentage & CGPA Calculator | MarksBuddy"
    );

    updateMeta(
      'meta[name="twitter:description"]',
      "content",
      "Calculate your exam percentage and CGPA instantly with MarksBuddy."
    );

    if (canonical) {
      canonical.href = "https://marksbuddy-calculator.vercel.app/";
    }
  };
}, []);

  const faqs = [
    {
      question: "How do I calculate percentage from marks?",
      answer:
        "Divide your obtained marks by the total marks and multiply the result by 100.",
    },
    {
      question: "What is the percentage of 400 out of 500?",
      answer:
        "400 divided by 500 and multiplied by 100 equals 80%.",
    },
    {
      question: "Is this percentage calculator free?",
      answer:
        "Yes. MarksBuddy provides a free online percentage calculator without registration.",
    },
    {
      question: "Can I calculate school and college percentages?",
      answer:
        "Yes. You can use this calculator for school, college and university examinations.",
    },
    {
      question: "What is the percentage formula?",
      answer:
        "Percentage = (Obtained Marks / Total Marks) × 100.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5 py-5 flex items-center justify-between">
          <Link to="/" className="text-2xl font-extrabold text-gray-900">
            Marks<span className="text-purple-600">Buddy</span>
          </Link>

          <Link
            to="/"
            className="text-purple-600 font-semibold hover:text-purple-800"
          >
            Home
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-5 py-12 space-y-10">
        {/* Introduction */}
        <section className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Free Online Percentage Calculator
          </h1>

          <p className="text-gray-600 leading-7 max-w-3xl mx-auto">
            Calculate your exam percentage quickly using MarksBuddy.
            Enter your obtained marks and total marks to calculate
            your percentage for school, college and university exams.
            Get accurate results instantly without registration.
          </p>
        </section>

        {/* Calculator */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
            Calculate Your Percentage
          </h2>

          <Calculator />
        </section>

        {/* Formula */}
        <article className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Percentage Formula
          </h2>

          <p className="text-gray-600 leading-7 mb-5">
            Percentage tells you how many marks you obtained compared
            with the total marks available in an examination.
            It is a common way to measure academic performance.
          </p>

          <div className="bg-purple-50 border border-purple-100 rounded-xl p-5 text-center">
            <p className="text-xl font-bold text-purple-700">
              Percentage = (Obtained Marks / Total Marks) × 100
            </p>
          </div>
        </article>

        {/* Example */}
        <article className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Percentage Calculation Example
          </h2>

          <p className="text-gray-600 leading-7">
            Suppose you scored 420 marks out of 500 in your examination.
            You can calculate your percentage as follows:
          </p>

          <div className="bg-gray-50 rounded-xl p-5 mt-5 space-y-2">
            <p className="text-gray-800 font-medium">
              Obtained Marks = 420
            </p>

            <p className="text-gray-800 font-medium">
              Total Marks = 500
            </p>

            <p className="text-purple-700 font-semibold">
              (420 / 500) × 100 = 84%
            </p>

            <p className="text-green-700 font-bold text-lg">
              Final Percentage = 84%
            </p>
          </div>
        </article>

        {/* Steps */}
        <article className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How to Calculate Exam Percentage?
          </h2>

          <p className="text-gray-600 leading-7 mb-5">
            Follow these simple steps to calculate your examination
            percentage manually:
          </p>

          <ol className="list-decimal pl-6 space-y-3 text-gray-600 leading-7">
            <li>Enter the marks you obtained in your examination.</li>
            <li>Enter the maximum possible marks.</li>
            <li>Divide obtained marks by total marks.</li>
            <li>Multiply the result by 100.</li>
            <li>Your examination percentage is calculated.</li>
          </ol>
        </article>

        {/* More Examples */}
        <article className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">
            Percentage Examples for Students
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-purple-50">
                  <th className="p-3 border">Obtained Marks</th>
                  <th className="p-3 border">Total Marks</th>
                  <th className="p-3 border">Percentage</th>
                </tr>
              </thead>

              <tbody className="text-gray-600">
                <tr>
                  <td className="p-3 border">450</td>
                  <td className="p-3 border">500</td>
                  <td className="p-3 border font-semibold text-green-700">
                    90%
                  </td>
                </tr>

                <tr>
                  <td className="p-3 border">400</td>
                  <td className="p-3 border">500</td>
                  <td className="p-3 border font-semibold text-green-700">
                    80%
                  </td>
                </tr>

                <tr>
                  <td className="p-3 border">350</td>
                  <td className="p-3 border">500</td>
                  <td className="p-3 border font-semibold text-green-700">
                    70%
                  </td>
                </tr>

                <tr>
                  <td className="p-3 border">420</td>
                  <td className="p-3 border">600</td>
                  <td className="p-3 border font-semibold text-green-700">
                    70%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 border border-gray-100"
              >
                <h3 className="font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>

                <p className="text-gray-600 leading-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Back to homepage */}
        <div className="text-center pb-8">
          <Link
            to="/"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-xl transition"
          >
            Explore More Student Calculators
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-6 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} MarksBuddy. Made for students.
        </p>
      </footer>
    </div>
  );
}

export default PercentageCalculatorPage;