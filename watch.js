var watch = require('node-watch');

watch('index.html', function(filename) {
  console.log(filename, ' changed.');
});