const RESULTS = {
  LUB: {
    name: "The Least Upper Bound Property",
    subtitle: "SUPREMUM ENERGY",
    description: `
      You are a person of limits.

      Not necessarily self-control, mind you. You simply possess
      an uncanny ability to determine exactly how far something can go
      before it becomes unacceptable.

      You don't need the maximum. You need the least upper bound:
      the smallest possible quantity that still contains all the chaos beneath it.

      Your natural habitat is saying:

      "Okay, but what is the minimum amount of effort I can exert
      while still technically succeeding?"

      Fatal flaw: You spend so much time finding the optimal limit
      that you occasionally forget to actually approach it.
    `
  },

  DEDEKIND: {
    name: "Dedekind Completeness",
    subtitle: "THE GAP CLOSER",
    description: `
      You cannot tolerate missing information.

      If someone says, "It's a long story," you immediately need
      to know what happened in the middle.

      There are no gaps in the real numbers.

      There should also be no gaps in the group chat.

      Fatal flaw: Sometimes there is no hidden information.
      Sometimes people are just weird.
    `
  },

  CAUCHY: {
    name: "Cauchy Completeness",
    subtitle: "TRUST THE PROCESS",
    description: `
      You may have absolutely no idea where you are going.

      But your successive life decisions are getting closer and closer together.

      At some point, the differences between your plans become
      arbitrarily small, and you confidently announce:

      "I think I'm figuring it out."

      Under the correct mathematical assumptions,
      you are converging.

      Fatal flaw: Sometimes you are merely oscillating emotionally.
    `
  },

  NESTED: {
    name: "The Nested Intervals Theorem",
    subtitle: "INCREASINGLY SPECIFIC",
    description: `
      Your life strategy is elimination.

      You repeatedly shrink your available options until,
      eventually, there is exactly one point left.

      Your tolerance for ambiguity decreases monotonically.

      Fatal flaw: You may narrow your options so aggressively
      that you accidentally optimize yourself into a corner.
    `
  },

  OPEN: {
    name: "The Open Induction Principle",
    subtitle: "GIVE ME AN INCH",
    description: `
      You believe in momentum.

      If something works here and can always be extended
      just a little further, why stop?

      A little progress becomes more progress.
      More progress becomes the entire interval.

      Fatal flaw: You have never once understood
      the phrase "just enough."
    `
  },

  MONOTONE: {
    name: "The Monotone Convergence Theorem",
    subtitle: "SLOW. STEADY. BOUNDED.",
    description: `
      You are not interested in dramatic transformations.

      You simply want tomorrow to be at least slightly better than today.

      Your growth may be slow.
      It may be microscopic.

      But it is nondecreasing.

      And, crucially, you have limits.

      Probably.

      Fatal flaw: Occasionally, a little chaos is necessary.
      Please leave your bounded sequence and attend a party.
    `
  },

  BW: {
    name: "The Bolzano–Weierstrass Theorem",
    subtitle: "SOMETHING WILL WORK OUT",
    description: `
      Your life is a bounded disaster.

      You have attempted everything.
      Most of it has failed.

      But somewhere inside the enormous sequence of your
      questionable decisions, there exists a convergent subsequence.

      You may not know which one.

      But mathematically speaking,
      at least one part of this mess has potential.

      Fatal flaw: You have interpreted
      "there exists a convergent subsequence"
      as "everything will probably be fine."

      It does not mean that.
    `
  },

  IVT: {
    name: "The Intermediate Value Theorem",
    subtitle: "YOU HAVE BEEN THROUGH IT ALL",
    description: `
      You have experienced the highs.

      You have experienced the lows.

      You have crossed zero.

      Probably several times.

      Between two extremes, something interesting is guaranteed to happen.

      Fatal flaw: Continuity is doing a tremendous amount
      of work in this personality type.
    `
  }
};


