const featuresButton = document.getElementById('features');
const featuresContainer = document.getElementById('features-container');

const companyButton = document.getElementById('company');
const companyContainer = document.getElementById('company-container');

const menu = document.getElementById('nav-bar-mobile');
const menuButton = document.getElementById('menu-button');
const closeButton = document.getElementById('menu-close-button');
const overlay = document.getElementById("menuOverlay");

const body = document.getElementById("body");

// Mobile features menu
const featuresMobileButton = document.getElementById("features-mobile");
const featuresMobileMenu = document.getElementById("features-nav-bar-mobile");

// Mobile company menu
const companyMobileButton = document.getElementById("company-mobile");
const companyMobileMenu = document.getElementById("company-nav-bar-mobile");

// Mobile features wrapper
const featuresWrapper = document.getElementById("features-mobile-wrapper");

// Mobile company wrapper
const companyWrapper = document.getElementById("company-mobile-wrapper");

// Features menu

function featuresExpanded() {
    featuresButton.setAttribute('aria-expanded', true);
    featuresButton.classList.add('text-black');
}

function featuresCollapsed() {
    featuresButton.setAttribute('aria-expanded', false);
    featuresButton.classList.remove('text-black');
}

// Company menu

function companyExpanded() {
    companyButton.setAttribute('aria-expanded', true);
    companyButton.classList.add('text-black');
}

function companyCollapsed() {
    companyButton.setAttribute('aria-expanded', false);
    companyButton.classList.remove('text-black');
}

// Main mobile menu

function overlayListener() {
    console.log("function listener start");
    overlay.setAttribute('aria-hidden', true);
    overlay.removeEventListener('transitionend', overlayListener);
    console.log("function listener end");
}

function menuListener() {

    menu.setAttribute('aria-hidden', true);
    menu.removeEventListener('transitionend', menuListener);
}

function toggleMenu() {
    // Find current state of menu
    const isMenuOpen = menuButton.getAttribute('aria-expanded') === 'true';
    
    // Change attributes to new menu states
    menuButton.setAttribute('aria-expanded', !isMenuOpen);
    

    if (!isMenuOpen) {
        //open menu

        //overlay settings
        overlay.removeEventListener('transitionend', overlayListener);
        overlay.setAttribute('aria-hidden', false);

        //menu settings
        menu.removeEventListener('transitionend', menuListener);
        menu.setAttribute('aria-hidden', isMenuOpen);

        void overlay.offsetHeight;

        //prevent scroll on body
        body.classList.add("no-scroll");

        //overlay settings
        overlay.classList.add('overlay--active');

        //menu settings
        menu.classList.add('nav-bar-mobile--active');

    } else {
        //close menu

        //overlay settings
        overlay.addEventListener('transitionend', overlayListener);
        overlay.classList.remove('overlay--active');

        //remove prevent scroll on body
        body.classList.remove("no-scroll");

        //menu 
        menu.addEventListener('transitionend', menuListener);
        menu.classList.remove('nav-bar-mobile--active');
        
    }
    
}

// Mobile Features Menu

function toggleMobileFeatures() {

    const isExpanded = featuresMobileButton.getAttribute('aria-expanded') === 'true';

    // const isVisible = featuresMobileMenu.getAttribute('data-mobile-menu-visible') === 'true';

    featuresMobileButton.setAttribute('aria-expanded', !isExpanded);
    // featuresMobileMenu.setAttribute('data-mobile-menu-visible', !isExpanded);

    // features wrapper

    featuresWrapper.setAttribute('data-mobile-visible', !isExpanded);

}

// Mobile Company Menu

function toggleMobileCompany() {

    const isExpanded = companyMobileButton.getAttribute('aria-expanded') === 'true';

    companyMobileButton.setAttribute('aria-expanded', !isExpanded);

    companyWrapper.setAttribute('data-mobile-visible', !isExpanded);

}

menuButton.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', toggleMenu);

featuresButton.addEventListener('mouseenter', featuresExpanded);
featuresButton.addEventListener('mouseleave', featuresCollapsed);

featuresContainer.addEventListener('mouseenter', featuresExpanded);
featuresContainer.addEventListener('mouseleave', featuresCollapsed);

companyButton.addEventListener('mouseenter', companyExpanded);
companyButton.addEventListener('mouseleave', companyCollapsed);

companyContainer.addEventListener('mouseenter', companyExpanded);
companyContainer.addEventListener('mouseleave', companyCollapsed);

featuresMobileButton.addEventListener('click', toggleMobileFeatures);
companyMobileButton.addEventListener('click', toggleMobileCompany);

