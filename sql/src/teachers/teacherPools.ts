import { teachers } from "./teachers.ts";

const pools = [
    teachers.filter((teacher) => teacher.subject === 'principal'),
    teachers.filter((teacher) => teacher.subject === 'math'),
    teachers.filter((teacher) => teacher.subject === 'english'),
    teachers.filter((teacher) => teacher.subject === 'science'),
    teachers.filter((teacher) => teacher.subject === 'history'),
    teachers.filter((teacher) => teacher.subject === 'russian'),
    teachers.filter((teacher) => teacher.subject === 'physed'),
    teachers.filter((teacher) => teacher.subject === 'tech'),
    teachers.filter((teacher) => teacher.subject === 'default'),
    teachers.filter((teacher) => teacher.name === 'Michael Whalen')
];

const poolInfo = [
    {
        thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
        alt: 'Principals',
        title: 'Pool 1',
        text: 'Pool 1. Up rates for principal cards. '
    },
    {
        thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria2s.jpg',
        alt: 'Math',
        title: 'Pool 2',
        text: 'Pool 2. Up rates for math teachers.'
    },
    {
        thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria2s.jpg',
        alt: 'English',
        title: 'Pool 3',
        text: 'Pool 3. Up rates for English teachers.'
    },
    {
        thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria2s.jpg',
        alt: 'Science',
        title: 'Pool 4',
        text: 'Pool 4. Up rates for science teachers.'
    },
    {
        thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria2s.jpg',
        alt: 'History',
        title: 'Pool 5',
        text: 'Pool 5. Up rates for history teachers.'
    },
    {
        thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria2s.jpg',
        alt: 'Russian',
        title: 'Pool 6',
        text: 'Pool 6. Up rates for Russian teachers.'
    },
    {
        thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria2s.jpg',
        alt: 'Physical Education',
        title: 'Pool 7',
        text: 'Pool 7. Up rates for PE teachers.'
    },
    {
        thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria2s.jpg',
        alt: 'Technology',
        title: 'Pool 8',
        text: 'Pool 8. Up rates for technology teachers.'
    },
    {
        thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria2s.jpg',
        alt: 'Other Staff',
        title: 'Pool 9',
        text: 'Pool 9. Up rates for other staff.'
    },
    {
        thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria2s.jpg',
        alt: 'WHALEN',
        title: 'Pool 10',
        text: 'Pool 10. You can only pull for Mr. Whalen. '
    }
]

export {pools};
export {poolInfo}