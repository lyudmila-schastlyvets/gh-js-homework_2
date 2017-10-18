function my_function(array) {
    var min_number = array[0];
    var max_number = array[0];
    var water = 0;
    array.forEach(function (el) {
        if (el > max_number) {
            max_number = el;
        }
        if (el < min_number) {
            min_number = el;
        }
    });
    if (min_number < max_number) {
        for (var k = min_number; k <= max_number; k++) {
            var i = 0;
            while (array[i] <= k) {
               array.shift();
            }
            array.reverse();
            var s = 0;
            while (array[s] <= k) {
                array.shift();
            }
            array.reverse();
            array.map(function (elem) {
                if (elem <= k) {
                    ++water;
                }
            })
        }
    }
    console.log(water);
}
my_function(( [2, 5, 1, 3, 1, 2, 1, 7, 7, 6]));
my_function([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]);
my_function( [7, 0, 1, 3, 4, 1, 2, 1]);
my_function( [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]);
my_function([2, 2, 1, 2, 2, 3, 0, 1, 2]);
my_function([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8]);
my_function([2, 2, 2, 2, 2]);