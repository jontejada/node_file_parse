# Log File Parser

You work at a DevOps company, and you need to parse log files.

You get log files that are in this format:

    W, [2014-05-10T13:49:19.049260 #83516]  WARN -- : deliver B2C systems
    W, [2014-05-10T13:49:19.049408 #83516]  WARN -- : transition sticky bandwidth

That is...

    [log level char], [<date> #<processid>]  <log level> -- : <message>

## Goal

Your Node.js script should parse the provided log file (`data/log.log`) and `console.log` the answers to the following questions (including the question text):

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

## File IO

In the root directory of this repository, write a Node.js script that reads the `data/log.log` file and parses it, then prints the results of the various reports to `STDOUT` (aka using `console.log`).

# Setup

* Fork & Clone

## Further Practice

For an added challenge, parse the log file, breaking it into the various messages it contains and provide counts for the words in those messages. For example (using the sample log file data above), a message would be "transition sticky bandwidth" which would break into a count like `{transition: 1, sticky: 1, bandwidth: 1}` and the goal is to provide a sorted list of all of these words from the log messages, including a frequency count.

For an additional challenge, use Jasmine to write tests for this code.
