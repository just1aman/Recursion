//lets refresh some recursion algorithim concepts
//0,1,1,2,3,5,8,13,21
function Findfactorial(num)
{
  if(num<=2)
  {return num}
  return num * Findfactorial(num-1)
}

//Findfactorial(5)

function fibonaciValueByIndex(num)
{
  
  if(num<2)
  {return num}
  return fibonaciValueByIndex(num-1)+fibonaciValueByIndex(num-2)
   
}

function fibonaciValueByIndexIterative(num)
{
  let arr =[0,1]
  for (i=2;i<num+1;i++)
  {
    arr.push(arr[i-2]+ arr[i-1])
  }
  return arr[num]
}

//fibonaciValueByIndex(7)
fibonaciValueByIndexIterative(7)