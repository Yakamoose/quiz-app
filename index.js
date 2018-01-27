const qAndA = [
  {
    question: 'Which David fashionably wore an extremely large suit because he, "wanted [his] head to appear smaller?"',
    answer: 'byrne',
  },
  {
    question: 'While both Davids initially wrote most of their songs on acoustic guitars, which David was known for playing a 12-string acoustic guitar?',
    answer: 'bowie',
  },
  {
    question: 'Which David said, “To shake your rump is to be environmentally aware?”',
    answer:'byrne',
  },
  {
    question: 'Which David played right-handed guitar despite being left-handed?',
    answer: 'byrne',
  },
  {
    question: 'Which David refused a knighthood from the Queen of England in 2003?',
    answer: 'bowie',
  },
  {
    question: 'Which David received a Grammy for their latest album?',
    answer: 'bowie',
  }
  ];

let index = 0;
let score = 0;

$(document).ready(function() {

  $(".start-button").click(event => {

    event.preventDefault();
    $(".start-page").hide();
    $(".question-page").show();
    $(".results-page").hide();
    $(".end-page").hide();
    displayQuestion();
  });


  $(".bowie-answer").click(event => {
    //check if answer is correct for this index question and log result to total score
    //tally question index
    //call to show answer result page

    event.preventDefault();

    checkAnswer('bowie');
    index ++;
    isItTheEnd();
  });


  $(".byrne-answer").click(event => {
    //check if answer is correct for this index question and log result to total score
    //tally question index
    //call to show answer result page

    event.preventDefault();

    checkAnswer('byrne');
    index ++;
    isItTheEnd();
  });


  $(".next-question").click(event => {
    //check qestion index length to see if its the end of the quiz
    //if question index is at end display end results page

    event.preventDefault();
    if(index < qAndA.length){
      $(".start-page").hide();
      $(".question-page").show();
      $(".results-page").hide();
      $(".end-page").hide();
      displayQuestion();
    }

  });


  $(".restart-quiz").click(event => {
    //refresh global variables(question index and total scores)
    //send to start page
    index = 0;
    score = 0;
    event.preventDefault();
    $(".start-page").show();
    $(".question-page").hide();
    $(".results-page").hide();
    $(".end-page").hide();
    $('.final-result-message').text('');
  });
});



//-----------------FUNCTIONS------------------------//

function displayQuestion() {
  $('.question-number').text('Question ' +(index+1)+ '/' + qAndA.length);
  $('.question').text(qAndA[index].question);

  if(index === 0) {
    $('.current-score').text("");
  }
  else {
    $('.current-score').text(score + ' of ' + (index) + ' Correct');
  }

}

function checkAnswer(ans) {
  if(ans == qAndA[index].answer) {
    score++;
    $('.result').text('Correct');
  }
  else {
    $('.result').text('Incorrect');
  }
  $('.current-score').text(score + ' of ' + (index+1) + ' Correct');
}

function isItTheEnd() {
    $(".start-page").hide();
    $(".question-page").hide();
    if(index === (qAndA.length)) {
      $('.final-score').text(score + ' of ' + index + ' Correct');

      if((score/qAndA.length) > 0.6) {
        $('.final-result-message').text('You know your stuff star-child!!!');
      }
      else {
        $('.final-result-message').text('Maybe watch a couple more documentaries...');
      }
      $(".results-page").hide();
      $(".end-page").show();
    }
    else {
      $(".end-page").hide();
      $(".results-page").show();
    }
}


function quiz() {
  $(".start-page").show();
}

quiz();
