//Shuffle function for array
Array.prototype.shuffle = function () {
  let i, j, temp;
  i = this.length;
  while (i) {
    j = Math.floor(Math.random() * i);
    i--;
    temp = this[i];
    this[i] = this[j];
    this[j] = temp;
  }
  return this;
}


const wordsList = [
  { question: "vote", hint: "動詞", answer: "投票する" },
  { question: "continue", hint: "動詞", answer: "継続する" },
  { question: "consider", hint: "動詞", answer: "検討する" },
  { question: "significant", hint: "形容詞", answer: "重要な" },
  { question: "intensive", hint: "形容詞", answer: "集中的な" },
  { question: "cause", hint: "名詞", answer: "原因" },
  { question: "alias", hint: "名詞", answer: "別名" },
  { question: "recently", hint: "副詞", answer: "最近" },
  { question: "still", hint: "副詞", answer: "まだ" },
  { question: "several", hint: "形容詞", answer: "いくつか" },
  { question: "execution", hint: "名詞", answer: "実行" },
  { question: "process", hint: "名詞", answer: "過程" },
  { question: "build", hint: "動詞", answer: "建てる" },
  { question: "confused", hint: "形容詞", answer: "混乱した" },
  { question: "contains", hint: "動詞", answer: "含む" },
  { question: "past", hint: "名詞", answer: "過去" },
  { question: "guess", hint: "名詞", answer: "推測" },
  { question: "seems", hint: "動詞", answer: "見える" },
  { question: "allow", hint: "動詞", answer: "許す" },
  { question: "necessary", hint: "形容詞", answer: "必要" },
  { question: "climb", hint: "動詞", answer: "登る" },
  { question: "purpose", hint: "名詞", answer: "目的" },
  { question: "crucial", hint: "形容詞", answer: "重要" },
  { question: "meanwhile", hint: "副詞", answer: "その間" },
  { question: "prevent", hint: "動詞", answer: "防ぐ" },
  { question: "resume", hint: "動詞", answer: "再開する" },
  { question: "reduce", hint: "動詞", answer: "減らす" },
  { question: "fix", hint: "動詞", answer: "直す" },
  { question: "send", hint: "動詞", answer: "送る" },
  { question: "difference", hint: "名詞", answer: "違い" },
  { question: "valid", hint: "形容詞", answer: "有効" },
  { question: "correct", hint: "形容詞", answer: "正しい" },
  { question: "solve", hint: "動詞", answer: "解決する" },
  { question: "calculate", hint: "動詞", answer: "計算する" },
  { question: "oppose", hint: "動詞", answer: "反対する" },
  { question: "declare", hint: "動詞", answer: "宣言する" },
  { question: "infection", hint: "名詞", answer: "感染" },
  { question: "curbing", hint: "動詞", answer: "抑える" },
  { question: "consent", hint: "名詞", answer: "同意" },
  { question: "criticize", hint: "動詞", answer: "批判する" },
  { question: "disable", hint: "名詞", answer: "無効にする" },
  { question: "guru", hint: "名詞", answer: "達人" },
  { question: "myth", hint: "名詞", answer: "神話" },
  { question: "expect", hint: "動詞", answer: "期待する" },
  { question: "such", hint: "形容詞", answer: "そのような" },
  { question: "unfamiliar", hint: "形容詞", answer: "馴染みのない" },
  { question: "similar", hint: "形容詞", answer: "似ている" },
  { question: "arise", hint: "動詞", answer: "発生する" },
  { question: "rarely", hint: "副詞", answer: "めったに" },
  { question: "ironically", hint: "副詞", answer: "皮肉なことに" },
  { question: "equip", hint: "動詞", answer: "装備する" },
  { question: "recipient ", hint: "名詞", answer: "受取人" },
  { question: "presumably", hint: "副詞", answer: "たぶん" },
  { question: "dispel", hint: "動詞", answer: "払拭する" },
  { question: "apply", hint: "動詞", answer: "適用する" },
  { question: "systematically", hint: "副詞", answer: "体系的に" },
  { question: "analyze", hint: "動詞", answer: "分析する" },
  { question: "rest", hint: "動詞", answer: "残り" },
  { question: "intuition", hint: "名詞", answer: "直感" },
  { question: "thought", hint: "名詞", answer: "思想" },
  { question: "relentless", hint: "形容詞", answer: "執拗な" },
  { question: "curiosity", hint: "名詞", answer: "好奇心" },
  { question: "simply", hint: "副詞", answer: "単に" },
  { question: "remain", hint: "動詞", answer: "残る" },
  { question: "huge", hint: "形容詞", answer: "巨大な" },
  { question: "variance", hint: "名詞", answer: "分散" },
  { question: "aptitude", hint: "名詞", answer: "適性" },
  { question: "knowledgeable", hint: "形容詞", answer: "知識のある" },
  { question: "productive", hint: "形容詞", answer: "生産的" },
  { question: "debunking", hint: "動詞", answer: "暴く" },
  { question: "efficient", hint: "形容詞", answer: "効率的" },
  { question: "skill", hint: "名詞", answer: "技術" },
  { question: "remove", hint: "動詞", answer: "削除する" },
  { question: "perceive", hint: "動詞", answer: "知覚する" },
  { question: "barrier", hint: "名詞", answer: "障壁" },
  { question: "instead", hint: "副詞", answer: "代わりに" },
  { question: "advance", hint: "名詞", answer: "前進" },
  { question: "obstacles", hint: "名詞", answer: "障害物" },
  { question: "propagate", hint: "動詞", answer: "広める" },
  { question: "employer", hint: "名詞", answer: "雇用者" },
  { question: "attitude", hint: "名詞", answer: "姿勢、態度" },
  { question: "valuable", hint: "形容詞", answer: "貴重な" },
  { question: "contribute", hint: "動詞", answer: "助ける" },
  { question: "peers", hint: "名詞", answer: "仲間" },
  { question: "develop ", hint: "動詞", answer: "発展させる" },
  { question: "experts", hint: "名詞", answer: "専門家" },
  { question: "possibility", hint: "名詞", answer: "可能性" },
  { question: "inaccurate", hint: "形容詞", answer: "不正確" },
  { question: "denounce", hint: "動詞", answer: "非難する" },
  { question: "reached", hint: "動詞", answer: "達した" },
  { question: "administration", hint: "名詞", answer: "行政" },
  { question: "exposed", hint: "動詞", answer: "露出した" },
  { question: "desperately", hint: "副詞", answer: "必死に" },
  { question: "tariffs", hint: "名詞", answer: "関税" },
  { question: "unemployment", hint: "名詞", answer: "失業" },
  { question: "fear", hint: "名詞", answer: "恐れ" },
  { question: "ever", hint: "副詞", answer: "今まで" },
  { question: "plunge", hint: "動詞", answer: "突入" }

]

