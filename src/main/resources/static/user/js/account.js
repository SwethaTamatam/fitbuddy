const ACCOUNT_API_PATH = "/user/account";

function showUserName() {	
	let xhr = new XMLHttpRequest();
	xhr.open("GET", ACCOUNT_API_PATH);
    xhr.send();
    
    xhr.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE) {
			if (this.status == 200) {
				// SUCCESS
				let data = JSON.parse(this.responseText);
				
				document.getElementById("logged-in-name").innerHTML += data.name;	
			} else {
				// ERROR				
				console.log("ERROR: " + this.responseText);				
			}
		}
	};        
}

function showAccount() {
	let xhr = new XMLHttpRequest();
	xhr.open("GET", ACCOUNT_API_PATH);
    xhr.send();
    
    xhr.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE) {
			if (this.status == 200) {
				// SUCCESS
				let data = JSON.parse(this.responseText);
				
				document.forms["account-form"]["username"].value = data.name;
				document.forms["account-form"]["password"].value = data.password;
				document.forms["account-form"]["rolename"].value = data.rolename;				
			} else {
				// ERROR				
				console.log("ERROR: " + this.responseText);				
			}
		}
	};      
}