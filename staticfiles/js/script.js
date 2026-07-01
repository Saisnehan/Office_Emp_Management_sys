// ===========================================
// Office Employee Management System
// JavaScript
// ===========================================


// Page Loading Animation

window.addEventListener("load", function () {

    document.body.classList.add("loaded");

});


// Smooth Button Hover

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-3px)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0px)";

    });

});


// Delete Confirmation

document.querySelectorAll(".btn-danger").forEach(btn => {

    btn.addEventListener("click", function (e) {

        if (this.innerText.includes("Remove")) {

            let confirmDelete = confirm(
                "Are you sure you want to remove this employee?"
            );

            if (!confirmDelete) {

                e.preventDefault();

            }

        }

    });

});


// Auto Focus

const firstInput = document.querySelector("input");

if(firstInput){

    firstInput.focus();

}


// Card Animation

const cards = document.querySelectorAll(".dashboard-card");

cards.forEach((card,index)=>{

    card.style.opacity="0";

    card.style.transform="translateY(40px)";

    setTimeout(()=>{

        card.style.transition="0.6s";

        card.style.opacity="1";

        card.style.transform="translateY(0px)";

    },index*150);

});


// Table Hover

const rows=document.querySelectorAll("tbody tr");

rows.forEach(row=>{

    row.addEventListener("mouseenter",()=>{

        row.style.transition=".3s";

        row.style.transform="scale(1.01)";

    });

    row.addEventListener("mouseleave",()=>{

        row.style.transform="scale(1)";

    });

});


// Current Year

const year=document.getElementById("year");

if(year){

year.innerHTML=new Date().getFullYear();

}