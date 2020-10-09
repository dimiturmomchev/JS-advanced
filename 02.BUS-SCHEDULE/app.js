function solve() {
    const departBtn = document.getElementById(`depart`);
    const arriveBtn = document.getElementById(`arrive`);
    const infoSpan = document.getElementsByClassName(`info`)[0];

    let currentId = `depot`;
    let currentName;


    function depart() {
        fetch(`https://judgetests.firebaseio.com/schedule/${currentId}.json`)
            .then(res =>res.json())
            .then(data=>{
                deppartSucess(data);
            })
            .catch(err=>{
                infoSpan.textContent = `Wrong stop id!`;
            });
    }

    function arrive() {
        fetch(`https://judgetests.firebaseio.com/schedule/${currentId}.json`)
            .then(res =>res.json())
            .then(data=>{
             arriveSucess(data);
            })
            .catch(err=>{
                infoSpan.textContent = `Wrong stop id!`;
            });
    }

    function deppartSucess(data) {
        const {name,next }= data;
        currentId = next;
        currentName = name;

        departBtn.disabled = true;
        arriveBtn.disabled = false;
        infoSpan.textContent = `Next stop ${currentName}`;
    }

    function arriveSucess(data) {
        const {name,next }= data;
        currentId = next;
        currentName = name;

        console.log(name);

        departBtn.disabled = false;
        arriveBtn.disabled = true;
        infoSpan.textContent = `Next stop ${name}`;
    }

    function handleError(res) {
        if (!res.ok){
            infoSpan.textContent = `Wrong fetch url!`;
        }
    }

    return {
        depart,
        arrive
    };
}

let result = solve();