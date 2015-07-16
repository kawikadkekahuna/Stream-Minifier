# Stream-Minifier
##TASK:
###Help a bruddah out
Hey man,

Sorry for the last minute request but I was hoping you could do me a favor. My boss gave me a task to write a command line utility that would minify my CSS and JavaScript files so that we could reference these minified versions and our pages would load faster. Only problem is I really don't know how to do it and I'm running out of time to get it done.

He told me that I needed to write something that was run like this with the following flags for specifying normal input file and destination output file to minify, and that the program was supposed to read the input file and remove all line breaks and write the stripped text to the output file.

```
node minify.js --input app.css --output app.min.css
```

I don't really understand but he said I would need to use the Node ```fs``` module to reead a file as a ```Readable``` stream and the Node ```util``` method to extend the native ```Transform``` stream class to get the job done and he gave me this reference. Also something about piping...I don't get it.

http://www.sandersdenardi.com/readable-writable-transform-streams-node/

Oh yea, also I didn't really know how to accept arguments from the command line but saw this that I thought would be helpful:

https://www.npmjs.com/package/minimist

Can you get this done for me and push up to your repo so I can fork it and submit on time.

Thaaaaanks :D

~Slacker friend
