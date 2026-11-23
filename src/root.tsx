import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import "./index.css";

export function meta() {
  return [
    {
      title: "Free Percentage & CGPA Calculator Online | MarksBuddy",
    },
    {
      name: "description",
      content:
        "Calculate your exam percentage and CGPA instantly with MarksBuddy. Free online student calculators with simple formulas and accurate results.",
    },
    { name: "author", content: "MarksBuddy" },
    { name: "robots", content: "index, follow" },
    { name: "theme-color", content: "#9333ea" },

    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:site_name",
      content: "MarksBuddy",
    },
    {
      property: "og:title",
      content: "Free Percentage & CGPA Calculator Online | MarksBuddy",
    },
    {
      property: "og:description",
      content:
        "Calculate your exam percentage and CGPA instantly with free online student calculators.",
    },
    {
      property: "og:url",
      content: "https://marksbuddy-calculator.vercel.app/",
    },

    {
      name: "twitter:card",
      content: "summary",
    },
    {
      name: "twitter:title",
      content: "Free Percentage & CGPA Calculator | MarksBuddy",
    },
    {
      name: "twitter:description",
      content:
        "Calculate your exam percentage and CGPA instantly with MarksBuddy.",
    },

    {
      tagName: "link",
      rel: "canonical",
      href: "https://marksbuddy-calculator.vercel.app/",
    },
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "MarksBuddy",
              url: "https://marksbuddy-calculator.vercel.app/",
              description:
                "Free online percentage and CGPA calculators for students.",
              applicationCategory: "EducationalApplication",
              operatingSystem: "All",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "INR",
              },
            }),
          }}
        />

        <Links />
        <Meta />
      </head>

      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}