const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", function(){
    const inputBtn = document.getElementById("input-btn").value;
    // console.log(inputBtn)

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputBtn+'&appid=c8621eac2fbeb8fc20b93e878c72d7f0')
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        const cityName = data.name;
        const tem = data.main.temp;
        const temp = tem - 273.15;
        const description = data.weather[0].description;

        document.getElementById("city").innerText = cityName;
        document.getElementById("temp").innerText = temp.toFixed(2);
        document.getElementById("des").innerText = description;
    })
    .catch(res => alert("Please Type Right City Name!"))
});