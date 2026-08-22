const h =[{name:"lju",n1:30},{name:"l2",n1:11}]
const time = new Date()
console.log(time)
const sort = h.sort((b,a)=>b.n1-a.n1)[0]
console.log(sort)
for (x of h){
    console.log(x.name +" "+x.n1)
}
