import { teachers } from "./teachers.js";

const pools = [
    {
        math: teachers.value.filter((teacher) => teacher.subject === 'math')
    },
    {
        english: teachers.value.filter((teacher) => teacher.subject === 'english')
    },
    {
        science: teachers.value.filter((teacher) => teacher.subject === 'science')
    },
    {
        history: teachers.value.filter((teacher) => teacher.subject === 'history')
    },
    {
        russian: teachers.value.filter((teacher) => teacher.subject === 'russian')
    },
    {
        physed: teachers.value.filter((teacher) => teacher.subject === 'physed')
    },
    {
        tech: teachers.value.filter((teacher) => teacher.subject === 'tech')
    },
    {
        principal: teachers.value.filter((teacher) => teacher.subject === 'principal')
    },
    {
        defaultstaff: teachers.value.filter((teacher) => teacher.subject === 'default')
    }
];

// push shits

export {pools};