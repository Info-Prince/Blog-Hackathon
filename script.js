// JavaScript code for sidebar scrolling

const toggleBtn = document.getElementById('toggle-btn');
toggleBtn.addEventListener('click', (event) => {
    
    const sidebar = document.getElementById('sidebar');
    
    if(sidebar.hasAttribute('class', 'sidebar-active')) {
        //hide sidebar
        sidebar.style.position = 'absolute';        
        sidebar.style.visibility = 'hidden';
        sidebar.style.opacity = '0';
        sidebar.style.translate = '-100%';

        sidebar.removeAttribute('class', 'sidebar-active');

        // rotate icon
        document.getElementById('toggle-active-img').style.rotate = '-90deg';
    }
    else {
        sidebar.style.position = 'relative';
        sidebar.style.visibility = 'visible';
        sidebar.style.opacity = '1';
        sidebar.style.translate = '0';

        sidebar.setAttribute('class', 'flex container sidebar-active');

        // rotate icon to normal
        document.getElementById('toggle-active-img').style.rotate = '90deg';

    }
    
})