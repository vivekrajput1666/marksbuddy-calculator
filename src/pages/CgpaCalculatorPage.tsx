import { useEffect } from "react";
import { Link } from "react-router-dom";
import CGPACalculator from "../components/CgpaCalculatorPage";

function CGPACalculatorPage() {
  useEffect(() => {
    const pageTitle =
      "CGPA Calculator Online – Free CGPA Calculator for Students | MarksBuddy";

    const description =
      "Calculate your CGPA online for free using subject credits and grade points. Get quick results with MarksBuddy's easy-to-use CGPA calculator.";

    const canonicalUrl =
      "https://marksbuddy-calculator.vercel.app/cgpa-calculator";

    document.title = pageTitle;

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

    updateMeta('meta[name="description"]', "content", description);

    updateMeta('meta[property="og:title"]', "content", pageTitle);
    updateMeta('meta[property="og:description"]', "content", description);
    updateMeta('meta[property="og:url"]', "content", canonicalUrl);

    updateMeta('meta[name="twitter:title"]', "content", pageTitle);
    updateMeta('meta[name="twitter:description"]', "content", description);

    let canonical =
      document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href = canonicalUrl;

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

  return (
    <main className="min-h-screen bg-slate-50">
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

        <div className="text-center mt-10">
          <Link
            to="/percentage-calculator"
            className="text-purple-600 font-semibold hover:text-purple-800"
          >
            Try Percentage Calculator →
          </Link>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-100 py-6 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} MarksBuddy. Made for students.
        </p>
      </footer>
    </main>
  );
}

export default CGPACalculatorPage;