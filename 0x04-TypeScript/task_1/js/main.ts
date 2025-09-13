// main.ts

interface Teacher {
  readonly firstName: string; // only set when initialized
  readonly lastName: string;  // only set when initialized
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // allow additional attributes like contract
}

// Example usage
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher3);


console.log(teacher3);
