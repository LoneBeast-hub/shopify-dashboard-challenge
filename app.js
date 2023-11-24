// html elements variables
const body = document.querySelector('#body');
const notificationsComponent = document.querySelector('#notifications');
const profileMenuComponent = document.querySelector('#profile-menu');
const trialElement = document.querySelector("#trial");
const guidesElement = document.querySelector("#guides");
const checkButtons = document.querySelectorAll('.check-button');
const guideElements = document.querySelectorAll('.guide');
const progressBar = document.getElementById('progress-bar');
const countSpan = document.querySelector('.count');

// js variables (states)
let isNotificationsVisible = false;
let isProfileMenuVisible = false;
let isGuidesVisible = false;
let completedCount = 0;
let isCheckButtonChecked = false;

// functions
const mouseFunctions = (e) => {
    // toggle notifications
    const toggleNotifications = () => {
        if(e.target.matches('#notification') || e.target.closest('#notification')) {
            // update notifications visibility state
            isNotificationsVisible = !isNotificationsVisible;
            // toggle the display depending on the state
            notificationsComponent.style.display = isNotificationsVisible? 'flex' : 'none';
        } else if (!notificationsComponent.contains(e.target) && e.target.id !== 'notification') {
            // if other parts of the body is clicked aside the notifications button
            notificationsComponent.style.display = 'none';
        }
    }

    // invoke function
    toggleNotifications();

    // toggle profile menu
    const toggleProfileMenu = () => {
        // if the profile is clicked
        if(e.target.matches('#profile') || e.target.closest("#profile")) {
            // update profile menu state
            isProfileMenuVisible = !isProfileMenuVisible;
            // toggle the display depending on the state
            profileMenuComponent.style.display = isProfileMenuVisible? 'flex' : 'none'
        } else if (!profileMenuComponent.contains(e.target) && e.target.id !== 'profile') {
            // if other parts of the body is clicked aside the profile menu button
            profileMenuComponent.style.display = 'none';
        }
    }

    // invoke function
    toggleProfileMenu();

    // cancel trial notice
    const cancelTrialNotice = () => {
        // if the cancel button is clicked
        if(e.target.matches('#cancel-trial-notice') || e.target.closest('#cancel-trial-notice')) {
            // remove the element with trial id
            trialElement.remove();
        }
    }

    // invoke function
    cancelTrialNotice();

    // toggle guides
    const toggleGuides = () => {
        // if the dropdown button is clicked
        if(e.target.matches('#dropdown') || e.target.closest('#dropdown')) {
            // update isGuide state
            isGuidesVisible = !isGuidesVisible;
            // toggle the display depending on the state
            guidesElement.style.display = isGuidesVisible ? 'flex' : 'none';
            // Update the SVG based on the current state
            const svg = isGuidesVisible
                ? `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5303 12.2803C14.2374 12.5732 13.7626 12.5732 13.4697 12.2803L10 8.81066L6.53033 12.2803C6.23744 12.5732 5.76256 12.5732 5.46967 12.2803C5.17678 11.9874 5.17678 11.5126 5.46967 11.2197L9.46967 7.21967C9.76256 6.92678 10.2374 6.92678 10.5303 7.21967L14.5303 11.2197C14.8232 11.5126 14.8232 11.9874 14.5303 12.2803Z" fill="#4A4A4A"/>
                    </svg>`
                : `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.21967 8.46967C6.51256 8.17678 6.98744 8.17678 7.28033 8.46967L10.75 11.9393L14.2197 8.46967C14.5126 8.17678 14.9874 8.17678 15.2803 8.46967C15.5732 8.76256 15.5732 9.23744 15.2803 9.53033L11.2803 13.5303C10.9874 13.8232 10.5126 13.8232 10.2197 13.5303L6.21967 9.53033C5.92678 9.23744 5.92678 8.76256 6.21967 8.46967Z" fill="#4A4A4A"/>
                    </svg>`;
            // set the updated SVG
            e.target.innerHTML = svg;
        }
    }

    // invoke function
    toggleGuides();
}

