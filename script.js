document.addEventListener('DOMContentLoaded', () => {
    // --- DATA and Keywords (No changes) ---
    const questions = [
        { "question": "What is the supreme law of the land?", "answer": "The Constitution" },
        { "question": "What does the Constitution do?", "answer": "Sets up the government" },
        { "question": "The idea of self-government is in the first three words of the Constitution. What are these words?", "answer": "We the People" },
        { "question": "What is an amendment?", "answer": "A Change (to the Constitution)" },
        { "question": "What do we call the first ten amendments to the Constitution?", "answer": "The Bill of Rights" },
        { "question": "What is 1 right or freedom from the First Amendment?*", "answer": "Speech" },
        { "question": "How many amendments does the Constitution have?", "answer": "twenty-seven (27)" },
        { "question": "What did the Declaration of Independence do?", "answer": "Declared our independence (from Great Britain)" },
        { "question": "What are 2 rights in the Declaration of Independence?", "answer": "Life\nLiberty" },
        { "question": "What is freedom of religion?", "answer": "You can practice any religion, or not practice a religion." },
        { "question": "What is the economic system in the United States?*", "answer": "Market economy" },
        { "question": "What is the \"rule of law\"?", "answer": "No one is above the law." },
        { "question": "Name 1 branch or part of the government.*", "answer": "President" },
        { "question": "What stops 1 branch of government from becoming too powerful?", "answer": "Checks and balances" },
        { "question": "Who is in charge of the executive branch?", "answer": "The President" },
        { "question": "Who makes federal laws?", "answer": "Congress" },
        { "question": "What are the two parts of the U.S. Congress?*", "answer": "The Senate and House" },
        { "question": "How many U.S. Senators are there?", "answer": "one hundred (100)" },
        { "question": "We elect a U.S. Senator for how many years?", "answer": "six (6)" },
        { "question": "Who is one of your state’s U.S. Senators now?*", "answer": "Maria" },
        { "question": "The House of Representatives has how many voting members?", "answer": "four hundred thirty-five (435)" },
        { "question": "We elect a U.S. Representative for how many years?", "answer": "two (2)" },
        { "question": "Name your U.S. Representative.", "answer": "Marilyn Strickland (Democrat)" },
        { "question": "Who does a U.S. Senator represent?", "answer": "All people of the state" },
        { "question": "Why do some states have more Representatives than other states?", "answer": "(because) they have more people" },
        { "question": "We elect a President for how many years?", "answer": "four (4)" },
        { "question": "In what month do we vote for President?*", "answer": "November" },
        { "question": "What is the name of the President of the United States now?*", "answer": "Trump" },
        { "question": "What is the name of the Vice President of the United States now?", "answer": "Vance" },
        { "question": "If the President can no longer serve, who becomes President?", "answer": "the Vice President" },
        { "question": "If both the President and the Vice President can no longer serve, who becomes President?", "answer": "the Speaker of the House" },
        { "question": "Who is the Commander in Chief of the military?", "answer": "the President" },
        { "question": "Who signs bills to become laws?", "answer": "the President" },
        { "question": "Who vetoes bills?", "answer": "the President" },
        { "question": "What does the President’s Cabinet do?", "answer": "Advises the President" },
        { "question": "What are 2 Cabinet-level positions?", "answer": "Secretary of Education\nVice President" },
        { "question": "What does the judicial branch do?", "answer": "Explains laws" },
        { "question": "What is the highest court in the United States?", "answer": "the Supreme Court" },
        { "question": "How many justices are on the Supreme Court?", "answer": "9 (Nine)" },
        { "question": "Who is the Chief Justice of the United States now?*", "answer": "John Roberts" },
        { "question": "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?", "answer": "to print money\nto declare war\nto create an army\nto make treaties" },
        { "question": "Under our Constitution, some powers belong to the states. What is 1 power of the states?", "answer": "provide safety" },
        { "question": "Who is the Governor of your state now?", "answer": "Bob Ferguson" },
        { "question": "What is the capital of your state?*", "answer": "Olympia" },
        { "question": "What are the two major political parties in the United States?*", "answer": "Democratic and Republican" },
        { "question": "What is the political party of the President now?*", "answer": "Republican" },
        { "question": "What is the name of the Speaker of the House of Representatives now?*", "answer": "Johnson" },
        { "question": "There are four amendments to the Constitution about who can vote. Describe one of them.", "answer": "Citizens eighteen (18) and older (can vote).\nYou don’t have to pay (a poll tax) to vote.\nAny citizen can vote. (Women and men can vote.)\nA male citizen of any race (can vote)." },
        { "question": "What is 1 responsibility that is only for United States citizens?*", "answer": "Vote in a federal election" },
        { "question": "Name 1 right only for United States citizens.", "answer": "Vote in a federal election" },
        { "question": "What are 2 rights of everyone living in the United States?", "answer": "Freedom of expression\nFreedom of speech" },
        { "question": "What do we show loyalty to when we say the Pledge of Allegiance?", "answer": "the US" },
        { "question": "What is 1 promise you make when you become a United States citizen?", "answer": "Serve in the U.S. military" },
        { "question": "How old do citizens have to be to vote for President?*", "answer": "eighteen (18) and older" },
        { "question": "What are 2 ways that Americans can participate in their democracy?", "answer": "Vote\nRun for office" },
        { "question": "When is the last day you can send in federal income tax forms?*", "answer": "April 15" },
        { "question": "When must all men register for the Selective Service?", "answer": "eighteen (18)" },
        { "question": "What is 1 reason colonists came to America?", "answer": "Freedom" },
        { "question": "Who lived in America before the Europeans arrived?", "answer": "American Indians\nNative Americans" },
        { "question": "What group of people was taken to America and sold as slaves?", "answer": "Africans\npeople from Africa" },
        { "question": "Why did the colonists fight the British?", "answer": "High Taxes" },
        { "question": "Who wrote the Declaration of Independence?", "answer": "Thomas Jefferson" },
        { "question": "When was the Declaration of Independence adopted?", "answer": "July 4, 1776" },
        { "question": "There were 13 original states. Name 3.", "answer": "New Hampshire\nNew York\nNew Jersey" },
        { "question": "What happened at the Constitutional Convention?", "answer": "The Constitution was written.\nThe Founding Fathers wrote the Constitution." },
        { "question": "When was the Constitution written?", "answer": "1787" },
        { "question": "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.", "answer": "(James) Madison" },
        { "question": "What is one thing Benjamin Franklin is famous for?", "answer": "U.S. diploma" },
        { "question": "Who is the “Father of Our Country”?", "answer": "(George) Washington" },
        { "question": "Who was the first President?*", "answer": "(George) Washington" },
        { "question": "What territory did the United States buy from France in 1803?", "answer": "Louisiana" },
        { "question": "Name one war fought by the United States in the 1800s.", "answer": "WCivil War" },
        { "question": "Name the U.S. war between the North and the South.", "answer": "the Civil War" },
        { "question": "Name one problem that led to the Civil War.", "answer": "states’ rights" },
        { "question": "What was one important thing that Abraham Lincoln did?*", "answer": "Freed the slaves" },
        { "question": "What did the Emancipation Proclamation do?", "answer": "Freed the slaves" },
        { "question": "What did Susan B. Anthony do?", "answer": "Fought for civil rights" },
        { "question": "Name one war fought by the United States in the 1900s.*", "answer": "Vietnam War" },
        { "question": "Who was President during World War I?", "answer": "(Woodrow) Wilson" },
        { "question": "Who was President during the Great Depression and World War II?", "answer": "(Franklin) Roosevelt" },
        { "question": "Who did the United States fight in World War II?", "answer": "Japan, Germany, and Italy" },
        { "question": "Before he was President, Eisenhower was a general. What war was he in?", "answer": "World War II" },
        { "question": "During the Cold War, what was the main concern of the United States?", "answer": "Communism" },
        { "question": "What movement tried to end racial discrimination?", "answer": "Civil rights" },
        { "question": "What did Martin Luther King, Jr. do?*", "answer": "Fought for civil rights" },
        { "question": "What major event happened on September 11, 2001, in the United States?", "answer": "Terrorists attacked the United States." },
        { "question": "Name one American Indian tribe in the United States.", "answer": "Sioux" },
        { "question": "Name one of the two longest rivers in the United States.", "answer": "Mississippi" },
        { "question": "What ocean is on the West Coast of the United States?", "answer": "Pacific" },
        { "question": "What ocean is on the East Coast of the United States?", "answer": "Atlantic" },
        { "question": "Name one U.S. territory.", "answer": "Guam" },
        { "question": "Name one state that borders Canada.", "answer": "Washington" },
        { "question": "Name one state that borders Mexico.", "answer": "California" },
        { "question": "What is the capital of the United States?*", "answer": "Washington, D.C." },
        { "question": "Where is the Statue of Liberty?*", "answer": "New York" },
        { "question": "Why does the flag have 13 stripes?", "answer": "because there were 13 original colonies" },
        { "question": "Why does the flag have 50 stars?*", "answer": "because 50 states" },
        { "question": "What is the name of the national anthem?", "answer": "The Star-Spangled Banner" },
        { "question": "When do we celebrate Independence Day?*", "answer": "July 4" },
        { "question": "Name two national U.S. holidays.", "answer": "New Year's Day\nChristmas" }
    ];

    const keywords = [
        // Core Concepts
        'A Change','Constitution', 'government', 'federal', 'state', 'supreme law', 'rights', 'freedom', 'amendment', 'amendments',
        'self-government', 'rule of law', 'checks and balances', 'market economy', 'Pledge of Allegiance',
        'Selective Service', 'vote', 'citizen', 'citizens', 'Taxes',

        // Branches of Government
        'President', 'Congress', 'Senate', 'House', 'Representatives', 'Supreme Court', 'Cabinet',
        'legislative', 'executive', 'judicial', 'Vice President', 'Speaker of the House',

        // Historical Documents & Groups
        'Declaration of Independence', 'Bill of Rights', 'We the People', 'Constitutional Convention',
        'Founding Fathers', 'Federalist Papers', 'Emancipation Proclamation',

        // People
        'George Washington', 'Thomas Jefferson', 'Abraham Lincoln', 'Susan B. Anthony', 'Martin Luther King, Jr.',
        'Benjamin Franklin', 'James Madison',

        // Wars & Conflicts
        'Civil War', 'World War I', 'World War II', 'Vietnam War', 'Cold War', 'Communism',

        // Geography & Symbols
        'United States', 'US', 'America', 'American', 'flag', 'stripes', 'stars', 'Statue of Liberty',
        'Pacific', 'Atlantic', 'Louisiana', 'colonies',

        // Dates & Events
        'July 4', '1776', '1787', 'September 11, 2001', 'Terrorists', 'colonists', 'slaves',

        // Political Parties
        'Democratic', 'Republican',

        // Holidays & Anthems
        'Independence Day', 'national anthem', 'Star-Spangled Banner'
    ];

    // --- DOM Elements (Added theme toggle elements) ---
    const themeToggle = document.getElementById('theme-toggle');
    const lightIcon = document.getElementById('theme-toggle-light-icon');
    const darkIcon = document.getElementById('theme-toggle-dark-icon');
    const learnModeBtn = document.getElementById('learn-mode-btn');
    const testModeBtn = document.getElementById('test-mode-btn');
    const learningModeContainer = document.getElementById('learning-mode');
    const testModeContainer = document.getElementById('test-mode');
    const flashcard = document.getElementById('flashcard');
    const questionText = document.getElementById('question-text');
    const answerText = document.getElementById('answer-text');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const flipBtn = document.getElementById('flip-btn');
    const progressText = document.getElementById('progress-text');
    const speakQuestionBtn = document.getElementById('speak-question-btn');
    const speakAnswerBtn = document.getElementById('speak-answer-btn');
    const testQuestionText = document.getElementById('test-question-text');
    const testAnswerInput = document.getElementById('test-answer-input');
    const recordBtn = document.getElementById('record-btn');
    const checkAnswerBtn = document.getElementById('check-answer-btn');
    const nextQuestionBtn = document.getElementById('next-question-btn');
    const testProgressText = document.getElementById('test-progress-text');
    const testSpeakBtn = document.getElementById('test-speak-btn');
    const resultModal = document.getElementById('result-modal');
    const modalContent = document.getElementById('modal-content');
    const resultTitle = document.getElementById('result-title');
    const resultCorrectAnswer = document.getElementById('result-correct-answer');
    const modalNextBtn = document.getElementById('modal-next-btn');

    // --- State (No changes) ---
    let currentMode = 'learning';
    let learningIndex = 0;
    let testIndex = 0;
    let isFlipped = false;
    let shuffledQuestions = [];
    const synth = window.speechSynthesis;
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    let recognition = null;

    // --- Dark Mode Logic ---
    function applyTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            lightIcon.classList.add('hidden');
            darkIcon.classList.remove('hidden');
        } else {
            document.documentElement.classList.remove('dark');
            lightIcon.classList.remove('hidden');
            darkIcon.classList.add('hidden');
        }
    }

    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.classList.contains('dark');
        const newTheme = isDark ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    });

    // --- All other functions (highlightText, switchMode, etc. are unchanged) ---
    function highlightText(text) {
        if (!text) return '';
        const regex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'gi');
        return text.replace(regex, '<span class="highlight">$&</span>');
    }

    function switchMode(mode) {
        currentMode = mode;
        if (mode === 'learning') {
            learningModeContainer.classList.remove('hidden');
            testModeContainer.classList.add('hidden');
            learnModeBtn.classList.add('active');
            testModeBtn.classList.remove('active');
            displayLearningQuestion();
        } else {
            learningModeContainer.classList.add('hidden');
            testModeContainer.classList.remove('hidden');
            learnModeBtn.classList.remove('active');
            testModeBtn.classList.add('active');
            startTest();
        }
    }

    function displayLearningQuestion() {
        if (isFlipped) {
            flashcard.classList.remove('is-flipped');
            isFlipped = false;
        }
        const currentQuestion = questions[learningIndex];
        questionText.innerHTML = highlightText(currentQuestion.question);
        answerText.innerHTML = highlightText(currentQuestion.answer.replace(/\n/g, '<br>'));
        progressText.textContent = `Question ${learningIndex + 1} / ${questions.length}`;
        synth.cancel();
    }

    function flipCard() {
        isFlipped = !isFlipped;
        flashcard.classList.toggle('is-flipped');
        synth.cancel();
    }

    function shuffle(array) {
        const newArray = array.map(q => ({ ...q, correct: false }));
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }

    function startTest() {
        testIndex = 0;
        shuffledQuestions = shuffle([...questions]);
        displayTestQuestion();
    }

    function displayTestQuestion() {
        if (testIndex >= shuffledQuestions.length) {
            const score = shuffledQuestions.filter(q => q.correct).length;
            testQuestionText.innerHTML = "Test Complete! Great job!";
            testAnswerInput.classList.add('hidden');
            checkAnswerBtn.classList.add('hidden');
            recordBtn.classList.add('hidden');
            nextQuestionBtn.textContent = "Restart Test";
            testProgressText.textContent = `Final Score: ${score} / ${shuffledQuestions.length}`;
            return;
        }

        nextQuestionBtn.textContent = "Next Question";
        testAnswerInput.classList.remove('hidden');
        checkAnswerBtn.classList.remove('hidden');
        recordBtn.classList.remove('hidden');
        const currentQuestion = shuffledQuestions[testIndex];
        testQuestionText.innerHTML = highlightText(currentQuestion.question);
        testProgressText.textContent = `Question ${testIndex + 1} / ${shuffledQuestions.length}`;
        testAnswerInput.value = '';
        testAnswerInput.disabled = false;
        checkAnswerBtn.disabled = false;
        synth.cancel();
    }

    function checkAnswer() {
        const userAnswer = testAnswerInput.value.trim().toLowerCase();
        const correctAnswerObject = shuffledQuestions[testIndex];
        const correctAnswers = correctAnswerObject.answer.toLowerCase().split('\n').map(s => s.trim().replace(/[().*]/g, ''));
        const isCorrect = correctAnswers.some(ans => userAnswer.includes(ans) && ans.length > 2);
        if (isCorrect) {
            shuffledQuestions[testIndex].correct = true;
        }
        resultTitle.textContent = isCorrect ? 'Correct!' : 'Incorrect';
        resultTitle.className = 'text-3xl font-bold mb-4 ' + (isCorrect ? 'correct' : 'incorrect');
        modalContent.className = 'bg-element-primary rounded-2xl p-8 shadow-2xl text-center max-w-sm w-full ' + (isCorrect ? 'correct' : 'incorrect');
        resultCorrectAnswer.innerHTML = highlightText(correctAnswerObject.answer.replace(/\n/g, '<br>'));
        resultModal.classList.remove('hidden');
        testAnswerInput.disabled = true;
        checkAnswerBtn.disabled = true;
    }

    function nextTestQuestion() {
        if (testIndex >= shuffledQuestions.length) {
            startTest();
        } else {
            testIndex++;
            displayTestQuestion();
        }
        resultModal.classList.add('hidden');
    }

    function speak(text) {
        if (synth.speaking) synth.cancel();
        if (text) {
            const cleanText = text.replace(/<[^>]+>/g, '');
            const utterThis = new SpeechSynthesisUtterance(cleanText);
            utterThis.rate = 0.9;
            synth.speak(utterThis);
        }
    }

    function setupSpeechRecognition() {
        if (!SpeechRecognition) {
            recordBtn.style.display = 'none';
            return;
        }
        recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
        recognition.onstart = () => recordBtn.classList.add('is-recording');
        recognition.onend = () => recordBtn.classList.remove('is-recording');
        recognition.onresult = (event) => {
            testAnswerInput.value = event.results[0][0].transcript;
        };
        recognition.onerror = (event) => {
            console.error("Speech recognition error:", event.error);
            recordBtn.classList.remove('is-recording');
        };
    }

    // --- Event Listeners (added theme toggle) ---
    learnModeBtn.addEventListener('click', () => switchMode('learning'));
    testModeBtn.addEventListener('click', () => switchMode('test'));
    flipBtn.addEventListener('click', flipCard);
    nextBtn.addEventListener('click', () => {
        learningIndex = (learningIndex + 1) % questions.length;
        displayLearningQuestion();
    });
    prevBtn.addEventListener('click', () => {
        learningIndex = (learningIndex - 1 + questions.length) % questions.length;
        displayLearningQuestion();
    });
    speakQuestionBtn.addEventListener('click', (e) => { e.stopPropagation(); speak(questionText.textContent); });
    speakAnswerBtn.addEventListener('click', (e) => { e.stopPropagation(); speak(answerText.textContent); });
    checkAnswerBtn.addEventListener('click', checkAnswer);
    modalNextBtn.addEventListener('click', nextTestQuestion);
    nextQuestionBtn.addEventListener('click', nextTestQuestion);
    testSpeakBtn.addEventListener('click', () => speak(testQuestionText.textContent));
    recordBtn.addEventListener('click', () => {
        if (recognition) recognition.start();
    });

    // --- Initial Load ---
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
    switchMode('learning');
    setupSpeechRecognition();
});
