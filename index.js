export default class ArrowButtons {
  constructor($core) {
    if ($core.domModules.arrows) {
      let $arrows = $core.domModules.arrows.children;
      let slides = $core.modules.slides;

      [ this.$prev, this.$next ] = [$arrows[0], $arrows[1]];

      this.stop = _=> [ this.$prev, this.$next ] = null;

      this.$next.onclick = slides.next;
      this.$prev.onclick = slides.prev;
    }
  }
}
