const collapseBtn = document.querySelector('.head__logo');
const dashboard = document.querySelector('.dashboard');
const dropper = document.querySelector('.dropper');
const menuList = document.querySelector('.menu__list');

function collapse() {
    const collapsed = dashboard.classList.contains('dashboard_collapsed');
    const expanded = dashboard.classList.contains('dashboard_expanded');

    if (expanded) {
        dashboard.classList.remove('dashboard_expanded');
        dashboard.classList.add('dashboard_collapsed');
    } else if (collapsed) {
        dashboard.classList.remove('dashboard_collapsed');
        dashboard.classList.add('dashboard_expanded');
    }
}

function drop(event) {
    const dropper = event.target.closest('.dropper');
    dropper && dropper.classList.toggle('active');
}

collapseBtn.addEventListener('click', collapse);
menuList.addEventListener('click', drop);