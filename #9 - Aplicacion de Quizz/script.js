function loadApp(){
    //variables
    let currentQuestion = 0;
    let userSelectedOption = null;
    let score = 0;

    //elements
    const currentQuestionDisplay = document.getElementById('currentQuestion');
    const totalQuestions = document.getElementById('totalQuestions');
    const questionTittle = document.getElementById('questionTittle');
    const questionsOptionsContainer = document.getElementById('questionOptionsContainer');
    const nextQuestionButton = document.getElementById('nextQuestionButton');
    const errorMessage = document.getElementById('errorMessage');

    //questions
    const questions = [
        {
            question: 'What is the best programming language ever?',
            options: ['Javascript', 'Python', 'C', 'Java'],
            correctAnswer: 'Javascript'
        },
        {
            question: 'What is the name of the Minecraft main character?',
            options: ['Carl', 'Jhon', 'Steve', 'Josh'],
            correctAnswer: 'Steve'
        },
        {
            question: 'Who is the best LoL player?',
            options: ['Tarzan', 'Showmaker', 'xPeke', 'Faker'],
            correctAnswer: 'Faker'
        }
    ];
    
    //set # of questions counter
    totalQuestions.textContent = questions.length;

    function renderQuestion() {
        // Clear previous options
        questionsOptionsContainer.innerHTML = '';
        userSelectedOption = '';

        // Update question number and title
        currentQuestionDisplay.textContent = currentQuestion + 1;
        questionTittle.textContent = questions[currentQuestion].question;

        // Render options
        questions[currentQuestion].options.forEach(optionText => {
            const optionDiv = document.createElement('div');
            optionDiv.classList.add('question-option');
            optionDiv.textContent = optionText;

            // Add click event once per option
            optionDiv.addEventListener('click', function(){
                userSelectedOption = this.textContent;
                [...questionsOptionsContainer.children].forEach(child => 
                    child.classList.remove('question-option-selected')
                );
                optionDiv.classList.add('question-option-selected');
            });

            questionsOptionsContainer.appendChild(optionDiv);
        });
    }

    function checkAnswer(){
        let correctAnswer = questions[currentQuestion].correctAnswer;
        userSelectedOption === correctAnswer ? score += 1 : null;
        currentQuestion += 1;
    }

    function restartQuizz(){
        currentQuestion = 0;
        userSelectedOption = null;
        score = 0;
        nextQuestionButton.style.display = 'flex';
        renderQuestion();
    }

    function renderResult(){
        questionTittle.textContent = 'You have finished the quizz!';
        questionsOptionsContainer.innerHTML = '';

        nextQuestionButton.style.display = 'none';

        let scoreDisplay = document.createElement('span');
        scoreDisplay.textContent = 'Your score was: ' + score + '/' + questions.length + '.';

        let restarQuizzButton = document.createElement('button');
        restarQuizzButton.innerHTML = `
            Restart quizz
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
        `;

        restarQuizzButton.addEventListener('click', restartQuizz);

        questionsOptionsContainer.appendChild(scoreDisplay);
        questionsOptionsContainer.appendChild(restarQuizzButton);
    }

    nextQuestionButton.addEventListener('click', () => {
        if(userSelectedOption == ''){
            errorMessage.textContent = 'Please select an option';
        }else{
            if(currentQuestion == questions.length-1){
                errorMessage.textContent = '';
                checkAnswer();
                renderResult();
            }else{
                errorMessage.textContent = '';
                checkAnswer();
                renderQuestion();
            }
        }
    });

    renderQuestion();
}

document.addEventListener('DOMContentLoaded', loadApp);