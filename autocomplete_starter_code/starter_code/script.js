const inputBox = document.querySelector('#fruit'); //type our keyword here
const suggestions = document.querySelector('.suggestions ul'); //display suggested keywords here

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	// step six
	let input = fruit.value;

	if(input.length){
		results = fruits.filter((fruit) => {
			fruit.toLowerCase().includes(input.toLowerCase());
				return fruit.toLowerCase().includes(input.toLowerCase());
		});
		// console.log(results)
	}
	showSuggestions(results)
	return results;
	
}

function searchHandler(e) {
	// TODO
	
}

function showSuggestions(results) { //removed inputVal
	const content = results.map((list) => {
		return "<li>" + list + "</li>";
	});

	suggestions.innerHTML = content.join('')
	// TODO
}

function useSuggestion(event) {
	// TODO
	let list = event.target;

	console.log(event.target);

	inputBox.value = list.innerHTML;
	suggestions.innerHTML = ''; 
}

inputBox.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
// Step five and six; create an event which triggers search function when a user types
inputBox.addEventListener('keyup', search);
