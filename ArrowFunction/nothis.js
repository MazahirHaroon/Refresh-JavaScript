const car = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2022,
  passengers: ['Alice', 'Bob', 'Charlie'],

  startTrip() {
    // this.passengers.forEach((passenger, index) => {
    //   console.log(
    //     `${passenger} is enjoying the ride in the ${this.brand} ${this.model} of ${this.year}!`
    //   );
    // });
    this.passengers.forEach(function (passenger, index) {
      console.log(
        `${passenger} is enjoying the ride in the ${this.brand} ${this.model} of ${this.year}!`
      );
    });
  },
};

car.startTrip();
