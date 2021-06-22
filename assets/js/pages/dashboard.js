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
            let boats =''
            for(let habit of data.habits){
                habits += habit + ',';
            }

            for(let boat of data.attendanceBoat){
                boats += boat.name + ':' + boat.number + '<br>';
            }

            tbody.innerHTML += `
            <tr>
                <td>${data.city}</td>
                <td>${data.spot}</td>
                <td>${data.user}</td>
                <td>${data.date}</td>
                <td>${data.startHour}</td>
                <td>${data.endHour}</td>
                <td>${data.waterColor}</td>
                <td>${data.waterWaste}</td>
                <td>${habits}</td>
                <td>${data.attendanceBathers}</td>
                <td>${data.attendanceAthletic}</td>
                <td>${boats}</td>
                <td>${data.note}</td>
            </tr>
            `; 
        }
    }

    GetDatas();
    
});
