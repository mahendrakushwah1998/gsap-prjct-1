// gsap.to("#box",{
//    x:1400,
//    y:500,
//    duration:2,
//    delay:1,
//    backgroundColor:"blue",
//    rotate:360,
//    scale:0.5
// })

gsap.from("#box",{
       x:1400,
       y:500,
       duration:3,
       delay:1,
       backgroundColor:"blue",
       rotate:360,
       scale:0.5
    })

gsap.to("h1",{
    x:900,
    color:"orange",
    duration:2,
    delay:1
})
gsap.to("h2",{
    x:900,
    duration:2,
    delay:3,
    color:"black"
})
gsap.to("h3",{
    x:900,
    duration:2,
    color:"green",
    delay:5
})
gsap.to("h4",{
    x:900,
    duration:2,
    delay:7,
    color:"yellow",
     stagger:1,//(ak ak krke element chalega)
    repeat:-1,//(continu chalega) (repeat:2 =>do bar element chalega),
    yoyo:true

})
var time=gsap.timeline()

time.to("h5",{
    x:600,
    duration:1
})
time.to("h6",{
    x:700,
    duration:1
})
time.to("p",{
    x:800,
    duration:1
})
time.to("button",{
    x:900,
    duration:1
})