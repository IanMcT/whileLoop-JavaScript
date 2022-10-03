function calculate(){
  var x = parseInt(document.getElementById("inputX").value);
  var i=1;
  var n=i;
  var sum = i;
  var prevsum = sum;
  while(sum<=x){
    n++;
    prevsum = sum;
    sum += n;
  }
  if(sum!=x){
    sum = prevsum;
    n--;
  }
  document.getElementById("output").innerHTML = "When x = " + sum + ", n = " + n;
}