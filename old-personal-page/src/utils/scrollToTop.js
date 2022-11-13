export default function scrollToTop(scrollBehavior) {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: scrollBehavior ? scrollBehavior : 'instant'
  });
}