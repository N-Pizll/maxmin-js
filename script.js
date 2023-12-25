const array = [37,-5,-15,-37,5,15]

const forLoopMinMax = () => {
  let min = array[0], max = array[0]

  for (let i = 1; i < array.length; i++) {
    let Nima = array[i]
    min = (Nima < min) ? Nima : min
    max = (Nima > max) ? Nima : max
  }

  return [min, max]
}

const [forLoopMin, forLoopMax] = forLoopMinMax()
console.log(`Minimum: ${forLoopMin}, Maximum: ${forLoopMax}`) 
// Minimum: -37, Maximum: 37