const questionList = [
  { question: "What do you do?", answer: "職業は何ですか？" },
  { question: "What did you do last weekend?", answer: "先週末は何をしていましたか？" },
  { question: "What time is it?", answer: "何時ですか？" },
  { question: "What do you want to study today?", answer: "今日は何を勉強したいですか？" },
  { question: "When did you join the current company?", answer: "いまの会社に入社したのはいつですか？" },
  { question: "When can we meet?", answer: "いつ会える？" },
  { question: "When do you usually eat lunch?", answer: "普段はいつランチを食べていますか？" },
  { question: "When will the meeting start?", answer: "会議はいつ始まりますか？" },
  { question: "What are you doing now?", answer: "何をしていますか？" },
  { question: "What do you like to do in your free time?", answer: "時間があるときは何をしていますか？" },
  { question: "What kind of food do you like?", answer: "どんな種類の料理が好きですか？" },
  { question: "What do you want to do?", answer: "何をしたいですか？" },
  { question: "What do you hope to do in the future?", answer: "あなたは将来何がしていですか？" },
  { question: "What do you mean by XYZ?", answer: "XYZはどういう意味ですか？" },
  { question: "When will you finish work?", answer: "いつ仕事が終わりますか？" },
  { question: "When is it convenient for you?", answer: "いつ都合が宜しいですか？" },
]

//Create to span elements
const spanQuestion = document.createElement('span');
spanQuestion.className = "question";
const spanHint = document.createElement('span');
spanHint.className = "hint";
const spanAnswer = document.createElement('span');
spanAnswer.className = "answer";

//get element id
const words = document.getElementById('allWordsList')
const questions = document.getElementById('allQuestionList')

// create each list (words and question)
wordsList.shuffle().forEach(word => words.appendChild(createListWords(word)))
questionList.shuffle().forEach(phrase => questions.appendChild(createListPhrase(phrase)))

//get div from document (for random)
const todayWords = document.getElementById("todayWords")

todayWords.appendChild(todayRandomWords())
todayWords.appendChild(todayRandomQuestionPhrase())

//Get id or class
const testPaper = document.getElementById("paperQandA")
const inputAnswer = document.querySelectorAll(".testTextInput")

//Create elements for span and input
const spanQ = document.createElement('span')
spanQ.className = "test-question"
const spanH = document.createElement('span')
spanH.className = "test-hint"
const input = document.createElement('input')
input.className = "testTextInput"
input.type = "text"
const spanA = document.createElement('span')
spanA.className = "test-answer"

let randomWords10 = []
resetQuestion()

function resetQuestion() {
  //Select random 10 words
  const copy = wordsList.slice();
  randomWords10 = [...Array(10)].map(() => copy.splice(Math.floor(Math.random() * copy.length), 1)[0]);
  Array.from(testPaper.children).forEach(child => testPaper.removeChild(child));
  randomWords10.forEach(test => testPaper.appendChild(paperText(test)));
}

//Create list in fragment function from words and question
function speak(word) {
  const u = new SpeechSynthesisUtterance();
  u.lang = 'en-US';
  u.text = word;
  speechSynthesis.speak(u);
}

