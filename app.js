function openModal(){
    document.getElementById("authModal").style.display="flex";
}

function closeModal(){
    document.getElementById("authModal").style.display="none";
}

function showUserForm(){
    document.getElementById("userForm").style.display="block";
    document.getElementById("artistForm").style.display="none";
}

function showArtistForm(){
    document.getElementById("userForm").style.display="none";
    document.getElementById("artistForm").style.display="block";
}

window.onclick=function(event){
    const modal=document.getElementById("authModal");

    if(event.target===modal){
        closeModal();
    }
}
