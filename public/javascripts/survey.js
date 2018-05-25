(function($) {
  var survey;
  var activeQuestion = -1;
  var userSelection = [0,0,0,0,0,0,0,0,0,0,0,0];

  $(document).ready(function() {
    $.get('/survey/', function(data){
      survey = data;
    }).fail(function(error){
      console.log("ERROR", error);
    });
  });


  $("button").click(function(event) {
    var buttonName = $(event.target).data("buttonName");

    if(buttonName === "start"){
      nextSlide();
    } else if (survey.data.questions[activeQuestion].multiselect){
      addUserSelection(buttonName);

      nextSlide();
    } else if (survey.data.questions[activeQuestion].timer){


      addUserSelection(buttonName);

    } else {
      addUserSelection(buttonName);
      nextSlide();
    };
  });

  function nextSlide() {
    activeQuestion++;

    if (survey.data.questions[activeQuestion].timer){
      useTimer(survey.data.questions[activeQuestion].timer, function tick(now, left){
        document.getElementById("timer").innerHTML = left;
        if($("button").click())
      }, function ready(){
        document.getElementById("timer").innerHTML = "Time's up!";
        nextSlide();
      });
    }

    $('#carouselExampleControls').carousel('next');
  }

  function addUserSelection(buttonName) {
    var index = survey.matrix.keywords.indexOf(buttonName);
    userSelection[index] = 1;
  }

})(jQuery);
