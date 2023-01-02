
var initPerson = personGenerator.getPerson();
var personObj = personGenerator.person;
window.onload = generate();
console.log("После загрузки страницы ", personObj);

// Запись даных в html
function generate()
{
    document.getElementById('comma').innerText = ", дата рождения:";
    document.getElementById('genderOutput').innerText = personObj.gender;
    document.getElementById('surnameOutput').innerText = personObj.surname;
    document.getElementById('firstNameOutput').innerText = personObj.firstName;
    document.getElementById('patronymicOutput').innerText = personObj.patronymic;
    document.getElementById('dateOutput').innerText = personObj.date;
    document.getElementById('monthOutput').innerText = personObj.month;
    document.getElementById('birthYearOutput').innerText = personObj.year;
    document.getElementById('occupationOutput').innerText = personObj.occupation;
};

// Очистить данные
clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click', function(event){

    personObj.surname = "";
    personObj.firstName = "";
    personObj.patronymic = "";
    personObj.gender = "";
    personObj.date = "";
    personObj.month = "";
    personObj.year = "";
    personObj.occupation = "";
    generate ();
    document.getElementById('comma').innerText = "Данные успешно очищены";
    document.getElementById('clearDiv').setAttribute('style', 'display:none;');
    document.getElementById('mission').setAttribute('style', 'display:none;');
    document.getElementById('generateBtn').innerText = "Сгенерировать заново";
    event.preventDefault();
        console.log("После очистки ", [personObj]);
});

// генерить данные
genBtn = document.getElementById('generateBtn');
genBtn.addEventListener('click', function(event){ 
    document.getElementById('clearDiv').setAttribute('style', 'display:block;');
    document.getElementById('generateBtn').innerText = "Следующий";
    document.getElementById('mission').removeAttribute('style');
    personGenerator.getPerson();
    generate ();
    event.preventDefault();
        console.log("После генерации ", [personObj]);
});