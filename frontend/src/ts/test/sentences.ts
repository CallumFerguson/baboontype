export class Sentence {
  public words: string[];
  constructor(words: string[]) {
    this.words = words;
  }
}

function range(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const singularSubjectPronouns = ["it", "that", "he", "she"];

const pluralSubjectPronouns = ["i", "they", "we", "you"];

const singularNouns = [
  "time",
  "year",
  "way",
  "day",
  "man",
  "thing",
  "woman",
  "life",
  "child",
  "world",
  "school",
  "state",
  "family",
  "student",
  "group",
  "country",
  "problem",
  "hand",
  "part",
  "place",
  "case",
  "week",
  "company",
  "system",
  "program",
  "question",
  "work",
  "government",
  "number",
  "night",
  "point",
  "home",
  "water",
  "room",
  "mother",
  "area",
  "money",
  "story",
  "fact",
  "month",
  "lot",
  "right",
  "study",
  "book",
  "eye",
  "job",
  "word",
  "business",
  "issue",
  "side",
  "kind",
  "head",
  "house",
  "service",
  "friend",
  "father",
  "power",
  "hour",
  "game",
  "line",
  "end",
  "member",
  "law",
  "car",
  "city",
  "community",
  "name",
  "president",
  "team",
  "minute",
  "idea",
  "kid",
  "body",
  "information",
  "back",
  "parent",
  "face",
  "level",
  "office",
  "door",
  "health",
  "person",
  "art",
  "war",
  "history",
  "party",
  "result",
  "change",
  "morning",
  "reason",
  "research",
  "girl",
  "guy",
  "moment",
  "air",
  "teacher",
  "force",
  "education",
];

const pluralNouns = ["people", "others"];

const adjectives = [
  "other",
  "new",
  "good",
  "high",
  "old",
  "great",
  "big",
  "American",
  "small",
  "large",
  "national",
  "young",
  "different",
  "black",
  "long",
  "little",
  "important",
  "political",
  "bad",
  "white",
  "real",
  "best",
  "right",
  "social",
  "only",
  "public",
  "sure",
  "low",
  "early",
  "able",
  "human",
  "local",
  "late",
  "hard",
  "major",
  "better",
  "economic",
  "strong",
  "possible",
  "whole",
  "free",
  "military",
  "true",
  "federal",
  "international",
  "full",
  "special",
  "easy",
  "clear",
  "recent",
  "certain",
  "personal",
  "open",
  "red",
  "difficult",
  "available",
  "likely",
  "short",
  "single",
  "medical",
  "current",
  "wrong",
  "private",
  "past",
  "foreign",
  "fine",
  "common",
  "poor",
  "natural",
  "significant",
  "similar",
  "hot",
  "dead",
  "central",
  "happy",
  "serious",
  "ready",
  "simple",
  "left",
  "physical",
  "general",
  "environmental",
  "financial",
  "blue",
  "democratic",
  "dark",
  "various",
  "entire",
  "close",
  "legal",
  "religious",
  "cold",
  "final",
  "main",
  "green",
  "nice",
  "huge",
  "popular",
  "traditional",
  "cultural",
];

const singularVerbs = [
  "has",
  "does",
  "gets",
  "makes",
  "goes",
  "knows",
  "takes",
  "sees",
  "comes",
  "thinks",
  "looks",
  "wants",
  "gives",
  "uses",
  "finds",
  "tells",
  "asks",
  "works",
  "seems",
  "feels",
  "tries",
  "leaves",
  "calls",
  "forgets",
];

const pluralVerbs = [
  "have",
  "do",
  "get",
  "make",
  "go",
  "know",
  "take",
  "see",
  "come",
  "think",
  "look",
  "want",
  "give",
  "use",
  "find",
  "tell",
  "ask",
  "work",
  "seem",
  "feel",
  "try",
  "leave",
  "call",
  "forget",
];

const adverbs = [
  "bashfully",
  "beautifully",
  "bitterly",
  "bleakly",
  "blindly",
  "blissfully",
  "boastfully",
  "boldly",
  "bravely",
  "briefly",
  "brightly",
  "briskly",
  "broadly",
  "busily",
  "calmly",
  "carefully",
  "carelessly",
  "cautiously",
  "certainly",
  "cheerfully",
  "clearly",
  "cleverly",
  "closely",
  "coaxingly",
  "colorfully",
  "commonly",
  "continually",
  "coolly",
  "correctly",
  "courageously",
  "crossly",
  "cruelly",
  "curiously",
  "daily",
  "daintily",
  "dearly",
  "deceivingly",
  "deeply",
  "defiantly",
  "deliberately",
  "delightfully",
  "diligently",
  "dimly",
  "doubtfully",
  "dreamily",
  "easily",
  "elegantly",
  "energetically",
  "enormously",
  "enthusiastically",
  "equally",
  "especially",
  "even",
  "fortunately",
  "frankly",
  "frantically",
  "freely",
  "frenetically",
  "hopelessly",
  "shrilly",
  "shyly",
  "silently",
  "sleepily",
  "slowly",
  "smoothly",
  "softly",
  "solemnly",
  "solidly",
  "sometimes",
  "soon",
  "speedily",
  "stealthily",
  "sternly",
  "strictly",
  "unaccountably",
  "unbearably",
  "unethically",
  "unexpectedly",
  "unfortunately",
  "unimpressively",
  "unnaturally",
  "unnecessarily",
  "upbeat",
  "upright",
  "upside-down",
  "upward",
  "vainly",
  "valiantly",
  "vastly",
  "verbally",
  "very",
  "viciously",
  "victoriously",
  "violently",
  "weakly",
  "wearily",
  "well",
  "wetly",
  "wholly",
  "wildly",
];

const objectPronouns = ["me", "them", "us", "that", "you", "him", "her"];

const prepositions = [
  "to",
  "in",
  "into",
  "on",
  "onto",
  "at",
  "since",
  "for",
  "by",
  "from",
  "until",
];

const clauses = [
  "after",
  "while",
  "if",
  "as",
  "even though",
  "as if",
  "before",
  "provided that",
  "since",
  "unless",
  "until",
  "once",
  "when",
  "rather than",
  "although",
];

const coordinatingConjunctions = ["and", "but", "or"];

function getNoun(plurality: 1 | 2): string {
  const noun =
    plurality === 1
      ? singularNouns[range(0, singularNouns.length)]
      : pluralNouns[range(0, pluralNouns.length)];
  if (Math.random() < 0.4) {
    const adjective = adjectives[range(0, adjectives.length)];
    return adjective + " " + noun;
  } else {
    return noun;
  }
}

function getSubjectPronoun(plurality: 1 | 2): string {
  if (plurality == 1) {
    return singularSubjectPronouns[range(0, singularSubjectPronouns.length)];
  } else {
    return pluralSubjectPronouns[range(0, pluralSubjectPronouns.length)];
  }
}

function getObjectPronoun(): string {
  return objectPronouns[range(0, objectPronouns.length)];
}

function getSubject(): { subject: string; plurality: 1 | 2 } {
  const percentSingularNouns =
    singularNouns.length / (singularNouns.length + pluralNouns.length);
  const plurality = Math.random() < percentSingularNouns ? 1 : 2;
  if (Math.random() < 0.9) {
    return { subject: "the " + getNoun(plurality), plurality };
  } else {
    return { subject: getSubjectPronoun(plurality), plurality };
  }
}

function getVerb(plurality: 1 | 2): string {
  if (plurality == 1) {
    return singularVerbs[range(0, singularVerbs.length)];
  } else {
    return pluralVerbs[range(0, pluralVerbs.length)];
  }
}

function getObject(): string {
  if (Math.random() < 0.95) {
    const percentSingularNouns =
      singularNouns.length / (singularNouns.length + pluralNouns.length);
    return "the " + getNoun(Math.random() < percentSingularNouns ? 1 : 2);
  } else {
    return getObjectPronoun();
  }
}

function getPrepositionalPhrase(): string {
  const percentSingularNouns =
    singularNouns.length / (singularNouns.length + pluralNouns.length);
  return (
    prepositions[range(0, prepositions.length)] +
    " the " +
    getNoun(Math.random() < percentSingularNouns ? 1 : 2)
  );
}

function getIndependentClause(): string {
  let sentenceString = "";

  const { subject, plurality } = getSubject();
  const verb = getVerb(plurality);
  const object = getObject();

  sentenceString += (sentenceString === "" ? "" : " ") + subject;
  if (Math.random() < 0.4) {
    const adverb = adverbs[range(0, adverbs.length)];
    sentenceString += " " + adverb;
  }
  sentenceString += " " + verb;
  sentenceString += " " + object;

  if (Math.random() < 0.5) {
    const prepositionalPhrase = getPrepositionalPhrase();
    sentenceString += " " + prepositionalPhrase;
  }

  return sentenceString;
}

function getDependentClause(): string {
  return clauses[range(0, clauses.length)] + " " + getIndependentClause();
}

export function getSentence(): Sentence {
  let sentenceString = getIndependentClause();

  if (Math.random() < 0.5) {
    if (Math.random() < 0.5) {
      const dependentClause = getDependentClause();
      if (Math.random() < 0.5) {
        sentenceString += " " + dependentClause;
      } else {
        sentenceString = dependentClause + ", " + sentenceString;
      }
    } else {
      const coordinatingConjunction =
        coordinatingConjunctions[range(0, coordinatingConjunctions.length)];
      const independentClause = getIndependentClause();
      sentenceString +=
        ", " + coordinatingConjunction + " " + independentClause;
    }
  }

  sentenceString += ".";

  return { words: sentenceString.split(" ") };
}
