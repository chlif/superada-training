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
    userSelection[index] = 1;
  }

})(jQuery);
