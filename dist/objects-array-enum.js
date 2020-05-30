"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: 'Arpit Gupta',
    age: 32,
    hobbies: ['Sports', 'Learning'],
    role: Role.AUTHOR,
};
let favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
for (const hobby of person.hobbies)
    console.log(hobby.toUpperCase());
if (person.role === Role.AUTHOR)
    console.log('is admin');
//# sourceMappingURL=objects-array-enum.js.map