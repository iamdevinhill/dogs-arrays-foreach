const checkDogs = function(dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  const dogs = dogsJuliaCorrected.concat(dogsKate);

  dogs.forEach(function(dog, i){
    if(dog >= 3) {
      console.log(`dog number ${i + 1} is ${dog} years old`)
    } else {
      console.log(`dog number ${i +1} is still a puppy`)
    }
  })
}
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])
