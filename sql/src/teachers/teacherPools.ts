import { teachers } from "./teachers.ts";

let pools = [
    teachers.filter((teacher) => teacher.subject === 'math'),
    teachers.filter((teacher) => teacher.subject === 'english'),
    teachers.filter((teacher) => teacher.subject === 'science'),
    teachers.filter((teacher) => teacher.subject === 'history'),
    teachers.filter((teacher) => teacher.subject === 'russian'),
    teachers.filter((teacher) => teacher.subject === 'physed'),
    teachers.filter((teacher) => teacher.subject === 'tech'),
    teachers.filter((teacher) => teacher.subject === 'principal'),
    teachers.filter((teacher) => teacher.subject === 'default'),
    teachers.filter((teacher) => teacher.name === 'Michael Whalen')
];

let student = {
                subject: "average",
                name: "student",
                role: "average student",
                image: "https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/5CKBK3QQKQI6TDYMN6DYUJRIRI.jpg"
        }

export {pools};