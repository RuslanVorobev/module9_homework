// {
//     list: [
//       { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
//       { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
//     ]
// }

let xml =`
<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>`;

let parser = new DOMParser();
let doc = parser.parseFromString(xml, "application/xml");

let students = {
  list: []
};

doc
  .querySelectorAll("list>student")
  .forEach(studenntNode => {
    let nameNode = studenntNode.querySelector("name");
    let student = {
      name: nameNode.querySelector("first").textContent + ' ' + nameNode.querySelector("second").textContent,
      age: Number(studenntNode.querySelector("age").textContent),
      prof: studenntNode.querySelector("prof").textContent,
      lang: nameNode.getAttribute("lang")
    };

    students.list.push(student);
  })

console.log(students);