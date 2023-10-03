class ElemView {

    #index;
    #allapot

    constructor(szuloElem, index) {
        this.szuloElem = szuloElem;
        this.#index = index;
        this.#allapot = true;
        this.elemLetrehoz();
        this.elem = $(".elem:last-child")
        this.elem.on("click", () => {
            if (this.#allapot) {
                this.#esemenyKezelo("katt");
                this.#allapot = false
            }
            
        })
    }

    getIndex() {
        return this.#index;
    }

    elemLetrehoz() {
        this.szuloElem.append("<div class='elem'></div>")
    }

    setElem(szoveg) {
        this.szuloElem.append(szoveg);
    }

    #esemenyKezelo(esemeny) {
        const es = new CustomEvent(esemeny, {detail : this})
        window.dispatchEvent(es);
    }
}

export default ElemView;