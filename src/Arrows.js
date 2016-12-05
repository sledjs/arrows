class Arrows {
  constructor() {
    this.hidden = null;
  }

  init(core) {
    let slides = core.modules.slides;

    this.hide(slides.slide);
    this.hide$(slides, this.hide.bind(this));
    this.show$(slides, this.show.bind(this));
    this.arrow$(slides, forward =>
      forward ? slides.next() : slides.prev());
  }

  hide$(slides, cb) {
    slides
      .addEventListener('change', n =>
        cb(this.isEnd(n, slides.$$)));
  }

  show$(slides, cb) {
    slides
      .addEventListener('change', n => {
        if (this.hidden === null) return;
        if (!this.isEnd(n, slides.$$)) return;

        cb(n);
      });
  }

  arrow$(slides, cb) {
    Array.from(this.$$)
      .forEach($ =>
        $.addEventListener('click', e =>
          cb(e.target.previousSibling)));
  }

  isEnd(n, $slides) {
    return n === 0 || n === $slides.length - 1;
  }

  hide(n) {
    this.show();
    this.hidden = n ? 1 : n;
    this.$$[this.hidden].style.display = 'none';
  }

  show() {
    if (this.hidden === null) return false;

    this.$$[this.hidden].style.display = null;
    this.hidden = null;
  }
}

export default Arrows;
