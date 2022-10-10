const raining = true;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log('Make sure you pick out a scarf!');
}

console.log("Now you're ready to go outside!");

const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log('You are eligible to vote.');
}

const whichSchool = (age) => {
  if (age > 18) {
    return 'Lighthouse Labs';
  }

  if (age >= 13 && age <= 18) {
    return 'Secondary School';
  }

  return 'Elementary School';
};
