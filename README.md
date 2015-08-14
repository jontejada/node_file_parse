# Log File Parser

Please read through this entire document first, then return to the beginning to complete the exercise.

## Setting the stage (What and Why)

Web applications of all sizes tend to generate lots of _log data_. Log data contains information that allows developers and operations engineers to get insight into how a system is operating in the production environment. As you progress in software development you will learn the age old adage ["it works on my machine!"](http://www.ademiller.com/blogs/tech/2008/06/it-works-on-my-machine-award/) This is a reflection of the fact that it often works in your development environment, but then fails in the production environment.

This exercise is design to help familiarize you with what log data is and can look like. You will write code using Node.js and the `fs` module to parse the log data and turn it into usable data structures.

## Educational Objectives

- Run a JavaScript file with `node`.
- Use `fs` to parse files and understand more about file I/O.
- Use the File System Module (`fs`) to interact with the filesystem.

### Key terms:

- file I/O
- `fs`

## Educational Activities

Recall that for a file that lives at `/path/to/file.js`, it can be run using the Node.js command line tool like so:

  ```
  node /path/to/file.js
  ```

#### What is I/O?

I/O is simply, _input/output_, and can be used in many different contexts. In our particular case, we are interested with file I/O. In the particular case of computing, any time the CPU or memory interacts with the hard drive, it is considered I/O.

Begin by reading the documentation for [`fs.readFile`](https://nodejs.org/api/fs.html#fs_fs_readfile_filename_options_callback).

Put the following same code in to a file:

```
// include the fs module
var fs = require("fs");

// handle a command line argument for the filename
var filename = process.argv[2];

fs.readFile(filename, function(err, data) {
  if (err) throw err;

  // what gets logged?
  console.log(data);

  // what gets logged?
  console.log(data.toString());
}); 
```

Use `node` to run the file. Add additional `console.log` statements to figure out what is going on. If you have a hypothesis come up with an experiment to confirm/deny your suspicions.

To test your understanding, try write a script which takes a [command line argument](http://stackoverflow.com/questions/4351521/how-to-pass-command-line-arguments-to-node-js) for a filename in the same directory, then creates a copy of the file with the original name and `.copy` added as an extension. The solution is presented below. This means for the provided filename, perhaps `foo.test` after your script is run with `foo.test` as the command line argument, when you use `ls` you should see `foo.test` and `foo.test.copy`, with both files having the same data in them.

Solution:

```
fs.readFile(filename, function(err, data) {
  if (err) throw err;

  fs.writeFile(filename + '.copy', data, function(err) {
    if (err) throw err;
    console.log('file successfully copied');
  });
}); 
```

Finally, complete the "Coding Tasks" section below.

## Coding Tasks

Suppose you are a Junior Developer at a firm with good deployment practices and an interest in [DevOps](https://en.wikipedia.org/wiki/DevOps). Being such an organization, you are interested in implementing a system which automatically notifies your team of any spikes in certain application log levels.

In order to better understand the larger problem (_think:_ Polyá's method), your manager tells you to complete the following tasks:

  * Write a Node.js script should parse the provided log file (`data/log.log`) and `console.log` the answers to the following questions (including the question text):

    * What are all the dates the log covers?
    * For each date, how many log messages were added?
    * How many log messages were there of each level for each day (e.g. `DEBUG`, `INFO`, `WARN`)?

  Sample usage and output looks like:

    ```
    > node logParser.js
    * What are all the dates the log covers?
    2014-05-10
    2014-05-11
    2014-05-12
    2014-05-13
    2014-05-14
    2014-05-15
    2014-05-16

    * For each date, how many log messages were added?
    2014-05-10 205
    2014-05-11 264
    2014-05-12 326
    2014-05-13 271
    2014-05-14 365
    2014-05-15 324
    2014-05-16 348

    * How many log messages were there of each level for each day (e.g. `DEBUG`, `INFO`, `WARN`)?
    2014-05-10 DEBUG  74
    2014-05-10  INFO  75
    2014-05-10  WARN  56
    ...
    ```

#### Challenge Tasks

For an added challenge, parse the log file, breaking it into the various messages it contains and provide counts for the words in those messages. For example (using the sample log file data above), a message would be "transition sticky bandwidth" which would break into a count like `{transition: 1, sticky: 1, bandwidth: 1}` and the goal is to provide a sorted list of all of these words from the log messages, including a frequency count.

For an additional challenge, use Jasmine to write tests for this code.

#### Setup

* Fork & Clone

##### Additional information

You get log files that are in this format:

    W, [2014-05-10T13:49:19.049260 #83516]  WARN -- : deliver B2C systems
    W, [2014-05-10T13:49:19.049408 #83516]  WARN -- : transition sticky bandwidth

That is...

    [log level char], [<date> #<processid>]  <log level> -- : <message>

## Reflect: Self-asses

Go to the "Objectives" section of this README. Go through each one and ask yourself:

- Have I completed this objective?
- What concrete evidence do I have that I've completed the objective?

Go to the "Key Terms" section of this README. For each word, ask yourself:

- What is my explanation for this term?

If you haven't completed an objective, or you can't define a term, take a few minutes to try to fill in any gaps.

## Reflect: Ask new questions

What new questions do you have now that you've gone through this exercise?

List at least 4 here:

1. 
1. 
1. 
1. 