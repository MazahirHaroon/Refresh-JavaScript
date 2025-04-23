'use strict';

let group = {
  title: 'Our Group',
  students: ['John', 'Pete', 'Alice'],
  showList() {
    this.students.forEach(this.loop.bind(this));
  },
  loop(student) {
    console.log(this.title + ': ' + student);
  },
};

group.showList();
