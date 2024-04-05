import { teachers } from "./teachers.js";

let pools = [
    teachers.value.filter((teacher) => teacher.subject === 'math'),
    teachers.value.filter((teacher) => teacher.subject === 'english'),
    teachers.value.filter((teacher) => teacher.subject === 'science'),
    teachers.value.filter((teacher) => teacher.subject === 'history'),
    teachers.value.filter((teacher) => teacher.subject === 'russian'),
    teachers.value.filter((teacher) => teacher.subject === 'physed'),
    teachers.value.filter((teacher) => teacher.subject === 'tech'),
    teachers.value.filter((teacher) => teacher.subject === 'principal'),
    teachers.value.filter((teacher) => teacher.subject === 'default'),
    teachers.value.filter((teacher) => teacher.name === 'Michael Whalen')
];

let student = {
                subject: "average",
                name: "student",
                role: "average student",
                image: "https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/5CKBK3QQKQI6TDYMN6DYUJRIRI.jpg"
        }
pools.forEach(function(item){
    for(let i=0; i<60; i++){
        item.push(student);
    }
})
console.log(pools);
export {pools};