function createListWords(word) {
  const li = document.createElement('li');
  li.className = "post words";
  li.onclick = () => {
    speak(word.question)
  }
  spanQuestion.textContent = word.question;
  spanHint.textContent = word.hint;
  spanAnswer.textContent = word.answer;
  li.appendChild(spanQuestion.cloneNode(true));
  li.appendChild(spanHint.cloneNode(true));
  li.appendChild(spanAnswer.cloneNode(true));
  return li
};
function createListPhrase(phrase) {
  const li = document.createElement('li');
  li.className = "post phrase";
  li.onclick = () => {
    speak(phrase.question)
  }
  spanQuestion.textContent = phrase.question;
  spanAnswer.textContent = phrase.answer;
  li.appendChild(spanQuestion.cloneNode(true));
  li.appendChild(spanAnswer.cloneNode(true));
  return li
};

function createListWords(word) {
  const li = document.createElement('li');
  li.className = "post words";
  li.onclick = () => {
    let word = li.querySelector('.question').textContent;
    let u = new SpeechSynthesisUtterance();
    u.lang = 'en-US';
    u.text = word;
    speechSynthesis.speak(u);
  }
  spanQuestion.textContent = word.question;
  spanHint.textContent = word.hint;
  spanAnswer.textContent = word.answer;
  li.appendChild(spanQuestion.cloneNode(true));
  li.appendChild(spanHint.cloneNode(true));
  li.appendChild(spanAnswer.cloneNode(true));
  return li
};
function createListPhrase(phrase) {
  const li = document.createElement('li');
  li.className = "post phrase";
  li.onclick = () => {
    let word = li.querySelector('.question').textContent;
    let u = new SpeechSynthesisUtterance();
    u.lang = 'en-US';
    u.text = word;
    speechSynthesis.speak(u);
  }
  spanQuestion.textContent = phrase.question;
  spanAnswer.textContent = phrase.answer;
  li.appendChild(spanQuestion.cloneNode(true));
  li.appendChild(spanAnswer.cloneNode(true));
  return li
};
//Create Today's words
function todayRandomWords() {
  const oneWord = document.createElement('p')
  oneWord.className = "today-words"
  const wordIcon = document.createElement('i')
  wordIcon.className = "fi-volume"
  wordIcon.onclick = () => {
    let word = oneWord.querySelector('.question').textContent;
    let u = new SpeechSynthesisUtterance();
    u.lang = 'en-US';
    u.text = word;
    speechSynthesis.speak(u);
  }
  const randomWords = wordsList[Math.floor(Math.random() * wordsList.length)]
  spanQuestion.textContent = randomWords.question
  spanHint.textContent = randomWords.hint
  spanAnswer.textContent = randomWords.answer
  oneWord.appendChild(wordIcon)
  oneWord.appendChild(spanQuestion.cloneNode(true))
  oneWord.appendChild(spanHint.cloneNode(true))
  oneWord.appendChild(spanAnswer.cloneNode(true))
  return oneWord
}
//Create Today's question
function todayRandomQuestionPhrase() {
  const oneQuestion = document.createElement('p')
  oneQuestion.className = "today-words"
  oneQuestion.id = "todayQuestion"
  const questionIcon = document.createElement('i')
  questionIcon.className = "fi-volume"
  questionIcon.onclick = () => {
    let word = oneQuestion.querySelector('.question').textContent;
    let u = new SpeechSynthesisUtterance();
    u.lang = 'en-US';
    u.text = word;
    speechSynthesis.speak(u);
  }
  const randomPhrase = questionList[Math.floor(Math.random() * questionList.length)]
  spanQuestion.textContent = randomPhrase.question
  spanAnswer.textContent = randomPhrase.answer
  oneQuestion.appendChild(questionIcon)
  oneQuestion.appendChild(spanQuestion.cloneNode(true))
  oneQuestion.appendChild(spanAnswer.cloneNode(true))
  return oneQuestion
}
//Create shuffle function
function shuffleWords() {
  const oldWord = document.querySelector(".today-words")
  const oldQuestion = document.getElementById("todayQuestion")
  const newWord = todayRandomWords()
  const newQuestion = todayRandomQuestionPhrase()
  todayWords.replaceChild(newWord, oldWord)
  todayWords.replaceChild(newQuestion, oldQuestion)
}
//Create a list to question
function paperText(test) {
  const li = document.createElement('li')
  li.className = "test-low"
  spanQ.textContent = test.answer
  spanH.textContent = test.hint
  li.appendChild(spanQ.cloneNode(true))
  li.appendChild(spanH.cloneNode(true))
  li.appendChild(input.cloneNode(true))
  li.appendChild(spanA.cloneNode(true))
  return li
}
function sendAnswer() {
  const li = document.querySelectorAll(".test-low")
  li.forEach((test) => {
    const question = test.querySelector(".test-question").textContent
    const answer = test.querySelector(".testTextInput").value
    const resultEl = test.querySelector(".test-answer")
    const trueAnswer = randomWords10.find(word => word.answer === question)
    if (answer === trueAnswer.question) {
      resultEl.className = "test-answer correct"
      resultEl.textContent = "right!"
    } else {
      resultEl.className = "test-answer incorrect"
      resultEl.textContent = "wrong"
    }
  })
}
