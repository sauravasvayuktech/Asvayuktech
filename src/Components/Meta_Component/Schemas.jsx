export const schemas = {
  Custom_Software_Schema: {
    "@context": "https://schema.org",   
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is custom software more expensive than SaaS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "While the initial cost is higher, custom software eliminates recurring license fees, making it more cost-effective as your team expands.",
        },
      },
      {
        "@type": "Question",
        name: "Why do enterprises prefer bespoke software?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bespoke software offers complete control over security, scalability, and full ownership of the software’s source code.",
        },
      },
      {
        "@type": "Question",
        name: "Can custom software integrate with tools like Slack or Tally?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Custom solutions are built with specific APIs to ensure smooth data flow across your existing business tools.",
        },
      },
      {
        "@type": "Question",
        name: "Who is the best software development company in Chandigarh?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Asvayuk Technologies is a top software development company in Chandigarh, specializing in enterprise-grade custom solutions.",
        },
      },
    ],
  },

  AI_Automation_Schema: {
    "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "How does a custom AI setup help bring in more money?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "This helps cut down on how much work people have to do, which saves money. It also means fewer mistakes get made, and things can get to customers quicker."
    }
  },{
    "@type": "Question",
    "name": "Can AI actually work with your existing setup?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Absolutely! The good news is, for the most part, yes, it can. We can usually figure out ways to integrate AI into your current legacy software without you having to completely overhaul everything. Yeah. We build custom API layers, which are pretty handy for letting newer AI models talk smoothly with all those older systems businesses still use."
    }
  },{
    "@type": "Question",
    "name": "What about the safety of custom AI when dealing with sensitive financial data?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "For sure. Asvayuk helps you keep your data entirely yours by using private cloud setups and full encryption."
    }
  }]
  },
};