const keyboardFunctions = (e) => {
    // toggle notifications
    const toggleNotifications = () => {
        // if the notification button is clicked
        if(e.key === 'Enter' && e.target.id === 'notification') {
            // update notifications visibility state
            isNotificationsVisible = !isNotificationsVisible;
            // toggle the display depending on the state
            notificationsComponent.style.display = isNotificationsVisible? 'flex' : 'none';
        } else if (!notificationsComponent.contains(e.target) && e.target.id !== 'notification') {
            // if other parts of the body is clicked aside the notifications button
            notificationsComponent.style.display = 'none';
        }
    }

    // invoke function
    toggleNotifications();

    // toggle profile menu
    const toggleProfileMenu = () => {
        // if the notification button is clicked
        if(e.key === 'Enter' && e.target.id === 'profile') {
            // update profile menu state
            isProfileMenuVisible = !isProfileMenuVisible;
            // toggle the display depending on the state
            profileMenuComponent.style.display = isProfileMenuVisible? 'flex' : 'none'
        } else if (!profileMenuComponent.contains(e.target) && e.target.id !== 'profile') {
            // if other parts of the body is clicked aside the profile menu button
            profileMenuComponent.style.display = 'none';
        }
    }

    // invoke function
    toggleProfileMenu();

    // cancel trial notice
    const cancelTrialNotice = () => {
        // if the cancel button is clicked
        if(e.key === 'Enter' && (e.target.matches('#cancel-trial-notice') || e.target.closest('#cancel-trial-notice'))) {
            // remove the element with trial id
            trialElement.remove();
        }
    }

    // invoke function
    cancelTrialNotice();

    // toggle guides
    const toggleGuides = () => {
        // if the dropdown button is clicked
        if(e.key === 'Enter' && (e.target.matches('#dropdown') || e.target.closest('#dropdown'))) {
            // update isGuide state
            isGuidesVisible = !isGuidesVisible;
            // toggle the display depending on the state
            guidesElement.style.display = isGuidesVisible ? 'flex' : 'none';
            // Update the SVG based on the current state
            const svg = isGuidesVisible
                ? `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5303 12.2803C14.2374 12.5732 13.7626 12.5732 13.4697 12.2803L10 8.81066L6.53033 12.2803C6.23744 12.5732 5.76256 12.5732 5.46967 12.2803C5.17678 11.9874 5.17678 11.5126 5.46967 11.2197L9.46967 7.21967C9.76256 6.92678 10.2374 6.92678 10.5303 7.21967L14.5303 11.2197C14.8232 11.5126 14.8232 11.9874 14.5303 12.2803Z" fill="#4A4A4A"/>
                    </svg>`
                : `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.21967 8.46967C6.51256 8.17678 6.98744 8.17678 7.28033 8.46967L10.75 11.9393L14.2197 8.46967C14.5126 8.17678 14.9874 8.17678 15.2803 8.46967C15.5732 8.76256 15.5732 9.23744 15.2803 9.53033L11.2803 13.5303C10.9874 13.8232 10.5126 13.8232 10.2197 13.5303L6.21967 9.53033C5.92678 9.23744 5.92678 8.76256 6.21967 8.46967Z" fill="#4A4A4A"/>
                    </svg>`;
            // set the updated SVG
            e.target.innerHTML = svg;
        }
    }

    // invoke function
    toggleGuides();
}

// change check button icon to a new one when hovered
const changeButtonToNew = (e) => {
    // return if the check button is checked
    if (e.target.closest('.check-button').classList.contains('checked')) {
        return;
    }
    // Replace the SVG content with the new SVG code
    e.target.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="#8A8A8A" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `;
}

// change check button icon to the old one when not hovered
const changeButtonToOld = (e) => {
    // return if the check button is checked
    if (e.target.closest('.check-button').classList.contains('checked')) {
        return;
    }
    // Replace the SVG content with the new SVG code
    e.target.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="#8A8A8A" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 5"/>
        </svg>
    `;
}


