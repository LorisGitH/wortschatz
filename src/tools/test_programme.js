// Programme and exam logic, tested through the app's own functions. Expected values come from the rules of issue #20.
(function () {
  const lines = []; let failed = 0, passed = 0;
  const tests = [];
  function test(name, fn) { tests.push([name, fn]); }
  function eq(got, want) {
    const a = JSON.stringify(got), b = JSON.stringify(want);
    if (a !== b) throw new Error("got " + a + ", wanted " + b);
  }

  /* ---------- notation: short answers ---------- */
  test("a short answer must match exactly", () => {
    eq(markShort(["dem"], "dem").pts, 1);
    eq(markShort(["dem"], "den").pts, 0);
    eq(markShort(["dem"], "").pts, 0);
  });
  test("one wrong letter in an ending or article is wrong, even in a long word", () => {
    eq(markShort(["arbeitest"], "arbeitets").pts, 0);
    eq(markShort(["einen"], "einem").pts, 0);
  });
  test("ae, oe, ue and ss stand for the umlauts and ß", () => {
    eq(markShort(["fährt"], "faehrt").pts, 1);
    eq(markShort(["möchte"], "moechte").pts, 1);
    eq(markShort(["Bücher"], "Buecher").pts, 1);
    eq(markShort(["heißt"], "heisst").pts, 1);
  });
  test("the base vowel does not stand for an umlaut", () => {
    eq(markShort(["fährt"], "fahrt").pts, 0);
    eq(markShort(["Müller"], "Muller").pts, 0);
  });
  test("the replacement only goes one way: an umlaut typed for a real ue is wrong", () => {
    eq(markShort(["neue"], "neü").pts, 0);
  });
  test("nouns need their capital, other words do not need to avoid one", () => {
    eq(markShort(["Schule"], "schule").pts, 0);
    eq(markShort(["Schule"], "Schule").pts, 1);
    eq(markShort(["dem"], "Dem").pts, 1);
  });
  test("a word opening the sentence can be typed without its capital", () => {
    eq(markShort(["Ich"], "ich", true).pts, 1);
    eq(markShort(["Sie"], "sie").pts, 0);
  });
  test("any accepted answer counts, spaces and end punctuation do not", () => {
    eq(markShort(["den", "einen"], " einen ").pts, 1);
    eq(markShort(["Wie viel"], "Wie  viel?").pts, 1);
  });

  /* ---------- notation: vocabulary ---------- */
  const tisch = { kind: "n", art: "der", base: "Tisch", de: "der Tisch", pl: "Tische", fr: "la table" };
  const mueller = { kind: "n", art: "der", base: "Müller", de: "der Müller", pl: "", fr: "le meunier" };
  const buch = { kind: "n", art: "das", base: "Buch", de: "das Buch", pl: "Bücher", fr: "le livre" };
  const eltern = { kind: "n", art: "pl", base: "Eltern", de: "die Eltern", pl: "", plOnly: true, fr: "les parents" };
  const danke = { kind: "p", de: "Danke schön!", fr: "Merci beaucoup !" };
  test("a noun needs article and plural", () => {
    eq(markWord(tisch, "der Tisch", "Tische").pts, 1);
    eq(markWord(tisch, "der Tisch", "die Tische").pts, 1);
    eq(markWord(tisch, "der Tisch", "").pts, 0);
    eq(markWord(tisch, "Tisch", "Tische").pts, 0);
    eq(markWord(tisch, "die Tisch", "Tische").pts, 0);
  });
  test("a noun without plural, or always plural, asks for no plural", () => {
    eq(markWord(eltern, "die Eltern", "").pts, 1);
    eq(markWord(mueller, "der Müller", "").pts, 1);
  });
  test("vocabulary tolerates one wrong letter in a word of 5 letters or more, and says so", () => {
    eq(markWord(tisch, "der Tich", "Tische"), { pts: 0 });
    const r = markWord(tisch, "der Tisck", "Tische");
    eq([r.pts, r.near], [1, true]);
    eq(markWord(tisch, "der Tisch", "Tische").near, undefined);
  });
  test("the tolerance stops at 4-letter words, and at one letter", () => {
    eq(markWord(buch, "das Bich", "Bücher").pts, 0);
    eq(markWord(tisch, "der Tizck", "Tische").pts, 0);
  });
  test("the tolerance does not cover the article, the plural, the capital or an umlaut", () => {
    eq(markWord(tisch, "den Tisch", "Tische").pts, 0);
    eq(markWord(tisch, "der Tisch", "Tischen").pts, 0);
    eq(markWord(tisch, "der tisch", "Tische").pts, 0);
    eq(markWord(mueller, "der Muller", "").pts, 0);
  });
  test("a word with the same meaning is accepted", () => {
    const pult = { kind: "n", art: "das", base: "Pult", de: "das Pult", pl: "Pulte", fr: "la table" };
    eq(markWord(tisch, "das Pult", "Pulte", [pult]).pts, 1);
  });
  test("an expression ignores its punctuation", () => {
    eq(markWord(danke, "danke schön", "").pts, 1);
    eq(markWord(danke, "Danke schon", "").pts, 0);
  });

  /* ---------- notation: sentences to translate ---------- */
  const heisse = ["Ich heiße Anna.", "Mein Name ist Anna."];
  test("an accepted version is worth 1 point, any of them, without its final dot", () => {
    eq(markSentence(heisse, "Ich heiße Anna").pts, 1);
    eq(markSentence(heisse, "mein Name ist Anna.").pts, 1);
    eq(markSentence(heisse, "Ich heisse Anna.").pts, 1);
  });
  test("one word off is worth 0.5 and the correction shows which one", () => {
    const r = markSentence(["Ich gehe mit dem Freund in die Schule."], "Ich gehe mit den Freund in die Schule.");
    eq(r.pts, .5);
    eq(r.marks.filter(m => !m[1]).map(m => m[0]), ["dem"]);
  });
  test("a missing or an extra word is one word off too", () => {
    eq(markSentence(["Ich gehe in die Schule."], "Ich gehe in Schule.").pts, .5);
    eq(markSentence(["Ich gehe in die Schule."], "Ich gehe heute in die Schule.").pts, .5);
  });
  test("a noun without its capital counts as the word that is off", () => {
    eq(markSentence(["Ich gehe in die Schule."], "Ich gehe in die schule.").pts, .5);
  });
  test("two words off, or a word order swap, is worth nothing", () => {
    eq(markSentence(["Ich gehe in die Schule."], "Du gehst in die Schule.").pts, 0);
    eq(markSentence(["Morgen fahre ich nach Berlin."], "Morgen ich fahre nach Berlin.").pts, 0);
    eq(markSentence(heisse, "").pts, 0);
  });
  test("a sentence opening on a noun keeps that capital, other openings do not need one", () => {
    const noun = w => w === "Kinder";
    eq(markSentence(["Kinder spielen."], "kinder spielen", noun).pts, .5);
    eq(markSentence(["Ich gehe."], "ich gehe", noun).pts, 1);
  });

  test("a name or noun opening a sentence keeps its capital, in the real content", () => {
    eq(markSentence(["Anna nimmt den Bus."], "anna nimmt den Bus", keepsCapital).pts, .5);
    eq(markSentence(["Die Kinder trinken Milch."], "die Kinder trinken Milch", keepsCapital).pts, 1);
    eq(markSentence(["Kinder trinken Milch."], "kinder trinken Milch", keepsCapital).pts, .5);
  });
  test("a word that is also an ordinary lowercase word can open a sentence without its capital", () => {
    eq(markSentence(["Morgen bleiben wir zu Hause."], "morgen bleiben wir zu Hause", keepsCapital).pts, 1);
    eq(markSentence(["Ich gehe."], "ich gehe", keepsCapital).pts, 1);
  });
  test("an expression that is a noun keeps its capital", () => {
    const pardon = { kind: "p", de: "Entschuldigung!", fr: "Pardon !" };
    eq(markWord(pardon, "entschuldigung", "", [], keepsCapital).pts, 0);
    eq(markWord(pardon, "Entschuldigung", "", [], keepsCapital).pts, 1);
    eq(markWord(danke, "danke schön", "", [], keepsCapital).pts, 1);
  });

  /* ---------- total ---------- */
  test("the pass mark is 32 out of 40, half points included", () => {
    eq(examPassed(32), true);
    eq(examPassed(31.5), false);
    eq(EXAM_PASS, 32);
  });

  /* ---------- draw ---------- */
  const pool = (p, n) => Array.from({ length: n }, (_, i) => ({ id: p + ":x:" + i }));
  const pools = { gap: pool("g", 30), form: pool("c", 12), word: pool("w", 60), sent: pool("s", 18) };
  const count = (ids, p) => ids.filter(id => id[0] === p).length;
  test("an exam draws 12 gaps, 8 forms, 12 words and 8 sentences, all different", () => {
    const ids = drawExam(pools);
    eq([count(ids, "g"), count(ids, "c"), count(ids, "w"), count(ids, "s")], [12, 8, 12, 8]);
    eq(new Set(ids).size, 40);
  });
  test("a new exam takes up the points that were missed", () => {
    const carry = ["g:x:29", "w:x:59", "s:x:17", "c:x:11"];
    for (let n = 0; n < 20; n++) { const ids = drawExam(pools, carry); eq(carry.every(id => ids.includes(id)), true); eq(ids.length, 40); }
  });
  test("a carried verb form comes back with the same person, once", () => {
    const forms = { gap: pools.gap, word: pools.word, sent: pools.sent, form: [{ id: "c:sein:pres:0" }, { id: "c:haben:pres:3" }, ...pool("c", 8)] };
    const ids = drawExam(forms, ["c:sein:pres:4"]);
    eq(ids.filter(id => id.startsWith("c:sein:pres")), ["c:sein:pres:4"]);
  });
  test("a missed point that no longer exists is dropped", () => {
    const ids = drawExam(pools, ["g:gone:1"]);
    eq(ids.includes("g:gone:1"), false); eq(count(ids, "g"), 12);
  });
  test("the draw differs from one exam to the next", () => {
    eq(new Set(Array.from({ length: 10 }, () => drawExam(pools).join())).size > 1, true);
  });

  /* ---------- unit status ---------- */
  const three = ["a", "b", "c"];
  const st = prog => { const r = unitStatus(three, prog); return [three.map(id => r.state[id]), r.current]; };
  test("with nothing validated, only the first unit is open and the next exam can be tried", () => {
    eq(st({}), [["current", "next", "locked"], "a"]);
  });
  test("a validated unit opens the following one", () => {
    eq(st({ a: { ok: 1, best: 35 } }), [["done", "current", "next"], "b"]);
  });
  test("only a validated unit counts, a failed best score does not", () => {
    eq(st({ a: { ok: 0, best: 20 } }), [["current", "next", "locked"], "a"]);
  });
  test("passing the next exam directly opens the unit after it, the skipped one stays open", () => {
    eq(st({ b: { ok: 1, best: 33 } }), [["open", "done", "current"], "c"]);
  });
  test("the programme stops cleanly after the last available unit", () => {
    eq(st({ a: { ok: 1, best: 40 }, b: { ok: 1, best: 40 }, c: { ok: 1, best: 40 } }), [["done", "done", "done"], null]);
    eq(st({ a: { ok: 1, best: 40 }, b: { ok: 1, best: 40 } }), [["done", "done", "current"], "c"]);
  });
  test("a validation for a unit that no longer exists changes nothing", () => {
    eq(st({ zzz: { ok: 1, best: 40 } }), [["current", "next", "locked"], "a"]);
  });

  /* ---------- exam results and merging ---------- */
  test("reaching 32 validates, and the best score is kept", () => {
    const prog = {};
    recordExam(prog, "a", 20); eq(prog.a, { ok: 0, best: 20 });
    recordExam(prog, "a", 32); eq(prog.a, { ok: 1, best: 32 });
  });
  test("a validation is final: a lower score removes nothing", () => {
    const prog = { a: { ok: 1, best: 36 } };
    recordExam(prog, "a", 12); eq(prog.a, { ok: 1, best: 36 });
    recordExam(prog, "a", 38.5); eq(prog.a, { ok: 1, best: 38.5 });
  });
  const saved = P;
  const withP = (p, fn) => { P = Object.assign({ w: {}, days: {} }, p); try { fn(); } finally { P = saved; } };
  test("merging keeps a validation from either side and the higher best score", () => {
    withP({ prog: { a: { ok: 1, best: 33 }, b: { ok: 0, best: 30 } } }, () => {
      eq(merge({ prog: { a: { ok: 0, best: 35 }, b: { ok: 1, best: 32 }, c: { ok: 1, best: 40 } } }), true);
      eq(P.prog, { a: { ok: 1, best: 35 }, b: { ok: 1, best: 32 }, c: { ok: 1, best: 40 } });
    });
  });
  test("merging older results changes nothing", () => {
    withP({ prog: { a: { ok: 1, best: 35 } } }, () => {
      eq(merge({ prog: { a: { ok: 0, best: 20 } } }), false);
      eq(P.prog, { a: { ok: 1, best: 35 } });
    });
  });
  test("progress from before the programme merges without trouble", () => {
    withP({}, () => { eq(merge({ w: {} }), false); eq(P.prog || {}, {}); });
  });
  test("validations travel with the synchronised snapshot and the export", () => {
    withP({ prog: { a: { ok: 1, best: 35 } } }, () => {
      eq(progressSnapshot().prog, { a: { ok: 1, best: 35 } });
      eq(JSON.parse(backupText()).P.prog, { a: { ok: 1, best: 35 } });
    });
  });

  /* ---------- the real content: every unit, in every language (issue #23) ---------- */
  const countAcrossUnits = (list, key) => { const n = {}; for (const u of UNITS) for (const x of list(u)) n[key(x)] = (n[key(x)] || 0) + 1; return n; };
  const langs = [undefined, "en", "es"];
  const eachLang = fn => { try { for (const l of langs) { loadProgramme(l); fn(l || "fr"); } } finally { loadProgramme(uiLang()); } };
  const fullMarks = (u, id, answer, shown) => { if (examMark(examQuestion(u, id), answer).pts !== 1) throw new Error("no full marks for " + u.id + ": " + shown); };
  test("the programme runs from A1 to the end of B1, in order", () => {
    eq(UNITS.map(u => u.id), ["a1-presenter", "a1-journee", "a1-courses", "a1-ville", "a1-restaurant", "a2-maison", "a2-raconter", "a2-sante", "a2-raisons", "b1-echanger", "b1-travail", "b1-demarches"]);
    eq(UNITS.map(u => u.level).join(), "A1,A1,A1,A1,A1,A2,A2,A2,A2,B1,B1,B1");
  });
  test("every fiche of the level is in exactly one unit", () => {
    const n = countAcrossUnits(u => u.fiches, x => x);
    // fiches 1 to 27 are A1 to B1, and fiche 37 (B1–B2) goes to B1: the fiche numbers do not follow the levels
    for (const id of [...Array(27).keys()].map(i => i + 1).concat(37)) eq([id, n[id]], [id, 1]);
  });
  test("every irregular verb up to B1 is in exactly one unit", () => {
    const n = countAcrossUnits(u => u.verbs, x => x.v.key);
    for (const v of IRR) if (v.level !== "B2") eq([v.key, n[v.key]], [v.key, 1]);
  });
  test("every word of the A1 to B1 themes is in exactly one unit", () => {
    const n = countAcrossUnits(u => u.words, w => w.id);
    for (const w of WORDS) if (!w.iki && !w.mine && w.level === "A1–B1") eq([w.de, n[w.id]], [w.de, 1]);
  });
  test("a unit of the level has about 30 gaps, 16 to 20 sentences, about 60 words (about 33 in B1: 98 words were left for 3 units)", () => {
    for (const u of UNITS) {
      const [t, s, w] = [Object.keys(u.gaps).length, Object.keys(u.sents).length, u.words.length];
      const [wMin, wMax] = u.level === "B1" ? [30, 36] : [50, 66];
      if (t < 28 || t > 35 || s < 16 || s > 20 || w < wMin || w > wMax) throw new Error(`${u.id}: ${t} gaps, ${s} sentences, ${w} words`);
    }
  });
  test("every word, verb and preposition of a unit exists", () => {
    for (const u of UNITS) { eq([u.id, u.words.filter(w => !w).length], [u.id, 0]); eq([u.id, u.verbs.filter(x => !x.v).length], [u.id, 0]); eq([u.id, u.vps.filter(x => !x).length], [u.id, 0]); }
  });
  test("every unit draws a complete exam whose questions all exist", () => {
    for (const u of UNITS) for (let n = 0; n < 10; n++) {
      const ids = drawExam(examPools(u));
      eq([u.id, new Set(ids).size, ids.filter(id => !examQuestion(u, id)).length], [u.id, 40, 0]);
      eq([ids.filter(id => id[0] === "g").length, ids.filter(id => id[0] === "c" || id[0] === "p").length, ids.filter(id => id[0] === "w").length, ids.filter(id => id[0] === "s").length], [12, 8, 12, 8]);
    }
  });
  test("every known answer of every unit gets full marks", () => {
    for (const u of UNITS) {
      for (const id in u.gaps) for (const a of u.gaps[id].answers) fullMarks(u, id, a, a);
      for (const id in u.sents) for (const a of u.sents[id].accepted) fullMarks(u, id, a, a);
      for (const w of u.words) fullMarks(u, "w:" + w.id, [w.de, w.pl || ""], w.de);
      for (const it of u.vps) fullMarks(u, "p:" + it.key, it.token, it.key);
      for (const x of u.verbs) for (let k = 0; k < 6; k++) {
        const id = `c:${x.v.key}:${x.tense}:${k}`;
        if (!examQuestion(u, id)) throw new Error(u.id + ": no form " + x.v.key + " " + k);
        fullMarks(u, id, examQuestion(u, id).answers[0], id);
      }
    }
  });
  test("a gap has a single blank and a cue, a sentence a prompt", () => {
    for (const u of UNITS) {
      for (const id in u.gaps) { const g = u.gaps[id]; if (g.before.includes("[") || g.after.includes("[") || !g.cue || !g.fr) throw new Error(u.id + ": " + g.before + "|" + g.after); }
      for (const id in u.sents) if (!u.sents[id].fr) throw new Error(u.id + ": " + id);
    }
  });
  test("the translated programmes hold the same questions, each with its own wording", () => {
    const byLang = {};
    eachLang(l => { byLang[l] = UNITS.map(u => ({ id: u.id, gaps: Object.keys(u.gaps), sents: Object.keys(u.sents), title: u.title, desc: u.desc })); });
    for (const l of ["en", "es"]) byLang[l].forEach((u, i) => {
      const fr = byLang.fr[i];
      eq([u.id, u.gaps, u.sents], [fr.id, fr.gaps, fr.sents]);
      if (u.title === fr.title || u.desc === fr.desc) throw new Error(l + ": untranslated " + u.id);
    });
  });

  /* ---------- LanguageTool (issue #22) ---------- */
  const K = (...w) => w.map(x => x.split("/"));
  test("keywords are all required, in any listed form", () => {
    eq(hasKeywords(K("gehe", "Schule"), "Heute gehe ich zur Schule."), true);
    eq(hasKeywords(K("gehe", "Schule"), "Heute gehe ich nach Hause."), false);
    eq(hasKeywords(K("heiße/Name", "Anna"), "Mein Name ist Anna"), true);
  });
  test("keywords ignore case and accept ae, oe, ue, ss, but not the bare vowel", () => {
    eq(hasKeywords(K("Tür"), "die tuer"), true);
    eq(hasKeywords(K("heiße"), "Ich heisse"), true);
    eq(hasKeywords(K("Tür"), "die Tur"), false);
    eq(hasKeywords(K("Bus"), "der Busfahrer"), false);
  });
  test("every sentence declares keywords that all its accepted versions contain, in every language", () => {
    eachLang(l => { for (const u of UNITS) for (const id in u.sents) {
      const s = u.sents[id];
      if (!s.keywords.length) throw new Error(l + ": no keywords for " + s.accepted[0]);
      for (const a of s.accepted) if (!hasKeywords(s.keywords, a)) throw new Error(l + ": keywords missing from " + a);
    } });
  });

  const NOW = 1e6;
  const calls = n => Array.from({ length: n }, () => [NOW - 1000, 100]);
  test("the client limit stays under the documented thresholds", () => {
    eq(LT_MAX.reqs < 20 && LT_MAX.bytes < 75000 && LT_MAX.perReq < 20000 && LT_MAX.ms === 60000, true);
    eq(ltAllowed([], 100, NOW), true);
    eq(ltAllowed(calls(LT_MAX.reqs - 1), 100, NOW), true);
    eq(ltAllowed(calls(LT_MAX.reqs), 100, NOW), false);
    eq(ltAllowed([[NOW - 1000, LT_MAX.bytes - 50]], 100, NOW), false);
    eq(ltAllowed([], LT_MAX.perReq + 1, NOW), false);
  });
  test("calls older than the window no longer count", () => {
    eq(ltAllowed(Array.from({ length: 30 }, () => [NOW - LT_MAX.ms, 40000]), 100, NOW), true);
  });

  // a unit of sentences only, and a paper marked on the known answers
  const unitT = () => ({ id: "t", title: "T", level: "A1", desc: "", fiches: [], gaps: { "g:t:1": { before: "", after: " geht.", answers: ["Er"], cue: "x", fr: "x", fiche: 2 } }, words: [], verbs: [], vps: [],
    sents: { "s:t:a": { fr: "a", accepted: ["Ich gehe in die Schule."], fiche: 2, keywords: K("gehe", "Schule") }, "s:t:b": { fr: "b", accepted: ["Wir wohnen in Berlin."], fiche: 2, keywords: K("wohnen", "Berlin") } } });
  const FREE = "Ich gehe heute mit Paul sehr gern in die Schule.";
  const paper = (a, score = 31) => {
    const ids = Object.keys(a), pts = {};
    for (const id of ids) pts[id] = [id[0] === "s" ? markSentence(UNIT_BY_ID.t.sents[id].accepted, a[id]).pts : 1];
    return { ids, a, pts, score: score + ids.reduce((n, id) => n + pts[id][0], 0), ms: 0, fix: 1, fixed: {}, fixA: {}, pend: [] };
  };
  // runs fn with a clean state and a fake API; calls lists what was sent
  const withApi = async (reply, fn) => {
    const realFetch = window.fetch, savedP = P, savedXD = XD, savedSet = settings.lt, sent = [];
    window.fetch = async (url, o) => { sent.push({ url, o, text: o.body.get("text") }); return reply(o.body.get("text"), sent.length); };
    P = Object.assign({ w: {}, days: {} }, { prog: {} }); XD = { exams: {}, last: {} }; UNIT_BY_ID.t = unitT(); delete settings.lt;
    try { await fn(sent); }
    finally { window.fetch = realFetch; P = savedP; XD = savedXD; delete UNIT_BY_ID.t; if (savedSet === undefined) delete settings.lt; else settings.lt = savedSet; view = "home"; EX = null; }
  };
  const answer = matches => ({ ok: true, json: async () => ({ matches }) });
  const noError = () => answer([]);
  const ERR = { message: "Die Präposition ‚mit‘ erfordert <b>Dativ</b>.", offset: 4, length: 3, replacements: [{ value: "dem" }, { value: "x" }] };
  const down = () => { throw new TypeError("Failed to fetch"); };

  test("only written sentences not already right are queued, and none when switched off", () => withApi(noError, async () => {
    const last = paper({ "s:t:a": FREE, "s:t:b": "Wir wohnen in Berlin.", "g:t:1": "Nein" });
    eq(ltQueue(last, UNIT_BY_ID.t), ["s:t:a"]);
    eq(ltQueue(paper({ "s:t:a": "   " }), UNIT_BY_ID.t), []);
    settings.lt = false;
    eq(ltQueue(last, UNIT_BY_ID.t), []);
  }));
  test("a sentence too long for one request is not queued", () => withApi(noError, async () => {
    eq(ltQueue(paper({ "s:t:a": "Ich ".repeat(5000) }), UNIT_BY_ID.t), []);
  }));
  test("a POST form carries the text and the language, and nothing else", () => withApi(noError, async sent => {
    await ltCheck("Ich gehe.");
    eq(sent[0].url, "https://api.languagetool.org/v2/check");
    eq([sent[0].o.method, sent[0].o.credentials], ["POST", "omit"]);
    eq([...sent[0].o.body.keys()].sort(), ["language", "text"]);
    eq(sent[0].o.body.get("language"), "de-DE");
    eq(sent[0].o.headers, undefined);
  }));
  test("an answer without matches is an API failure, not a clean sentence", () => withApi(() => ({ ok: true, json: async () => ({}) }), async () => {
    let threw = false;
    try { await ltCheck("Ich gehe."); } catch (e) { threw = true; }
    eq(threw, true);
  }));
  test("keywords and no error earn the point, and the paper is revised", () => withApi(noError, async () => {
    const last = XD.last.t = paper({ "s:t:a": FREE }); last.pend = ["s:t:a"];
    eq(await ltVerify("t"), "done");
    eq([last.pts["s:t:a"], last.score, last.pend, last.lt["s:t:a"].ok], [[1], 32, [], 1]);
  }));
  test("half a point becomes a full point on a clean free sentence", () => withApi(noError, async () => {
    const last = XD.last.t = paper({ "s:t:a": "Ich gehe jetzt in die Schule." }, 30); last.pend = ["s:t:a"];
    eq(last.score, 30.5);
    await ltVerify("t");
    eq([last.pts["s:t:a"], last.score], [[1], 31]);
  }));
  test("a correct sentence without the keywords gets no point", () => withApi(noError, async () => {
    const last = XD.last.t = paper({ "s:t:a": "Heute bleibe ich lange zu Hause bei Paul." }); last.pend = ["s:t:a"];
    await ltVerify("t");
    eq([last.pts["s:t:a"], last.score, last.lt["s:t:a"].kw], [[0], 31, 1]);
  }));
  test("an error keeps the known mark and its message goes to the correction", () => withApi(() => answer([ERR]), async () => {
    const last = XD.last.t = paper({ "s:t:a": "Ich gehe mit den Paul in die Schule." }); last.pend = ["s:t:a"];
    await ltVerify("t");
    eq(last.pts["s:t:a"], [0]);
    eq(last.lt["s:t:a"].m, [[ERR.message, "geh", "dem"]]);
  }));
  test("a failure keeps the known mark and the unchecked sentences; a later check can turn a fail into a pass", () => withApi(down, async sent => {
    P.prog = {}; recordExam(P.prog, "t", 31.5);
    const last = XD.last.t = paper({ "s:t:a": FREE, "s:t:b": "Wir leben gern lange in Berlin." }, 31); last.score = 31; last.pend = ["s:t:a", "s:t:b"];
    eq(await ltVerify("t"), "error");
    eq([sent.length, last.score, last.pend.length, P.prog.t.ok], [1, 31, 2, 0]);
    const realFetch = window.fetch;
    window.fetch = async () => noError();
    eq(await ltVerify("t"), "done");
    window.fetch = realFetch;
    eq([last.pend.length, last.score, P.prog.t.ok, P.prog.t.best], [0, 32, 1, 32]);
  }));
  test("at the limit the check stops, keeps what is left and counts what it sent", () => withApi(noError, async sent => {
    XD.ltLog = Array.from({ length: LT_MAX.reqs - 1 }, () => [Date.now() - 1000, 10]);
    const last = XD.last.t = paper({ "s:t:a": FREE, "s:t:b": "Wir leben gern lange in Berlin." }); last.pend = ["s:t:a", "s:t:b"];
    eq(await ltVerify("t"), "limit");
    eq([sent.length, last.pend, XD.ltLog.length], [1, ["s:t:b"], LT_MAX.reqs]);
  }));
  test("handing in: known marks first, then the free sentence, without touching short answers", () => withApi(noError, async sent => {
    XD.exams.t = { ids: ["s:t:a", "g:t:1"], a: { "s:t:a": FREE, "g:t:1": "Nein" }, i: 0, ms: 0 };
    EX = { u: "t", screen: "over" }; view = "exam";
    await examSubmit();
    eq(sent.map(x => x.text), [FREE]);
    eq([XD.last.t.score, EX.screen, !!XD.exams.t], [1, "result", false]);
  }));
  test("handing in offline marks at once on the known answers and proposes a new check", () => withApi(down, async () => {
    XD.exams.t = { ids: ["s:t:a"], a: { "s:t:a": FREE }, i: 0, ms: 0 };
    EX = { u: "t", screen: "over" }; view = "exam";
    await examSubmit();
    eq([XD.last.t.score, XD.last.t.pend, EX.screen], [0, ["s:t:a"], "result"]);
    eq(!!document.getElementById("exlt"), true);
  }));
  test("handing in with LanguageTool off sends nothing and keeps nothing to check", () => withApi(noError, async sent => {
    settings.lt = false;
    XD.exams.t = { ids: ["s:t:a"], a: { "s:t:a": FREE }, i: 0, ms: 0 };
    EX = { u: "t", screen: "over" }; view = "exam";
    await examSubmit();
    eq([sent.length, XD.last.t.pend, !!document.getElementById("exlt")], [0, [], false]);
  }));
  test("the correction shows the messages, escaped", () => withApi(() => answer([ERR]), async () => {
    XD.exams.t = { ids: ["s:t:a"], a: { "s:t:a": "Ich gehe mit den Paul in die Schule." }, i: 0, ms: 0 };
    EX = { u: "t", screen: "over" }; view = "exam";
    await examSubmit();
    const html = document.getElementById("app").innerHTML;
    eq([html.includes("erfordert &lt;b&gt;Dativ"), html.includes("languagetool.org")], [true, true]);
  }));
  test("the rewrite of a mistake is never sent", () => withApi(noError, async sent => {
    const last = XD.last.t = paper({ "s:t:a": FREE }); last.fixA["s:t:a"] = "Ich gehe in die Schule.";
    EX = { u: "t", screen: "fix" }; view = "exam";
    programmeClick({ dataset: {}, id: "excheck" });
    eq([sent.length, last.fixed["s:t:a"]], [0, 1]);
  }));
  test("the page before the exam names LanguageTool and links to it, unless switched off", () => withApi(noError, async () => {
    const card = () => unitCard(UNIT_BY_ID.t, "current");
    eq([card().includes('href="https://languagetool.org"'), /rel="[^"]*nofollow/.test(card())], [true, false]);
    settings.lt = false;
    eq(card().includes('href="https://languagetool.org"'), false);
  }));
  test("unchecked sentences can still be checked while a new exam is running", () => withApi(noError, async () => {
    const last = XD.last.t = paper({ "s:t:a": FREE }); last.pend = ["s:t:a"];
    XD.exams.t = { ids: ["s:t:a"], a: {}, i: 0, ms: 0 };
    eq(unitCard(UNIT_BY_ID.t, "current").includes('data-exlt="t"'), true);
  }));
  test("unchecked sentences can still be checked from the rewrite screen", () => withApi(noError, async () => {
    const last = XD.last.t = paper({ "s:t:a": FREE }); last.pend = ["s:t:a"];
    eq(examFixView(UNIT_BY_ID.t).includes('data-exlt="t"'), true);
  }));
  test("a 429 from the API counts as the limit, and keeps the sentence", () => withApi(() => ({ ok: false, status: 429 }), async () => {
    const last = XD.last.t = paper({ "s:t:a": FREE }); last.pend = ["s:t:a"];
    eq(await ltVerify("t"), "limit");
    eq(last.pend, ["s:t:a"]);
  }));
  test("an unexpected answer cannot leave the paper stuck on the waiting screen", () => withApi(() => answer([null]), async () => {
    const last = XD.last.t = paper({ "s:t:a": FREE }); last.pend = ["s:t:a"];
    eq(await ltVerify("t"), "error");
    eq(last.pend, ["s:t:a"]);
  }));
  test("offline, the note says so without also blaming the API", () => withApi(down, async () => {
    const last = XD.last.t = paper({ "s:t:a": FREE }); last.pend = ["s:t:a"];
    EX = { u: "t", screen: "result", lt: "error" };
    Object.defineProperty(navigator, "onLine", { get: () => false, configurable: true });
    try {
      const html = ltPendingHTML("t");
      eq([html.includes(LT_RETURN), html.includes(LT_FAIL), html.includes("data-exlt")], [true, false, false]);
    } finally { delete navigator.onLine; }
  }));
  test("every new label is translated", () => {
    for (const s of [LT_INFO, LT_OFF, LT_WAIT, LT_PEND, LT_ASK, LT_OK, LT_KW, LT_LIMIT, LT_FAIL, LT_BY, LT_RETURN, LT_PRIVACY, LT_SET_T, LT_SET_D])
      for (const l of ["en", "es"]) if (!I18N[l][s]) throw new Error(l + ": " + s);
  });

  (async () => {
    for (const [name, fn] of tests) {
      try { await fn(); passed++; } catch (e) { failed++; lines.push("FAIL: " + name + "\n      " + e.message); }
    }
    lines.push(`${passed} passed, ${failed} failed`);
    const pre = document.createElement("pre"); pre.id = "test-results"; pre.textContent = lines.join("\n");
    document.body.appendChild(pre);
  })();
})();
