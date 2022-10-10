const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre'],
];

const chooseStations = (arr) => {
  const chosen = arr.filter((station) => {
    return (
      station[1] >= 20 &&
      (station[2] === 'school' || station[2] === 'community centre')
    );
  });

  return chosen.map((station) => station[0]);
};

console.log(chooseStations(stations));