// event listeners      
body.addEventListener('click', mouseFunctions);
body.addEventListener('keydown', keyboardFunctions);
checkButtons.forEach(checkButton => {
    checkButton.addEventListener('mouseover', changeButtonToNew);
    checkButton.addEventListener('mouseout', changeButtonToOld);
})

// more functionalities
guideElements.forEach(function(guideElement) {
    const checkButton = guideElement.querySelector('.check-button');

    // mouse action
    checkButton.addEventListener('click', function(event) {
        if (checkButton.classList.contains('checked')) {
            transitionCheckedToUnchecked();
            checkButton.classList.remove('checked');
            completedCount--;
        } else {
            transitionUncheckedToChecked();
            checkButton.classList.add('checked');
            completedCount++;
        }

        updateProgress();
    });

    // keyboard action
    checkButton.addEventListener('keydown', function(event) {
        if(event.key === 'Enter') {
            if (checkButton.classList.contains('checked')) {
                transitionCheckedToUnchecked();
                checkButton.classList.remove('checked');
                completedCount--;
            } else {
                transitionUncheckedToChecked();
                checkButton.classList.add('checked');
                completedCount++;
            }   
        }

        updateProgress();
    });


    const transitionCheckedToUnchecked = () => {
        const svgArray = [
            `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11.9996" cy="12" r="10" fill="#1C181D" stroke="#1C181D" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.8162 8.64149C17.0603 8.88557 17.0603 9.2813 16.8162 9.52538L11.3995 14.942C11.1555 15.1861 10.7597 15.1861 10.5157 14.942L7.80733 12.2337C7.56325 11.9896 7.56325 11.5939 7.80733 11.3498C8.0514 11.1057 8.44713 11.1057 8.69121 11.3498L10.9576 13.6162L15.9323 8.64149C16.1764 8.39742 16.5721 8.39742 16.8162 8.64149Z" fill="white"/>
            </svg>`,
            `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11.9996" cy="12" r="10" fill="#1C181D" stroke="#1C181D" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.8163 8.64149C17.0604 8.88557 17.0604 9.2813 16.8163 9.52538L11.3997 14.942C11.1556 15.1861 10.7599 15.1861 10.5158 14.942L7.80745 12.2337C7.56337 11.9896 7.56337 11.5939 7.80745 11.3498C8.05153 11.1057 8.44725 11.1057 8.69133 11.3498L10.9577 13.6162L15.9324 8.64149C16.1765 8.39742 16.5723 8.39742 16.8163 8.64149Z" fill="white"/>
            </svg>
            `,
            `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse opacity="0.6" cx="7.00008" cy="7.00004" rx="7.00008" ry="7.00004" transform="matrix(0.526082 -0.850434 0.850437 0.526077 2.36414 14.2701)" fill="#1C181D" stroke="#1C181D" stroke-width="1.45835" stroke-linecap="round" stroke-linejoin="round"/>
            <g opacity="0.6">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7757 7.89535C12.0109 7.83993 12.2465 7.98566 12.3019 8.22085L13.5318 13.4402C13.5872 13.6754 13.4415 13.9109 13.2063 13.9663L10.5966 14.5813C10.3614 14.6367 10.1258 14.491 10.0704 14.2558C10.015 14.0206 10.1607 13.785 10.3959 13.7296L12.5798 13.215L11.4502 8.42154C11.3948 8.18635 11.5406 7.95077 11.7757 7.89535Z" fill="white"/>
            </g>
            </svg>
            `,
            `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9996 2C13.9774 2 15.9108 2.58649 17.5553 3.6853C19.1998 4.78412 20.4816 6.3459 21.2384 8.17316C21.9953 10.0004 22.1933 12.0111 21.8075 13.9509C21.4216 15.8907 20.4692 17.6725 19.0707 19.0711C17.6722 20.4696 15.8903 21.422 13.9505 21.8079C12.0107 22.1937 10.0001 21.9957 8.1728 21.2388C6.34554 20.4819 4.78375 19.2002 3.68494 17.5557C2.58612 15.9112 1.99963 13.9778 1.99963 12" stroke="#1C181D" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            `,
            `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Component 13">
            <path id="Ellipse 1" d="M22.0004 12C22.0004 13.9778 21.4139 15.9112 20.3151 17.5557C19.2162 19.2002 17.6545 20.4819 15.8272 21.2388C13.9999 21.9957 11.9893 22.1937 10.0495 21.8079C8.10965 21.422 6.32782 20.4696 4.9293 19.0711C3.53077 17.6725 2.57837 15.8907 2.19251 13.9509C1.80666 12.0111 2.00469 10.0004 2.76157 8.17317C3.51845 6.3459 4.80017 4.78412 6.44466 3.6853C8.08916 2.58649 10.0226 2 12.0004 2" stroke="#1C181D" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            </svg>
            `,
            `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Property 1=circle fill">
            <circle id="Ellipse 1" cx="12" cy="12" r="10" fill="#D9D9D9" stroke="#8A8A8A" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            </svg>
            `,
            `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Property 1=Circle">
            <circle id="Ellipse 1" cx="12" cy="12" r="10" stroke="#8A8A8A" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            </svg>
            `,
            `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Property 1=Dash">
            <circle id="Ellipse 1" cx="12" cy="12" r="10" stroke="#8A8A8A" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 5"/>
            </g>
            </svg>
            `
        ];
    
        let index = 0;
    
        const intervalId = setInterval(() => {
            checkButton.innerHTML = svgArray[index];
            index++;
    
            if (index === svgArray.length) {
                clearInterval(intervalId);
            }
        }, 50);
    }

    const transitionUncheckedToChecked = () => {
        const svgArray = [
            `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11.9996" cy="12" r="10" fill="#1C181D" stroke="#1C181D" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.8162 8.64149C17.0603 8.88557 17.0603 9.2813 16.8162 9.52538L11.3995 14.942C11.1555 15.1861 10.7597 15.1861 10.5157 14.942L7.80733 12.2337C7.56325 11.9896 7.56325 11.5939 7.80733 11.3498C8.0514 11.1057 8.44713 11.1057 8.69121 11.3498L10.9576 13.6162L15.9323 8.64149C16.1764 8.39742 16.5721 8.39742 16.8162 8.64149Z" fill="white"/>
            </svg>`,
            `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11.9996" cy="12" r="10" fill="#1C181D" stroke="#1C181D" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.8163 8.64149C17.0604 8.88557 17.0604 9.2813 16.8163 9.52538L11.3997 14.942C11.1556 15.1861 10.7599 15.1861 10.5158 14.942L7.80745 12.2337C7.56337 11.9896 7.56337 11.5939 7.80745 11.3498C8.05153 11.1057 8.44725 11.1057 8.69133 11.3498L10.9577 13.6162L15.9324 8.64149C16.1765 8.39742 16.5723 8.39742 16.8163 8.64149Z" fill="white"/>
            </svg>
            `,
            `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse opacity="0.6" cx="7.00008" cy="7.00004" rx="7.00008" ry="7.00004" transform="matrix(0.526082 -0.850434 0.850437 0.526077 2.36414 14.2701)" fill="#1C181D" stroke="#1C181D" stroke-width="1.45835" stroke-linecap="round" stroke-linejoin="round"/>
            <g opacity="0.6">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7757 7.89535C12.0109 7.83993 12.2465 7.98566 12.3019 8.22085L13.5318 13.4402C13.5872 13.6754 13.4415 13.9109 13.2063 13.9663L10.5966 14.5813C10.3614 14.6367 10.1258 14.491 10.0704 14.2558C10.015 14.0206 10.1607 13.785 10.3959 13.7296L12.5798 13.215L11.4502 8.42154C11.3948 8.18635 11.5406 7.95077 11.7757 7.89535Z" fill="white"/>
            </g>
            </svg>
            `,
            `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9996 2C13.9774 2 15.9108 2.58649 17.5553 3.6853C19.1998 4.78412 20.4816 6.3459 21.2384 8.17316C21.9953 10.0004 22.1933 12.0111 21.8075 13.9509C21.4216 15.8907 20.4692 17.6725 19.0707 19.0711C17.6722 20.4696 15.8903 21.422 13.9505 21.8079C12.0107 22.1937 10.0001 21.9957 8.1728 21.2388C6.34554 20.4819 4.78375 19.2002 3.68494 17.5557C2.58612 15.9112 1.99963 13.9778 1.99963 12" stroke="#1C181D" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            `,
            `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Component 13">
            <path id="Ellipse 1" d="M22.0004 12C22.0004 13.9778 21.4139 15.9112 20.3151 17.5557C19.2162 19.2002 17.6545 20.4819 15.8272 21.2388C13.9999 21.9957 11.9893 22.1937 10.0495 21.8079C8.10965 21.422 6.32782 20.4696 4.9293 19.0711C3.53077 17.6725 2.57837 15.8907 2.19251 13.9509C1.80666 12.0111 2.00469 10.0004 2.76157 8.17317C3.51845 6.3459 4.80017 4.78412 6.44466 3.6853C8.08916 2.58649 10.0226 2 12.0004 2" stroke="#1C181D" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            </svg>
            `,
            `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Property 1=circle fill">
            <circle id="Ellipse 1" cx="12" cy="12" r="10" fill="#D9D9D9" stroke="#8A8A8A" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            </svg>
            `,
            `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Property 1=Circle">
            <circle id="Ellipse 1" cx="12" cy="12" r="10" stroke="#8A8A8A" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            </svg>
            `,
            `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Property 1=Dash">
            <circle id="Ellipse 1" cx="12" cy="12" r="10" stroke="#8A8A8A" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 5"/>
            </g>
            </svg>
            `
        ];
    
        let index = svgArray.length - 1;
    
        const intervalId = setInterval(() => {
            checkButton.innerHTML = svgArray[index];
            index--;
    
            if (index < 0) {
                clearInterval(intervalId);
            }
        }, 50);
    }

    // mouse action
    guideElement.addEventListener('click', function() {
        guideElements.forEach(function(element) {
                if (element !== guideElement) {
                    element.classList.remove('clicked');
                    element.querySelector('.additional-info').style.display = 'none';
                    element.querySelector('.guide-img').style.display = 'none';
                }
            }
        );

        guideElement.classList.toggle('clicked');
        const additionalInfo = guideElement.querySelector('.additional-info');
        const guideImg = guideElement.querySelector('.guide-img');

        if (guideElement.classList.contains('clicked')) {
            additionalInfo.style.display = 'block';
            // Check if viewport width is more than 575px before displaying guideImg
            if (window.innerWidth > 575) {
                guideImg.style.display = 'block';
            }
        } else {
            additionalInfo.style.display = 'none';
            guideImg.style.display = 'none';
        }
    });

    // keyboard action
    guideElement.addEventListener('keydown', function(e) {
        if(e.key === 'Enter') {
            guideElements.forEach(function(element) {
                    if (element !== guideElement) {
                        element.classList.remove('clicked');
                        element.querySelector('.additional-info').style.display = 'none';
                        element.querySelector('.guide-img').style.display = 'none';
                    }
                }
            );

            guideElement.classList.toggle('clicked');
            const additionalInfo = guideElement.querySelector('.additional-info');
            const guideImg = guideElement.querySelector('.guide-img');

            if (guideElement.classList.contains('clicked')) {
                additionalInfo.style.display = 'block';
                // Check if viewport width is more than 575px before displaying guideImg
                if (window.innerWidth > 575) {
                    guideImg.style.display = 'block';
                }
            } else {
                additionalInfo.style.display = 'none';
                guideImg.style.display = 'none';
            }
        }
        
    });
});

function updateProgress() {
    countSpan.textContent = completedCount;
    const percentage = (completedCount / guideElements.length) * 100;
    progressBar.style.width = `${percentage}%`;
}