# selectFile.js

##### A JavaScript function which let's you customize the browse button

---

<br>

## INTRODUCTION

A JavaScript function which lets you customize the browse button and its selection text. It is known that the browse button `<input type=file>` is not directly 
customizable. This function simply emulates this button using an ordinary input button as a trigger.

<br>

## SETUP INFORMATION

Use your CLI and enter the following to clone:<br>
`git clone https://github.com/thielicious/selectFile.js.git`

<br>

## USAGE

Create an object :
```
var getFile = new selectFile;
getFile.targets('choose','selected');
```

And then embed it in a form like this:<br>
```
<form>
  <input type=file hidden id=choose>
  <input type=button onClick=getFile.simulate() value="Get File">
  <label id=selected>Nothing selected</label><br>
  <input type=submit value=Upload>
</form>
```
That is all. You may change the text in the label and give them some style.

<br>

## FUNCTIONS

**prototype.targets(trigger, filetext)**
* Parameter 1 defines the ID element that triggers the browse file button<br>
* Parameter 2 defines the ID element that displays the selected file

**prototype.simulate()**
* Simulates the button click

<br>
<br>

:new: A **[Demo](https://jsfiddle.net/Thielicious/4oxmsy49/)** has been added.

<br>

###### If you encounter any bugs, feel free to open up an **[issue](https://github.com/thielicious/selectFile.js/issues)**, thank you.

---
**[thielicious.github.io](http://thielicious.github.io)**
