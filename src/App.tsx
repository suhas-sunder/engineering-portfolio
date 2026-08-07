import { useLayoutEffect } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Home from "./components/Pages/Home";
import NavBar from "./components/Navigation/NavBar";
import Footer from "./components/Layout/Footer";
import { siteConfig } from "./config/site";

function App() {
  const location = useLocation();

  useLayoutEffect(() => {
    if (process.env.NODE_ENV !== "test" && !location.hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [location.pathname, location.hash]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    email: `mailto:${siteConfig.email}`,
    telephone: siteConfig.phoneDisplay,
    jobTitle: "Engineer-in-Training (EGBC)",
    homeLocation: {
      "@type": "Place",
      name: "Toronto, Ontario, Canada",
    },
    sameAs: [siteConfig.linkedIn],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Ontario Tech University",
    },
    knowsAbout: [
      "Electrical and computer engineering",
      "MATLAB and Simulink modelling",
      "Electric vehicle systems",
      "Embedded systems",
      "Engineering project planning",
      "Technical software delivery",
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      name: "Engineer-in-Training (EGBC)",
      recognizedBy: {
        "@type": "Organization",
        name: "Engineers and Geoscientists BC",
      },
    },
  };

  return (
    <div className="min-h-screen min-w-0 bg-[#f7f6f2] text-slate-900">
      <Helmet>
        <html lang="en" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Suhas Sunder | Electrical Engineering Portfolio</title>
        <meta name="description" content={siteConfig.description} />
        <meta
          name="keywords"
          content="Suhas Sunder, Engineer-in-Training EGBC, electrical engineering, power systems, MATLAB, Simulink, engineering portfolio"
        />
        <link rel="canonical" href={siteConfig.url} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteConfig.name} />
        <meta
          property="og:title"
          content="Suhas Sunder | Electrical Engineering Portfolio"
        />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:url" content={siteConfig.url} />
        <meta property="og:image" content={`${siteConfig.url}/og.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Suhas Sunder | Electrical Engineering Portfolio"
        />
        <meta name="twitter:description" content={siteConfig.description} />
        <meta name="twitter:image" content={`${siteConfig.url}/og.png`} />
        <meta name="theme-color" content="#f7f6f2" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <a
        href="#main-content"
        className="fixed left-4 top-3 z-[100] -translate-y-24 rounded-md bg-slate-950 px-4 py-3 font-semibold text-white shadow-lg transition focus:translate-y-0"
      >
        Skip to main content
      </a>

      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="*"
          element={
            <main className="flex min-h-[70vh] items-center bg-[#f7f6f2] px-5 py-24">
              <div className="mx-auto w-full max-w-3xl border-l-4 border-teal-700 pl-6 sm:pl-10">
                <p className="font-mono text-sm font-semibold tracking-widest text-teal-700">
                  404
                </p>
                <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                  Page not found
                </h1>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  The requested page is not part of this engineering portfolio.
                </p>
                <Link
                  to="/"
                  className="mt-8 inline-flex min-h-11 items-center rounded-md bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
                >
                  Return to portfolio
                </Link>
              </div>
            </main>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
