const api = "db/people.json";

async function get_info() 
{
	const res = await fetch(api);
	const data = await res.json();

	//console.log(data);
	//console.log(data[0].name);
	//console.log(Object.values(data).map(ch => ch.name));

	let x = document.getElementById("search");
	x.addEventListener("input", () => {search_(data,x);});
}

function search_(data,x) {
	// body...
	let box = document.getElementById("box");
	
	for(let i = 0 ; i< data.length ; i++)
	{
		if (x.value.toLowerCase() == data[i].name.toLowerCase()) 
		{
			console.log("Hello Mr."+data[i].name);
			box.innerHTML = `	<li> <img src="${data[i].img}" width="100" </li>`;
		}
	}

}

get_info();