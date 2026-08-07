import { useLayoutEffect } from "react";
import { Helmet } from "react-helmet";
import Home from "./components/Pages/Home";
import NavBar from "./components/Navigation/NavBar";
import Footer from "./components/Layout/Footer";
import { siteConfig } from "./config/site";

function App() {
  useLayoutEffect(() => {
    if (process.env.NODE_ENV !== "test" && !window.location.hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, []);

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
      "Engineering analysis",
      "Systems modelling",
      "Requirements analysis",
      "Testing and troubleshooting",
      "Technical documentation",
      "Engineering project planning",
      "Software development and technical project delivery",
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
        <title>Suhas Sunder | Engineering Portfolio</title>
        <meta name="description" content={siteConfig.description} />
        <meta
          name="keywords"
          content="Suhas Sunder, Engineer-in-Training EGBC, engineering analysis, systems modelling, technical project delivery, engineering portfolio"
        />
        <link rel="canonical" href={siteConfig.url} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteConfig.name} />
        <meta
          property="og:title"
          content="Suhas Sunder | Engineering Portfolio"
        />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:url" content={siteConfig.url} />
        <meta property="og:image" content={`${siteConfig.url}/og.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Suhas Sunder | Engineering Portfolio"
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

      <Home />

      <Footer />
    </div>
  );
}

export default App;
