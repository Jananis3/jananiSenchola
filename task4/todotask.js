// todotask.js
const form = document.querySelector('#form')
const username = document.querySelector('#username');
const email = document.querySelector('#email');
form.addEventListener('submit',(e)=>{
   
    if(!validateInputs()){
        e.preventDefault();
    }
})

function validateInputs(){
    const usernameVal = username.value.trim()
    const emailVal = email.value.trim();
    let success = true

    if(usernameVal===''){
        success=false;
        setError(username,'Username is required')
    }
    else{
        setSuccess(username)
    }

    if(emailVal===''){
        success = false;
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailVal)){
        success = false;
        setError(email,'Please enter a valid email')
    }
    else{
        setSuccess(email)
    }
}
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


window.onload = () => {
	const form1 = document.querySelector("#addForm");

	let items = document.getElementById("items");
	let submit = document.getElementById("submit");

	let editItem = null;

	form1.addEventListener("submit", addItem);
	items.addEventListener("click", removeItem);
};

function addItem(e) {
	e.preventDefault();

	if (submit.value != "Submit") {
		console.log("Hello");

		editItem.target.parentNode.childNodes[0].data
			= document.getElementById("item").value;

		submit.value = "Submit";
		document.getElementById("item").value = "";

		document.getElementById("lblsuccess").innerHTML
			= "Text edited successfully";

		document.getElementById("lblsuccess")
						.style.display = "block";

		setTimeout(function() {
			document.getElementById("lblsuccess")
							.style.display = "none";
		}, 3000);

		return false;
	}

	let newItem = document.getElementById("item").value;
	if (newItem.trim() == "" || newItem.trim() == null)
		return false;
	else
		document.getElementById("item").value = "";

	let li = document.createElement("li");
	li.className = "list-group-item";

	let deleteButton = document.createElement("button");

	deleteButton.className =
		"btn-danger btn btn-sm float-right delete";

	deleteButton.appendChild(document.createTextNode("Delete"));

	let editButton = document.createElement("button");

	editButton.className =
			"btn-success btn btn-sm float-right edit";

	editButton.appendChild(document.createTextNode("Edit"));

	li.appendChild(document.createTextNode(newItem));
	li.appendChild(deleteButton);
	li.appendChild(editButton);

	items.appendChild(li);
}

function removeItem(e) {
	e.preventDefault();
	if (e.target.classList.contains("delete")) {
		if (confirm("Are you Sure?")) {
			let li = e.target.parentNode;
			items.removeChild(li);
			document.getElementById("lblsuccess").innerHTML
				= "Text deleted successfully";

			document.getElementById("lblsuccess")
						.style.display = "block";

			setTimeout(function() {
				document.getElementById("lblsuccess")
						.style.display = "none";
			}, 3000);
		}
	}
	if (e.target.classList.contains("edit")) {
		document.getElementById("item").value =
			e.target.parentNode.childNodes[0].data;
		submit.value = "EDIT";
		editItem = e;
	}
}

function toggleButton(ref, btnID) {
	document.getElementById(btnID).disabled = false;
}
