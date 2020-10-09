function getInfo() {
    const stopIdInput = document.getElementById(`stopId`);
    const stopNameInput = document.getElementById(`stopName`);
    const busContainer = document.getElementById(`buses`);

    const busesUrl = `https://judgetests.firebaseio.com/businfo/${stopIdInput.value}.json `;

            busContainer.textContent = ``;

    fetch(busesUrl)
        .then(response => response.json())
        .then(data => {
            const {buses, name} = data;
            stopNameInput.textContent = name;

            Object.entries(buses)
                .forEach(([bus,timeArrive])=>{
                    const li = document.createElement(`li`);
                    li.textContent=`Bus ${bus} arrives in ${timeArrive} minutes`;
                    busContainer.appendChild(li);

                });

        })
        .catch()

}