
var User1 = {
    nickname: "persona1",
    level: 15,
    class: "ingeniero"
};

var User4 = {
    nickname: "persona2",
    level: 45,
    class: "programador"
};


var User3 = {
    nickname: "persona3",
    level: 69,
    class: "bombero"
};


var User2 = {
    nickname: "persona4",
    level: 90,
    class: "medico"
};


const arrayUsers = [User1, User2, User3, User4] 


function getUsers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(arrayUsers)

        }, Math.random() > 0.5 * 1000)
    })
}

getUsers()
    .then(obj => {
        obj.forEach(user => {
            console.log(user.nickname, user.level, user.class);
        });
    })
    .catch(error => {
        console.log(error);
    });
