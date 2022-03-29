class Html {
  public foucs() {
    console.log("focus");
  }
}

class HtmlElement extends Html {
  public click() {
    console.log("click");
  }
}

class HtmlselectElement extends HtmlElement {
  public _items: Array<number>;
  constructor(items: Array<number>) {
    super();
    this._items = items;
  }

  set setItems(value: number[]) {
    this._items = value;
  }

  public addItem(value: number) {
    let coppiedArray = [...this._items];
    coppiedArray.push(value);
    this.setItems = coppiedArray;
  }

  public removeItem(value: number) {
    let result = this._items.filter((item: number) => item != value);
    return result;
  }
}

let objj = new HtmlselectElement([1, 2, 3]);

objj.addItem(1);
console.log(objj._items);
