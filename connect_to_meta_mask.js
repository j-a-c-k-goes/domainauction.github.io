const connect_button = document.querySelector("#connect_meta_mask");
const account_number = document.querySelector("#account_number");
connect_button.onclick = () => {
	get_account();
};

function connect_to_meta_mask(){
	ethereum.request( { method: "eth_requestAccounts"} );
}


async function get_account(){
	const accounts = await ethereum.request({ method: "eth_requestAccounts"});
	console.table(accounts);
	const account = accounts[0];
	connect_button.innerHTML = `Connected as <span id="account_number">${account}</span>`;
	localStorage.setItem("eth_addr", account);
}

