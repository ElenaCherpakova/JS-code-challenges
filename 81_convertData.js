const listOfReceivedData = [
  { type: 'astro', data: 'Saturn Data' },
  { type: 'bio', data: 'Space Potatoes' },
  { type: 'physics', data: 'Lagrange Points' },
  { type: 'bio', data: 'OMG Tardigrades' },
  { type: 'physics', data: 'Material reflectivity' },
  { type: 'astro', data: 'Mercury is not the hottest' },
];
const convertedData = listOfReceivedData.reduce((acc, cur) => {
  if (!acc[cur.type]) {
    acc[cur.type] = [];
  }
  acc[cur.type].push(cur.data);
  return acc;
}, {});
console.log(convertedData);
