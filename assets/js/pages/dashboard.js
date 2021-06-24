document.addEventListener('DOMContentLoaded', ()=> {

    /* Déclarations */
    const APIURL = 'https://60d0629b7de0b200171087c0.mockapi.io/';
    const tbody = document.getElementById('bodyDatas');
    
    /* Fonctions */

    const GetDatas = () => {
        fetch(`${APIURL}data`, {
            method: 'GET',
          }).then(res => res.json())
            .then(res => {
                createTr(res);
            });
    };

    const createTr = (datas) =>{
        for(let data of datas){
            let habits= '';
            let boats ='';
            let time = data.startHour + "<br>" + data.endHour;
            let water = `<img src="./assets/img/${data.waterColor}.svg" alt="">` + `<img src="./assets/img/${data.waterWaste}.svg" alt="">`;
            for(let habit of data.habits){
                habits += `<img src="./assets/img/${habit}.svg" alt="">`;
            }

            for(let boat of data.attendanceBoat){
                boats += `<div><img src="./assets/img/${boat.name}.svg" alt=""><span>${boat.number}</span></div>`;
            }

            tbody.innerHTML += `
            <div class="datas">
                <div class="td">${data.user}</div>
                <div class="td">${time}</div>
                <div class="td">${water}</div>
                <div class="td">${habits}</div>
                <div class="td">${data.attendanceBathers}</div>
                <div class="td">${data.attendanceAthletic}</div>
                <div class="td">${boats}</div>
            </div>
            `; 
        }
    }

    GetDatas();
    
});
