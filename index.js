export default class Arrows {
  constructor($core) {
    this.name = 'arrows';
    this.peer = '$';

    if (this.$) { //TODO better core peer
      let $arrows = this.$.children;
      let slides = $core.modules.slides;

      [this.$prev, this.$next] = [$arrows[0], $arrows[1]];

      this.$next.onclick = slides.next;
      this.$prev.onclick = slides.prev;
    }
  }
}
