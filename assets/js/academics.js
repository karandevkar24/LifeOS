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
    // Update Statistics Cards

document.getElementById("subjectCount").textContent = subjects.length;

if(subjects.length > 0){

    let total = 0;

    subjects.forEach(function(subject){

        total += Number(subject.marks);

    });

    let average = Math.round(total / subjects.length);

    document.getElementById("averageMarks").textContent = average + "%";

}else{

    document.getElementById("averageMarks").textContent = "0%";

}

    subjects.forEach(function(subject,index){

        const div = document.createElement("div");

        div.className = "subject";

        div.innerHTML = `
    <div class="subject-left">

        <div class="subject-icon">
            📚
        </div>

        <div class="subject-name">
            ${subject.name}
        </div>

    </div>

    <div class="subject-percent">

        <div class="percent-text">
            ${subject.marks}%
        </div>

        <div class="progress">

            <div
                class="progress-fill"
                style="width:${subject.marks}%">
            </div>

        </div>

        <div class="subject-status">

            ${
                subject.marks >= 90
                ? "🏆 Excellent! Outstanding Performance"
                : subject.marks >= 75
                ? "💪 Great Job! Keep it up"
                : subject.marks >= 60
                ? "👍 Good! Can improve more"
                : subject.marks >= 40
                ? "📚 Needs More Practice"
                : "⚠️ Focus on this Subject"
            }

        </div>

    </div>

    <button class="delete-btn" onclick="deleteSubject(${index})">
        🗑 Delete
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