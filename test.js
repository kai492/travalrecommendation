const apiUrl = 'https://raw.githubusercontent.com/thopsialive/travel_recommendation/master/travel_recommendation_api.json';
//const resultDiv = document.getElementById('result');

//function searchTravel () {
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data.countries.cities); // Here, 'data' is your JSON object
    //    resultDiv.innerHTML =
    //        `<h2>${data.countries}</h2>`;
        // Assuming 'data' contains your JSON data
        const countries = data.countries;
        countries.forEach(country => {
            country.name.forEach(name => {
                console.log(name);
            })
        })

    })
    .catch(error => console.error('Error fetching JSON:', error));
//}
