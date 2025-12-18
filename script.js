

function navigate(section) {
  // Hide all main pages first
  const pages = ['homePage','kidPage','parentPage','nursePage'];
  pages.forEach(p => document.getElementById(p).classList.remove('active'));

  // Show the selected section
  if(section === 'kid') document.getElementById('kidPage').classList.add('active');
  else if(section === 'parent') document.getElementById('parentPage').classList.add('active');
  else if(section === 'nurse') document.getElementById('nursePage').classList.add('active');
}


function backToKidDashboard() {
  const kidPages = ['kidPage','relaxTips','funVideos','askHelp','achievements'];
  kidPages.forEach(id => document.getElementById(id).classList.remove('active'));
  document.getElementById('kidPage').classList.add('active');
}


  function celebrate(card) {
    const sound = document.getElementById('applauseSound');
    sound.currentTime = 0;
    sound.play();
  
    card.classList.add('applaud');
  
    createConfetti(card);
    createStars(card);
  
    setTimeout(() => {
      card.classList.remove('applaud');
    }, 600);
  }
  
  function createConfetti(card) {
    for (let i = 0; i < 15; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.top = '0';
      card.appendChild(confetti);
  
      setTimeout(() => confetti.remove(), 1000);
    }
  }
  
  function createStars(card) {
    for (let i = 0; i < 6; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.innerHTML = '⭐';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = '50%';
      card.appendChild(star);
  
      setTimeout(() => star.remove(), 1000);
    }
  }
 

  
  function showKidSubPage(pageId) {
    // Hide all kid pages
    const kidPages = ['kidPage','relaxTips','funVideos','askHelp','achievements'];
    kidPages.forEach(id => document.getElementById(id).classList.remove('active'));
    // Show selected page
    document.getElementById(pageId).classList.add('active');
  }

  function backToKidDashboard() {
    // Hide all kid pages except dashboard
    const kidPages = ['kidPage','relaxTips','funVideos','askHelp','achievements'];
    kidPages.forEach(id => document.getElementById(id).classList.remove('active'));
    document.getElementById('kidPage').classList.add('active');
  }


function backToParentDashboard() {
  const parentPages = ['parentPage','parentTips','parentVideos','parentArticles'];
  parentPages.forEach(id => document.getElementById(id).classList.remove('active'));
  document.getElementById('parentPage').classList.add('active');
}


  function backToParentDashboard() {
    const parentPages = ['parentPage','parentTips','parentVideos','parentArticles'];
    parentPages.forEach(id => document.getElementById(id).classList.remove('active'));
    document.getElementById('parentPage').classList.add('active');
  }

  
  function showParentSubPage(pageId) {
    const parentPages = ['parentPage','parentTips','parentVideos','parentArticles'];
    parentPages.forEach(id => document.getElementById(id).classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
  }
  
  function backToParentDashboard() {
    const parentPages = ['parentPage','parentTips','parentVideos','parentArticles'];
    parentPages.forEach(id => document.getElementById(id).classList.remove('active'));
    document.getElementById('parentPage').classList.add('active');
  }
 
 
function backToNurseDashboard() {
  const nursePages = ['nursePage','patientManagement','nurseResources'];
  nursePages.forEach(id => document.getElementById(id).classList.remove('active'));
  document.getElementById('nursePage').classList.add('active');
}

function backToNurseDashboard() {
  const nursePages = ['nursePage','nurseResources'];
  nursePages.forEach(id => document.getElementById(id).classList.remove('active'));
  document.getElementById('nursePage').classList.add('active');
}


 

  function showNurseSubPage(pageId) {
    const nursePages = ['nursePage','nurseTips','patientManagement','resourceLibrary'];
    nursePages.forEach(id => document.getElementById(id).classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
  }
  
  function backToNurseDashboard() {
    const nursePages = ['nursePage','nurseTips','patientManagement','resourceLibrary'];
    nursePages.forEach(id => document.getElementById(id).classList.remove('active'));
    document.getElementById('nursePage').classList.add('active');
  }
  

 
  const navbars = {
    kid: ['Home', 'Kid', 'Parent', 'Nurse'],
    parent: ['Home', 'Kid', 'Parent', 'Nurse'],
    nurse: ['Home', 'Kid', 'Parent', 'Nurse']
  };

  let currentUser = null;

  function selectUser(userType) {
    currentUser = userType;
    document.getElementById('userSelection').style.display = 'none';
    const navbar = document.getElementById('navbar');
    navbar.style.display = 'flex';
    createNavbar(userType);
    showPage('homePage');
  }

  function createNavbar(userType) {
    const navbar = document.getElementById('navbar');
    navbar.innerHTML = '';
    navbars[userType].forEach(item => {
      const btn = document.createElement('button');
      btn.innerText = item;
      btn.onclick = () => navigate(item.toLowerCase());
      navbar.appendChild(btn);
    });
  }

  function navigate(page) {
  hideAllPages(); // 🔥 this is the key fix

  if (page === 'home') {
    showPage('homePage');
  } else if (page === 'kid') {
    showPage('kidPage');
  } else if (page === 'parent') {
    showPage('parentPage');
  } else if (page === 'nurse') {
    showPage('nursePage');
  }
}
  function hideAllPages() {
  const allPages = document.querySelectorAll('.page');
  allPages.forEach(page => page.classList.remove('active'));
}

  function showPage(id) {
    document.getElementById(id).classList.add('active');
  }




 

