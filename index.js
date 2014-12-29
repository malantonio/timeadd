if ( module && typeof module.exports !== 'undefined' ) module.exports = timeadd;

function timeadd() {
    var times = Array.prototype.slice.call(arguments)
      , out = [0,0,0]
      , ts, i, raw
        ;

    if ( times.length === 1 && times[0] instanceof Array ) {
        times = times[0];
    }

    times.forEach(function(time) {
        ts = time.split(':');
        if ( ts.length === 2 ) ts.unshift(0);
        ts.forEach(function(num, idx) {
            out[idx] += parseFloat(num);
        });
    });

    for ( i = 2; i > 0; i-- ) {
        raw = out[i];
        if ( raw < 60 ) continue;
        
        out[i - 1] += parseInt(raw / 60);
        out[i] = raw % 60;
    }

    // if ( out[0] === 0 ) out.shift();
    return out.map(pad).join(':');

    function pad(val) {
        val = parseInt(val);
        if ( val < 10 ) return '0' + val;
        return val;
    }
}