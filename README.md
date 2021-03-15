# Notes App - Node.js

Node.js note taking application with add, read, delete and list functionalities.

Run from command line with commands:
* add
* rem
* list
* read

Example:

```node
node app.js add --title="New note title" --body="Body of new note"
node app.js list
```

Used packages:
* yargs - For the interactive command line
* chalk - Beautifying output console log messages
