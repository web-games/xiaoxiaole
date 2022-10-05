import Container = PIXI.Container

export const enum SceneEvent {
  INIT_COMPLETE = "init_complete",
  CREATE_COMPLETE = "create_complete",
}

export default class Scene extends Container {
  constructor() {
    super()
  }

  public init() {

  }

  public destory() {

  }

  public removeAllChildren(obj, bo, num = 1) {
    let {children} = obj
    if (children && children.length > 0) {
      let i = children.length - 1
      for (i; i >= 0; i--) {
        let ele = children[i]
        console.log(num, i, ele.name);
        this.removeAllChildren(ele, num + 1);

        if (ele.parent) ele.parent.removeChild(ele);
      }
    }

    if (bo && obj.parent) obj.parent.removeChild(obj);
  }
}