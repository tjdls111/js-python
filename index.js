let {PythonShell} = require('python-shell')

let options = {
    mode:'text',
    args:['seoin','inseo','seoseo']
}

PythonShell.run('test.py', options, (err, results) => {
    if (err) throw err;

    console.log(results);
});