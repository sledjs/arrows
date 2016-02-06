import './index.styl';

export default class Arrows {
  constructor($core) {
    this.name = 'arrows';
    this.peer = '$';
  }

  init(core) {
    let $arrows = this.$.children;
    let slides = core.modules.slides;

    [this.$prev, this.$next] = [$arrows[0], $arrows[1]];

    this.$next.onclick = slides.next;
    this.$prev.onclick = slides.prev;
  }
}
