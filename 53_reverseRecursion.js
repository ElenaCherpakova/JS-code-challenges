function reverse(str) {
  return str.length === 0 ? '' : reverse(str.slice(1)) + str[0];
}



console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'

/*

wesome + a
esome + w
some + e
ome + s
me + o
e + m
  e  
" "

e + awesom
  m +  aweso
    o +  awes
      s +  awe
        w +  aw
          e + aw
            w +  a
            " " 
            
            

    
*/