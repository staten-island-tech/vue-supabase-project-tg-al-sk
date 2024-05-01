import { teachers } from './teachers.ts'
import calculateStats from './calculateStats'
import Teacher from './Teacher.js' 

// export default function allTeachers() {
//     const teachersArr = []
//     // teachers.forEach((teacher) => {
//     //     const stats = calculateStats(teacher.subject, teacher.star)
//     //     console.log(stats)
//     // })
//     teachers.forEach((teacher) => {
//         const newTeacher = new Teacher(teacher.name, teacher.subject, teacher.image, teacher.star)
//         teachersArr.push(newTeacher)
//     })
//     console.log(teachersArr)
// }

const allTeachers = [
    {
      "name": "John Davis",
      "subject": "principal",
      "image": "https://3.files.edl.io/819a/20/12/02/173801-18b965ab-9af3-4c73-b6a6-d0dd1a02b362.jpg",
      "star": 4,
      "stats": {
        "intelligence": 56.6,
        "knowledge": 73.4,
        "strength": 78.8,
        "charisma": 51.8,
        "dexterity": 31.2,
        "coolness": 39.3
      },
      "power": 331
    },
    {
      "name": "Peter Dellegrazie",
      "subject": "principal",
      "image": "https://3.files.edl.io/7cbe/20/03/12/122350-06cc63fb-abd6-40a1-b3e9-69266182af1a.jpg",
      "star": 4,
      "stats": {
        "intelligence": 28.3,
        "knowledge": 100,
        "strength": 12.3,
        "charisma": 49.1,
        "dexterity": 91.4,
        "coolness": 73.1
      },
      "power": 354
    },
    {
      "name": "Mark Erlenwein",
      "subject": "principal",
      "image": "https://3.files.edl.io/166e/20/10/17/011612-5091271d-f466-4fa5-93dd-63ffff13fbe9.png",
      "star": 5,
      "stats": {
        "intelligence": 59.9,
        "knowledge": 100,
        "strength": 38.4,
        "charisma": 97.5,
        "dexterity": 66.6,
        "coolness": 44.9
      },
      "power": 407
    },
    {
      "name": "Alexis Kirschbaum",
      "subject": "principal",
      "image": "https://3.files.edl.io/a267/20/12/02/154422-4a2ee6d3-dc1d-4fc2-8650-9d78df598da6.jpg",
      "star": 4,
      "stats": {
        "intelligence": 48.5,
        "knowledge": 64.2,
        "strength": 44.8,
        "charisma": 25.3,
        "dexterity": 16.1,
        "coolness": 90.9
      },
      "power": 290
    },
    {
      "name": "Joseph Manzo",
      "subject": "principal",
      "image": "https://3.files.edl.io/6541/20/12/02/155749-a7a1672b-b15e-4c36-b9b6-ed2067987ec3.jpg",
      "star": 4,
      "stats": {
        "intelligence": 56.7,
        "knowledge": 24,
        "strength": 79.6,
        "charisma": 58.3,
        "dexterity": 81.5,
        "coolness": 81.9
      },
      "power": 382
    },
    {
      "name": "Felicia Rodriguez",
      "subject": "principal",
      "image": "https://3.files.edl.io/5e52/20/03/12/122937-4312d70d-cbf4-4d36-8c13-d6912d75bc94.jpg",
      "star": 4,
      "stats": {
        "intelligence": 56.7,
        "knowledge": 20.1,
        "strength": 32.2,
        "charisma": 86,
        "dexterity": 99.1,
        "coolness": 54.6
      },
      "power": 349
    },
    {
      "name": "Noelle Sanguinedo",
      "subject": "principal",
      "image": "https://3.files.edl.io/8a76/20/12/02/174802-fedd403c-1979-4075-9517-81f3fdefdf50.jpg",
      "star": 4,
      "stats": {
        "intelligence": 74.6,
        "knowledge": 46.3,
        "strength": 49.5,
        "charisma": 24.3,
        "dexterity": 89.8,
        "coolness": 72
      },
      "power": 357
    },
    {
      "name": "Lisa Asher",
      "subject": "math",
      "image": "https://3.files.edl.io/5b35/20/03/12/121603-3e37573f-cc81-4fd4-9e30-defb685fa73f.jpg",
      "star": 5,
      "stats": {
        "intelligence": 56.5,
        "knowledge": 37.5,
        "strength": 73.4,
        "charisma": 36,
        "dexterity": 75.1,
        "coolness": 36.6
      },
      "power": 315
    },
    {
      "name": "James Aurelia",
      "subject": "math",
      "image": "https://3.files.edl.io/8b33/22/09/16/161600-efcf43c1-7714-4068-b5cf-4c2541acc3bd.heic",
      "star": 4,
      "stats": {
        "intelligence": 22.4,
        "knowledge": 78.9,
        "strength": 73.9,
        "charisma": 87.8,
        "dexterity": 22.299999999999997,
        "coolness": 1.8
      },
      "power": 287
    },
    {
      "name": "Alison Barone",
      "subject": "tech",
      "image": "https://3.files.edl.io/2534/20/03/12/121644-cf6b41b8-f4b5-4a94-82d6-37880c46e4ee.jpg",
      "star": 4,
      "stats": {
        "intelligence": 100,
        "knowledge": 52.9,
        "strength": 13.1,
        "charisma": 65.9,
        "dexterity": 79.2,
        "coolness": 19.2
      },
      "power": 330
    },
    {
      "name": "Bianca Brandon",
      "subject": "science",
      "image": "https://3.files.edl.io/5bbe/20/03/12/121745-a72c802d-59b1-42b5-a423-597e30a2fa14.jpg",
      "star": 4,
      "stats": {
        "intelligence": 54.5,
        "knowledge": 77.7,
        "strength": 28.9,
        "charisma": 85.1,
        "dexterity": 18.2,
        "coolness": 49.7
      },
      "power": 314
    },
    {
      "name": "Heather Brown",
      "subject": "default",
      "image": "https://3.files.edl.io/163c/20/03/12/121807-6a9264d4-8162-4143-8116-8867b01e1b58.jpg",
      "star": 4,
      "stats": {
        "intelligence": 6,
        "knowledge": 6.6,
        "strength": 46.5,
        "charisma": 100,
        "dexterity": 7.1,
        "coolness": 26.3
      },
      "power": 193
    },
    {
      "name": "Mr. Joseph Buro",
      "subject": "tech",
      "image": "https://3.files.edl.io/b435/20/03/12/121919-e03e52a2-34ac-4952-9f53-e9e94bc50e5c.jpg",
      "star": 4,
      "stats": {
        "intelligence": 90,
        "knowledge": 75.3,
        "strength": 26.1,
        "charisma": 86,
        "dexterity": 51.8,
        "coolness": 76.2
      },
      "power": 405
    },
    {
      "name": "John Callahan",
      "subject": "russian",
      "image": "https://3.files.edl.io/37f0/20/03/12/121952-cf94b52e-6437-4d1b-8c81-a70f669ae69b.jpg",
      "star": 5,
      "stats": {
        "intelligence": 100,
        "knowledge": 38.4,
        "strength": 69.4,
        "charisma": 86.4,
        "dexterity": 32.2,
        "coolness": 52
      },
      "power": 378
    },
    {
      "name": "Erin Carr",
      "subject": "history",
      "image": "https://3.files.edl.io/d54d/22/09/16/161828-994843ee-f2b3-4c65-a069-90022453f36a.heic",
      "star": 4,
      "stats": {
        "intelligence": 76.6,
        "knowledge": 29.6,
        "strength": 84.8,
        "charisma": 38.5,
        "dexterity": 5.4,
        "coolness": 49.7
      },
      "power": 285
    },
    {
      "name": "Jody Cavaliere",
      "subject": "default",
      "image": "https://3.files.edl.io/8704/20/03/12/122100-f37457bd-89c4-49bc-889e-bae19ffece63.jpg",
      "star": 5,
      "stats": {
        "intelligence": 67.4,
        "knowledge": 28.1,
        "strength": 24,
        "charisma": 83.7,
        "dexterity": 100,
        "coolness": 88
      },
      "power": 391
    },
    {
      "name": "Kevin Chester",
      "subject": "math",
      "image": "https://3.files.edl.io/0cf0/20/03/12/122149-c087544e-6525-4347-a566-b490b02d3a53.jpg",
      "star": 4,
      "stats": {
        "intelligence": 20.7,
        "knowledge": 23.8,
        "strength": 0.6999999999999993,
        "charisma": 83.2,
        "dexterity": 5.4,
        "coolness": 82.4
      },
      "power": 216
    },
    {
      "name": "Heidi Chu",
      "subject": "math",
      "image": "https://3.files.edl.io/feee/22/09/16/161904-8e2cc888-3845-4d08-8559-dd52749fc31c.heic",
      "star": 5,
      "stats": {
        "intelligence": 47.4,
        "knowledge": 100,
        "strength": 50.9,
        "charisma": 100,
        "dexterity": 14.9,
        "coolness": 22.7
      },
      "power": 336
    },
    {
      "name": "Jonathan Colangelo",
      "subject": "science",
      "image": "https://3.files.edl.io/28a0/20/03/12/122230-d2392079-05d5-4940-a838-0d6146427076.jpg",
      "star": 4,
      "stats": {
        "intelligence": 100,
        "knowledge": 33.2,
        "strength": 73.1,
        "charisma": 30.8,
        "dexterity": 47,
        "coolness": 86.9
      },
      "power": 371
    },
    {
      "name": "Jennifer DAnna",
      "subject": "science",
      "image": "https://3.files.edl.io/a36e/20/03/12/122327-c04de9ec-012b-48c5-906c-88eeaf09e218.jpg",
      "star": 4,
      "stats": {
        "intelligence": 100,
        "knowledge": 52.4,
        "strength": 12,
        "charisma": 100,
        "dexterity": 14.6,
        "coolness": 94.1
      },
      "power": 373
    },
    {
      "name": "Catherine Ecker",
      "subject": "default",
      "image": "https://3.files.edl.io/083c/20/12/02/154103-8e672a23-043a-40dd-9073-3739af1007b2.jpg",
      "star": 4,
      "stats": {
        "intelligence": 70.5,
        "knowledge": 90.1,
        "strength": 53.4,
        "charisma": 47.5,
        "dexterity": 36.9,
        "coolness": 36.3
      },
      "power": 335
    },
    {
      "name": "Diane Federico-Cogan",
      "subject": "english",
      "image": "https://3.files.edl.io/7056/20/03/12/122542-fa682ebc-da3a-4f06-be12-8cb4d71f0aee.jpg",
      "star": 4,
      "stats": {
        "intelligence": 63.7,
        "knowledge": 100,
        "strength": 93,
        "charisma": 92.1,
        "dexterity": 100,
        "coolness": 86.7
      },
      "power": 536
    },
    {
      "name": "Margaret Ferrigno",
      "subject": "default",
      "image": "https://3.files.edl.io/a2df/20/03/12/122632-d3590591-d2fa-403c-8410-91b919bf9795.jpg",
      "star": 4,
      "stats": {
        "intelligence": 31.2,
        "knowledge": 17.8,
        "strength": 44.4,
        "charisma": 13.2,
        "dexterity": 21.4,
        "coolness": 25.8
      },
      "power": 154
    },
    {
      "name": "Raymond Ferrigno",
      "subject": "science",
      "image": "https://3.files.edl.io/8c7c/20/03/12/122609-2c5f2a3b-4385-4730-bec6-a49c3379fdd1.jpg",
      "star": 4,
      "stats": {
        "intelligence": 44.4,
        "knowledge": 71.3,
        "strength": 10.399999999999999,
        "charisma": 67.3,
        "dexterity": 54.8,
        "coolness": 23.1
      },
      "power": 271
    },
    {
      "name": "Jodi Fertoli",
      "subject": "science",
      "image": "https://3.files.edl.io/7a3e/20/03/12/122711-634e0d60-e4d1-4af5-866d-cec65d26b016.jpg",
      "star": 4,
      "stats": {
        "intelligence": 75.7,
        "knowledge": 87.3,
        "strength": 66.9,
        "charisma": 100,
        "dexterity": 17.9,
        "coolness": 69.9
      },
      "power": 418
    },
    {
      "name": "Victoria Finkelshteyn",
      "subject": "history",
      "image": "https://3.files.edl.io/56dc/20/12/02/154210-5c337a69-cd4a-4a19-b6c4-d8edc702e44b.jpg",
      "star": 4,
      "stats": {
        "intelligence": 100,
        "knowledge": 100,
        "strength": 54.8,
        "charisma": 62.2,
        "dexterity": 26.1,
        "coolness": 100
      },
      "power": 443
    },
    {
      "name": "Jennifer Fitzpatrick",
      "subject": "default",
      "image": "https://3.files.edl.io/a648/20/03/12/122745-81b53f57-c5bf-4e6d-be8f-66b36f927ba7.jpg",
      "star": 4,
      "stats": {
        "intelligence": 57.1,
        "knowledge": 26,
        "strength": 72.8,
        "charisma": 29.8,
        "dexterity": 65.8,
        "coolness": 94
      },
      "power": 346
    },
    {
      "name": "Christina Franks",
      "subject": "math",
      "image": "https://3.files.edl.io/1aa6/20/12/02/174100-05b0cdc6-3082-46fe-8040-b1af6497f1d5.jpg",
      "star": 4,
      "stats": {
        "intelligence": 68.8,
        "knowledge": 95.1,
        "strength": 58.7,
        "charisma": 43.7,
        "dexterity": 84.7,
        "coolness": 89.3
      },
      "power": 440
    },
    {
      "name": "Joseph Frazzetto",
      "subject": "english",
      "image": "https://3.files.edl.io/4a89/20/12/02/154245-0ac76675-c62d-4f3b-b131-bdcd62ee605a.jpg",
      "star": 4,
      "stats": {
        "intelligence": 92.5,
        "knowledge": 54.4,
        "strength": 13.1,
        "charisma": 62.8,
        "dexterity": 96.2,
        "coolness": 25.3
      },
      "power": 344
    },
    {
      "name": "Dr. Joseph Frusci",
      "subject": "tech",
      "image": "https://3.files.edl.io/218c/20/03/12/122811-853ea435-46b5-43a6-9e2a-53f1f7d9606f.jpg",
      "star": 5,
      "stats": {
        "intelligence": 76.3,
        "knowledge": 68.6,
        "strength": 32.5,
        "charisma": 100,
        "dexterity": 14.5,
        "coolness": 38.7
      },
      "power": 331
    },
    {
      "name": "Kristen Fusaro-Pizzo",
      "subject": "english",
      "image": "https://3.files.edl.io/fcee/20/03/12/122833-dddc042d-b4e6-425e-a88a-8fc4e3ea3362.jpg",
      "star": 4,
      "stats": {
        "intelligence": 74.9,
        "knowledge": 98,
        "strength": 39.3,
        "charisma": 100,
        "dexterity": 12.9,
        "coolness": 95.4
      },
      "power": 421
    },
    {
      "name": "Kaitlin Geraghty",
      "subject": "tech",
      "image": "https://3.files.edl.io/7d2c/22/09/16/162007-4b4d7d5b-e319-4d8c-a5ee-2e76645715f0.heic",
      "star": 4,
      "stats": {
        "intelligence": 46.9,
        "knowledge": 91.8,
        "strength": 21.9,
        "charisma": 92.3,
        "dexterity": 5.5,
        "coolness": 92.5
      },
      "power": 351
    },
    {
      "name": "Lisa Gervais-Barnett",
      "subject": "default",
      "image": "https://3.files.edl.io/d32b/20/03/12/122907-cd2001ae-3493-48fd-82ba-3bfff794d174.jpg",
      "star": 4,
      "stats": {
        "intelligence": 48.8,
        "knowledge": 100,
        "strength": 46.2,
        "charisma": 10.1,
        "dexterity": 21,
        "coolness": 75.6
      },
      "power": 302
    },
    {
      "name": "Olga Goyco",
      "subject": "russian",
      "image": "https://3.files.edl.io/a61c/20/03/12/122454-e856f867-04b5-4e10-84d5-4a823a5617c2.jpg",
      "star": 4,
      "stats": {
        "intelligence": 31.8,
        "knowledge": 90.2,
        "strength": 66.7,
        "charisma": 70.2,
        "dexterity": 89.2,
        "coolness": 89
      },
      "power": 437
    },
    {
      "name": "Matthew Granite",
      "subject": "physed",
      "image": "https://3.files.edl.io/bca3/20/03/12/123014-0d6d1750-e12f-4dba-88f5-921210bdcdcb.jpg",
      "star": 4,
      "stats": {
        "intelligence": 32.8,
        "knowledge": 23,
        "strength": 69.3,
        "charisma": 51.4,
        "dexterity": 0.2,
        "coolness": 37.9
      },
      "power": 215
    },
    {
      "name": "Michael Grippo",
      "subject": "physed",
      "image": "https://3.files.edl.io/9d37/20/03/12/123041-df442b46-85a7-474b-9409-a82982cdca92.jpg",
      "star": 4,
      "stats": {
        "intelligence": 23.7,
        "knowledge": 96.4,
        "strength": 68.4,
        "charisma": 51.6,
        "dexterity": 18.1,
        "coolness": 60.6
      },
      "power": 319
    },
    {
      "name": "Mr. Everton Henriques",
      "subject": "tech",
      "image": "https://3.files.edl.io/c718/21/10/15/110715-ef8636ae-df23-4ba5-9d2c-bda8f031e157.jpg",
      "star": 5,
      "stats": {
        "intelligence": 38.6,
        "knowledge": 80.8,
        "strength": 84.6,
        "charisma": 100,
        "dexterity": 30,
        "coolness": 100
      },
      "power": 434
    },
    {
      "name": "Dr. Jared Jax",
      "subject": "science",
      "image": "https://3.files.edl.io/514f/20/11/10/203007-b8c65119-f8bc-4c97-93df-45f80239693d.jpeg",
      "star": 5,
      "stats": {
        "intelligence": 63.9,
        "knowledge": 63.5,
        "strength": 75,
        "charisma": 96.8,
        "dexterity": 100,
        "coolness": 19.5
      },
      "power": 419
    },
    {
      "name": "Georgia Koutsovasilis",
      "subject": "math",
      "image": "https://3.files.edl.io/567d/20/12/02/173157-12ffc13a-d1bc-4bdd-b59b-4d941594c297.jpg",
      "star": 4,
      "stats": {
        "intelligence": 100,
        "knowledge": 41.5,
        "strength": 0,
        "charisma": 33.9,
        "dexterity": 49.1,
        "coolness": 66.9
      },
      "power": 291
    },
    {
      "name": "Eileen Labora",
      "subject": "science",
      "image": "https://3.files.edl.io/b4f0/20/03/12/123420-52c2da53-a8a8-43c1-bfad-6868fcda73fc.jpg",
      "star": 4,
      "stats": {
        "intelligence": 33.1,
        "knowledge": 58.6,
        "strength": 82.7,
        "charisma": 19.5,
        "dexterity": 99.4,
        "coolness": 30.6
      },
      "power": 324
    },
    {
      "name": "Amanda Lane",
      "subject": "english",
      "image": "https://3.files.edl.io/cfa1/20/03/12/123507-64533497-da4b-41e6-a0a2-02a95ef47e6f.jpg",
      "star": 4,
      "stats": {
        "intelligence": 68.8,
        "knowledge": 19.6,
        "strength": 35.5,
        "charisma": 32,
        "dexterity": 25.8,
        "coolness": 62.4
      },
      "power": 244
    },
    {
      "name": "Kaitlyn Lang",
      "subject": "math",
      "image": "https://3.files.edl.io/2430/20/03/12/123528-1990e73b-7e44-4c1c-a0ec-4288ecd14025.jpg",
      "star": 4,
      "stats": {
        "intelligence": 40.5,
        "knowledge": 21.7,
        "strength": 25.9,
        "charisma": 86.1,
        "dexterity": 37.9,
        "coolness": 73.5
      },
      "power": 286
    },
    {
      "name": "Abigail Lanza",
      "subject": "english",
      "image": "https://3.files.edl.io/6a1c/22/09/19/155739-c348f601-281a-478d-980f-9963f46309f4.jpeg",
      "star": 4,
      "stats": {
        "intelligence": 91.4,
        "knowledge": 13.6,
        "strength": 9.1,
        "charisma": 98.3,
        "dexterity": 23.9,
        "coolness": 66.3
      },
      "power": 303
    },
    {
      "name": "Natalya Levina",
      "subject": "russian",
      "image": "https://3.files.edl.io/23d8/20/03/12/123640-1b391c41-32cc-4e54-92c4-b2f84fac562e.jpg",
      "star": 4,
      "stats": {
        "intelligence": 47.9,
        "knowledge": 25,
        "strength": 48.7,
        "charisma": 58.4,
        "dexterity": 77.4,
        "coolness": 47.7
      },
      "power": 305
    },
    {
      "name": "Si Ou (Nancy) Liu",
      "subject": "math",
      "image": "https://3.files.edl.io/e4cf/22/09/16/165204-37ee4e42-cb15-46a9-bb91-e0c5d58cc9e6.heic",
      "star": 5,
      "stats": {
        "intelligence": 81.1,
        "knowledge": 100,
        "strength": 18.8,
        "charisma": 49.4,
        "dexterity": 60.4,
        "coolness": 100
      },
      "power": 410
    },
    {
      "name": "David Luu",
      "subject": "english",
      "image": "https://3.files.edl.io/2d95/22/09/16/162055-88dcaf81-ca9a-4b4c-b7cd-2ce3aab1c981.heic",
      "star": 5,
      "stats": {
        "intelligence": 24.5,
        "knowledge": 30.1,
        "strength": 61.3,
        "charisma": 67.4,
        "dexterity": 100,
        "coolness": 100
      },
      "power": 383
    },
    {
      "name": "Nicholas Macula",
      "subject": "history",
      "image": "https://3.files.edl.io/d124/20/03/12/123734-c126a97a-7f33-4764-a1a5-d565938c4f4c.jpg",
      "star": 4,
      "stats": {
        "intelligence": 77.3,
        "knowledge": 32.1,
        "strength": 76.3,
        "charisma": 100,
        "dexterity": 90.2,
        "coolness": 70
      },
      "power": 446
    },
    {
      "name": "Christopher Maddaluno",
      "subject": "default",
      "image": "https://3.files.edl.io/0d37/22/09/16/164311-791010cd-0341-456f-b00b-e76615886f38.heic",
      "star": 4,
      "stats": {
        "intelligence": 99.2,
        "knowledge": 46.3,
        "strength": 47,
        "charisma": 81.7,
        "dexterity": 46.4,
        "coolness": 28.6
      },
      "power": 349
    },
    {
      "name": "Meredith Manfredi",
      "subject": "history",
      "image": "https://3.files.edl.io/bf2b/20/03/12/123130-b0fb34cf-d48a-4c50-91eb-8768f72d7b8d.jpg",
      "star": 4,
      "stats": {
        "intelligence": 60.2,
        "knowledge": 92.5,
        "strength": 95.9,
        "charisma": 91.7,
        "dexterity": 10.1,
        "coolness": 71.4
      },
      "power": 422
    },
    {
      "name": "Dorothy Mannino",
      "subject": "english",
      "image": "https://3.files.edl.io/1b09/20/12/02/154527-967ac814-5154-4849-b268-9aea0e83e15f.jpg",
      "star": 4,
      "stats": {
        "intelligence": 19.6,
        "knowledge": 54.9,
        "strength": 85.9,
        "charisma": 67.8,
        "dexterity": 90.5,
        "coolness": 62
      },
      "power": 381
    },
    {
      "name": "Veronika Maslyukova",
      "subject": "russian",
      "image": "https://3.files.edl.io/3b79/20/03/12/123904-78650cde-ef86-4b53-80eb-0501d765cd38.jpg",
      "star": 4,
      "stats": {
        "intelligence": 72.2,
        "knowledge": 100,
        "strength": 29.4,
        "charisma": 69.7,
        "dexterity": 45.7,
        "coolness": 58.5
      },
      "power": 376
    },
    {
      "name": "James Mccarthy",
      "subject": "physed",
      "image": "https://3.files.edl.io/7585/20/03/12/123926-8067ff00-c034-4858-8f48-2a0a069ff5f0.jpg",
      "star": 4,
      "stats": {
        "intelligence": 68.3,
        "knowledge": 36.4,
        "strength": 100,
        "charisma": 72.6,
        "dexterity": 19.4,
        "coolness": 15.9
      },
      "power": 313
    },
    {
      "name": "Yevgenya Michan",
      "subject": "english",
      "image": "https://3.files.edl.io/c9c5/20/12/02/234413-2ac7a2a2-0cf3-483b-bc2c-6f14489949af.png",
      "star": 4,
      "stats": {
        "intelligence": 13.4,
        "knowledge": 34.2,
        "strength": 72.8,
        "charisma": 100,
        "dexterity": 14.4,
        "coolness": 26.6
      },
      "power": 261
    },
    {
      "name": "Patrick Misciagna",
      "subject": "english",
      "image": "https://3.files.edl.io/b005/20/03/12/123950-ae3ebde0-bd84-4d75-a5d5-419f77173a23.jpg",
      "star": 4,
      "stats": {
        "intelligence": 5.6,
        "knowledge": 100,
        "strength": 60.3,
        "charisma": 40,
        "dexterity": 36.3,
        "coolness": 37.1
      },
      "power": 279
    },
    {
      "name": "Jeff Mora",
      "subject": "history",
      "image": "https://3.files.edl.io/d988/22/09/16/162134-14e48534-cd2d-45ea-b576-efc3c8cafa84.heic",
      "star": 4,
      "stats": {
        "intelligence": 71.2,
        "knowledge": 23.6,
        "strength": 82.3,
        "charisma": 74.2,
        "dexterity": 62.2,
        "coolness": 27.3
      },
      "power": 341
    },
    {
      "name": "Amanda Nichols",
      "subject": "default",
      "image": "https://3.files.edl.io/4ae2/22/10/18/142405-d1084271-2fce-4fa7-9ec9-691ea18ff6fd.jpeg",
      "star": 4,
      "stats": {
        "intelligence": 73.4,
        "knowledge": 30.9,
        "strength": 20.5,
        "charisma": 8.2,
        "dexterity": 14.8,
        "coolness": 28.2
      },
      "power": 176
    },
    {
      "name": "Danielle Nickolauk",
      "subject": "science",
      "image": "https://3.files.edl.io/1cca/22/10/19/000836-a97920ec-457d-429a-bf93-9aa4807a1c45.png",
      "star": 4,
      "stats": {
        "intelligence": 85.4,
        "knowledge": 75.5,
        "strength": 57,
        "charisma": 84.5,
        "dexterity": 61,
        "coolness": 49.6
      },
      "power": 413
    },
    {
      "name": "Amanda Nudelman",
      "subject": "physed",
      "image": "https://3.files.edl.io/5b82/22/09/16/234003-7ce202a1-77d4-4675-8e03-c6edec75a493.jpeg",
      "star": 4,
      "stats": {
        "intelligence": 82.6,
        "knowledge": 77,
        "strength": 100,
        "charisma": 40.6,
        "dexterity": 79.3,
        "coolness": 25.5
      },
      "power": 405
    },
    {
      "name": "Eric Olsen",
      "subject": "science",
      "image": "https://3.files.edl.io/d02d/20/12/02/155139-d44c21e8-2b06-4b79-9158-19fd7ba03dba.jpg",
      "star": 4,
      "stats": {
        "intelligence": 95.5,
        "knowledge": 74.7,
        "strength": 61.900000000000006,
        "charisma": 17.7,
        "dexterity": 47.4,
        "coolness": 64.5
      },
      "power": 362
    },
    {
      "name": "Jessica Pagliaro",
      "subject": "history",
      "image": "https://3.files.edl.io/12e3/20/12/02/173428-3c715efb-c807-47da-86ab-79ce0e1c172c.jpg",
      "star": 4,
      "stats": {
        "intelligence": 72,
        "knowledge": 100,
        "strength": 100,
        "charisma": 100,
        "dexterity": 45.2,
        "coolness": 99.2
      },
      "power": 516
    },
    {
      "name": "Stephanie Partnow",
      "subject": "math",
      "image": "https://3.files.edl.io/6557/20/12/02/174005-7456be17-1d42-4e55-a799-08b0089250d3.jpg",
      "star": 4,
      "stats": {
        "intelligence": 31.3,
        "knowledge": 90.1,
        "strength": 0,
        "charisma": 60.8,
        "dexterity": 16.1,
        "coolness": 66.1
      },
      "power": 264
    },
    {
      "name": "Jessica Peterson",
      "subject": "english",
      "image": "https://3.files.edl.io/0131/20/12/03/160054-434ca96f-9e6d-4c77-b316-7e9531ee0cab.jpg",
      "star": 4,
      "stats": {
        "intelligence": 57.9,
        "knowledge": 84.6,
        "strength": 67.6,
        "charisma": 54.9,
        "dexterity": 67.3,
        "coolness": 15.6
      },
      "power": 348
    },
    {
      "name": "Jessica Pisano",
      "subject": "default",
      "image": "https://3.files.edl.io/b4ca/20/12/02/213824-aea7abb5-d28a-422f-9c34-f73261bfc019.jpeg",
      "star": 4,
      "stats": {
        "intelligence": 49.5,
        "knowledge": 92.5,
        "strength": 79.7,
        "charisma": 67.7,
        "dexterity": 51.2,
        "coolness": 88.4
      },
      "power": 429
    },
    {
      "name": "Suzanne Provenzano",
      "subject": "history",
      "image": "https://3.files.edl.io/6099/20/03/12/124027-cfdc5f57-99a6-45c4-be05-71b5b007becd.jpg",
      "star": 4,
      "stats": {
        "intelligence": 40.7,
        "knowledge": 100,
        "strength": 28.2,
        "charisma": 99.5,
        "dexterity": 57.5,
        "coolness": 37.2
      },
      "power": 363
    },
    {
      "name": "Jessica Ragucci",
      "subject": "physed",
      "image": "https://3.files.edl.io/012f/20/12/02/174142-589e49f6-e809-4e3a-a4ba-87d7af537d38.jpg",
      "star": 4,
      "stats": {
        "intelligence": 28.1,
        "knowledge": 48.7,
        "strength": 72.3,
        "charisma": 27.3,
        "dexterity": 20.9,
        "coolness": 93.1
      },
      "power": 290
    },
    {
      "name": "Robert Rams",
      "subject": "default",
      "image": "https://3.files.edl.io/e1d0/20/12/02/174252-cc4577cc-2104-4fc1-b307-9eb63b565269.jpg",
      "star": 4,
      "stats": {
        "intelligence": 32.3,
        "knowledge": 99.9,
        "strength": 24.2,
        "charisma": 81.8,
        "dexterity": 54.6,
        "coolness": 45.1
      },
      "power": 338
    },
    {
      "name": "Kateryna Ratushnyuk",
      "subject": "russian",
      "image": "https://3.files.edl.io/d81f/20/12/02/174329-d179c782-00a1-45ff-a956-43fe3a22dcc7.jpg",
      "star": 4,
      "stats": {
        "intelligence": 100,
        "knowledge": 58.6,
        "strength": 71.8,
        "charisma": 64.5,
        "dexterity": 64.1,
        "coolness": 8.2
      },
      "power": 367
    },
    {
      "name": "Mrs. Maryann Reichel",
      "subject": "default",
      "image": "https://3.files.edl.io/4537/20/12/04/152015-8889f590-436b-4ff0-b10f-4bc646741b65.jpg",
      "star": 4,
      "stats": {
        "intelligence": 26.8,
        "knowledge": 7.7,
        "strength": 100,
        "charisma": 40.3,
        "dexterity": 8.8,
        "coolness": 70.4
      },
      "power": 254
    },
    {
      "name": "Austen Rerick",
      "subject": "history",
      "image": "https://3.files.edl.io/1e88/20/12/14/003713-266a8fd2-1408-4672-8702-80aa88a070ad.jpg",
      "star": 5,
      "stats": {
        "intelligence": 70.4,
        "knowledge": 42.3,
        "strength": 27.7,
        "charisma": 87,
        "dexterity": 18.8,
        "coolness": 100
      },
      "power": 346
    },
    {
      "name": "Brianne Rivera",
      "subject": "science",
      "image": "https://3.files.edl.io/e7be/22/09/16/162209-70be08fc-0201-4e45-b601-ec1e909cecc8.heic",
      "star": 4,
      "stats": {
        "intelligence": 100,
        "knowledge": 90.3,
        "strength": 17.8,
        "charisma": 94.5,
        "dexterity": 72.2,
        "coolness": 55.2
      },
      "power": 430
    },
    {
      "name": "Elena Sokolovski",
      "subject": "russian",
      "image": "https://3.files.edl.io/b73b/20/04/15/214452-d77f824c-c6f3-439a-a74a-ce0c139d7720.jpeg",
      "star": 4,
      "stats": {
        "intelligence": 21.9,
        "knowledge": 83.2,
        "strength": 4.9,
        "charisma": 88.8,
        "dexterity": 13.9,
        "coolness": 12.6
      },
      "power": 225
    },
    {
      "name": "Amanda Stefanese",
      "subject": "default",
      "image": "https://3.files.edl.io/5443/22/09/16/164848-2f60ee62-bed1-4857-9252-a43348b8fadc.jpeg",
      "star": 4,
      "stats": {
        "intelligence": 23.6,
        "knowledge": 16.2,
        "strength": 46.3,
        "charisma": 19.2,
        "dexterity": 93.1,
        "coolness": 58.5
      },
      "power": 257
    },
    {
      "name": "Thomas Terrusa",
      "subject": "default",
      "image": "https://3.files.edl.io/6238/20/12/02/173558-91ac3964-8622-42d8-a972-7dcc102d19f8.jpg",
      "star": 4,
      "stats": {
        "intelligence": 73.8,
        "knowledge": 44.6,
        "strength": 8.8,
        "charisma": 8.6,
        "dexterity": 89.7,
        "coolness": 88.4
      },
      "power": 314
    },
    {
      "name": "Eric Tolnes",
      "subject": "science",
      "image": "https://3.files.edl.io/0d3f/22/09/16/164048-266f81c6-1192-475d-9cb8-bb7f2eb2d03f.heic",
      "star": 4,
      "stats": {
        "intelligence": 100,
        "knowledge": 51.2,
        "strength": 52.4,
        "charisma": 18.6,
        "dexterity": 59.4,
        "coolness": 46.6
      },
      "power": 328
    },
    {
      "name": "Jennifer Toner",
      "subject": "science",
      "image": "https://3.files.edl.io/d9a7/20/12/02/175514-a01f27c8-3179-484f-93ac-bbb2a350b919.jpg",
      "star": 4,
      "stats": {
        "intelligence": 24.8,
        "knowledge": 100,
        "strength": 25.4,
        "charisma": 54.1,
        "dexterity": 16.8,
        "coolness": 79.2
      },
      "power": 300
    },
    {
      "name": "Nataliya Ushakova",
      "subject": "russian",
      "image": "https://3.files.edl.io/3bde/20/12/02/175541-23d79790-4dbf-4a87-ad22-76eec7658053.jpg",
      "star": 4,
      "stats": {
        "intelligence": 24.8,
        "knowledge": 44.9,
        "strength": 43.1,
        "charisma": 75.8,
        "dexterity": 92.7,
        "coolness": 72.7
      },
      "power": 354
    },
    {
      "name": "Michael Van Buren",
      "subject": "tech",
      "image": "https://3.files.edl.io/11ff/20/12/02/175608-4f977c2d-6c6f-41e3-a9ae-a71f09a474d4.jpg",
      "star": 4,
      "stats": {
        "intelligence": 48.4,
        "knowledge": 57.9,
        "strength": 51.2,
        "charisma": 100,
        "dexterity": 18,
        "coolness": 77.2
      },
      "power": 353
    },
    {
      "name": "Valentina Vinci",
      "subject": "default",
      "image": "https://3.files.edl.io/e0aa/22/09/16/164621-2bae8203-a3b3-4fe5-9099-76b58ecc0ae3.heic",
      "star": 4,
      "stats": {
        "intelligence": 94.4,
        "knowledge": 91.3,
        "strength": 38,
        "charisma": 54.2,
        "dexterity": 14.6,
        "coolness": 100
      },
      "power": 393
    },
    {
      "name": "Mariusz Wantowski",
      "subject": "tech",
      "image": "https://3.files.edl.io/3922/20/12/02/175743-2c8d441f-a10c-4e99-bd13-1a83a5abeb5d.jpg",
      "star": 4,
      "stats": {
        "intelligence": 76.4,
        "knowledge": 93.4,
        "strength": 81.3,
        "charisma": 79.5,
        "dexterity": 14.1,
        "coolness": 28.5
      },
      "power": 373
    },
    {
      "name": "Michael Weitzman",
      "subject": "science",
      "image": "https://3.files.edl.io/06b6/22/09/16/162453-5d092152-b154-4dac-9172-2eb9cb89a236.heic",
      "star": 5,
      "stats": {
        "intelligence": 99.1,
        "knowledge": 99.6,
        "strength": 35.6,
        "charisma": 60.5,
        "dexterity": 40.3,
        "coolness": 35.1
      },
      "power": 370
    },
    {
      "name": "Lisa Wellens",
      "subject": "math",
      "image": "https://3.files.edl.io/9615/20/12/02/174401-11269d04-1da2-440a-bed2-e7165dea77b0.jpg",
      "star": 4,
      "stats": {
        "intelligence": 100,
        "knowledge": 28.8,
        "strength": 23.799999999999997,
        "charisma": 79.8,
        "dexterity": 0,
        "coolness": 41.4
      },
      "power": 274
    },
    {
      "name": "Michael Whalen",
      "subject": "tech",
      "image": "https://3.files.edl.io/aeb1/20/12/02/154937-46cc468f-b7f4-4bb3-945e-3265bdb605d4.jpg",
      "star": 6,
      "stats": {
        "intelligence": 100,
        "knowledge": 100,
        "strength": 23.8,
        "charisma": 43.6,
        "dexterity": 61.1,
        "coolness": 100
      },
      "power": 429
    },
    {
      "name": "Paul Wiley",
      "subject": "english",
      "image": "https://3.files.edl.io/1831/22/09/16/162404-185775a9-f167-4578-99b6-7f8a3dc04e2a.heic",
      "star": 4,
      "stats": {
        "intelligence": 18.3,
        "knowledge": 100,
        "strength": 62.6,
        "charisma": 44.9,
        "dexterity": 98.9,
        "coolness": 100
      },
      "power": 425
    },
    {
      "name": "Lauren Zerega",
      "subject": "history",
      "image": "https://3.files.edl.io/bbf4/20/12/02/175817-7a4badf4-4df0-489c-b737-b3ba401eece0.jpg",
      "star": 4,
      "stats": {
        "intelligence": 93.5,
        "knowledge": 35.4,
        "strength": 70.7,
        "charisma": 65.1,
        "dexterity": 99.9,
        "coolness": 75.8
      },
      "power": 440
    },
    {
      "name": "Danielle Barchitta",
      "subject": "default",
      "image": "https://3.files.edl.io/3fc5/22/09/16/162937-bb6cee5d-17a7-4104-a0e5-32a3136826aa.heic",
      "star": 4,
      "stats": {
        "intelligence": 92.2,
        "knowledge": 17.1,
        "strength": 41.8,
        "charisma": 10.2,
        "dexterity": 25.4,
        "coolness": 6.4
      },
      "power": 193
    },
    {
      "name": "Helen Buro",
      "subject": "default",
      "image": "https://3.files.edl.io/532c/22/09/16/164137-dbfda275-0fee-43ca-83fc-e68bf3369332.heic",
      "star": 4,
      "stats": {
        "intelligence": 51.1,
        "knowledge": 16.8,
        "strength": 7.4,
        "charisma": 39.4,
        "dexterity": 17.9,
        "coolness": 39
      },
      "power": 172
    },
    {
      "name": "Josepha Corselli",
      "subject": "default",
      "image": "https://3.files.edl.io/aafb/22/09/19/233541-3a345891-55f7-4612-879e-6767e709017e.jpeg",
      "star": 4,
      "stats": {
        "intelligence": 23.6,
        "knowledge": 5.1,
        "strength": 66.5,
        "charisma": 41.3,
        "dexterity": 80.8,
        "coolness": 79.9
      },
      "power": 297
    },
    {
      "name": "Ann Marie Cutrona",
      "subject": "default",
      "image": "https://3.files.edl.io/94af/22/09/16/163006-430639bd-2e3a-4160-8274-d174f2e27999.jpg",
      "star": 4,
      "stats": {
        "intelligence": 67.4,
        "knowledge": 83.4,
        "strength": 10.2,
        "charisma": 22.6,
        "dexterity": 81.4,
        "coolness": 93.4
      },
      "power": 358
    },
    {
      "name": "Irene Della Croce",
      "subject": "default",
      "image": "https://3.files.edl.io/1e90/22/09/16/163044-8a296135-f513-4938-9ae1-0c18dfbafa74.jpg",
      "star": 4,
      "stats": {
        "intelligence": 52.4,
        "knowledge": 40.8,
        "strength": 5.2,
        "charisma": 51.8,
        "dexterity": 89,
        "coolness": 78.8
      },
      "power": 318
    },
    {
      "name": "Ellen Devine",
      "subject": "default",
      "image": "https://3.files.edl.io/dab7/20/03/12/122415-9cb1e241-4f28-4cdf-a0af-87db219a3454.jpg",
      "star": 4,
      "stats": {
        "intelligence": 8.8,
        "knowledge": 55.2,
        "strength": 10.7,
        "charisma": 46.6,
        "dexterity": 67.6,
        "coolness": 31.8
      },
      "power": 221
    },
    {
      "name": "Loraine Ercolano",
      "subject": "default",
      "image": "https://3.files.edl.io/55bd/22/09/16/164530-1a482e39-d195-4c17-ab34-81865bf237ac.jpg",
      "star": 4,
      "stats": {
        "intelligence": 70.9,
        "knowledge": 59.7,
        "strength": 88.5,
        "charisma": 31.1,
        "dexterity": 82.6,
        "coolness": 33
      },
      "power": 366
    },
    {
      "name": "Evelyn Garcia",
      "subject": "default",
      "image": "https://3.files.edl.io/5e03/22/09/16/163125-64078a95-1d74-49a3-8da4-09ac07df4fb6.heic",
      "star": 4,
      "stats": {
        "intelligence": 24.1,
        "knowledge": 64.9,
        "strength": 63.4,
        "charisma": 32.9,
        "dexterity": 52.2,
        "coolness": 58.7
      },
      "power": 296
    },
    {
      "name": "Marie Gonzalez",
      "subject": "default",
      "image": "https://3.files.edl.io/16b7/22/09/16/163157-9f4f98b5-4092-49d0-9b2b-c66ff957aace.jpg",
      "star": 4,
      "stats": {
        "intelligence": 59.4,
        "knowledge": 28.7,
        "strength": 80.2,
        "charisma": 49,
        "dexterity": 50.4,
        "coolness": 97.8
      },
      "power": 366
    },
    {
      "name": "Ms. Stephanie Harper",
      "subject": "default",
      "image": "https://www.siths.org/apps/pics/empty_profile_public.png",
      "star": 4,
      "stats": {
        "intelligence": 93.4,
        "knowledge": 100,
        "strength": 98.3,
        "charisma": 19,
        "dexterity": 100,
        "coolness": 35.1
      },
      "power": 446
    },
    {
      "name": "Yat-Sun (Frank) Hau",
      "subject": "default",
      "image": "https://3.files.edl.io/0ea0/22/09/16/163243-4e97fc85-7b29-4f49-b4e1-b8a84d21e856.jpg",
      "star": 4,
      "stats": {
        "intelligence": 10.4,
        "knowledge": 33.1,
        "strength": 20.2,
        "charisma": 63.9,
        "dexterity": 25.8,
        "coolness": 5.2
      },
      "power": 159
    },
    {
      "name": "Carolyn Laforgia",
      "subject": "default",
      "image": "https://3.files.edl.io/3f69/20/03/12/123442-c5940dbf-32a8-4a4a-a029-2d1120891df2.jpg",
      "star": 4,
      "stats": {
        "intelligence": 82.6,
        "knowledge": 19.9,
        "strength": 77.9,
        "charisma": 43.1,
        "dexterity": 85.8,
        "coolness": 15.2
      },
      "power": 325
    },
    {
      "name": "Barbara Malenfant",
      "subject": "default",
      "image": "https://3.files.edl.io/9d1d/22/05/10/155324-fed388c8-2310-4271-a169-3d08e1bcf80e.jpg",
      "star": 4,
      "stats": {
        "intelligence": 91.4,
        "knowledge": 36,
        "strength": 30.6,
        "charisma": 28,
        "dexterity": 23,
        "coolness": 49.9
      },
      "power": 259
    },
    {
      "name": "Valentina Manfredi",
      "subject": "default",
      "image": "https://3.files.edl.io/c1f3/22/09/16/163341-6bb16cc1-f761-4082-94b4-f79abc29cbb8.heic",
      "star": 4,
      "stats": {
        "intelligence": 35.7,
        "knowledge": 32.8,
        "strength": 59.9,
        "charisma": 82.5,
        "dexterity": 69.2,
        "coolness": 10.8
      },
      "power": 291
    },
    {
      "name": "Loretta Manisero",
      "subject": "default",
      "image": "https://3.files.edl.io/8e61/22/09/16/163448-ef4336a0-ac12-4e60-8986-b9812a51260b.jpg",
      "star": 4,
      "stats": {
        "intelligence": 59.1,
        "knowledge": 29.7,
        "strength": 20.7,
        "charisma": 31.3,
        "dexterity": 59.7,
        "coolness": 45.6
      },
      "power": 246
    },
    {
      "name": "Rosina Mugavero",
      "subject": "default",
      "image": "https://3.files.edl.io/d920/22/09/16/163545-d7dc6155-763b-43c3-96c9-a09669ec24bf.jpg",
      "star": 4,
      "stats": {
        "intelligence": 31.8,
        "knowledge": 92.8,
        "strength": 100,
        "charisma": 100,
        "dexterity": 66.6,
        "coolness": 36.7
      },
      "power": 428
    },
    {
      "name": "Elizabeth Roman-Cotto",
      "subject": "default",
      "image": "https://3.files.edl.io/7085/22/09/19/170904-84c22d33-8d2f-436e-998d-838c22a1c793.jpeg",
      "star": 4,
      "stats": {
        "intelligence": 100,
        "knowledge": 88.6,
        "strength": 87.8,
        "charisma": 7.3,
        "dexterity": 68,
        "coolness": 76.3
      },
      "power": 428
    },
    {
      "name": "Dianne Schermerhorn",
      "subject": "default",
      "image": "https://3.files.edl.io/2629/22/09/16/163646-99c8c953-8fb1-4a1c-b78e-9bd2037650b3.jpg",
      "star": 4,
      "stats": {
        "intelligence": 80.9,
        "knowledge": 40.6,
        "strength": 9.6,
        "charisma": 46.1,
        "dexterity": 64.3,
        "coolness": 13.4
      },
      "power": 255
    },
    {
      "name": "Margaret Taranto",
      "subject": "default",
      "image": "https://3.files.edl.io/4523/20/12/02/175116-bd000f65-9037-4f1f-a10f-c45d06a203e9.jpg",
      "star": 4,
      "stats": {
        "intelligence": 24.1,
        "knowledge": 6.7,
        "strength": 22.2,
        "charisma": 49,
        "dexterity": 100,
        "coolness": 40.4
      },
      "power": 242
    },
    {
      "name": "Christine Tkachuk",
      "subject": "default",
      "image": "https://3.files.edl.io/ffa7/22/09/16/163729-d1ddbbb8-b7e3-4f65-8ea1-1a110b87aaa5.jpg",
      "star": 4,
      "stats": {
        "intelligence": 56.2,
        "knowledge": 61.8,
        "strength": 57.9,
        "charisma": 44.2,
        "dexterity": 54.6,
        "coolness": 100
      },
      "power": 375
    },
    {
      "name": "Tana Vignola",
      "subject": "default",
      "image": "https://3.files.edl.io/9794/22/09/16/164117-6b59b2a2-bda3-4aaa-a013-3cb0404256b8.jpg",
      "star": 4,
      "stats": {
        "intelligence": 71.5,
        "knowledge": 39.9,
        "strength": 21.5,
        "charisma": 47.8,
        "dexterity": 45,
        "coolness": 63.1
      },
      "power": 289
    }
  ]

  export default allTeachers