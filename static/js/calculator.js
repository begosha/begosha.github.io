function addition(event){
    event.stopPropagation()
    event.preventDefault()
    let int1 = parseInt(document.getElementById('exampleInputInteger1').value)
    let int2 = parseInt(document.getElementById('exampleInputInteger2').value)
    let result =  int1 + int2
    let div = document.createElement('div');
    div.innerHTML = result;
    div.style.border = '3px solid black'
    div.style.marginTop = '20px'
    $('#calc').append(div)

}
function subtraction(event){
    event.stopPropagation()
    event.preventDefault()
    let int1 = parseInt(document.getElementById('exampleInputInteger1').value)
    let int2 = parseInt(document.getElementById('exampleInputInteger2').value)
    let result =  int1 - int2
    let div = document.createElement('div');
    div.innerHTML = result;
    div.style.border = '3px solid black'
    div.style.marginTop = '20px'
    $('#calc').append(div)
}
function mult(event){
    event.stopPropagation()
    event.preventDefault()
    let int1 = parseInt(document.getElementById('exampleInputInteger1').value)
    let int2 = parseInt(document.getElementById('exampleInputInteger2').value)
    let result =  int1 * int2
    let div = document.createElement('div');
    div.innerHTML = result;
    div.style.border = '3px solid black'
    div.style.marginTop = '20px'
    $('#calc').append(div)
}
function division(event){
    event.stopPropagation()
    event.preventDefault()
    let result
    let int1 = parseInt(document.getElementById('exampleInputInteger1').value)
    let int2 = parseInt(document.getElementById('exampleInputInteger2').value)
    if (int2 == 0) {
        result = 'cannot divide by 0'
    } else {
     result =  int1 / int2
    }
    let div = document.createElement('div');
    div.innerHTML = result;
    div.style.border = '3px solid black'
    div.style.marginTop = '20px'
    $('#calc').append(div)
}
var i = 0;
function progress() {
  if (i == 0) {
    i = 1;
    let elem = document.getElementById("myBar");
    let width = 1;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}