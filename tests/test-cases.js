
tests({

  '4 Es': function() {
    eq("EEEE", repeatStringNTimes(4, "E"));
  },
  '8 cars': function() {
    eq("carcarcarcarcarcarcarcar", repeatStringNTimes(8,"car"));
  },
  '2 pencils': function() {
    eq("pencilpencil", repeatStringNTimes(2,"pencil"));
  },
  '1 home ': function() {
    eq("home", repeatStringNTimes(1,"home"));
  },
  "6 elo's": function() {
    eq("eloeloeloeloeloelo", repeatStringNTimes(6,"elo"));
  }

});
