/*
	selectFile.js v1.0
	(c) 2017 by Thielicious
	
	A JavaScript function which lets you customize the browse button and its selection text. 
	It is known that the browse button `<input type=file>` is not directly customizable. 
	This function simply emulates this button using an ordinary input button as a trigger.
*/


var selectFile = function() {
	
	var regex = /[^\\]+$/;
	
	this.choose,
	this.selected;
	
	this.msg = (str) => {
		var prefix = '[selectFile.js]\n\nError: ';
		return alert(prefix+str);
	}
		
	this.check = () => {
		if (this.choose && this.selected != null) {
			var choose = document.getElementById(this.choose),
				selected = document.getElementById(this.selected);
			choose.addEventListener("change",() => {
				if (choose.value != "") { 
					selected.innerHTML = choose.value.match(regex);
				}
			});		
		} else {
			this.msg("Targets not set.");
		}
	}
	
	selectFile.prototype.targets = (trigger, filetext) => {
		this.choose = trigger;
		this.selected = filetext;
	}
	
	selectFile.prototype.simulate = () => {
		if (this.choose != null) {
			var choose = document.getElementById(this.choose);
			if (typeof choose != "undefined") {
				choose.click();
				this.check();
			} else {
				this.msg("Could not find element "+this.choose);
			}
		} else {
			this.msg("Targets not set.");
		}
	}	
	
};