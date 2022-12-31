

const personGenerator = {
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 11,
        "list": {     
            "id_1": "Аврора",
            "id_2": "Евдокия",
            "id_3": "Лолита",
            "id_4": "Марианна",
            "id_5": "Руфина",
            "id_6": "Хелен",
            "id_7": "Стелла",
            "id_8": "Урсула",
            "id_9": "Хельга",
            "id_10": "Чулпан",
            "id_11": "Ядвига"
        }
    }`,

    malePatronymicJson: `{  
        "count": 10,
        "list": {     
            "id_1": "Александрович",
            "id_2": "Максимович",
            "id_3": "Иванович",
            "id_4": "Артемович",
            "id_5": "Дмитриевич",
            "id_6": "Никитич",
            "id_7": "Михаилович",
            "id_8": "Даниилович",
            "id_9": "Егорович",
            "id_10": "Андреевич"
        }
    }`,
    femalePatronymicJson: `{  
        "count": 10,
        "list": {     
            "id_1": "Александровна",
            "id_2": "Максимовна",
            "id_3": "Ивановна",
            "id_4": "Артемовна",
            "id_5": "Дмитриевна",
            "id_6": "Никитична",
            "id_7": "Михаиловна",
            "id_8": "Данииловна",
            "id_9": "Егоровна",
            "id_10": "Андреевна"
        }
    }`,

    maleOccupationsJson: `{  
        "count": 10,
        "list": {     
            "id_1": "Дровосек",
            "id_2": "Соковыжиматель",
            "id_3": "Бинарный искатель",
            "id_4": "Интерпритатор",
            "id_5": "Мыслитель",
            "id_6": "Прокрастинатор",
            "id_7": "Секс-мотоцикл",
            "id_8": "Слесарный шахтер",
            "id_9": "Возмутительный гений",
            "id_10": "Баламут"
        }
    }`,

    femaleOccupationsJson: `{  
        "count": 10,
        "list": {     
            "id_1": "Укротитель кодеров",
            "id_2": "Чародейка",
            "id_3": "Вахтерша в заповедном лесу",
            "id_4": "Секс-машина",
            "id_5": "Спасительница",
            "id_6": "Возмутительница",
            "id_7": "Первооткрыватель",
            "id_8": "Супергерл",
            "id_9": "Прокрастинатор",
            "id_10": "Бездельник"
        }
    }`,

    monthJson: `{  
        "count": 12,
        "list": {     
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,

    person: {
        firstName: "",
        surname: "",
        patronymic: "",
        gender: "",
        date: "",
        month: "",
        year: "",
        occupation: ""
    },

    GENDER_MALE: "Мужчина",
    GENDER_FEMALE: "Женщина",

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`; 
        
        return obj.list[prop];
    },

    randomGender: function() {
        let genderNum = this.randomIntNumber(2,1);
        let gender = (genderNum == 1) ? this.GENDER_MALE : this.GENDER_FEMALE;
        return gender

    },

    randomYear: function() {
        return this.randomIntNumber(2021,1950);
    },

    randomMonth: function() {
        return this.randomValue(this.monthJson);
    },

    randomDate: function() {
        var preMonth = this.person.month;
        var daysInFeb; // Для високосного года
        if (preMonth === "февраля"){
                // Проверка на високосный год
                if((this.person.year % 4 == 0)){ 
                    console.log('Да, Високосный');
                    daysInFeb = 29;
                } else {
                    console.log('Нет, не високосный');
                    daysInFeb = 28;
                }
            return this.randomIntNumber(daysInFeb,1);
        } else if  (preMonth == "января" || preMonth == "марта" || preMonth == "мая" || preMonth == "июля" || preMonth == "августа" || preMonth == "октября" || preMonth == "декабря"){
            return this.randomIntNumber(31,1);
        } else { 
            return this.randomIntNumber(30,1);
        }
    },

    randomFirstName: function() {
        
        if (this.person.gender == "Мужчина"){
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

     randomSurname: function() {
        if (this.person.gender == "Мужчина"){
            return this.randomValue(this.surnameJson);
        } else {
            return this.randomValue(this.surnameJson)+'а';
        }
    },

    randomPatronymic: function() {
        
        if (this.person.gender == "Мужчина"){
            return this.randomValue(this.malePatronymicJson);
        } else {
            return this.randomValue(this.femalePatronymicJson);
        }

    },

    randomOccupation: function() {
        
        if (this.person.gender == "Мужчина"){
            return this.randomValue(this.maleOccupationsJson);
        } else {
            return this.randomValue(this.femaleOccupationsJson);
        }
    },

    getPerson: function () {
        
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.patronymic = this.randomPatronymic();
        this.person.month = this.randomMonth();
        this.person.year = this.randomYear();
        this.person.date = this.randomDate();
        this.person.occupation = this.randomOccupation();
        return this.person;
    },
};