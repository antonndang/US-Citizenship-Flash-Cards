document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        { "question": "What is the supreme law of the land?", "answer": "The Constitution", "keywords": ["supreme law", "Constitution"] },
        { "question": "What does the Constitution do?", "answer": "Sets up the government", "keywords": ["Constitution", "Sets up the government"] },
        { "question": "The idea of self-government is in the first three words of the Constitution. What are these words?", "answer": "We the People", "keywords": ["self-government", "Constitution", "We the People"] },
        { "question": "What is an amendment?", "answer": "A Change (to the Constitution)", "keywords": ["amendment", "Change"] },
        { "question": "What do we call the first ten amendments to the Constitution?", "answer": "The Bill of Rights", "keywords": ["first ten amendments", "Bill of Rights"] },
        { "question": "What is 1 right or freedom from the First Amendment?*", "answer": "Speech", "keywords": ["First Amendment", "Speech", "religion", "assembly", "press", "petition"] },
        { "question": "How many amendments does the Constitution have?", "answer": "twenty-seven (27)", "keywords": ["amendments", "twenty-seven"] },
        { "question": "What did the Declaration of Independence do?", "answer": "Declared our independence (from Great Britain)", "keywords": ["Declaration of Independence", "independence"] },
        { "question": "What are 2 rights in the Declaration of Independence?", "answer": "Life\nLiberty", "keywords": ["rights", "Declaration of Independence", "Life", "Liberty", "pursuit of happiness"] },
        { "question": "What is freedom of religion?", "answer": "You can practice any religion, or not practice a religion.", "keywords": ["freedom of religion"] },
        { "question": "What is the economic system in the United States?*", "answer": "Market economy", "keywords": ["economic system", "Market economy"] },
        { "question": "What is the \"rule of law\"?", "answer": "No one is above the law.", "keywords": ["rule of law", "above the law"] },
        { "question": "Name 1 branch or part of the government.*", "answer": "President", "keywords": ["branch", "government", "Congress", "President", "courts"] },
        { "question": "What stops 1 branch of government from becoming too powerful?", "answer": "Checks and balances", "keywords": ["stops", "powerful", "Checks and balances", "separation of powers"] },
        { "question": "Who is in charge of the executive branch?", "answer": "The President", "keywords": ["executive branch", "President"] },
        { "question": "Who makes federal laws?", "answer": "Congress", "keywords": ["federal laws", "Congress"] },
        { "question": "What are the two parts of the U.S. Congress?*", "answer": "The Senate and House", "keywords": ["U.S. Congress", "Senate", "House"] },
        { "question": "How many U.S. Senators are there?", "answer": "one hundred (100)", "keywords": ["U.S. Senators", "one hundred"] },
        { "question": "We elect a U.S. Senator for how many years?", "answer": "six (6)", "keywords": ["U.S. Senator", "six"] },
        { "question": "Who is one of your state’s U.S. Senators now?*", "answer": "Maria Cantwell or Patty Murray", "keywords": ["U.S. Senators", "Maria Cantwell", "Patty Murray"] },
        { "question": "The House of Representatives has how many voting members?", "answer": "four hundred thirty-five (435)", "keywords": ["House of Representatives", "four hundred thirty-five"] },
        { "question": "We elect a U.S. Representative for how many years?", "answer": "two (2)", "keywords": ["U.S. Representative", "two"] },
        { "question": "Name your U.S. Representative.", "answer": "Marilyn Strickland", "keywords": ["U.S. Representative", "Marilyn Strickland"] },
        { "question": "Who does a U.S. Senator represent?", "answer": "All people of the state", "keywords": ["U.S. Senator represents", "all people of the state"] },
        { "question": "Why do some states have more Representatives than other states?", "answer": "(because) they have more people", "keywords": ["more Representatives", "more people", "population"] },
        { "question": "We elect a President for how many years?", "answer": "four (4)", "keywords": ["elect a President", "four"] },
        { "question": "In what month do we vote for President?*", "answer": "November", "keywords": ["vote for President", "November"] },
        { "question": "What is the name of the President of the United States now?*", "answer": "Donald Trump", "keywords": ["President", "Donald Trump"] },
        { "question": "What is the name of the Vice President of the United States now?", "answer": "JD Vance", "keywords": ["Vice President", "JD Vance"] },
        { "question": "If the President can no longer serve, who becomes President?", "answer": "the Vice President", "keywords": ["President can no longer serve", "Vice President"] },
        { "question": "If both the President and the Vice President can no longer serve, who becomes President?", "answer": "the Speaker of the House", "keywords": ["President and Vice President can no longer serve", "Speaker of the House"] },
        { "question": "Who is the Commander in Chief of the military?", "answer": "the President", "keywords": ["Commander in Chief", "President"] },
        { "question": "Who signs bills to become laws?", "answer": "the President", "keywords": ["signs bills", "President"] },
        { "question": "Who vetoes bills?", "answer": "the President", "keywords": ["vetoes bills", "President"] },
        { "question": "What does the President’s Cabinet do?", "answer": "Advises the President", "keywords": ["President’s Cabinet", "Advises"] },
        { "question": "What are 2 Cabinet-level positions?", "answer": "Secretary of Education\nVice President", "keywords": ["Cabinet-level", "Secretary of", "Vice President", "Attorney General"] },
        { "question": "What does the judicial branch do?", "answer": "Explains laws", "keywords": ["judicial branch", "reviews laws", "explains laws", "resolves disputes"] },
        { "question": "What is the highest court in the United States?", "answer": "the Supreme Court", "keywords": ["highest court", "Supreme Court"] },
        { "question": "How many justices are on the Supreme Court?", "answer": "9 (Nine)", "keywords": ["justices", "Supreme Court", "nine"] },
        { "question": "Who is the Chief Justice of the United States now?*", "answer": "John Roberts", "keywords": ["Chief Justice", "John Roberts"] },
        { "question": "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?", "answer": "to print money", "keywords": ["powers", "federal government", "print money", "declare war"] },
        { "question": "Under our Constitution, some powers belong to the states. What is 1 power of the states?", "answer": "provide safety", "keywords": ["powers", "states", "provide schooling", "protection", "safety", "driver's license"] },
        { "question": "Who is the Governor of your state now?", "answer": "Bob Ferguson", "keywords": ["Governor", "Bob Ferguson"] },
        { "question": "What is the capital of your state?*", "answer": "Olympia", "keywords": ["capital of your state", "Olympia"] },
        { "question": "What are the two major political parties in the United States?*", "answer": "Democratic and Republican", "keywords": ["political parties", "Democratic", "Republican"] },
        { "question": "What is the political party of the President now?*", "answer": "Republican", "keywords": ["political party", "President", "Republican"] },
        { "question": "What is the name of the Speaker of the House of Representatives now?*", "answer": "Mike Johnson", "keywords": ["Speaker of the House", "Mike Johnson"] },
        { "question": "There are four amendments to the Constitution about who can vote. Describe one of them.", "answer": "Citizens eighteen (18) and older (can vote).", "keywords": ["amendments", "vote", "eighteen", "Any citizen", "male citizen", "don't have to pay"] },
        { "question": "What is 1 responsibility that is only for United States citizens?*", "answer": "Vote in a federal election", "keywords": ["responsibility", "citizens", "serve on a jury", "vote"] },
        { "question": "Name 1 right only for United States citizens.", "answer": "Vote in a federal election", "keywords": ["right", "citizens", "vote", "run for federal office"] },
        { "question": "What are 2 rights of everyone living in the United States?", "answer": "Freedom of expression\nFreedom of speech", "keywords": ["rights of everyone", "freedom of expression", "speech", "assembly", "religion", "bear arms"] },
        { "question": "What do we show loyalty to when we say the Pledge of Allegiance?", "answer": "the US", "keywords": ["loyalty", "Pledge of Allegiance", "United States", "flag"] },
        { "question": "What is 1 promise you make when you become a United States citizen?", "answer": "Serve in the U.S. military", "keywords": ["promise", "citizen", "give up loyalty", "defend the Constitution", "obey the laws", "serve"] },
        { "question": "How old do citizens have to be to vote for President?*", "answer": "eighteen (18) and older", "keywords": ["vote for President", "eighteen"] },
        { "question": "What are 2 ways that Americans can participate in their democracy?", "answer": "Vote\nRun for office", "keywords": ["participate", "democracy", "vote", "join a political party", "run for office"] },
        { "question": "When is the last day you can send in federal income tax forms?*", "answer": "April 15", "keywords": ["federal income tax", "April 15"] },
        { "question": "When must all men register for the Selective Service?", "answer": "eighteen (18)", "keywords": ["Selective Service", "eighteen"] },
        { "question": "What is 1 reason colonists came to America?", "answer": "Freedom", "keywords": ["colonists", "America", "Freedom", "religious freedom", "economic opportunity"] },
        { "question": "Who lived in America before the Europeans arrived?", "answer": "American Indians", "keywords": ["before Europeans", "American Indians", "Native Americans"] },
        { "question": "What group of people was taken to America and sold as slaves?", "answer": "Africans", "keywords": ["slaves", "Africans"] },
        { "question": "Why did the colonists fight the British?", "answer": "High Taxes", "keywords": ["colonists fight", "high taxes", "taxation without representation"] },
        { "question": "Who wrote the Declaration of Independence?", "answer": "Thomas Jefferson", "keywords": ["wrote", "Declaration of Independence", "Jefferson"] },
        { "question": "When was the Declaration of Independence adopted?", "answer": "July 4, 1776", "keywords": ["Declaration of Independence adopted", "July 4, 1776"] },
        { "question": "There were 13 original states. Name 3.", "answer": "New Hampshire\nNew York\nNew Jersey", "keywords": ["13 original states", "New Hampshire", "Massachusetts", "Rhode Island", "Connecticut", "New York", "New Jersey", "Pennsylvania", "Delaware", "Maryland", "Virginia", "North Carolina", "South Carolina", "Georgia"] },
        { "question": "What happened at the Constitutional Convention?", "answer": "The Constitution was written.", "keywords": ["Constitutional Convention", "Constitution was written"] },
        { "question": "When was the Constitution written?", "answer": "1787", "keywords": ["Constitution written", "1787"] },
        { "question": "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.", "answer": "(James) Madison", "keywords": ["Federalist Papers", "Madison", "Hamilton", "Jay"] },
        { "question": "What is one thing Benjamin Franklin is famous for?", "answer": "U.S. diplomat", "keywords": ["Benjamin Franklin", "diplomat", "oldest member", "Postmaster General", "libraries"] },
        { "question": "Who is the “Father of Our Country”?", "answer": "(George) Washington", "keywords": ["Father of Our Country", "Washington"] },
        { "question": "Who was the first President?*", "answer": "(George) Washington", "keywords": ["first President", "Washington"] },
        { "question": "What territory did the United States buy from France in 1803?", "answer": "Louisiana", "keywords": ["territory", "buy from France", "Louisiana"] },
        { "question": "Name one war fought by the United States in the 1800s.", "answer": "Civil War", "keywords": ["war", "1800s", "War of 1812", "Mexican-American War", "Civil War", "Spanish-American War"] },
        { "question": "Name the U.S. war between the North and the South.", "answer": "the Civil War", "keywords": ["war between the North and the South", "Civil War"] },
        { "question": "Name one problem that led to the Civil War.", "answer": "slavery", "keywords": ["problem", "Civil War", "slavery", "economic reasons", "states’ rights"] },
        { "question": "What was one important thing that Abraham Lincoln did?*", "answer": "Freed the slaves", "keywords": ["Abraham Lincoln", "Freed the slaves", "saved the Union"] },
        { "question": "What did the Emancipation Proclamation do?", "answer": "Freed the slaves", "keywords": ["Emancipation Proclamation", "Freed the slaves"] },
        { "question": "What did Susan B. Anthony do?", "answer": "Fought for civil rights", "keywords": ["Susan B. Anthony", "women’s rights", "civil rights"] },
        { "question": "Name one war fought by the United States in the 1900s.*", "answer": "Vietnam War", "keywords": ["war", "1900s", "World War I", "World War II", "Korean War", "Vietnam War", "Gulf War"] },
        { "question": "Who was President during World War I?", "answer": "(Woodrow) Wilson", "keywords": ["President", "World War I", "Wilson"] },
        { "question": "Who was President during the Great Depression and World War II?", "answer": "(Franklin) Roosevelt", "keywords": ["President", "Great Depression", "World War II", "Roosevelt"] },
        { "question": "Who did the United States fight in World War II?", "answer": "Japan, Germany, and Italy", "keywords": ["fight", "World War II", "Japan", "Germany", "Italy"] },
        { "question": "Before he was President, Eisenhower was a general. What war was he in?", "answer": "World War II", "keywords": ["Eisenhower", "war", "World War II"] },
        { "question": "During the Cold War, what was the main concern of the United States?", "answer": "Communism", "keywords": ["Cold War", "Communism"] },
        { "question": "What movement tried to end racial discrimination?", "answer": "Civil rights", "keywords": ["movement", "racial discrimination", "Civil rights"] },
        { "question": "What did Martin Luther King, Jr. do?*", "answer": "Fought for civil rights", "keywords": ["Martin Luther King, Jr.", "civil rights", "equality"] },
        { "question": "What major event happened on September 11, 2001, in the United States?", "answer": "Terrorists attacked the United States.", "keywords": ["September 11, 2001", "Terrorists attacked"] },
        { "question": "Name one American Indian tribe in the United States.", "answer": "Sioux", "keywords": ["American Indian tribe", "Cherokee", "Navajo", "Sioux", "Chippewa", "Choctaw", "Pueblo", "Apache", "Iroquois"] },
        { "question": "Name one of the two longest rivers in the United States.", "answer": "Mississippi", "keywords": ["longest rivers", "Missouri", "Mississippi"] },
        { "question": "What ocean is on the West Coast of the United States?", "answer": "Pacific", "keywords": ["ocean", "West Coast", "Pacific"] },
        { "question": "What ocean is on the East Coast of the United States?", "answer": "Atlantic", "keywords": ["ocean", "East Coast", "Atlantic"] },
        { "question": "Name one U.S. territory.", "answer": "Guam", "keywords": ["U.S. territory", "Puerto Rico", "Guam", "American Samoa"] },
        { "question": "Name one state that borders Canada.", "answer": "Washington", "keywords": ["state", "borders Canada", "Washington", "Alaska", "New York"] },
        { "question": "Name one state that borders Mexico.", "answer": "California", "keywords": ["state", "borders Mexico", "California", "Texas", "Arizona"] },
        { "question": "What is the capital of the United States?*", "answer": "Washington, D.C.", "keywords": ["capital", "United States", "Washington, D.C."] },
        { "question": "Where is the Statue of Liberty?*", "answer": "New York", "keywords": ["Statue of Liberty", "New York"] },
        { "question": "Why does the flag have 13 stripes?", "answer": "because there were 13 original colonies", "keywords": ["flag", "13 stripes", "13 original colonies"] },
        { "question": "Why does the flag have 50 stars?*", "answer": "because there are 50 states", "keywords": ["flag", "50 stars", "50 states"] },
        { "question": "What is the name of the national anthem?", "answer": "The Star-Spangled Banner", "keywords": ["national anthem", "Star-Spangled Banner"] },
        { "question": "When do we celebrate Independence Day?*", "answer": "July 4", "keywords": ["Independence Day", "July 4"] },
        { "question": "Name 2 national U.S. holidays.", "answer": "New Year's Day\nChristmas", "keywords": ["2 national U.S. holidays", "New Year's Day", "Thanksgiving", "Christmas", "Independence Day"] }
    ];

    // --- DOM Elements ---
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
    const nextQuestionBtn = document.getElementById('next-question-btn'); // This button is no longer used in the main flow but is kept for the final result screen
    const testProgressText = document.getElementById('test-progress-text');
    const testSpeakBtn = document.getElementById('test-speak-btn');
    const resultModal = document.getElementById('result-modal');
    const modalContent = document.getElementById('modal-content');
    const resultTitle = document.getElementById('result-title');
    const resultCorrectAnswer = document.getElementById('result-correct-answer');
    const modalNextBtn = document.getElementById('modal-next-btn');
    const quizModeBtn = document.getElementById('quiz-mode-btn');
    const quizModeContainer = document.getElementById('quiz-mode');
    const quizQuestionText = document.getElementById('quiz-question-text');
    const quizOptionsContainer = document.getElementById('quiz-options-container');
    const quizProgressText = document.getElementById('quiz-progress-text');
    const quizNextBtn = document.getElementById('quiz-next-btn');
    const quizSpeakBtn = document.getElementById('quiz-speak-btn');

    // --- State ---
    const QUESTIONS_PER_SESSION = 10;
    const PASSING_SCORE = 6;
    let currentMode = 'learning';
    let learningIndex = 0;
    let isFlipped = false;
    // Quiz state
    let quizIndex = 0;
    let quizScore = 0;
    let shuffledQuizQuestions = [];
    let incorrectQuizQuestions = [];
    // Test state
    let testIndex = 0;
    let shuffledTestQuestions = [];
    let incorrectTestQuestions = [];

    let currentAudio = null;

    const synth = window.speechSynthesis;
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    let recognition = null;
    let availableVoices = [];

    function loadVoices() {
        availableVoices = synth.getVoices();
    }

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

    function escapeJS(str) {
        return str.replace(/'/g, "\\'").replace(/"/g, "&quot;");
    }

    function highlightText(text, keywords) {
        if (!text) return '';
        if (!keywords || keywords.length === 0) return text;
        const escapedKeywords = keywords.map(kw => kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
        const regex = new RegExp(`\\b(${escapedKeywords.join('|')})\\b`, 'gi');

        return text.replace(regex, (match) => {
            return `<span class="highlight" onclick="speak('${escapeJS(match)}')">${match}</span>`;
        });
    }

    function switchMode(mode) {
        currentMode = mode;
        [learnModeBtn, quizModeBtn, testModeBtn].forEach(btn => btn.classList.remove('active'));
        [learningModeContainer, quizModeContainer, testModeContainer].forEach(c => c.classList.add('hidden'));
        resultModal.classList.add('hidden');

        if (mode === 'learning') {
            learningModeContainer.classList.remove('hidden');
            learnModeBtn.classList.add('active');
            displayLearningQuestion();
        } else if (mode === 'quiz') {
            quizModeContainer.classList.remove('hidden');
            quizModeBtn.classList.add('active');
            startQuiz();
        } else {
            testModeContainer.classList.remove('hidden');
            testModeBtn.classList.add('active');
            startTest();
        }
    }

    function getQuestionSet(remedialQuestions, allQuestions) {
        let newSet = [];
        newSet = newSet.concat(remedialQuestions);

        const remainingCount = QUESTIONS_PER_SESSION - newSet.length;
        if (remainingCount > 0) {
            const remedialQuestionsText = remedialQuestions.map(q => q.question);
            const availableQuestions = allQuestions.filter(q => !remedialQuestionsText.includes(q.question));
            const shuffledAvailable = shuffle(availableQuestions);
            newSet = newSet.concat(shuffledAvailable.slice(0, remainingCount));
        }

        return shuffle(newSet);
    }

    // --- Learning Mode ---
    function displayLearningQuestion() {
        if (isFlipped) {
            flashcard.classList.remove('is-flipped');
            isFlipped = false;
        }
        const currentQuestion = questions[learningIndex];
        questionText.innerHTML = highlightText(currentQuestion.question, currentQuestion.keywords);
        answerText.innerHTML = highlightText(currentQuestion.answer.replace(/\n/g, '<br>'), currentQuestion.keywords);
        progressText.textContent = `${learningIndex + 1} / ${questions.length}`;
        synth.cancel();
    }

    function flipCard() {
        isFlipped = !isFlipped;
        flashcard.classList.toggle('is-flipped');
        synth.cancel();
    }

    function shuffle(array) {
        const newArray = JSON.parse(JSON.stringify(array));
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }

    // --- Quiz Mode ---
    function startQuiz() {
        quizIndex = 0;
        quizScore = 0;
        shuffledQuizQuestions = getQuestionSet(incorrectQuizQuestions, questions);
        incorrectQuizQuestions = [];
        displayQuizQuestion();
    }

    function displayQuizQuestion() {
        if (quizIndex >= shuffledQuizQuestions.length) {
            showFinalResult('quiz', quizScore, shuffledQuizQuestions.length);
            return;
        }

        quizNextBtn.classList.add('hidden');
        const currentQuestion = shuffledQuizQuestions[quizIndex];
        quizQuestionText.innerHTML = highlightText(currentQuestion.question, currentQuestion.keywords);
        quizProgressText.textContent = `Question ${quizIndex + 1} / ${shuffledQuizQuestions.length}`;

        const correctAnswer = currentQuestion.answer.split('\n')[0];
        let options = [correctAnswer];
        while (options.length < 4) {
            const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
            const randomAnswer = randomQuestion.answer.split('\n')[0];
            if (!options.includes(randomAnswer)) {
                options.push(randomAnswer);
            }
        }

        quizOptionsContainer.innerHTML = '';
        shuffle(options).forEach(option => {
            const button = document.createElement('button');
            button.className = 'quiz-option-btn';
            button.textContent = option;
            button.onclick = () => checkQuizAnswer(button, correctAnswer, currentQuestion);
            quizOptionsContainer.appendChild(button);
        });
        synth.cancel();
    }

    function checkQuizAnswer(selectedButton, correctAnswer, currentQuestion) {
        const buttons = quizOptionsContainer.querySelectorAll('.quiz-option-btn');
        let correctButton;

        buttons.forEach(button => {
            button.disabled = true;
            if (button.textContent === correctAnswer) {
                correctButton = button;
            }
        });

        if (selectedButton.textContent === correctAnswer) {
            selectedButton.classList.add('correct-option');
            quizScore++;
        } else {
            selectedButton.classList.add('incorrect-option');
            incorrectQuizQuestions.push(currentQuestion);
            if (correctButton) {
                correctButton.classList.add('correct-option');
            }
        }

        quizNextBtn.classList.remove('hidden');
    }

    // --- Test Mode (Corrected Logic) ---
    function startTest() {
        testIndex = 0;
        shuffledTestQuestions = getQuestionSet(incorrectTestQuestions, questions);
        incorrectTestQuestions = [];
        // Add a property to track if answered correctly for this session
        shuffledTestQuestions.forEach(q => q.answeredCorrectly = false);
        displayTestQuestion();
    }

    function displayTestQuestion() {
        // --- UPDATE: Hide test UI and show final result when test is over ---
        if (testIndex >= shuffledTestQuestions.length) {
            // Hide main test UI before showing the modal
            testQuestionText.innerHTML = '';
            testAnswerInput.classList.add('hidden');
            recordBtn.classList.add('hidden');
            checkAnswerBtn.classList.add('hidden');
            testProgressText.textContent = '';
            nextQuestionBtn.classList.add('hidden');

            const finalScore = shuffledTestQuestions.filter(q => q.answeredCorrectly).length;
            showFinalResult('test', finalScore, shuffledTestQuestions.length);
            return;
        }

        // --- UPDATE: Show the appropriate buttons for a new question ---
        checkAnswerBtn.classList.remove('hidden');
        nextQuestionBtn.classList.add('hidden'); // Hide the bottom next button
        modalNextBtn.classList.add('hidden'); // Hide the modal next button
        testAnswerInput.classList.remove('hidden');
        recordBtn.classList.remove('hidden');

        const currentQuestion = shuffledTestQuestions[testIndex];
        testQuestionText.innerHTML = highlightText(currentQuestion.question, currentQuestion.keywords);
        testProgressText.textContent = `Question ${testIndex + 1} / ${shuffledTestQuestions.length}`;
        testAnswerInput.value = '';
        testAnswerInput.disabled = false;
        synth.cancel();
    }

    function checkAnswer() {
        const userAnswer = testAnswerInput.value.trim().toLowerCase();
        const correctAnswerObject = shuffledTestQuestions[testIndex];
        const correctAnswers = correctAnswerObject.answer.toLowerCase().split('\n').map(s => s.trim().replace(/[().*]/g, ''));
        const isCorrect = correctAnswers.some(ans => userAnswer.includes(ans) && ans.length > 2);

        if (isCorrect) {
            shuffledTestQuestions[testIndex].answeredCorrectly = true;
        } else {
            incorrectTestQuestions.push(correctAnswerObject);
        }

        resultTitle.textContent = isCorrect ? 'Correct!' : 'Incorrect';
        resultTitle.className = 'text-3xl font-bold mb-4 ' + (isCorrect ? 'correct' : 'incorrect');
        modalContent.className = 'bg-element-primary rounded-2xl p-8 shadow-2xl text-center max-w-sm w-full ' + (isCorrect ? 'correct' : 'incorrect');
        resultCorrectAnswer.innerHTML = highlightText(correctAnswerObject.answer.replace(/\n/g, '<br>'), correctAnswerObject.keywords);

        // --- UPDATE: Manage button visibility after checking answer ---
        checkAnswerBtn.classList.add('hidden');
        modalNextBtn.classList.remove('hidden');
        resultModal.classList.remove('hidden');
        testAnswerInput.disabled = true;
    }

    function nextTestQuestion() {
        testIndex++;
        resultModal.classList.add('hidden');
        displayTestQuestion();
    }

    // --- Final Result Function ---
    function showFinalResult(mode, score, total) {
        resultModal.classList.remove('hidden');
        modalNextBtn.classList.remove('hidden');

        if (score >= PASSING_SCORE) {
            resultTitle.textContent = 'Congratulations, You Passed! 🥳';
            resultTitle.className = 'text-3xl font-bold mb-4 correct';
            modalContent.className = 'bg-element-primary rounded-2xl p-8 shadow-2xl text-center max-w-sm w-full correct';
            resultCorrectAnswer.textContent = `Your score was ${score} / ${total}. Great job!`;
            if (mode === 'quiz') incorrectQuizQuestions = [];
            if (mode === 'test') incorrectTestQuestions = [];
        } else {
            resultTitle.textContent = 'Sai rồi, học tiếp nhé mẹ 💪';
            resultTitle.className = 'text-3xl font-bold mb-4 incorrect';
            modalContent.className = 'bg-element-primary rounded-2xl p-8 shadow-2xl text-center max-w-sm w-full incorrect';
            resultCorrectAnswer.innerHTML = `Your score was ${score} / ${total}.<br>The next round will include the questions you missed.`;
        }

        if (mode === 'quiz') {
            modalNextBtn.onclick = () => { resultModal.classList.add('hidden'); startQuiz(); };
            modalNextBtn.textContent = "Start New Quiz";
        } else {
            modalNextBtn.onclick = () => { resultModal.classList.add('hidden'); startTest(); };
            modalNextBtn.textContent = "Start New Test";
        }
    }

    // If not using ElevenLab
    // window.speak = function(text) {
    //     if (synth.speaking) synth.cancel();
    //     if (text) {
    //         const cleanText = text.replace(/<[^>]+>/g, '');
    //         const utterThis = new SpeechSynthesisUtterance(cleanText);
    //         const preferredVoices = ['Google US English', 'Microsoft Zira - English (United States)', 'Samantha'];
    //         let chosenVoice = null;
    //         for (const name of preferredVoices) {
    //             const found = availableVoices.find(voice => voice.name === name && voice.lang.startsWith('en-'));
    //             if (found) {
    //                 chosenVoice = found;
    //                 break;
    //             }
    //         }
    //         if (!chosenVoice) {
    //             chosenVoice = availableVoices.find(voice => voice.lang.startsWith('en-US'));
    //         }
    //         utterThis.voice = chosenVoice;
    //         utterThis.pitch = 1;
    //         utterThis.rate = 0.9;
    //         synth.speak(utterThis);
    //     }
    // }

    // --- VOICE ---
    let isSpeaking = false;

    // ... other state variables like let currentAudio = null;

    // Replace your entire old window.speak function with this new version
    window.speak = async function(text) {
        // 1. Stop any audio that is currently playing.
        if (currentAudio) {
            currentAudio.pause();
            currentAudio = null;
        }

        // 2. If a new sound is already being fetched, cancel this new request.
        if (isSpeaking) {
            return;
        }

        if (text) {
            const cleanText = text.replace(/<[^>]+>/g, '');

            try {
                // 3. Set the state to "loading" to block other requests.
                isSpeaking = true;

                const response = await fetch(`/api/speak?text=${encodeURIComponent(cleanText)}`);

                if (!response.ok) {
                    throw new Error(`Server responded with ${response.status}`);
                }

                const audioBlob = await response.blob();
                const audioUrl = URL.createObjectURL(audioBlob);
                currentAudio = new Audio(audioUrl);

                // 4. When the audio finishes playing naturally, reset the state.
                currentAudio.onended = () => {
                    isSpeaking = false;
                    currentAudio = null;
                };

                currentAudio.play();

            } catch (error) {
                console.error("Audio playback failed:", error);
                alert("Sorry, the premium voice service is currently unavailable.");
                // 5. If there's an error, make sure to reset the state.
                isSpeaking = false;
            }
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

    // --- Event Listeners ---
    learnModeBtn.addEventListener('click', () => switchMode('learning'));
    quizModeBtn.addEventListener('click', () => switchMode('quiz'));
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
    speakQuestionBtn.addEventListener('click', (e) => { e.stopPropagation(); window.speak(questionText.textContent); });
    speakAnswerBtn.addEventListener('click', (e) => { e.stopPropagation(); window.speak(answerText.textContent); });
    checkAnswerBtn.addEventListener('click', checkAnswer);
    modalNextBtn.addEventListener('click', nextTestQuestion); // This is the primary advance button for Test mode now
    testSpeakBtn.addEventListener('click', () => window.speak(testQuestionText.textContent));
    quizSpeakBtn.addEventListener('click', () => window.speak(quizQuestionText.textContent));
    quizNextBtn.addEventListener('click', () => {
        quizIndex++;
        displayQuizQuestion();
    });
    recordBtn.addEventListener('click', () => {
        if (recognition) recognition.start();
    });
    // This button is no longer used for advancing questions, only for restarting at the end screen.
    nextQuestionBtn.addEventListener('click', () => { /* This button's logic is handled by the modal now */ });


    // --- Initial Load ---
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = loadVoices;
    }
    loadVoices();
    switchMode('learning');
    setupSpeechRecognition();
});