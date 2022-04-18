function sendToPython() {
  var { PythonShell } = require("python-shell");

  let options = {
    mode: "text",
    args: [1,2,3],
  };

  PythonShell.run("./test.py", options, function (err, results) {
    if (err) throw err;
    // results is an array consisting of messages collected during execution
    console.log("results: ", results[0]);
  });
}

sendToPython()