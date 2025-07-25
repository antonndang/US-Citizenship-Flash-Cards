document.addEventListener('DOMContentLoaded', () => {
    // --- DATA and Keywords (No changes) ---
    const questions = [
        { "question": "What is the supreme law of the land?", "answer": "the Constitution" },
        { "question": "What does the Constitution do?", "answer": "sets up the government\ndefines the government\nprotects basic rights of Americans" },
        { "question": "The idea of self-government is in the first three words of the Constitution. What are these words?", "answer": "We the People" },
        { "question": "What is an amendment?", "answer": "a change (to the Constitution)\nan addition (to the Constitution)" },
        { "question": "What do we call the first ten amendments to the Constitution?", "answer": "the Bill of Rights" },
        { "question": "What is one right or freedom from the First Amendment?*", "answer": "speech\nreligion\nassembly\npress\npetition the government" },
        { "question": "How many amendments does the Constitution have?", "answer": "twenty-seven (27)" },
        { "question": "What did the Declaration of Independence do?", "answer": "announced our independence (from Great Britain)\ndeclared our independence (from Great Britain)\nsaid that the United States is free (from Great Britain)" },
        { "question": "What are two rights in the Declaration of Independence?", "answer": "life\nliberty\npursuit of happiness" },
        { "question": "What is freedom of religion?", "answer": "You can practice any religion, or not practice a religion." },
        { "question": "What is the economic system in the United States?*", "answer": "capitalist economy\nmarket economy" },
        { "question": "What is the \"rule of law\"?", "answer": "Everyone must follow the law.\nLeaders must obey the law.\nGovernment must obey the law.\nNo one is above the law." },
        { "question": "Name one branch or part of the government.*", "answer": "Congress\nlegislative\nPresident\nexecutive\nthe courts\njudicial" },
        { "question": "What stops one branch of government from becoming too powerful?", "answer": "checks and balances\nseparation of powers" },
        { "question": "Who is in charge of the executive branch?", "answer": "the President" },
        { "question": "Who makes federal laws?", "answer": "Congress\nSenate and House (of Representatives)\n(U.S. or national) legislature" },
        { "question": "What are the two parts of the U.S. Congress?*", "answer": "the Senate and House (of Representatives)" },
        { "question": "How many U.S. Senators are there?", "answer": "one hundred (100)" },
        { "question": "We elect a U.S. Senator for how many years?", "answer": "six (6)" },
        { "question": "Who is one of your state’s U.S. Senators now?*", "answer": "Answers will vary. [District of Columbia residents and residents of U.S. territories should answer that D.C. (or the territory where the applicant lives) has no U.S. Senators.]" },
        { "question": "The House of Representatives has how many voting members?", "answer": "four hundred thirty-five (435)" },
        { "question": "We elect a U.S. Representative for how many years?", "answer": "two (2)" },
        { "question": "Name your U.S. Representative.", "answer": "Answers will vary. [Residents of territories with nonvoting Delegates or Resident Commissioners may provide the name of that Delegate or Commissioner. Also, any statement that the territory has no (voting) Representatives in Congress is acceptable.]" },
        { "question": "Who does a U.S. Senator represent?", "answer": "all people of the state" },
        { "question": "Why do some states have more Representatives than other states?", "answer": "(because of) the state’s population\n(because) they have more people\n(because) some states have more people" },
        { "question": "We elect a President for how many years?", "answer": "four (4)" },
        { "question": "In what month do we vote for President?*", "answer": "November" },
        { "question": "What is the name of the President of the United States now?*", "answer": "Visit uscis.gov/citizenship/testupdates for the name of the President of the United States." },
        { "question": "What is the name of the Vice President of the United States now?*", "answer": "Visit uscis.gov/citizenship/testupdates for the name of the Vice President of the United States." },
        { "question": "If the President can no longer serve, who becomes President?", "answer": "the Vice President" },
        { "question": "If both the President and the Vice President can no longer serve, who becomes President?", "answer": "the Speaker of the House" },
        { "question": "Who is the Commander in Chief of the military?", "answer": "the President" },
        { "question": "Who signs bills to become laws?", "answer": "the President" },
        { "question": "Who vetoes bills?", "answer": "the President" },
        { "question": "What does the President’s Cabinet do?", "answer": "advises the President" },
        { "question": "What are two Cabinet-level positions?", "answer": "Secretary of Agriculture\nSecretary of Commerce\nSecretary of Defense\nSecretary of Education\nSecretary of Energy\nSecretary of Health and Human Services\nSecretary of Homeland Security\nSecretary of Housing and Urban Development\nSecretary of the Interior\nSecretary of Labor\nSecretary of State\nSecretary of Transportation\nSecretary of the Treasury\nSecretary of Veterans Affairs\nAttorney General\nVice President" },
        { "question": "What does the judicial branch do?", "answer": "reviews laws\nexplains laws\nresolves disputes (disagreements)\ndecides if a law goes against the Constitution" },
        { "question": "What is the highest court in the United States?", "answer": "the Supreme Court" },
        { "question": "How many justices are on the Supreme Court?", "answer": "Visit uscis.gov/citizenship/testupdates for the number of justices on the Supreme Court." },
        { "question": "Who is the Chief Justice of the United States now?*", "answer": "Visit uscis.gov/citizenship/testupdates for the name of the Chief Justice of the United States." },
        { "question": "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?", "answer": "to print money\nto declare war\nto create an army\nto make treaties" },
        { "question": "Under our Constitution, some powers belong to the states. What is one power of the states?", "answer": "provide schooling and education\nprovide protection (police)\nprovide safety (fire departments)\ngive a driver’s license\napprove zoning and land use" },
        { "question": "Who is the Governor of your state now?", "answer": "Answers will vary. [District of Columbia residents should answer that D.C. does not have a Governor.]" },
        { "question": "What is the capital of your state?*", "answer": "Answers will vary. [District of Columbia residents should answer that D.C. is not a state and does not have a capital. Residents of U.S. territories should name the capital of the territory.]" },
        { "question": "What are the two major political parties in the United States?*", "answer": "Democratic and Republican" },
        { "question": "What is the political party of the President now?*", "answer": "Visit uscis.gov/citizenship/testupdates for the political party of the President." },
        { "question": "What is the name of the Speaker of the House of Representatives now?*", "answer": "Visit uscis.gov/citizenship/testupdates for the name of the Speaker of the House of Representatives." },
        { "question": "There are four amendments to the Constitution about who can vote. Describe one of them.", "answer": "Citizens eighteen (18) and older (can vote).\nYou don’t have to pay (a poll tax) to vote.\nAny citizen can vote. (Women and men can vote.)\nA male citizen of any race (can vote)." },
        { "question": "What is one responsibility that is only for United States citizens?*", "answer": "serve on a jury\nvote in a federal election" },
        { "question": "Name one right only for United States citizens.", "answer": "vote in a federal election\nrun for federal office" },
        { "question": "What are two rights of everyone living in the United States?", "answer": "freedom of expression\nfreedom of speech\nfreedom of assembly\nfreedom to petition the government\nfreedom of religion\nthe right to bear arms" },
        { "question": "What do we show loyalty to when we say the Pledge of Allegiance?", "answer": "the United States\nthe flag" },
        { "question": "What is one promise you make when you become a United States citizen?", "answer": "give up loyalty to other countries\ndefend the Constitution and laws of the United States\nobey the laws of the United States\nserve in the U.S. military (if needed)\nserve (do important work for) the nation (if needed)\nbe loyal to the United States" },
        { "question": "How old do citizens have to be to vote for President?*", "answer": "eighteen (18) and older" },
        { "question": "What are two ways that Americans can participate in their democracy?", "answer": "vote\njoin a political party\nhelp with a campaign\njoin a civic group\njoin a community group\ngive an elected official your opinion on an issue\ncall Senators and Representatives\npublicly support or oppose an issue or policy\nrun for office\nwrite to a newspaper" },
        { "question": "When is the last day you can send in federal income tax forms?*", "answer": "April 15" },
        { "question": "When must all men register for the Selective Service?", "answer": "at age eighteen (18)\nbetween eighteen (18) and twenty-six (26)" },
        { "question": "What is one reason colonists came to America?", "answer": "freedom\npolitical liberty\nreligious freedom\neconomic opportunity\npractice their religion\nescape persecution" },
        { "question": "Who lived in America before the Europeans arrived?", "answer": "American Indians\nNative Americans" },
        { "question": "What group of people was taken to America and sold as slaves?", "answer": "Africans\npeople from Africa" },
        { "question": "Why did the colonists fight the British?", "answer": "because of high taxes (taxation without representation)\nbecause the British army stayed in their houses (boarding, quartering)\nbecause they didn’t have self-government" },
        { "question": "Who wrote the Declaration of Independence?", "answer": "(Thomas) Jefferson" },
        { "question": "When was the Declaration of Independence adopted?", "answer": "July 4, 1776" },
        { "question": "There were 13 original states. Name three.", "answer": "New Hampshire\nMassachusetts\nRhode Island\nConnecticut\nNew York\nNew Jersey\nPennsylvania\nDelaware\nMaryland\nVirginia\nNorth Carolina\nSouth Carolina\nGeorgia" },
        { "question": "What happened at the Constitutional Convention?", "answer": "The Constitution was written.\nThe Founding Fathers wrote the Constitution." },
        { "question": "When was the Constitution written?", "answer": "1787" },
        { "question": "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.", "answer": "(James) Madison\n(Alexander) Hamilton\n(John) Jay\nPublius" },
        { "question": "What is one thing Benjamin Franklin is famous for?", "answer": "U.S. diplomat\noldest member of the Constitutional Convention\nfirst Postmaster General of the United States\nwriter of “Poor Richard’s Almanac”\nstarted the first free libraries" },
        { "question": "Who is the “Father of Our Country”?", "answer": "(George) Washington" },
        { "question": "Who was the first President?*", "answer": "(George) Washington" },
        { "question": "What territory did the United States buy from France in 1803?", "answer": "the Louisiana Territory\nLouisiana" },
        { "question": "Name one war fought by the United States in the 1800s.", "answer": "War of 1812\nMexican-American War\nCivil War\nSpanish-American War" },
        { "question": "Name the U.S. war between the North and the South.", "answer": "the Civil War\nthe War between the States" },
        { "question": "Name one problem that led to the Civil War.", "answer": "slavery\neconomic reasons\nstates’ rights" },
        { "question": "What was one important thing that Abraham Lincoln did?*", "answer": "freed the slaves (Emancipation Proclamation)\nsaved (or preserved) the Union\nled the United States during the Civil War" },
        { "question": "What did the Emancipation Proclamation do?", "answer": "freed the slaves\nfreed slaves in the Confederacy\nfreed slaves in the Confederate states\nfreed slaves in most Southern states" },
        { "question": "What did Susan B. Anthony do?", "answer": "fought for women’s rights\nfought for civil rights" },
        { "question": "Name one war fought by the United States in the 1900s.*", "answer": "World War I\nWorld War II\nKorean War\nVietnam War\n(Persian) Gulf War" },
        { "question": "Who was President during World War I?", "answer": "(Woodrow) Wilson" },
        { "question": "Who was President during the Great Depression and World War II?", "answer": "(Franklin) Roosevelt" },
        { "question": "Who did the United States fight in World War II?", "answer": "Japan, Germany, and Italy" },
        { "question": "Before he was President, Eisenhower was a general. What war was he in?", "answer": "World War II" },
        { "question": "During the Cold War, what was the main concern of the United States?", "answer": "Communism" },
        { "question": "What movement tried to end racial discrimination?", "answer": "civil rights (movement)" },
        { "question": "What did Martin Luther King, Jr. do?*", "answer": "fought for civil rights\nworked for equality for all Americans" },
        { "question": "What major event happened on September 11, 2001, in the United States?", "answer": "Terrorists attacked the United States." },
        { "question": "Name one American Indian tribe in the United States.", "answer": "Cherokee\nNavajo\nSioux\nChippewa\nChoctaw\nPueblo\nApache\nIroquois\nCreek\nBlackfeet\nSeminole\nCheyenne\nArawak\nShawnee\nMohegan\nHuron\nOneida\nLakota\nCrow\nTeton\nHopi\nInuit" },
        { "question": "Name one of the two longest rivers in the United States.", "answer": "Missouri (River)\nMississippi (River)" },
        { "question": "What ocean is on the West Coast of the United States?", "answer": "Pacific (Ocean)" },
        { "question": "What ocean is on the East Coast of the United States?", "answer": "Atlantic (Ocean)" },
        { "question": "Name one U.S. territory.", "answer": "Puerto Rico\nU.S. Virgin Islands\nAmerican Samoa\nNorthern Mariana Islands\nGuam" },
        { "question": "Name one state that borders Canada.", "answer": "Maine\nNew Hampshire\nVermont\nNew York\nPennsylvania\nOhio\nMichigan\nMinnesota\nNorth Dakota\nMontana\nIdaho\nWashington\nAlaska" },
        { "question": "Name one state that borders Mexico.", "answer": "California\nArizona\nNew Mexico\nTexas" },
        { "question": "What is the capital of the United States?*", "answer": "Washington, D.C." },
        { "question": "Where is the Statue of Liberty?*", "answer": "New York (Harbor)\nLiberty Island" },
        { "question": "Why does the flag have 13 stripes?", "answer": "because there were 13 original colonies\nbecause the stripes represent the original colonies" },
        { "question": "Why does the flag have 50 stars?*", "answer": "because there is one star for each state\nbecause each star represents a state\nbecause there are 50 states" },
        { "question": "What is the name of the national anthem?", "answer": "The Star-Spangled Banner" },
        { "question": "When do we celebrate Independence Day?*", "answer": "July 4" },
        { "question": "Name two national U.S. holidays.", "answer": "New Year's Day\nMartin Luther King, Jr. Day\nPresidents' Day\nMemorial Day\nIndependence Day\nLabor Day\nColumbus Day\nVeterans Day\nThanksgiving\nChristmas" }
    ];

    const keywords = [
        'Constitution', 'President', 'Congress', 'Senate', 'House of Representatives',
        'Supreme Court', 'Bill of Rights', 'Declaration of Independence', 'amendment',
        'amendments', 'rights', 'freedom', 'law', 'government', 'federal', 'state', 'vote',
        'citizen', 'citizens', 'We the People', 'self-government', 'rule of law', 'checks and balances',
        'separation of powers', 'legislative', 'executive', 'judicial', 'Cabinet', 'capitalist',
        'market economy', 'Civil War', 'World War I', 'World War II', 'Emancipation Proclamation',
        'United States', 'America', 'American', 'George Washington', 'Thomas Jefferson',
        'Abraham Lincoln', 'Martin Luther King, Jr.', 'Susan B. Anthony', 'July 4', 'flag'
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
