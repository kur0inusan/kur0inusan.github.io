const kobunData = [
    {
        term: "る・らる",
        meaning: "自発・可能・受身・尊敬",
        inflection: "下二段型",
        connection: "未然形",
        conjugation: ["れ", "れ", "る", "るる", "るれ", "れよ"] // 未・連・終・体・已・命
    },
    {
        term: "す・さす・しむ",
        meaning: "使役・尊敬",
        inflection: "下二段型",
        connection: "未然形",
        conjugation: ["せ", "せ", "す", "する", "すれ", "せよ"]
    },
    {
        term: "ず",
        meaning: "打消",
        inflection: "特殊型",
        connection: "未然形",
        conjugation: ["（ず）/ざら", "ず/ざり", "ず", "ぬ/ざる", "ね/ざれ", "（ざれ）"]
    },
    {
        term: "き",
        meaning: "過去",
        inflection: "特殊型",
        connection: "連用形",
        conjugation: ["（せ）", "—", "き", "し", "しか", "—"]
    },
    {
        term: "けり",
        meaning: "過去・詠嘆",
        inflection: "ラ変型",
        connection: "連用形",
        conjugation: ["けら", "—", "けり", "ける", "けれ", "—"]
    },
    {
        term: "つ",
        meaning: "完了・強意・並列",
        inflection: "下二段型",
        connection: "連用形",
        conjugation: ["て", "て", "つ", "つる", "つれ", "てよ"]
    },
    {
        term: "ぬ",
        meaning: "完了・強意・並列",
        inflection: "ナ変型",
        connection: "連用形",
        conjugation: ["な", "に", "ぬ", "ぬる", "ぬれ", "ね"]
    },
    {
        term: "たり（完了）",
        meaning: "存続・完了",
        inflection: "ラ変型",
        connection: "連用形",
        conjugation: ["たら", "たり", "たり", "たる", "たれ", "たれ"]
    },
    {
        term: "り",
        meaning: "存続・完了",
        inflection: "ラ変型",
        connection: "サ変未然・四段已然（リカ変）",
        conjugation: ["ら", "り", "り", "る", "れ", "れ"]
    },
    {
        term: "なり（断定）",
        meaning: "断定・存在",
        inflection: "ナリ活用",
        connection: "体言・連体形",
        conjugation: ["なら", "なり/に", "なり", "なる", "なれ", "なれ"]
    },
    {
        term: "たり（断定）",
        meaning: "断定",
        inflection: "タリ活用",
        connection: "体言",
        conjugation: ["たら", "たり/と", "たり", "たる", "たれ", "たれ"]
    },
    {
        term: "む",
        meaning: "推量・意志・勧誘・仮定・婉曲",
        inflection: "四段型",
        connection: "未然形",
        conjugation: ["—", "—", "む", "む", "め", "—"]
    },
    {
        term: "むず",
        meaning: "推量・意志・勧誘",
        inflection: "サ変型",
        connection: "未然形",
        conjugation: ["—", "—", "むず", "むずる", "むずれ", "—"]
    },
    {
        term: "けむ",
        meaning: "過去推量・伝聞・婉曲",
        inflection: "四段型",
        connection: "連用形",
        conjugation: ["—", "—", "けむ", "けむ", "けめ", "—"]
    },
    {
        term: "らむ",
        meaning: "現在推量・伝聞・婉曲",
        inflection: "四段型",
        connection: "終止形（ラ変は連体形）",
        conjugation: ["—", "—", "らむ", "らむ", "らめ", "—"]
    },
    {
        term: "めり",
        meaning: "推定・婉曲",
        inflection: "ラ変型",
        connection: "終止形（ラ変は連体形）",
        conjugation: ["—", "めり", "めり", "める", "めれ", "—"]
    },
    {
        term: "なり（推定）",
        meaning: "推定・伝聞",
        inflection: "ラ変型",
        connection: "終止形（ラ変は連体形）",
        conjugation: ["—", "なり", "なり", "なる", "なれ", "—"]
    },
    {
        term: "まし",
        meaning: "反実仮想・希望",
        inflection: "特殊型",
        connection: "未然形",
        conjugation: ["ましか/ませ", "—", "まし", "まし", "ましか", "—"]
    },
    {
        term: "まほし",
        meaning: "希望",
        inflection: "形容詞型",
        connection: "未然形",
        conjugation: ["まほしから", "まほしく/かり", "まほし", "まほしき/かる", "まほしけれ", "—"]
    },
    {
        term: "じ",
        meaning: "打消推量・意志",
        inflection: "特殊型",
        connection: "未然形",
        conjugation: ["—", "—", "じ", "じ", "じ", "—"]
    },
    {
        term: "まじ",
        meaning: "打消推量・意志・当然・禁止",
        inflection: "形容詞型",
        connection: "終止形（ラ変は連体形）",
        conjugation: ["まじから", "まじく/かり", "まじ", "まじき/かる", "まじけれ", "—"]
    }
];

let currentIndex = 0;
let items = [...kobunData];
const card = document.getElementById('flashcard');
const termEl = document.getElementById('card-term');
const meaningEl = document.getElementById('card-meaning');
const inflectionEl = document.getElementById('card-inflection');
const connectionEl = document.getElementById('card-connection');
const curIdxEl = document.getElementById('current-index');
const totalCntEl = document.getElementById('total-count');
const progressFill = document.getElementById('progress-fill');
const tableEl = document.getElementById('conjugation-table');

function createTable(conjugation) {
    const headers = ["未然", "連用", "終止", "連体", "已然", "命令"];
    tableEl.innerHTML = `
        <thead>
            <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
            <tr>${conjugation.map(c => `<td>${c}</td>`).join('')}</tr>
        </tbody>
    `;
}

function updateCard() {
    const item = items[currentIndex];

    termEl.textContent = item.term;
    meaningEl.textContent = item.meaning;
    inflectionEl.textContent = item.inflection;
    connectionEl.textContent = item.connection;

    createTable(item.conjugation);

    curIdxEl.textContent = currentIndex + 1;
    totalCntEl.textContent = items.length;

    const progress = ((currentIndex + 1) / items.length) * 100;
    progressFill.style.width = `${progress}%`;
}

function nextCard() {
    if (card.classList.contains('is-flipped')) {
        card.classList.remove('is-flipped');
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % items.length;
            updateCard();
        }, 300);
    } else {
        currentIndex = (currentIndex + 1) % items.length;
        updateCard();
    }
}

function prevCard() {
    if (card.classList.contains('is-flipped')) {
        card.classList.remove('is-flipped');
        setTimeout(() => {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            updateCard();
        }, 300);
    } else {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCard();
    }
}

function shuffle() {
    card.classList.remove('is-flipped');
    setTimeout(() => {
        items = items.sort(() => Math.random() - 0.5);
        currentIndex = 0;
        updateCard();
    }, 300);
}

// Event Listeners
card.addEventListener('click', () => {
    card.classList.toggle('is-flipped');
});

document.getElementById('next-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    nextCard();
});

document.getElementById('prev-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    prevCard();
});

document.getElementById('shuffle-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    shuffle();
});

// Initialize
updateCard();
