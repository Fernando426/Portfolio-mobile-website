const opneNave = () => {
  document.getElementById('mobileNave').style.width = '100%';
};
const closeNave = () => {
  document.getElementById('mobileNave').style.width = '0';
};
opneNave();
closeNave();

// ______________________________________
// ______________________________________
// ________________pup-pop__________________//

const closePopup = () => {
  document.getElementById('myModal').style.display = 'none';
};

const projectpopupParent = document.getElementById('eachWork');
const eachWorkTitleContent = document.querySelector('.eachWork_title_Content');


const seeProyectButton = document.getElementById('seeProyectButton');

let yourProjects=[{id:1,
title:"Multiple Project Storeis",
details:"skldfj lksjdkfl lksdjfksdfj "},
{id:2,
title:"Your country",
details:"skldfj lksjdkfl lksdjfksdfj "}];
const appearPopup = (project) => {
  // alert('Yas taaaa');
  eachWorkTitleContent.innerHTML = `
  <div id="overlay"> </div>
  <div class="modal" id="myModal">
  <h2>${project.title}</h2>
  <img onclick="closePopup(); "class="img-X" src="./images/Icon_X_.png" alt="">
  <ul class="tecnologies"> 
    <li>HTML</li>
    <li>Bootstrap</li>
    <li>Ruby on Rails</li>
  </ul>
  <div class="eachWorkImgContent">
    <img class ="eachWorkImg" src="/images/Snapshoot Portfolio.png" alt="" srcset="">
  </div>
  <div class="container_inf_button">
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p>
    <div class="containerEachWorkButton">
      <button id="liveBtn" class="liveBtn">See live<img src="/images/IconLive.png"></button>
      <button id="sourceBtn">See source<img src="/images/Icon -GitHubEach.png"></button>
    </div>
  </div>
  
  </div>
  `;

};
// seeProyectButton.addEventListener('click', function (){
//     seeProyectButton.classList.add('overlay');
// })
function showProjectDetails(myId){
  seeProyectButton.addEventListener('click', appearPopup(yourProjects[myId]));
  document.getElementById("myModal").style.display="block";
}

