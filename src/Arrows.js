import rx from 'rx';

class Arrows {
  init(core) {
    let slides = core.modules.slides;
    let arrow$ = rx.Observable
      .fromEvent(this.$.children, 'click')
      .pluck('target', 'previousSibling');

    arrow$.subscribe(forward =>
      forward ? slides.next() : slides.prev());
  }
}

export default Arrows;