const QUESTIONS = [
  {
    question: "You have a major assignment due in two weeks. What do you do?",
    answers: [
      ["Establish the absolute latest time at which I can start working and still reasonably finish.", "LUB"],
      ["Break the assignment into increasingly specific subtasks until there is only one thing left to do.", "NESTED"],
      ["Start slowly and steadily making progress every day.", "MONOTONE"],
      ["Panic for several days, try five different approaches, and eventually discover that one of them was actually useful.", "BW"]
    ]
  },

  {
    question: "Your friend is telling you a very long story. You...",
    answers: [
      ["Need them to get to the point because there must be some final conclusion.", "CAUCHY"],
      ["Keep asking questions because there are clearly gaps in this narrative.", "DEDEKIND"],
      ["Believe that if the story started somewhere and has continued this far, we might as well keep going until the entire interval is covered.", "OPEN"],
      ["Wait for them to say something so contradictory that the truth must exist somewhere in between.", "IVT"]
    ]
  },

  {
    question: "How do you make decisions?",
    answers: [
      ["I identify all acceptable options and choose the best one that still satisfies my constraints.", "LUB"],
      ["I gradually eliminate possibilities until only one remains.", "NESTED"],
      ["I don't necessarily know what I'm doing, but my decisions eventually start getting closer together.", "CAUCHY"],
      ["I choose the first option that appears to be converging toward success.", "MONOTONE"]
    ]
  },

  {
    question: "You are stuck in an argument between two people with completely opposite opinions.",
    answers: [
      ["There must be a point somewhere between these extremes where someone is correct.", "IVT"],
      ["At least one part of this conversation will eventually converge into something useful.", "BW"],
      ["I cannot rest until every unexplained gap in their logic has been filled.", "DEDEKIND"],
      ["If we can establish the argument for the beginning of the discussion and keep extending it, eventually we should cover the whole thing.", "OPEN"]
    ]
  },

  {
    question: "Your room is messy. Your cleaning strategy is:",
    answers: [
      ["Establishing an upper limit for how clean it needs to be before I can stop.", "LUB"],
      ["Cleaning one section at a time, making each remaining area smaller and smaller.", "NESTED"],
      ["Making a series of increasingly smaller adjustments until everything finally settles down.", "CAUCHY"],
      ["Slowly improving the room's condition without ever allowing it to become worse.", "MONOTONE"]
    ]
  },

  {
    question: "Which statement best describes your social life?",
    answers: [
      ["A bounded sequence of increasingly questionable events, at least some of which will eventually converge into a good memory.", "BW"],
      ["A continuous journey between emotional highs and lows, meaning that I have definitely crossed zero several times.", "IVT"],
      ["I keep trying to close the gaps between different friend groups until the structure becomes complete.", "DEDEKIND"],
      ["If I am accepted into the group at one point and can keep extending that acceptance, eventually I should belong everywhere.", "OPEN"]
    ]
  },

  {
    question: "Someone gives you an infinite amount of time. What do you do?",
    answers: [
      ["Find the maximum amount of it that I can waste without technically wasting all of it.", "LUB"],
      ["Repeatedly narrow down my plans until I arrive at one inevitable destiny.", "NESTED"],
      ["Make increasingly smaller changes to my life until I eventually become a stable person.", "CAUCHY"],
      ["Improve myself continuously while remaining within reasonable bounds.", "MONOTONE"]
    ]
  },

  {
    question: "Choose a life philosophy.",
    answers: [
      ["There is a fine line between enough and too much. I will find it.", "LUB"],
      ["No gap shall remain unfilled.", "DEDEKIND"],
      ["If things are getting arbitrarily close, I will eventually arrive somewhere.", "CAUCHY"],
      ["Everything becomes more specific eventually.", "NESTED"],
      ["Give me a beginning, and I will eventually cover the entire interval.", "OPEN"],
      ["Slow and steady, but bounded.", "MONOTONE"],
      ["Somewhere within this chaos, there is a convergent subsequence.", "BW"],
      ["Between disaster and success, I am guaranteed to pass through something interesting.", "IVT"]
    ]
  }
];


function doGet() {

  const template =
    HtmlService.createTemplateFromFile("Index");

  template.questions = QUESTIONS;
  template.results = RESULTS;

  return template
    .evaluate()
    .setTitle("Which Completeness Axiom Are You?");
}