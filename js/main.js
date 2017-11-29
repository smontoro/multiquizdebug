var questions = [
	{
		question : "What HTML tags are needed for a basic HTML file structure?",
		answers  : [" html, head, body", " html, toe, body", " html, head, hand", " What is a HTML file?"],
		correct  : "html, head, body"
	},
	{
		question : "What is the paragraph tag used for?",
		answers  : [" to create paragraph text on a CSS page", " to create heading text on a HTML page", " to create heading text on a CSS page", " to create paragraph text on a HTML page"],
		correct  : " to create paragraph text on a HTML page"
	},
	{
		question : "What are 3 ways to write CSS?",
		answers :  [" External Style Sheet, External Style Tag & Inline Style", " External Style Sheet, Internal Style Tag & Inline Style", " Inline Style Sheet, Internal Style Tag & Inline Style", " External Style Sheet, Internal Style Tag & Inline Style Sheet"],
		correct  : " External Style Sheet, Internal Style Tag & Inline Style"
	},
	{
		question : "How to declare an HTML file type?",
		answers  : [" <!CSS doctype>", " <!HTML doctype>", " <!DOCTYPE CSS>", " <!DOCTYPE html>"],
		correct  : " <!DOCTYPE html>"
	},
	{
		question : "Where in your HTML file do you link to your CSS file?",
		answers  : [" What is CSS?", " In between the opening and closing head tags", " In between the opening and closing body tags", " In between the opening and closing heading tags"],
		correct  : " In between the opening and closing head tags"
	},
	{
		question : "How many different heading tags are there?",
		answers  : [" 6", " 5", " 7", " 2"],
		correct   : " 6"
	},
	{
		question : "What does CSS stand for?",
		answers  : [" Cascading Smile Sheets", " Cascading Style Stuff", " Cascading Style Sheets", " Hypertext Markup Language"],
		correct  : " Cascading Style Sheets"
	}
];

//stores the question form in the variable
var questionForm = document.getElementById("questionForm")

//when the startGame button is hit
function startGame() {
	//make the form blank
	questionForm.innerHTML = ""
	questionForm.style.margin  = "12% auto";

	//activates the createQuestions function
	createQuestions()
};

//adds the questions & radio buttons to the page
function createQuestions() {
	questionForm.innerHTML = ""
	console.log("running")
	//loops through the variable i to pull the questions into the h2
	for (var i = 0; i < 1; i++) {
		var formGroup   = document.createElement("div")
			formGroup.className = "formGroup"
		var questionEl  = document.createElement("h2")
			questionEl.id = "questions" + [i]
		var questionText = document.createTextNode(questions[i].question)
	
		questionEl.appendChild(questionText)
		formGroup.appendChild(questionEl)
		questionForm.appendChild(formGroup)

		//loops through object answers & creates the question section content
		for (var j = 0; j < questions[i].answers.length; j++) {
			var answerDiv  = document.createElement("div")
				answerDiv.className = "questionWrap"
			var answerEl   = document.createElement("input")
				answerEl.type = "radio"
				answerEl.name = "radio" + [i]
				answerEl.value = questions[i].answers[j]
			var answerText = document.createTextNode(questions[i].answers[j])

			answerDiv.appendChild(answerEl)
			answerDiv.appendChild(answerText)
			formGroup.appendChild(answerDiv)
		}
	}

	//stores a button in the variable
	var submitBtn = document.createElement("button")

	//gives the button a class 
	submitBtn.className   = "btn btn-lg btn-primary"
	//adds text to the button
	submitBtn.textContent = "Submit Answer"
	//adds the type of button
	submitBtn.type        = "button"
	//adds the function to the button
	submitBtn.setAttribute("onclick", "submitAnswer()")
	//adds the button to the form div
	questionForm.appendChild(submitBtn)
};

//submits the user's answers
function submitAnswer() {
	//stores the input element in the els variable
	var els = document.getElementsByTagName("input")

	//loops through the submitted answers
	for (var i = 0; i < els.length; i++) {
		//if the checked choice & its value = the correct answer...
		if (els[i].checked && els[i].value.trim() == questions[0].correct.trim()) {
			console.log("Correct Answer")

			//get rid of the first array question...
			questions.shift()

			//give its parent element the following class names...
			els[i].parentElement.className = "questionWrap right"

		
			//if there are no more questions
			if(questions.length === 0) {
				//empty all text from the form
				questionForm.innerHTML = ""
				//center the form's text
				questionForm.style.textAlign = "center"
				//center the form
				questionForm.style.margin  = "0 auto"
				//add the following text to the form
				questionForm.innerHTML = "<h1>Good Job, You Completed the Quiz!!!<h1>" + "</br>" +  "<img src='img/success.jpg'>"

				return
			};

			setTimeout(function(){
				createQuestions()
			}, 500)

			return
		}
	}	


	console.log("Incorrect Answer")

	for (var i = 0; i < els.length; i++) {
		if (els[i].checked) {
			els[i].parentElement.className = "questionWrap wrong"
		}
	}
};
