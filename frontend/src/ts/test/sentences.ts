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
];

const objectPronouns = ["me", "them", "us", "that", "you", "him", "her"];

function getNoun(plurality: 1 | 2): string {
  if (plurality == 1) {
    return singularNouns[range(0, singularNouns.length)];
  } else {
    return pluralNouns[range(0, pluralNouns.length)];
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

// https://academicguides.waldenu.edu/writingcenter/grammar/sentencestructure
// subjects and objects can be multiple words. subject could be (The small doctor), object could be (tasty spaghetti). mostly just adjatives, but an adjative could be who something belongs to, like (his spaghetti)
// prepositional phrases can be added to the end of a sentence
// dependent clause is just another sentence starting with (although, because, etc.) at the start, or starting with (as, etc.) at the end
// any two sentences can be added together with (and or but)
// a noun could be very long, for example (the difference between the weather in Minnesota in the winter and the weather in Minnesota in the summer)
// https://academicguides.waldenu.edu/writingcenter/grammar/subjectverbagreement
// If the subject is singular, the verb must be singular too
// https://academicguides.waldenu.edu/writingcenter/grammar/verbforms
// https://academicguides.waldenu.edu/writingcenter/grammar/verbtenses
// plural group nouns like (the doctor and the nurse)
// adverbs

export function getSentence(): Sentence {
  let words: string[] = [];

  const { subject, plurality } = getSubject();
  const verb = getVerb(plurality);
  const object = getObject();

  words = words.concat(subject.split(" "));
  words = words.concat(verb.split(" "));
  words = words.concat(object.split(" "));

  words[words.length - 1] += ".";
  const sentence: Sentence = { words };
  console.log(sentence);
  return sentence;
}
