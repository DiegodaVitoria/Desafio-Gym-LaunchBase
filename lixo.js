process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "a";
var input_stdin_array = "b";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function solveMeFirst(a, b) {
  // Hint: Type return a+b below   
}


function main() {
    var a = parseInt(readLine(a));
    var b = parseInt(readLine(b));;

    var res = solveMeFirst(a, b);
    console.log(res);
}