(function($) {
  var survey;
  var activeQuestion = -1;
  var userSelection = [0,0,0,0,0,0,0,0,0,0,0,0];
  var multiselectCounter = 2;

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
      var added = addUserSelection(buttonName);
      if (added) {
        multiselectCounter --;
      } else {
        multiselectCounter ++;
      }
      if (multiselectCounter === 0) {
        nextSlide();
      }
    } else if (survey.data.questions[activeQuestion].timer){

    } else {
      addUserSelection(buttonName);
      nextSlide();
    };
  });

  function nextSlide() {
    activeQuestion++;
    $('#carouselExampleControls').carousel('next');
  }

  function addUserSelection(buttonName) {
    var index = survey.matrix.keywords.indexOf(buttonName);
    if (userSelection[index]) {
      userSelection[index] = 0;
      return 0;
    }
    userSelection[index] = 1;
    return 1;
  }

})(jQuery);
