 # selectFile.js

##### A JavaScript function which let's you customize the browse button

---

<br>

## INTRODUCTION

A JavaScript function which lets you customize the browse button and its selection text. It is known that the browse button `<input type=file>` is not directly 
customizable. This function simply emulates this button using an ordinary input button as a trigger.


## SETUP INFORMATION

Use your CLI and enter the following to clone:<br>
`git clone https://github.com/thielicious/selectFile.js.git`


## USAGE

Create an object :
```
var getFile = new selectFile;
getFile.targets(<ID element to be triggered>, <ID element that displays the selected file>);
```

And then embed it in a form like this:<br>
```
<input type=file hidden id=choose name=choose>
<input type=button onClick=getFile.simulate() value=getFile>
<label id=selected>Nothing selected</label><br>
<input type=submit name=upload value=Upload> 
```
That is all. You may change the text in the label and give them some stylesheet.


## FUNCTIONS

**prototype.targets(trigger, filetext)**<br>
» Parameter 1 defines the ID element that triggers the browse file button
» Parameter 2 defines the ID element that displays the selected file

**prototype.simulate()**<br>
» Simulates the button click.

A demo will come in future.

<br>
<br>

###### If you encounter any bugs, feel free to open up an **[issue](https://github.com/thielicious/selectFile.js/issues)**, thank you.

---
**[thielicious.github.io](http://thielicious.github.io)**