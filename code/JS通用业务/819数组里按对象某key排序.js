// 给定一个数组，其内部是一个个对象，要求按对象的某个key的value值进行排序

// 按score值进行排序
let students = [
    { name: "Fluffykins", score: "99" },
    { name: "Caro", score: "88" },
    { name: "Hamilton", score: "89" },
    { name: "Harold", score: "96" },
    { name: "Ursula", score: "100" },
    { name: "Jimmy", score: "89" }
]

console.log(students.sort((a, b) => parseInt(b.score) - parseInt(a.score)))
console.log(students)