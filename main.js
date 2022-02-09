
const filter = document.querySelector(".filter")
const containerWrapper = document.querySelector(".container_wrapper")
const listItems = []

filter.addEventListener("input", (e)=> filterItem(e.target.value))

getUser()

async function getUser(){
	const res = await fetch("https://randomuser.me/api?results=10")

	console.log(res);

	const data = await res.json();
	
	containerWrapper.innerHTML = ""
	data.results.forEach(element => {
		console.log(element)
	
		let container  = document.createElement("div")
		container.classList.add("container");

		
		container.innerHTML = `
		<div class="imgwrapper">
		<img src="${element.picture.large}", alt="profile">
	</div >
	<div class="info">
		<h4>${element.name.first} ${element.name.last}</h4>
		<p>${element.location.city}, ${element.location.country}</p>
	</div>
	`
	listItems.push(container.childNodes[3].childNodes[1]);


	
	containerWrapper.append(container);
});
}

function filterItem(searchTerm){

	console.log(searchTerm);

	listItems.forEach(item =>{
		if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase()))
		{
			item.parentNode.parentNode.classList.remove("hide")
		}
		else{
			item.parentNode.parentNode.classList.add("hide")
		}
	})

}





