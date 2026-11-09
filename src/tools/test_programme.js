// Programme and exam logic, tested through the app's own functions. Expected values come from the rules of issue #20.
(function () {
  const lines = []; let failed = 0, passed = 0;
  function test(name, fn) {
    try { fn(); passed++; } catch (e) { failed++; lines.push("FAIL: " + name + "\n      " + e.message); }
  }
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
  const inProgramme = (list, key) => { const n = {}; for (const u of UNITS) for (const x of list(u)) n[key(x)] = (n[key(x)] || 0) + 1; return n; };
  const langs = [undefined, "en", "es"];
  const eachLang = fn => { try { for (const l of langs) { loadProgramme(l); fn(l || "fr"); } } finally { loadProgramme(uiLang()); } };
  const noMark = q => { throw new Error("no full marks for " + q); };
  test("the programme runs from A1 to the end of A2, in order", () => {
    eq(UNITS.map(u => u.id), ["a1-presenter", "a1-journee", "a1-courses", "a1-ville", "a1-restaurant", "a2-maison", "a2-raconter", "a2-sante", "a2-raisons"]);
    eq(UNITS.map(u => u.level).join(), "A1,A1,A1,A1,A1,A2,A2,A2,A2");
  });
  test("every fiche of the level is in exactly one unit", () => {
    const n = inProgramme(u => u.fiches, x => x);
    for (let id = 1; id <= 20; id++) eq([id, n[id]], [id, 1]);
    eq([n[26], n[27]], [1, 1]);
  });
  test("every irregular verb of A1 and A2 is in exactly one unit", () => {
    const n = inProgramme(u => u.verbs, x => x.v.key);
    for (const v of IRR) if (v.level === "A1" || v.level === "A2") eq([v.key, n[v.key]], [v.key, 1]);
  });
  test("a unit of the level has about 30 gaps, 16 to 20 sentences, about 60 words", () => {
    for (const u of UNITS) {
      const [t, s, w] = [Object.keys(u.gaps).length, Object.keys(u.sents).length, u.words.length];
      if (t < 28 || t > 35 || s < 16 || s > 20 || w < 50 || w > 66) throw new Error(`${u.id}: ${t} gaps, ${s} sentences, ${w} words`);
    }
  });
  test("every word and verb of a unit exists", () => {
    for (const u of UNITS) { eq([u.id, u.words.filter(w => !w).length], [u.id, 0]); eq([u.id, u.verbs.filter(x => !x.v).length], [u.id, 0]); }
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
      for (const id in u.gaps) for (const a of u.gaps[id].answers) { if (examMark(examQuestion(u, id), a).pts !== 1) noMark(u.id + ": " + a); }
      for (const id in u.sents) for (const a of u.sents[id].accepted) { if (examMark(examQuestion(u, id), a).pts !== 1) noMark(u.id + ": " + a); }
      for (const w of u.words) { if (examMark(examQuestion(u, "w:" + w.id), [w.de, w.pl || ""]).pts !== 1) noMark(u.id + ": " + w.de); }
      for (const x of u.verbs) for (let k = 0; k < 6; k++) {
        const q = examQuestion(u, `c:${x.v.key}:${x.tense}:${k}`);
        if (!q) throw new Error(u.id + ": no form " + x.v.key + " " + k);
        if (examMark(q, q.answers[0]).pts !== 1) noMark(u.id + ": " + q.answers[0]);
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
    const ids = {};
    eachLang(l => { ids[l] = UNITS.map(u => [u.id, Object.keys(u.gaps), Object.keys(u.sents), u.title, u.desc]); });
    for (const l of ["en", "es"]) ids[l].forEach((u, i) => {
      eq([u[0], u[1], u[2]], ids.fr[i].slice(0, 3));
      if (u[3] === ids.fr[i][3] || u[4] === ids.fr[i][4]) throw new Error(l + ": untranslated " + u[0]);
    });
  });

  lines.push(`${passed} passed, ${failed} failed`);
  const pre = document.createElement("pre"); pre.id = "test-results"; pre.textContent = lines.join("\n");
  document.body.appendChild(pre);
})();
