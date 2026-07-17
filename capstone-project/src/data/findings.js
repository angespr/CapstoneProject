// Main highlights
export const datapoints = [
  {
    label: "Technical Responsibility",
    value: 70,
    suffix: "%",
    note: "of women who were interviewed said they felt SOME TO ALL RESPONSIBILITY in protecting parents, grandparents, and little siblings or cousins",
    flag: true,
  },
  {
    label: "Security Fatigue",
    value: 90,
    suffix: "%",
    note: "of women who were interviewed said they felt some to no pressure to keep up with security best practices, even when it felt like a burden to keep up with",
    flag: true,
  },
  {
    label: "Jolt of Anxiety",
    value: 85,
    suffix: "%",
    note: "of women who were interviewed said they have experienced a situation where they felt a strong sense of anxiety or fear",
    flag: true,
  },
  {
    label: "Participants",
    value: 372,
    suffix: " participants",
    note: "20 from interviews (all women), and 352 from the survey (46.3% were women).",
    flag: false,
  },
];

// Grouped bar chart
export const genderPerceptionData = [
  { 
    condition: "My gender identity often need to take more precautions online than the average user",
    tooltip: "More Online Precautions", 
    women: 3.75, 
    men: 2.81 
  },
  { condition: "My gender identity makes me worry that a data breach could lead to doxing, harassment, stalking, or unwanted contact",
    tooltip: "Doxing & Harassment Concerns",
    women: 3.45, 
    men: 2.62 
  },
  { 
    condition: "My gender identity makes me feel that a data breach can feel like a physical safety concern, not just a privacy or financial concern", 
    tooltip: "Physical Safety Concerns", 
    women: 3.4, 
    men: 2.59 
  },
  { 
    condition: "My gender identity makes me more of a target for certain types of scams or personalized online harassment", 
    tooltip: "Target for Scams / Harassment",
    women: 3.43, 
    men: 2.65 
  },
  { 
    condition: "I feel that women are expected to be more compliant with rules and guidelines", 
    tooltip: "Women are Often Subject to Compliance Expectations",
    women: 3.72, 
    men: 2.98 
  },
];

// 2nd Grouped bar Chart
export const genderConfidenceData = [
  { 
    cue: "My friends and/or peers influence my online security habits", 
    tooltip: "Influenced by Peers", 
    women: 3.04, 
    men: 3.41 
  },
  { 
    cue: "I feel unsure about my ability to evaluate scary-looking security prompts", 
    tooltip: "Unsure of Abilities to Evaluate Security Prompts",
    women: 3.12, 
    men: 2.7 
  },
  { 
    cue: "Even when I feel suspicious, I may hesitate to challenge a request because I do not want to seem difficult", 
    tooltip: "Hesitation to Challenge a Scam",
    women: 4.23, 
    men: 3.8 
  },
  { 
    cue: "Because of my online identity's vulnerability, it makes me distrustful of urgent “system” messages.", 
    tooltip: "Distrustful of Urgent System Messages",
    women: 3.84, 
    men: 3.44
  },
  { 
    cue: "I feel comfortable investigating suspicious messages or alerts, even when they make me feel uneasy", 
    tooltip: "Comfort with Investigating Suspicious Messages",
    women: 3.41, 
    men: 3.72 
  },
  { 
    cue: "When I am unsure about a security issue, I... Ask a friend, family member, or coworker", 
    tooltip: "Ask a Friend, Family Member, or Coworker",
    women: 3.74, 
    men: 3.29 
  },
];

// Quotes pulled from qualitative interviews
export const pullQuotes = [
  {
    quote:
      "A lot of the time when a system design comes out the way that it does, there's something terribly wrong with it. It mainly comes from the fact that there wasn't a perspective to challenge that.",
    source: "Interview Participant on Security Design for Women",
  },
  {
    quote:
      "Always make it opt in instead of you have to explicity opt out. For the location thing for women, it's a very safety related thing. Location is a big thing for a lot of women, specifically, where we're always heading.",
    source: "Interview Participant on Social Media Policy Enforcement for Women",
  },
];
