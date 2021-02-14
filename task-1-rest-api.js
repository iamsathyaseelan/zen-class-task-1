fetch("https://restcountries.eu/rest/v2/all ").then(result => result.json()).then(result => {
    let totalPopulation = 0;
    if (result.length > 0) {
        for (let country of result) {
            totalPopulation += country.population;
        }
    }
    console.log(`Total population is: ${totalPopulation}`);
});
