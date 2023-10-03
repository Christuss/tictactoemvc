import ElemView from "./ElemView.js";

class JatekterView {
    constructor(szuloElem){
        for (let index = 0; index < 9; index++) {
            new ElemView(szuloElem, index)
            
        }
    }
}
export default JatekterView;