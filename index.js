var moment = require('moment'),
    argv = require('minimist')(process.argv.slice(2)),
    numbers = argv._,
    isMs = argv.ms || false,
    humanFormat = argv.h || 'YYYY-MM-DD HH:mm:ss';

if (numbers.length == 0) {
    process.stderr.write('There is no timestamp\n');
}

numbers.forEach(function(timestamp, index){
    if (isMs) {
        timestamp = timestamp/1000;
    }
    human = moment.unix(timestamp).format(humanFormat);
    process.stdout.write(human+'\n');
});