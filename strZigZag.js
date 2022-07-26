const stringZgZg = (arr) =>{
    const newArr = []
    const split = arr[0]
    let jarak = parseInt(arr[1])
    if (arr[0].length <= arr[1]){
      return arr[0]
    }else if(arr[0].length > arr[1]){
      for (let i = 0; i <= split.length;) {
        newArr.push(split[i]); i += jarak+1 
      }
      for (let j = 1; j <= split.length; ) {
        newArr.push(split[j]);j += jarak-1
      }
      for (let k = 2; k <= split.length;) {
        if(split[k] != undefined){newArr.push(split[k]) ; k += jarak+1 }
      }
      return newArr
    }
  }
  console.log("kaamvjjfl".length % 4)
  console.log(stringZgZg(["cat","3"]))
  console.log(stringZgZg(["coderbyte","3"]))
  console.log(stringZgZg(["kaamvjjfl","4"]))
  // expected creoebtdy 
  // expected kjajfavlm
  
  