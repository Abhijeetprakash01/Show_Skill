document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('.nav li a');

  navLinks.forEach(link => {
      link.addEventListener('click', function () {
          // Remove the active class from all links
          navLinks.forEach(nav => nav.classList.remove('active'));
          
          // Add the active class to the clicked link
          this.classList.add('active');
      });
  });
});

//js written for swiper in recommendations section
document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    initialSlide: 2,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: false, // Disable dynamic bullets to keep size consistent
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
    },
  });
});

//js for contact form
// Function to handle form submission
// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form elements
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  // Simple form validation
  if (!fullName || !email) {
      alert('Please fill in the required fields: Full Name and Email.');
      return;
  }

  // Print data to console
  console.log('Form Data:');
  console.log('Full Name:', fullName);
  console.log('Email:', email);
  console.log('Subject:', subject);
  console.log('Message:', message);

  // Show confirmation dialog
  alert('Thank you for your message!');

  // Optionally, clear the form
  document.getElementById('contactForm').reset();
}

// Attach event listener to the form
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (form) {
      form.addEventListener('submit', handleFormSubmit);
  }
});


// JS FOR ADD SKILL SECTION
// Get the modal
var modal = document.getElementById("addSkillModal");

// Get the button that opens the modal
var btn1 = document.querySelector("#addSkillBtn");

// Cancel button
var cancelBtn = document.getElementById("cancelSkillBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn1.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

cancelBtn.onclick = function () {
  modal.style.display = "none";
};

// Add skill to the page
document
  .querySelector("#button-to-add-skill")
  // .querySelector(".btn h4")
  .addEventListener("click", function () {
    var domain = document.getElementById("domain").value;
    var skillInputs = document.querySelectorAll(".skills-input");
    var skillsData = [];

    skillInputs.forEach(function (input) {
      var skillName = input.querySelector(".skill-name").value;
      var skillPercentage = input.querySelector(".skill-percentage").value;

      if (skillName && skillPercentage) {
        skillsData.push({
          name: skillName,
          percentage: skillPercentage,
        });
      }
    });

    // Create the new skill card
    if(domain && skillsData.length > 0) {
      var skillCard = document.createElement("div");
      skillCard.classList.add("skill-card");
      var cardContent = `<h2>${domain}</h2>`;

      skillsData.forEach(function (skill) {
        cardContent += `
                 <div class="skill">
                        <div class="skill-header">
                            <p>${skill.name} </p>
                            <span>${skill.percentage}%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress" style="width: ${skill.percentage}%;"></div>
                        </div>
                    </div>
            `;
      });

      skillCard.innerHTML = cardContent;
      document.querySelector(".cards-container").appendChild(skillCard);

      // Reset the form inputs
      document.getElementById("domain").value = "";
      skillInputs.forEach(function (input) {
        input.querySelector(".skill-name").value = "";
        input.querySelector(".skill-percentage").value = "";
      });

      // Close the modal
      modal.style.display = "none";
    }
  });
