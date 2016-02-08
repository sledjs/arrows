import rx from 'rx';

class Arrows {
  constructor() {
    this.hidden = null;
  }

  init(core) {
    let slides = core.modules.slides;

    this.hide(slides.slide);
    this.hide$(slides)
      .subscribe(this.hide.bind(this));

    this
      .show$(slides).subscribe(this.show.bind(this));

    this
      .arrow$(slides).subscribe(forward =>
        forward ? slides.next() : slides.prev());
  }

  hide$(slides) {
    return rx.Observable
      .fromEvent(slides, 'change')
      .filter(n => this.isEnd(n, slides.$$));
  }

  show$(slides) {
    return rx.Observable
      .fromEvent(slides, 'change')
      .filter(_ => this.hidden !== null)
      .filter(n => !this.isEnd(n, slides.$$));
  }

  arrow$(slides) {
    return rx.Observable
      .fromEvent(this.$$, 'click')
      .pluck('target', 'previousSibling');
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
