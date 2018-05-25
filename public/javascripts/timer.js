
  function useTimer(duration, tick, ready){
      var now = 0;
      var x = setInterval(function(){
        var distance = duration - now;
        now = now + 1;
        tick.call(this, now, distance);
        if(distance < 0) {
          clearInterval(x);
          ready.call(this);
        }
      }, 1000);
  }
