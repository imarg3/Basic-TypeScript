enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

/* const person: {
  name: String;
  age: Number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Arpit Gupta',
  age: 32,
  hobbies: ['Sports', 'Learning'],
  role: [2, 'author'],
}; */

const person = {
  name: 'Arpit Gupta',
  age: 32,
  hobbies: ['Sports', 'Learning'],
  role: Role.AUTHOR,
};

// person.role.push('admin');

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) console.log(hobby.toUpperCase());

if (person.role === Role.AUTHOR) console.log('is admin');
