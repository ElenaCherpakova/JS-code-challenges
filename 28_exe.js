function remove(items, item){
  for (let i=0; i < items.length; i++){
    if (items[i]=== item){
      //concat using spread operator
      return [...items.slice(0, i), ...items.slice(i+ 1)];
      // return items.slice(0, i).concat(items.slice(i + 1));

    }
  }
}

console.log(remove(['Elena', 'Don', 'John', 'Mark', 'Cat'], 'Mark'))