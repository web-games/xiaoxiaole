import Text = PIXI.Text;
import Container = PIXI.Container
import Graphics = PIXI.Graphics
import Scene, {SceneEvent} from '../Scene';

export default class LoadingScene extends Scene {
  public static NAME = 'loading_scene'

  public static CLICK_CONTINUE = 'click_continue'

  public loading: boolean = true;

  private _loadingText = null;

  private _loadingBar = null;

  constructor(game) {
    super(game)
  }

  public init() {
    const screen_bg = new Graphics()
    screen_bg.beginFill(window.themeColor);
    screen_bg.drawRect(0, 0, this.stageWidth, this.stageHeight)
    screen_bg.endFill();
    screen_bg.x = 0;
    screen_bg.y = 0;
    this.addChild(screen_bg)
    screen_bg.interactive = true;
    screen_bg.on('pointerdown', () => {
      !this.loading && this.emit(LoadingScene.CLICK_CONTINUE);
    })
    screen_bg.name = 'screen_bg'

    let loading_bar_container = new Container();
    this.addChild(loading_bar_container);
    loading_bar_container.x = (this.stageWidth - 300) / 2;
    loading_bar_container.y = (this.stageHeight - 300);
    loading_bar_container.name = 'loading_bar_container'

    const bar_width = 300;
    const bar_height = 16;
    const bar_radius = 8;

    let loading_bg = new Graphics();
    loading_bg.lineStyle(2, 0xffffff, 1);
    loading_bg.beginFill(0x327bfb, 0);
    loading_bg.drawRoundedRect(0, 0, bar_width, bar_height, bar_radius)
    loading_bg.endFill();
    loading_bar_container.addChild(loading_bg)

    let filter = new PIXI.filters['GlowFilter']({
      distance: 16, // 光晕距离
      outerStrength: 2, // 外部强度
      innerStrength: 0, // 内部强度
      color: 0xffffff, // 光晕颜色，这里使用红色
      quality: 0.1, // 光晕质量，范围从 0 到 1
      knockout: false // 是否仅显示光晕，不显示原图
    })

    loading_bg.filters = [filter];

    let loading_bar = new Graphics();
    loading_bar.beginFill(0xffffff, 1);
    loading_bar.drawRect(0, 0, bar_width, bar_height);
    loading_bar.endFill();
    loading_bar_container.addChild(loading_bar)
    loading_bar.x = 0 - bar_width;
    loading_bar.y = 0;

    let loading_bar_mask = new Graphics();
    loading_bar_mask.beginFill(0xff0000, 1);
    loading_bar_mask.drawRoundedRect(0, 0, bar_width, bar_height, bar_radius);
    loading_bar_mask.endFill();
    loading_bar_container.addChild(loading_bar_mask)

    loading_bar.mask = loading_bar_mask;
    this._loadingBar = loading_bar;

    let text = new Text('加载中...', {fill: '#FFFFFF'});
    loading_bar_container.addChild(text);
    text.anchor.set(0.5, 0.5);
    text.x = bar_width / 2;
    text.y = -30;
    this._loadingText = text;

    this.emit(SceneEvent.INIT_COMPLETE)
  }

  public setLoadingProgress(num) {
    TweenMax.to(this._loadingBar, 0.3, {x: (num / 100 * 300) - 300})

    this.setLoadingText(`${parseInt(num)}%`)
  }

  public setLoadingText(text) {
    this._loadingText.text = text;
  }
}