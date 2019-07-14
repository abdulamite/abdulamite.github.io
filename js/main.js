window.onload = function() {
    const contact_botton = document.querySelector('#contact');
    const project_button = document.querySelector('#projects');
    const about_desc = document.querySelector(".about_desc");
    const about_projects = document.querySelector(".about_projects");

    contact.addEventListener('click',function(){
        console.log(this);
    })

    project_button.addEventListener('click',()=>{
        if(about_desc.style.visibility == 'hidden'){
            about_desc.style.visibility = 'visible';
            about_desc.style.opacity = '1';
            about_desc.style.height = 'auto'

            about_projects.style.visibility = 'hidden';
            about_projects.style.opacity = '0';
            about_projects.style.height = '1px';
        }else{
            about_desc.style.opacity = '0';
            about_desc.style.visibility = 'hidden';
            about_desc.style.height = '1px'

            about_projects.style.visibility = 'visible';
            setTimeout(function(){
                about_projects.style.opacity = '1'
            },280)
            about_projects.style.height = 'auto';
        }
    })

    
};

