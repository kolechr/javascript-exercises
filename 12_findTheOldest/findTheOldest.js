const findTheOldest = function(people) {
    const sort = people.sort((firstPerson, secondPerson) => 
    age(firstPerson.yearOfDeath, firstPerson.yearOfBirth) 
    > age(secondPerson.yearOfDeath, secondPerson.yearOfBirth) 
    ? -1 : 1);

    return sort[0];
    };

function age(death, birth) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
