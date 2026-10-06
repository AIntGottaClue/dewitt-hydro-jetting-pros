export type HoodSub = { h: string; ps: string[]; bullets?: string[] };
export type HoodStep = { t: string; d: string };
export type HoodFaq = { q: string; a: string };
export type Hood = {
  slug: string; name: string; h1: string; title: string; description: string; intro: string; heroPs: string[];
  bodyH2: string; bodyPs: string[]; considerations: string[];
  svcH2: string; svcLead: string; svcNotes: Record<string, string>;
  appsH2: string; apps: HoodSub[]; implH2: string; implPs: string[]; impl: HoodSub[];
  planH2: string; planPs: string[]; steps: HoodStep[];
  mapH2: string; mapIntro: string; mapQuery: string; mapTitle: string;
  nearbyH2: string; nearbyP: string; faqH2: string; faqs: HoodFaq[]; ctaH2: string; ctaPs: string[];
};
export const neighborhoods: Hood[] = [
  {
    "slug": "jamesville",
    "name": "Jamesville",
    "h1": "Hydro Jetting in Jamesville, DeWitt NY",
    "title": "Hydro Jetting in Jamesville, DeWitt | DeWitt Hydro Jetting Pros",
    "description": "Hydro jetting in Jamesville, DeWitt NY: how an older hamlet with its own sewer district shapes drain line questions and cleaning plans. Call (877) 761-0283.",
    "intro": "Jamesville is a hamlet within DeWitt with older housing, mixed-use buildings and a sewer district created in 2009. The actual drain condition matters more than the area's age.",
    "heroPs": [
      "Homes and buildings in Jamesville can develop slow drains from grease, scale or roots, and older housing often has a mix of original and replacement pipe. Hydro jetting can clear buildup from a sound line when an inspection shows it is the right method. Describe the affected fixtures and what happened after the last cleaning."
    ],
    "bodyH2": "Hydro Jetting for Jamesville Properties",
    "bodyPs": [
      "The town's 2019 Jamesville Hamlet Master Plan records the creation of the Jamesville Sewer District in 2009 and describes the hamlet's older housing and mixed-use buildings. This page concerns Jamesville within DeWitt, not every address that uses the postal name.",
      "A sewer district created in 2009 tells you something about the public side. It tells you little about the laterals that run from individual homes, which may date from many different periods. Older housing and mixed-use buildings mean a mix of materials, repairs and uses on a single street.",
      "Hydro jetting clears a line with a high-pressure stream of water and can remove grease, scale and roots from a sound pipe wall. An inspection decides whether a particular lateral can take it, and where the blockage actually sits."
    ],
    "considerations": [
      "Whether the property connects to the Jamesville Sewer District",
      "What the line is made of and whether it has been repaired or replaced",
      "Whether the building is a home, a shop or both",
      "Mature trees near the lateral",
      "Where the cleanout is and how easy it is to reach",
      "Whether the problem sits in the private lateral or the public sewer"
    ],
    "svcH2": "Hydro Jetting Services in Jamesville",
    "svcLead": "Each service page answers one question. Pick the one that sounds like your drain.",
    "svcNotes": {
      "severe-grease-and-sludge": "Older kitchens and mixed-use buildings can carry a grease layer built up over many years.",
      "tree-root-intrusions": "Mature hamlet trees and older laterals are a common pairing.",
      "recurring-clogs-and-slow-drains": "A line with a patchwork history can hold residue where materials change.",
      "mineral-and-scale-deposits": "Scale narrows older pipe slowly, especially at bends.",
      "preventative-maintenance": "An inspection and a planned cleaning can help a line with a known history stay clear."
    },
    "appsH2": "Hydro Jetting Situations in an Older Hamlet",
    "apps": [
      {
        "h": "Connecting to the sewer district",
        "ps": [
          "A property's connection status matters to how a problem gets handled. Confirm whether the address is served by the district before you request service."
        ]
      },
      {
        "h": "Mixed-use buildings",
        "ps": [
          "A building with both living space and a shop puts different loads on one line. Describe the use so the inspection looks for the right buildup."
        ]
      },
      {
        "h": "Older housing with replaced sections",
        "ps": [
          "Older homes often have pipe that was patched or replaced in stages. Share what you know before high pressure is used."
        ]
      },
      {
        "h": "Staying ahead of a repeat",
        "ps": [
          "A drain that has clogged more than once is telling you something. Planned cleaning after an inspection beats another urgent visit."
        ]
      }
    ],
    "implH2": "Hydro Jetting Considerations for Jamesville",
    "implPs": [
      "A hamlet with older buildings and a newer sewer district raises its own questions. The district sets the public side. The private side is yours to settle.",
      "These are the points that shape the work in Jamesville."
    ],
    "impl": [
      {
        "h": "Confirm the connection",
        "ps": [
          "Some addresses in an area may be served differently. Settle it before planning work."
        ],
        "bullets": [
          "Check records or ask the town",
          "Tell the crew what you find"
        ]
      },
      {
        "h": "Material and repair history",
        "ps": [
          "Older housing can hold several generations of pipe in one lateral."
        ],
        "bullets": [
          "Gather any repair records",
          "Expect inspection before cleaning"
        ]
      },
      {
        "h": "Private line, public main",
        "ps": [
          "The district handles the public sewer. The lateral to your home is private."
        ],
        "bullets": [
          "Describe whether neighbors are affected",
          "Ask the town about the public side"
        ]
      }
    ],
    "planH2": "Planning a Hydro Jetting Project in Jamesville",
    "planPs": [
      "A few minutes of notes before the call makes the inspection faster. Anything that depends on your property gets settled by looking, not guessing.",
      "The stages below fit most properties here."
    ],
    "steps": [
      {
        "t": "Write down the symptoms",
        "d": "Which fixtures are slow, any gurgling or backups, and when it started."
      },
      {
        "t": "Gather what you know",
        "d": "Collect any records of past cleanings, repairs or remodels, even partial ones."
      },
      {
        "t": "Confirm the connection",
        "d": "Check whether the address is served by the sewer district, and locate the cleanout."
      },
      {
        "t": "Inspect before cleaning",
        "d": "An inspection shows whether the cause is grease, scale, roots or damage, and whether jetting fits."
      },
      {
        "t": "Confirm the result",
        "d": "Ask how the line was verified clear and what would bring the problem back."
      }
    ],
    "mapH2": "Hydro Jetting in Jamesville, DeWitt NY",
    "mapIntro": "DeWitt Hydro Jetting Pros takes requests in Jamesville and across DeWitt. The map shows the neighborhood area, not a business office.",
    "mapQuery": "Jamesville, DeWitt, NY",
    "mapTitle": "Map of Jamesville, DeWitt, NY",
    "nearbyH2": "Serving Jamesville and Nearby DeWitt Neighborhoods",
    "nearbyP": "DeWitt Hydro Jetting Pros serves Jamesville and the rest of DeWitt. This page covers the local context that matters for properties here.",
    "faqH2": "Frequently Asked Questions About Hydro Jetting in Jamesville",
    "faqs": [
      {
        "q": "Is every address with a Jamesville postal name covered by this page?",
        "a": "No. This page concerns Jamesville within DeWitt. Check the town if you are unsure which municipality your address belongs to."
      },
      {
        "q": "What does the Jamesville Sewer District mean for my private line?",
        "a": "It covers the public side. Your lateral is a separate matter and its condition varies by property."
      },
      {
        "q": "Does older housing mean old pipes?",
        "a": "Not necessarily. Records and an inspection tell you what your line is made of and what shape it is in."
      },
      {
        "q": "Can hydro jetting clear roots from my line?",
        "a": "On a sound pipe, yes. The opening where the roots entered may still need repair."
      },
      {
        "q": "Who handles a backup in the street?",
        "a": "A blockage in the public sewer is for the town or district. One in your lateral is the property owner's."
      },
      {
        "q": "What details should I give when I request service?",
        "a": "List the affected fixtures, when the problem started, and anything that changed around that time. Mention any past cleanings or repairs, and where the cleanout is if you know."
      },
      {
        "q": "How is jetting different from snaking?",
        "a": "A snake opens a path through a blockage, while jetting scours the pipe wall with high-pressure water. For residue that keeps causing repeat clogs, jetting addresses what snaking leaves behind, when the pipe's condition allows."
      },
      {
        "q": "Do I need an inspection before jetting?",
        "a": "Yes. The cause of the blockage decides the method, and a cracked or weak pipe can be made worse by high pressure. Inspection first is the rule for any property."
      },
      {
        "q": "How do I get started?",
        "a": "Call (877) 761-0283 or send the request form on this page with what you are seeing. Requests are confirmed for the address and the work involved. Sending the form starts the process and is not a scheduled appointment."
      }
    ],
    "ctaH2": "Discuss Your Jamesville Hydro Jetting Project With DeWitt Hydro Jetting Pros",
    "ctaPs": [
      "An older hamlet with a newer sewer district means the public and private sides can differ a lot. A clear description of the symptoms and your connection gets the inspection started well.",
      "Use the request form on this page or call (877) 761-0283 to describe what is happening."
    ]
  }
];
export const neighborhoodBySlug = Object.fromEntries(neighborhoods.map(n => [n.slug,n]))
