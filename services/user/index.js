/**
 * Created by Yumster on 7/16/17.
 */
const userList = [{
    id: 1,
    name: "Tony",
    nickname: "Iron man",
    email: "ceo@starkind.com"
}, {
    id: 2,
    name: "Steven Rogers",
    nickname: "Captain America",
    email: "frozen@shield.com"
}, {
    id: 3,
    name: "Bruce Banner",
    nickname: "Hulk",
    email: "angry@smash.com"
}, {
    id: 4,
    name: "Thor",
    nickname: "Thor",
    email: "god@loreal.com"
},
];

class User {
    constructor(users) {
        this.users = users
    }

    find() {
        return this.users;
    }

    findOne(id) {
        let userInd = false;
        let user = this.users.find(function (el, ind) {
            if (el.id === id) {
                userInd = ind;
                return true;
            }
            return false;
        });

        return {user, userInd};
    }

    add(data) {
        let usersCount = this.users.length - 1;
        let lastId = this.users[usersCount].id;
        data.id = lastId + 1;
        this.users.push(data);
        return true;
    }

    delete(id) {
        let {userInd} = this.findOne(id);
        if (userInd) {
            this.users.splice(userInd, 1);
            return true;
        } else {
            return false;
        }
    }

    update(id, data) {
        let {userInd} = this.findOne(id);
        if (userInd) {
            this.users[userInd] = Object.assign(this.users[userInd], data);
            return true;
        } else {
            return false;
        }
    }


}


module.exports = new User(userList);