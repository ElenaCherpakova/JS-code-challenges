function reverse(str) {
  return str.length === 0 ? '' : reverse(str.slice(1)) + str[0];
}

console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'
