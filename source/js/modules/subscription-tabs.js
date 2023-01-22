const tabWrappers = document.querySelectorAll('.subscriptions__tabs-item');
const tabs = document.querySelectorAll('.subscriptions__tab');
const tabsContentCollection = document.querySelectorAll('.subscriptions__group');

if (tabWrappers && tabs && tabsContentCollection) {
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', (evt) => {
      evt.preventDefault();
      tabsContentCollection.forEach((el) => {
        el.classList.add('subscriptions__group--hidden');
      });
      tabWrappers.forEach((el) => {
        el.classList.remove('subscriptions__tabs-item--active');
      });
      tabsContentCollection[i].classList.remove('subscriptions__group--hidden');
      tabWrappers[i].classList.add('subscriptions__tabs-item--active');
    });
  }
}
