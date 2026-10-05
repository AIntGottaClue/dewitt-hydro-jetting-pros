export const neighborhoods =  [
  {
    "slug": "jamesville",
    "name": "Jamesville",
    "h1": "Hydro Jetting in Jamesville, DeWitt NY",
    "title": "Hydro Jetting: Jamesville, DeWitt NY",
    "description": "Drain cleaning questions for Jamesville in DeWitt, NY. Local context and inspection questions. Confirm availability.",
    "intro": "Describe the affected fixtures, any wastewater backup and what happened after the last cleaning. The actual drain condition matters more than the age or setting of the area.",
    "sections": [
      {
        "h": "What local context matters in Jamesville?",
        "ps": [
          "The town's 2019 Jamesville Hamlet Master Plan records the creation of the Jamesville Sewer District in 2009 and describes the hamlet's older housing and mixed-use buildings. This page concerns Jamesville within DeWitt, not every address using the postal name. See <a href=\"https://cms8.revize.com/revize/dewittny/Planning%20and%20Zoning/Planning%20and%20Sustainability/Jamesville%20Hamlet%20Master%20Plan%202019.pdf\">Town of DeWitt Jamesville Hamlet Master Plan</a>.",
          "Local history does not identify a private pipe's material, age or condition. Confirm the address, connection and access before choosing work."
        ]
      },
      {
        "h": "Which hydro jetting pages are worth reading before a request in Jamesville?",
        "ps": [
          "Read <a href=\"/guides/how-hydro-jetting-works/\">how hydro jetting works</a> first if the method is new to you. Then pick the page that matches what the drain is doing: <a href=\"/services/recurring-clogs-and-slow-drains/\">recurring clogs</a>, <a href=\"/services/severe-grease-and-sludge/\">grease and sludge</a> or <a href=\"/services/tree-root-intrusions/\">tree roots</a>.",
          "<a href=\"/services/preventative-maintenance/\">Preventative hydro jetting</a> is the page for a line that is working now and that you want to keep clear. The <a href=\"/\">DeWitt hydro jetting page</a> lists the rest for DeWitt."
        ]
      },
      {
        "h": "What should an inspection establish?",
        "ps": [
          "The <a href=\"https://www.epa.gov/sites/default/files/2015-10/documents/csossortc2004_appendixl.pdf\">EPA sewer inspection guidance</a> describes locating roots, debris and structural defects. Ask what the actual line shows before deciding on cleaning."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Is hydro jetting suitable for every pipe?",
        "a": "No. Ask a qualified professional to assess the line, access and blockage before recommending high-pressure cleaning."
      },
      {
        "q": "Can cleaning repair a broken sewer pipe?",
        "a": "Cleaning removes an obstruction; it does not rebuild a damaged pipe. Ask whether the inspection shows a repair issue as well as a blockage."
      },
      {
        "q": "What details should I provide with a request?",
        "a": "List the affected fixtures, whether wastewater has backed up and any previous cleaning. Mention known pipe repairs or access limitations."
      },
      {
        "q": "Is service availability confirmed for my address?",
        "a": "Availability must be confirmed for the address and work requested. A request is not a booked appointment or a guarantee of service."
      }
    ],
    "sources": [],
    "related": [
      "recurring-clogs-and-slow-drains",
      "tree-root-intrusions"
    ]
  }
];
export const neighborhoodBySlug = Object.fromEntries(neighborhoods.map(n => [n.slug,n]));
