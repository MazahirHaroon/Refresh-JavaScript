'use strict';

// const print = (data) => {
//   const output = document.querySelector('.output');
//   const outputParagraph = document.createElement('p');
//   outputParagraph.textContent = data;
//   output.appendChild(outputParagraph);
// };

console.log(this);

function regular() {
  console.log('Inside Regular Function', this);
}

const arrow = () => {
  console.log('Inside Arrow Function', this);
};

regular();
arrow();

const student1 = {
  name: 'Mazahir',
  age: 29,
  printThis(value) {
    console.log('Called using student1', this);
  },
};

const student2 = {
  name: 'John',
  age: 29,
};

const parentObject = {
  parentName: 'Doe',
  callMe() {
    const student3 = {
      name: 'Abhishek',
      printThis: () => {
        console.log(this);
      },
    };
    // student3.printThis.call(student1);
    student3.printThis();
  },
};

// student1.printThis();
// student2.printThis();

parentObject.callMe.call(student1);

// const student2 = {
//   name: 'John',
//   printThis: () => {
//     console.log(this);
//   },
// };

// const parentObject = {
//   parentName: 'Doe',
//   callMe() {
//     const student2 = {
//       name: 'John',
//       printThis: () => {
//         console.log(this);
//       },
//     };

//     student2.printThis();
//   },
// };

// // student1.printThis();
// student2.printThis();
// parentObject.callMe.call(student2);
