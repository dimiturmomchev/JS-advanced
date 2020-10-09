function attachEvents() {
    const baseUrl = `https://judgetests.firebaseio.com/`;

    $(`#submit`).on(`click`, getWeather);

    async function getWeather() {
        try {
            let weather = await $.ajax({
                url: baseUrl + `location.json`,
                method: `GET`
            });
            let townName = $('#location').val();
            let code = weather.filter(town => town.name === townName)[0].code;
            let locationWeatherToday = await $.ajax({
                url: baseUrl + `forecast/today/` + `${code}.json `,
                method: `GET`
            });
            let locationWeatherUpComing = await $.ajax({
                url: baseUrl + `forecast/upcoming/` + `${code}.json`,
                method: `GET`
            });
            $(`#forecast`).css(`display`,block);

        } catch (err) {
            console.log(err)
        }

    }

}

attachEvents();