import Model from "../model/Model.js";
import JatekterView from "../view/JatekteView.js";

class Controller {
    constructor() {
        this.jatekterView = new JatekterView($(".tarolo"));
        this.model = new Model();
        $(window).on("katt",(event) => {

            console.log(event.detail);
            this.model.setAllapot(event.detail.getIndex());
            event.detail.setElem(this.model.getAllapot());
            console.log(this.model.vegeVanE());
        })
    }
}
export default Controller;