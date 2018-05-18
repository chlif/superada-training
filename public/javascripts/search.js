(function ($) {

  function doSearch(searchString) {
    if (searchString.trim().length > 0) {
      $.get('/schools/search/'+searchString, function (data) {
        displayResults(data);
      });
    } else {
      $.get('/schools/', function (data) {
        displayResults(data);
      });
    }
  }

  function displayResults(results) {
    var $list = $('#results');
    var $noResults = $('#alert-no-results');
    $list.empty();

    if (results.length === 0) {
      $noResults.fadeIn(200, function() {
        setTimeout(function() {
          $noResults.fadeOut(1000);
        }, 1500);
      });
    } else {
      results.forEach(function (school) {
        var $li = $(document.createElement('li'));
        $li.append(school.name);
        $list.append($li);
      });
    }
  }

  $('#searchInput').keypress(function (event) {
    if (event.which === 13) {
      event.preventDefault();
      doSearch(event.target.value);
    }
  });

  $(document).ready(function() {
    doSearch('');
  });

})(jQuery);
