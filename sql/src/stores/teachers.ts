import { ref } from "vue";

const teachers = ref([
    {
        "subject": "principal",
        "name": "John Davis",
        "role": "Assistant Principal of Organization",
        "image": "https://3.files.edl.io/819a/20/12/02/173801-18b965ab-9af3-4c73-b6a6-d0dd1a02b362.jpg"
    },
    {
        "subject": "principal",
        "name": "Peter Dellegrazie",
        "role": "Assistant Principal of Mathematics, Foreign Language and HS Admissions",
        "image": "https://3.files.edl.io/7cbe/20/03/12/122350-06cc63fb-abd6-40a1-b3e9-69266182af1a.jpg"
    },
    {
        "subject": "principal",
        "name": "Mark Erlenwein",
        "role": "Principal",
        "image": "https://3.files.edl.io/166e/20/10/17/011612-5091271d-f466-4fa5-93dd-63ffff13fbe9.png"
    },
    {
        "subject": "principal",
        "name": "Alexis Kirschbaum",
        "role": "Assistant Principal of Pupil Personnel Services, Guidance, Security and College Admissions",
        "image": "https://3.files.edl.io/a267/20/12/02/154422-4a2ee6d3-dc1d-4fc2-8650-9d78df598da6.jpg"
    },
    {
        "subject": "principal",
        "name": "Joseph Manzo",
        "role": "Assistant Principal of Social Studies, Technology and Career and Technical Education",
        "image": "https://3.files.edl.io/6541/20/12/02/155749-a7a1672b-b15e-4c36-b9b6-ed2067987ec3.jpg"
    },
    {
        "subject": "principal",
        "name": "Felicia Rodriguez",
        "role": "Assistant Principal of Science and Testing",
        "image": "https://3.files.edl.io/5e52/20/03/12/122937-4312d70d-cbf4-4d36-8c13-d6912d75bc94.jpg"
    },
    {
        "subject": "principal",
        "name": "Noelle Sanguinedo",
        "role": "Assistant Principal of English, ENL/MLL Services, Music, Performing Arts, Physical Education and Student Activities",
        "image": "https://3.files.edl.io/8a76/20/12/02/174802-fedd403c-1979-4075-9517-81f3fdefdf50.jpg"
    },
    {
        "subject": "math",
        "name": "Lisa Asher",
        "role": "Mathematics Teacher",
        "image": "https://3.files.edl.io/5b35/20/03/12/121603-3e37573f-cc81-4fd4-9e30-defb685fa73f.jpg"
    },
    {
        "subject": "math",
        "name": "James Aurelia",
        "role": "Mathematics Teacher",
        "image": "https://3.files.edl.io/8b33/22/09/16/161600-efcf43c1-7714-4068-b5cf-4c2541acc3bd.heic"
    },
    {
        "subject": "tech",
        "name": "Alison Barone",
        "role": "Technology Teacher",
        "image": "https://3.files.edl.io/2534/20/03/12/121644-cf6b41b8-f4b5-4a94-82d6-37880c46e4ee.jpg"
    },
    {
        "subject": "science",
        "name": "Bianca Brandon",
        "role": "Science Teacher",
        "image": "https://3.files.edl.io/5bbe/20/03/12/121745-a72c802d-59b1-42b5-a423-597e30a2fa14.jpg"
    },
    {
        "subject": "default",
        "name": "Heather Brown",
        "role": "Performing Arts Teacher",
        "image": "https://3.files.edl.io/163c/20/03/12/121807-6a9264d4-8162-4143-8116-8867b01e1b58.jpg"
    },
    {
        "subject": "tech",
        "name": "Mr. Joseph Buro",
        "role": "Technology Teacher",
        "image": "https://3.files.edl.io/b435/20/03/12/121919-e03e52a2-34ac-4952-9f53-e9e94bc50e5c.jpg"
    },
    {
        "subject": "russian",
        "name": "John Callahan",
        "role": "Russian Teacher",
        "image": "https://3.files.edl.io/37f0/20/03/12/121952-cf94b52e-6437-4d1b-8c81-a70f669ae69b.jpg"
    },
    {
        "subject": "history",
        "name": "Erin Carr",
        "role": "History Teacher",
        "image": "https://3.files.edl.io/d54d/22/09/16/161828-994843ee-f2b3-4c65-a069-90022453f36a.heic"
    },
    {
        "subject": "default",
        "name": "Jody Cavaliere",
        "role": "Librarian",
        "image": "https://3.files.edl.io/8704/20/03/12/122100-f37457bd-89c4-49bc-889e-bae19ffece63.jpg"
    },
    {
        "subject": "math",
        "name": "Kevin Chester",
        "role": "Mathematics Teacher",
        "image": "https://3.files.edl.io/0cf0/20/03/12/122149-c087544e-6525-4347-a566-b490b02d3a53.jpg"
    },
    {
        "subject": "math",
        "name": "Heidi Chu",
        "role": "Mathematics Teacher",
        "image": "https://3.files.edl.io/feee/22/09/16/161904-8e2cc888-3845-4d08-8559-dd52749fc31c.heic"
    },
    {
        "subject": "science",
        "name": "Jonathan Colangelo",
        "role": "Science Teacher",
        "image": "https://3.files.edl.io/28a0/20/03/12/122230-d2392079-05d5-4940-a838-0d6146427076.jpg"
    },
    {
        "subject": "science",
        "name": "Jennifer DAnna",
        "role": "Science Teacher",
        "image": "https://3.files.edl.io/a36e/20/03/12/122327-c04de9ec-012b-48c5-906c-88eeaf09e218.jpg"
    },
    {
        "subject": "default",
        "name": "Catherine Ecker",
        "role": "Guidance Counselor",
        "image": "https://3.files.edl.io/083c/20/12/02/154103-8e672a23-043a-40dd-9073-3739af1007b2.jpg"
    },
    {
        "subject": "english",
        "name": "Diane Federico-Cogan",
        "role": "English Teacher",
        "image": "https://3.files.edl.io/7056/20/03/12/122542-fa682ebc-da3a-4f06-be12-8cb4d71f0aee.jpg"
    },
    {
        "subject": "default",
        "name": "Margaret Ferrigno",
        "role": "Guidance Counselor",
        "image": "https://3.files.edl.io/a2df/20/03/12/122632-d3590591-d2fa-403c-8410-91b919bf9795.jpg"
    },
    {
        "subject": "science",
        "name": "Raymond Ferrigno",
        "role": "Science Teacher",
        "image": "https://3.files.edl.io/8c7c/20/03/12/122609-2c5f2a3b-4385-4730-bec6-a49c3379fdd1.jpg"
    },
    {
        "subject": "science",
        "name": "Jodi Fertoli",
        "role": "Science Teacher",
        "image": "https://3.files.edl.io/7a3e/20/03/12/122711-634e0d60-e4d1-4af5-866d-cec65d26b016.jpg"
    },
    {
        "subject": "history",
        "name": "Victoria Finkelshteyn",
        "role": "History Teacher",
        "image": "https://3.files.edl.io/56dc/20/12/02/154210-5c337a69-cd4a-4a19-b6c4-d8edc702e44b.jpg"
    },
    {
        "subject": "default",
        "name": "Jennifer Fitzpatrick",
        "role": "CTE Teacher",
        "image": "https://3.files.edl.io/a648/20/03/12/122745-81b53f57-c5bf-4e6d-be8f-66b36f927ba7.jpg"
    },
    {
        "subject": "math",
        "name": "Christina Franks",
        "role": "Mathematics Teacher",
        "image": "https://3.files.edl.io/1aa6/20/12/02/174100-05b0cdc6-3082-46fe-8040-b1af6497f1d5.jpg"
    },
    {
        "subject": "english",
        "name": "Joseph Frazzetto",
        "role": "English Teacher",
        "image": "https://3.files.edl.io/4a89/20/12/02/154245-0ac76675-c62d-4f3b-b131-bdcd62ee605a.jpg"
    },
    {
        "subject": "tech",
        "name": "Dr. Joseph Frusci",
        "role": "Technology Teacher",
        "image": "https://3.files.edl.io/218c/20/03/12/122811-853ea435-46b5-43a6-9e2a-53f1f7d9606f.jpg"
    },
    {
        "subject": "english",
        "name": "Kristen Fusaro-Pizzo",
        "role": "English Teacher",
        "image": "https://3.files.edl.io/fcee/20/03/12/122833-dddc042d-b4e6-425e-a88a-8fc4e3ea3362.jpg"
    },
    {
        "subject": "tech",
        "name": "Kaitlin Geraghty",
        "role": "Technology Teacher",
        "image": "https://3.files.edl.io/7d2c/22/09/16/162007-4b4d7d5b-e319-4d8c-a5ee-2e76645715f0.heic"
    },
    {
        "subject": "default",
        "name": "Lisa Gervais-Barnett",
        "role": "Guidance Counselor/Programmer",
        "image": "https://3.files.edl.io/d32b/20/03/12/122907-cd2001ae-3493-48fd-82ba-3bfff794d174.jpg"
    },
    {
        "subject": "russian",
        "name": "Olga Goyco",
        "role": "Russian Teacher",
        "image": "https://3.files.edl.io/a61c/20/03/12/122454-e856f867-04b5-4e10-84d5-4a823a5617c2.jpg"
    },
    {
        "subject": "physed",
        "name": "Matthew Granite",
        "role": "Physical Education Teacher",
        "image": "https://3.files.edl.io/bca3/20/03/12/123014-0d6d1750-e12f-4dba-88f5-921210bdcdcb.jpg"
    },
    {
        "subject": "physed",
        "name": "Michael Grippo",
        "role": "Physical Education Teacher",
        "image": "https://3.files.edl.io/9d37/20/03/12/123041-df442b46-85a7-474b-9409-a82982cdca92.jpg"
    },
    {
        "subject": "tech",
        "name": "Mr. Everton Henriques",
        "role": "Engineering and Technology Teacher",
        "image": "https://3.files.edl.io/c718/21/10/15/110715-ef8636ae-df23-4ba5-9d2c-bda8f031e157.jpg"
    },
    {
        "subject": "science",
        "name": "Dr. Jared Jax",
        "role": "Physics Teacher / CTE Coordinator",
        "image": "https://3.files.edl.io/514f/20/11/10/203007-b8c65119-f8bc-4c97-93df-45f80239693d.jpeg"
    },
    {
        "subject": "math",
        "name": "Georgia Koutsovasilis",
        "role": "Mathematics Teacher",
        "image": "https://3.files.edl.io/567d/20/12/02/173157-12ffc13a-d1bc-4bdd-b59b-4d941594c297.jpg"
    },
    {
        "subject": "science",
        "name": "Eileen Labora",
        "role": "Science Teacher",
        "image": "https://3.files.edl.io/b4f0/20/03/12/123420-52c2da53-a8a8-43c1-bfad-6868fcda73fc.jpg"
    },
    {
        "subject": "english",
        "name": "Amanda Lane",
        "role": "English Teacher",
        "image": "https://3.files.edl.io/cfa1/20/03/12/123507-64533497-da4b-41e6-a0a2-02a95ef47e6f.jpg"
    },
    {
        "subject": "math",
        "name": "Kaitlyn Lang",
        "role": "Mathematics Teacher",
        "image": "https://3.files.edl.io/2430/20/03/12/123528-1990e73b-7e44-4c1c-a0ec-4288ecd14025.jpg"
    },
    {
        "subject": "english",
        "name": "Abigail Lanza",
        "role": "English Teacher",
        "image": "https://3.files.edl.io/6a1c/22/09/19/155739-c348f601-281a-478d-980f-9963f46309f4.jpeg"
    },
    {
        "subject": "russian",
        "name": "Natalya Levina",
        "role": "Russian Teacher",
        "image": "https://3.files.edl.io/23d8/20/03/12/123640-1b391c41-32cc-4e54-92c4-b2f84fac562e.jpg"
    },
    {
        "subject": "math",
        "name": "Si Ou (Nancy) Liu",
        "role": "Mathematics Teacher",
        "image": "https://3.files.edl.io/e4cf/22/09/16/165204-37ee4e42-cb15-46a9-bb91-e0c5d58cc9e6.heic"
    },
    {
        "subject": "english",
        "name": "David Luu",
        "role": "English Teacher",
        "image": "https://3.files.edl.io/2d95/22/09/16/162055-88dcaf81-ca9a-4b4c-b7cd-2ce3aab1c981.heic"
    },
    {
        "subject": "history",
        "name": "Nicholas Macula",
        "role": "History Teacher",
        "image": "https://3.files.edl.io/d124/20/03/12/123734-c126a97a-7f33-4764-a1a5-d565938c4f4c.jpg"
    },
    {
        "subject": "default",
        "name": "Christopher Maddaluno",
        "role": "Guidance Counselor",
        "image": "https://3.files.edl.io/0d37/22/09/16/164311-791010cd-0341-456f-b00b-e76615886f38.heic"
    },
    {
        "subject": "history",
        "name": "Meredith Manfredi",
        "role": "History Teacher",
        "image": "https://3.files.edl.io/bf2b/20/03/12/123130-b0fb34cf-d48a-4c50-91eb-8768f72d7b8d.jpg"
    },
    {
        "subject": "english",
        "name": "Dorothy Mannino",
        "role": "English Teacher",
        "image": "https://3.files.edl.io/1b09/20/12/02/154527-967ac814-5154-4849-b268-9aea0e83e15f.jpg"
    },
    {
        "subject": "russian",
        "name": "Veronika Maslyukova",
        "role": "Russian Teacher",
        "image": "https://3.files.edl.io/3b79/20/03/12/123904-78650cde-ef86-4b53-80eb-0501d765cd38.jpg"
    },
    {
        "subject": "physed",
        "name": "James Mccarthy",
        "role": "Physical Education Teacher/Athletic Director",
        "image": "https://3.files.edl.io/7585/20/03/12/123926-8067ff00-c034-4858-8f48-2a0a069ff5f0.jpg"
    },
    {
        "subject": "english",
        "name": "Yevgenya Michan",
        "role": "English Teacher",
        "image": "https://3.files.edl.io/c9c5/20/12/02/234413-2ac7a2a2-0cf3-483b-bc2c-6f14489949af.png"
    },
    {
        "subject": "english",
        "name": "Patrick Misciagna",
        "role": "English Teacher",
        "image": "https://3.files.edl.io/b005/20/03/12/123950-ae3ebde0-bd84-4d75-a5d5-419f77173a23.jpg"
    },
    {
        "subject": "history",
        "name": "Jeff Mora",
        "role": "History Teacher",
        "image": "https://3.files.edl.io/d988/22/09/16/162134-14e48534-cd2d-45ea-b576-efc3c8cafa84.heic"
    },
    {
        "subject": "default",
        "name": "Amanda Nichols",
        "role": "SAPIS Counselor",
        "image": "https://3.files.edl.io/4ae2/22/10/18/142405-d1084271-2fce-4fa7-9ec9-691ea18ff6fd.jpeg"
    },
    {
        "subject": "science",
        "name": "Danielle Nickolauk",
        "role": "Chemistry Teacher",
        "image": "https://3.files.edl.io/1cca/22/10/19/000836-a97920ec-457d-429a-bf93-9aa4807a1c45.png"
    },
    {
        "subject": "physed",
        "name": "Amanda Nudelman",
        "role": "Physical Education Teacher",
        "image": "https://3.files.edl.io/5b82/22/09/16/234003-7ce202a1-77d4-4675-8e03-c6edec75a493.jpeg"
    },
    {
        "subject": "science",
        "name": "Eric Olsen",
        "role": "Science Teacher",
        "image": "https://3.files.edl.io/d02d/20/12/02/155139-d44c21e8-2b06-4b79-9158-19fd7ba03dba.jpg"
    },
    {
        "subject": "history",
        "name": "Jessica Pagliaro",
        "role": "History Teacher",
        "image": "https://3.files.edl.io/12e3/20/12/02/173428-3c715efb-c807-47da-86ab-79ce0e1c172c.jpg"
    },
    {
        "subject": "math",
        "name": "Stephanie Partnow",
        "role": "Mathematics Teacher",
        "image": "https://3.files.edl.io/6557/20/12/02/174005-7456be17-1d42-4e55-a799-08b0089250d3.jpg"
    },
    {
        "subject": "english",
        "name": "Jessica Peterson",
        "role": "English Teacher",
        "image": "https://3.files.edl.io/0131/20/12/03/160054-434ca96f-9e6d-4c77-b316-7e9531ee0cab.jpg"
    },
    {
        "subject": "default",
        "name": "Jessica Pisano",
        "role": "Social Worker",
        "image": "https://3.files.edl.io/b4ca/20/12/02/213824-aea7abb5-d28a-422f-9c34-f73261bfc019.jpeg"
    },
    {
        "subject": "history",
        "name": "Suzanne Provenzano",
        "role": "History Teacher",
        "image": "https://3.files.edl.io/6099/20/03/12/124027-cfdc5f57-99a6-45c4-be05-71b5b007becd.jpg"
    },
    {
        "subject": "physed",
        "name": "Jessica Ragucci",
        "role": "Physical Education Teacher",
        "image": "https://3.files.edl.io/012f/20/12/02/174142-589e49f6-e809-4e3a-a4ba-87d7af537d38.jpg"
    },
    {
        "subject": "default",
        "name": "Robert Rams",
        "role": "Band and Strings Director",
        "image": "https://3.files.edl.io/e1d0/20/12/02/174252-cc4577cc-2104-4fc1-b307-9eb63b565269.jpg"
    },
    {
        "subject": "russian",
        "name": "Kateryna Ratushnyuk",
        "role": "Russian Teacher",
        "image": "https://3.files.edl.io/d81f/20/12/02/174329-d179c782-00a1-45ff-a956-43fe3a22dcc7.jpg"
    },
    {
        "subject": "default",
        "name": "Mrs. Maryann Reichel",
        "role": "Coordinator",
        "image": "https://3.files.edl.io/4537/20/12/04/152015-8889f590-436b-4ff0-b10f-4bc646741b65.jpg"
    },
    {
        "subject": "history",
        "name": "Austen Rerick",
        "role": "History Teacher",
        "image": "https://3.files.edl.io/1e88/20/12/14/003713-266a8fd2-1408-4672-8702-80aa88a070ad.jpg"
    },
    {
        "subject": "science",
        "name": "Brianne Rivera",
        "role": "Science Teacher",
        "image": "https://3.files.edl.io/e7be/22/09/16/162209-70be08fc-0201-4e45-b601-ec1e909cecc8.heic"
    },
    {
        "subject": "russian",
        "name": "Elena Sokolovski",
        "role": "Russian Teacher",
        "image": "https://3.files.edl.io/b73b/20/04/15/214452-d77f824c-c6f3-439a-a74a-ce0c139d7720.jpeg"
    },
    {
        "subject": "default",
        "name": "Amanda Stefanese",
        "role": "Makerspace Teacher",
        "image": "https://3.files.edl.io/5443/22/09/16/164848-2f60ee62-bed1-4857-9252-a43348b8fadc.jpeg"
    },
    {
        "subject": "default",
        "name": "Thomas Terrusa",
        "role": "COSA",
        "image": "https://3.files.edl.io/6238/20/12/02/173558-91ac3964-8622-42d8-a972-7dcc102d19f8.jpg"
    },
    {
        "subject": "science",
        "name": "Eric Tolnes",
        "role": "Lab Specialist",
        "image": "https://3.files.edl.io/0d3f/22/09/16/164048-266f81c6-1192-475d-9cb8-bb7f2eb2d03f.heic"
    },
    {
        "subject": "science",
        "name": "Jennifer Toner",
        "role": "Science Teacher",
        "image": "https://3.files.edl.io/d9a7/20/12/02/175514-a01f27c8-3179-484f-93ac-bbb2a350b919.jpg"
    },
    {
        "subject": "russian",
        "name": "Nataliya Ushakova",
        "role": "Russian Teacher",
        "image": "https://3.files.edl.io/3bde/20/12/02/175541-23d79790-4dbf-4a87-ad22-76eec7658053.jpg"
    },
    {
        "subject": "tech",
        "name": "Michael Van Buren",
        "role": "Technology Teacher",
        "image": "https://3.files.edl.io/11ff/20/12/02/175608-4f977c2d-6c6f-41e3-a9ae-a71f09a474d4.jpg"
    },
    {
        "subject": "default",
        "name": "Valentina Vinci",
        "role": "Guidance Counselor",
        "image": "https://3.files.edl.io/e0aa/22/09/16/164621-2bae8203-a3b3-4fe5-9099-76b58ecc0ae3.heic"
    },
    {
        "subject": "tech",
        "name": "Mariusz Wantowski",
        "role": "Technology Teacher",
        "image": "https://3.files.edl.io/3922/20/12/02/175743-2c8d441f-a10c-4e99-bd13-1a83a5abeb5d.jpg"
    },
    {
        "subject": "science",
        "name": "Michael Weitzman",
        "role": "Science Teacher",
        "image": "https://3.files.edl.io/06b6/22/09/16/162453-5d092152-b154-4dac-9172-2eb9cb89a236.heic"
    },
    {
        "subject": "math",
        "name": "Lisa Wellens",
        "role": "Mathematics Teacher",
        "image": "https://3.files.edl.io/9615/20/12/02/174401-11269d04-1da2-440a-bed2-e7165dea77b0.jpg"
    },
    {
        "subject": "tech",
        "name": "Michael Whalen",
        "role": "Technology Teacher",
        "image": "https://3.files.edl.io/aeb1/20/12/02/154937-46cc468f-b7f4-4bb3-945e-3265bdb605d4.jpg"
    },
    {
        "subject": "english",
        "name": "Paul Wiley",
        "role": "English Teacher",
        "image": "https://3.files.edl.io/1831/22/09/16/162404-185775a9-f167-4578-99b6-7f8a3dc04e2a.heic"
    },
    {
        "subject": "history",
        "name": "Lauren Zerega",
        "role": "History Teacher",
        "image": "https://3.files.edl.io/bbf4/20/12/02/175817-7a4badf4-4df0-489c-b737-b3ba401eece0.jpg"
    },
    {
        "subject": "default",
        "name": "Danielle Barchitta",
        "role": "Secretary",
        "image": "https://3.files.edl.io/3fc5/22/09/16/162937-bb6cee5d-17a7-4104-a0e5-32a3136826aa.heic"
    },
    {
        "subject": "default",
        "name": "Helen Buro",
        "role": "School Aide",
        "image": "https://3.files.edl.io/532c/22/09/16/164137-dbfda275-0fee-43ca-83fc-e68bf3369332.heic"
    },
    {
        "subject": "default",
        "name": "Josepha Corselli",
        "role": "Paraprofessional",
        "image": "https://3.files.edl.io/aafb/22/09/19/233541-3a345891-55f7-4612-879e-6767e709017e.jpeg"
    },
    {
        "subject": "default",
        "name": "Ann Marie Cutrona",
        "role": "School Aide",
        "image": "https://3.files.edl.io/94af/22/09/16/163006-430639bd-2e3a-4160-8274-d174f2e27999.jpg"
    },
    {
        "subject": "default",
        "name": "Irene Della Croce",
        "role": "Secretary",
        "image": "https://3.files.edl.io/1e90/22/09/16/163044-8a296135-f513-4938-9ae1-0c18dfbafa74.jpg"
    },
    {
        "subject": "default",
        "name": "Ellen Devine",
        "role": "College Counselor",
        "image": "https://3.files.edl.io/dab7/20/03/12/122415-9cb1e241-4f28-4cdf-a0af-87db219a3454.jpg"
    },
    {
        "subject": "default",
        "name": "Loraine Ercolano",
        "role": "School Aide",
        "image": "https://3.files.edl.io/55bd/22/09/16/164530-1a482e39-d195-4c17-ab34-81865bf237ac.jpg"
    },
    {
        "subject": "default",
        "name": "Evelyn Garcia",
        "role": "School Aide",
        "image": "https://3.files.edl.io/5e03/22/09/16/163125-64078a95-1d74-49a3-8da4-09ac07df4fb6.heic"
    },
    {
        "subject": "default",
        "name": "Marie Gonzalez",
        "role": "School Aide",
        "image": "https://3.files.edl.io/16b7/22/09/16/163157-9f4f98b5-4092-49d0-9b2b-c66ff957aace.jpg"
    },
    {
        "subject": "default",
        "name": "Ms. Stephanie Harper",
        "role": "Paraprofessional",
        "image": "https://www.siths.org/apps/pics/empty_profile_public.png"
    },
    {
        "subject": "default",
        "name": "Yat-Sun (Frank) Hau",
        "role": "School Aide",
        "image": "https://3.files.edl.io/0ea0/22/09/16/163243-4e97fc85-7b29-4f49-b4e1-b8a84d21e856.jpg"
    },
    {
        "subject": "default",
        "name": "Carolyn Laforgia",
        "role": "Secretary",
        "image": "https://3.files.edl.io/3f69/20/03/12/123442-c5940dbf-32a8-4a4a-a029-2d1120891df2.jpg"
    },
    {
        "subject": "default",
        "name": "Barbara Malenfant",
        "role": "Parent Coordinator",
        "image": "https://3.files.edl.io/9d1d/22/05/10/155324-fed388c8-2310-4271-a169-3d08e1bcf80e.jpg"
    },
    {
        "subject": "default",
        "name": "Valentina Manfredi",
        "role": "School Aide",
        "image": "https://3.files.edl.io/c1f3/22/09/16/163341-6bb16cc1-f761-4082-94b4-f79abc29cbb8.heic"
    },
    {
        "subject": "default",
        "name": "Loretta Manisero",
        "role": "Secretary",
        "image": "https://3.files.edl.io/8e61/22/09/16/163448-ef4336a0-ac12-4e60-8986-b9812a51260b.jpg"
    },
    {
        "subject": "default",
        "name": "Rosina Mugavero",
        "role": "Secretary",
        "image": "https://3.files.edl.io/d920/22/09/16/163545-d7dc6155-763b-43c3-96c9-a09669ec24bf.jpg"
    },
    {
        "subject": "default",
        "name": "Elizabeth Roman-Cotto",
        "role": "School Aide",
        "image": "https://3.files.edl.io/7085/22/09/19/170904-84c22d33-8d2f-436e-998d-838c22a1c793.jpeg"
    },
    {
        "subject": "default",
        "name": "Dianne Schermerhorn",
        "role": "Nurse",
        "image": "https://3.files.edl.io/2629/22/09/16/163646-99c8c953-8fb1-4a1c-b78e-9bd2037650b3.jpg"
    },
    {
        "subject": "default",
        "name": "Margaret Taranto",
        "role": "Paraprofessional",
        "image": "https://3.files.edl.io/4523/20/12/02/175116-bd000f65-9037-4f1f-a10f-c45d06a203e9.jpg"
    },
    {
        "subject": "default",
        "name": "Christine Tkachuk",
        "role": "Secretary",
        "image": "https://3.files.edl.io/ffa7/22/09/16/163729-d1ddbbb8-b7e3-4f65-8ea1-1a110b87aaa5.jpg"
    },
    {
        "subject": "default",
        "name": "Tana Vignola",
        "role": "Secretary",
        "image": "https://3.files.edl.io/9794/22/09/16/164117-6b59b2a2-bda3-4aaa-a013-3cb0404256b8.jpg"
    }
]);

export {teachers};