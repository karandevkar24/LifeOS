const subjectName = document.getElementById("subjectName");
const subjectMarks = document.getElementById("subjectMarks");
const addSubjectBtn = document.getElementById("addSubjectBtn");
const subjectsContainer = document.getElementById("subjectsContainer");

let subjects =
JSON.parse(localStorage.getItem("subjects")) || [];

displaySubjects();

addSubjectBtn.addEventListener("click", function(){

    const name = subjectName.value.trim();
    const marks = subjectMarks.value.trim();

    if(name === "" || marks === ""){
        alert("Please fill all fields.");
        return;
    }

    subjects.push({
        name,
        marks
    });

    localStorage.setItem(
        "subjects",
        JSON.stringify(subjects)
    );

    subjectName.value = "";
    subjectMarks.value = "";

    displaySubjects();

});

function displaySubjects(){

    subjectsContainer.innerHTML = "";

    subjects.forEach(function(subject,index){

        const div = document.createElement("div");

        div.className = "subject";

        div.innerHTML = `
            <span>📘 ${subject.name}</span>

            <span>${subject.marks}%</span>

            <button onclick="deleteSubject(${index})">
                🗑
            </button>
        `;

        subjectsContainer.appendChild(div);

    });

}

function deleteSubject(index){

    subjects.splice(index,1);

    localStorage.setItem(
        "subjects",
        JSON.stringify(subjects)
    );

    displaySubjects();

}