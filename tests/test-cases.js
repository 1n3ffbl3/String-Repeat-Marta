
tests({

  '4 Es': function() {
    eq("EEEE", solution(4, "E"));
  },
  '8 cars': function() {
    eq("carcarcarcarcarcarcarcar", solution(8,"car"));
  },
  '2 pencils': function() {
    eq("pencilpencil", solution(2,"pencil"));
  },
  '1 home ': function() {
    eq("home", solution(1,"home"));
  },
  "6 elo's": function() {
    eq("eloeloeloeloeloelo", solution(6,"elo"));
  }

});
