console.log('CV Screener');
//Data in an array of objects which contain information about the candidates.

const data = [
    {
        name: "Udit",
        age: 18,
        city: "Delhi",
        language: "Phyton",
        framework: "Django",
        img: "https://randomuser.me/api/portraits/men/51.jpg"
    },
    {
        name: "Aman",
        age: 18,
        city: "Delhi",
        language: "Phyton",
        framework: "Flask",
        img: "https://randomuser.me/api/portraits/men/52.jpg"
    },
    {
        name: "Raman",
        age: 18,
        city: "Delhi",
        language: "Phyton",
        framework: "Go Framework",
        img: "https://randomuser.me/api/portraits/men/53.jpg"
    },
    {
        name: "Rohan",
        age: 18,
        city: "Delhi",
        language: "Phyton",
        framework: "Angular",
        img: "https://randomuser.me/api/portraits/men/54.jpg"
    },
]

//Iterator
function cvIterator(profile) {
    let cvIteratorINDEX = 0;
    return {
        next: function () {
            return cvIteratorINDEX < profile.length ?
                { value: profile[cvIteratorINDEX++], done: false } : { done: true }
        }
    }
}

let candidates = cvIterator(data);
// console.log(candidates.next().value.city);
putData();
// event listener for next button
let next = document.getElementById("next");
next.addEventListener("click", putData);
function putData() {
    let currentCandidate = candidates.next().value;
    // console.log(currentCandidate);
    let image = document.getElementById("image");
    let profile = document.getElementById("profile");
    if (currentCandidate != undefined) {
        image.innerHTML = `<img src="${currentCandidate.img}">`;
        profile.innerHTML = `<ul class="list-group">
        <li class="list-group-item">Name: <b>${currentCandidate.name}</b></li>
        <li class="list-group-item">Age: <b>${currentCandidate.age}</b></li>
        <li class="list-group-item">Location: <b>${currentCandidate.city}</b></li>
        <li class="list-group-item">Language: <b>${currentCandidate.language}</b></li>
        <li class="list-group-item">Framework: <b>${currentCandidate.framework}</b></li>
        </ul>`
    }
    else {
        alert("Candidates Profile is completed");
        window.location.reload();
    }
};
