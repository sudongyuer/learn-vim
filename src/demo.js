console.log(1)

setTimeout(()=>{
  console.log(2)
},0)

Promise.resolve(console.log(3)).then((value)=>{
  console.log(value)
})
