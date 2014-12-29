var tape = require('tape')
  , timeadd = require('./')
    ;

tape('adds times', function(t) {
    t.plan(3);

    t.equals(timeadd('1:10', '1:10'), '00:02:20');
    t.equals(timeadd('1:35', '1:35'), '00:03:10');
    t.equals(timeadd('15:15', '15:15', '15:15', '15:15'), '01:01:00');
});

tape('hours shouldn\'t overflow', function(t) {
    t.plan(1);
    t.equals(timeadd('35:00:00', '35:00:00'), '70:00:00');
});

tape('no times returns zeroed out time', function(t) {
    t.plan(1);
    t.equals(timeadd(), '00:00:00');
});

tape('array input works', function(t) {
    t.plan(1);
    t.equals(timeadd(['1:10', '1:10']), '00:02:20');
});