function remove(items, item){
  for (let i=0; i < items.length; i++){
    if (items[i]=== item){
      return [...items.slice(0, i), ...items.slice(i+ 1)];
    }
  }
}

console.log(remove(['Elena', 'Don', 'John', 'Mark', 'Cat'], 'Mark'))