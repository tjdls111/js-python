let {PythonShell} = require('python-shell')

PythonShell.run('test.py', null, (err, data) => {
    if (err) throw err;

    console.log(data);
});