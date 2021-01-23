
const students = [
        {
        firstName: 'Kendrikc',
        lastName: 'Rambal',
        age: 52,
        hobbies: [
            'Programming',
            'Website Building'
        ],
        book: [
            {
                title: 'Programming with JS',
                author: 'Uncle Bob'
            }
        ]
    },
    {
        firstName: 'Josh',
        lastName: 'Phillips',
        age: 52,
        hobbies: [
            'Programming',
            'Website Building'
        ],
        book: [
            {
                title: 'Programming with JS',
                author: 'Uncle Bob'
            }
        ] 
    }
];

console.log(students);
//To go deeper in a section just make another array

const section1 = document.querySelector('section');

// const output = `div`

const div1 = document.createElement('div');
div1.textContent = student.firstName;
// You can also use div1.innerHTML = firstName;
// use this when you want to add CSS instead of .textContent

section1.appendChild(div1);
//.createElement generates and element
const div2 = document.createElement('div');
div2.textContent = student.lastName;
//This adds attributes to the generated content
div2.setAttribute('id', 'div2');
//This adds a class "called emphasize" to the generated content "div"
div2.classList.add('emphasize');
section1.appendChild(div2);


const div3 = document.createElement('div');
// div3.textContent = students[0].hobbies.join(', ');

const ul = document.createElement('ul');
students[0].hobbies.forEach(
    hobby => {
        const li = document.createElement('li');
        li.textContent = hobby;
        ul.appendChild(li);
    }
)

div3.innerHTML += `<h2>Hobbies</h2>`;
div3.appendChild(ul);

section1.appendChild(div3);

