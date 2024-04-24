// Task 6: Recommendation results
const searchBtn = document.getElementById('searchBtn');
const resetBtn = document.getElementById('resetBtn');

function searchTravel(){
    const input = document.getElementById('searchBar').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';


    fetch('./travel_recommendation_api.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const country = data.countries.find(item => item.name.toLowerCase() === input);
            const temple = data.temples.find(item => item.name.toLowerCase() === input);
            const beach = data.beaches.find(item => item.name.toLowerCase() === input);

            if (country){
                resultDiv.innerHTML += `<img src="${country.cities.imageUrl}" alt="country-img">`;
                resultDiv.innerHTML += `<h2><strong>${country.cities.name}</strong></h2>`;
                resultDiv.innerHTML += `<p>${country.cities.description}<p>`;
            } else if (temple){
                resultDiv.innerHTML += `<img src="${temple.imageUrl}" alt="country-img">`;
                resultDiv.innerHTML += `<h2><strong>${temple.name}</strong></h2>`;
                resultDiv.innerHTML += `<p>${temple.description}<p>`;
            } else if (beach) {
                resultDiv.innerHTML += `<img src="${beach.imageUrl}" alt="country-img">`;
                resultDiv.innerHTML += `<h2><strong>${beach.name}</strong></h2>`;
                resultDiv.innerHTML += `<p>${beach.description}<p>`;
            } else {
                resultDiv.innerHTML = 'Condition not found.'; 
            }
        })
        .catch(error => {
            console.error('Error:', error); 
            resultDiv.innerHTML = 'An error occurred while fetching data.';
        });
    }
    
searchBtn.addEventListener('click', searchTravel);

function resetTravel(){
    resultDiv.innerHTML = '';
    resultDiv.innerText = ''; // Clear any text content as well
}

resetBtn.addEventListener('click', resetTravel);
