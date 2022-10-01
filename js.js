 
let students = ""
const listStudents = document.getElementById("listStudents")
let numbreStudents = document.getElementById("numbreStudents")
const NameExam = document.getElementById("NameExam")
const button = document.getElementById("button");
const img = document.getElementById("iconBack")
const elements = document.getElementById("elements")


 //  given a random number


function randomNumbre(studentsExam) {
    let num =  Math.floor( Math.random() * studentsExam.length)
    return num;
}

// given random etudient

function   randomStudents(studentsExam) {

    let index;
    let countStudents = numbreStudents.value >studentsExam.length ? studentsExam.length : numbreStudents.value;
    
    for( let i = 0 ; i < countStudents ; i++ )
    {
       index = randomNumbre(studentsExam);//return number random
       students  += "<li> Etudient " + (i + 1) + " : "  +   studentsExam[index] + "</li>"
       // delete etudient on array a have index random
       studentsExam.splice(index,1); 
    }
}


button.addEventListener("click" ,function() {
    students = ""
    if(NameExam.value == "Exam2021")  {
        studentsExam2021 = ["RAMI ABDESSAMAD","FAIK SARA","ABOUCHIKH SOUHA","SEKKOUTE YOUSSEF ","MORABITE FATIMA-ZAHRA"," Raki IMANE"," KINANI SALMA"," KHALID KHALID","KINANI YOUSSEF"]
        randomStudents(studentsExam2021) 
    }
    else if(NameExam.value == "Exam2020")   {
        studentsExam2020 = ["KHELLADI ANAS","BANGRI YOUSSEF","BOUCHNI AMINE","GHENYM WALID","ZINE YOUNES","SEBAI AMINE","BAHI OTHMAN","RACHID SARA","HASSIB KHADIJA"]
        randomStudents(studentsExam2020)  
    }
    else if (NameExam.value == "Exam2019") {
        studentsExam2019 = ["IDELCADI SOUHAIL","KAISSOUNI ANAS","JABRANE IMANE","HIMMI WAHID","DOUINIR SAID","BOUSTANI ZAKARIA","AMAAMER KHADIJA"]
        randomStudents(studentsExam2019) 
    }
    // add students to ul
    listStudents.innerHTML = students;
    
    elements.style.display="none";
    img.style.display ="block";
    listStudents.style.display="block"
} )
document.querySelector("img").addEventListener("click" ,function() {
    listStudents.style.display="none"
    img.style.display ="none";
    elements.style.display="flex";
    numbreStudents.value = "";
    NameExam.value= "" ;
} )


 

  