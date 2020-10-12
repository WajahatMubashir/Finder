//Inti Github
const github = new Github;
//Inti UI
const ui = new UI;

//Search User Input
const searchUser =document.getElementById('searchUser');

//Search User Input Event Listener
searchUser.addEventListener('keyup', (e)=>{
    //Get Input text
    const userText = e.target.value;

    if(userText !== ''){
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found') {
                //Show Alert
                ui.showAlert('User not found', 'alert alert-danger');

            } else{
                //Show Profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);

            }
        })
    } else {
        //Clear Profile
        ui.clearProfile();
    }
});
