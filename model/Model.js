class Model {
    #allapot;
    #lista= [];
    #lepes = 0;

    constructor() {
        this.#allapot = "n";
        this.#lista = [ ".",".",".",".",".",".",".",".","."]
    }
    
    getAllapot(){
        return this.#allapot;
    }

    setAllapot(index) {
        this.#lepes++
        if (this.#allapot === "n") {
            this.#allapot = "x"
        } else if (this.#allapot === "x") {
            this.#allapot = "o"
        } else if(this.#allapot === "o") {
            this.#allapot = "x"
        }
        this.#lista[index] = this.#allapot;
        console.log(this.#lista);
    }
    vegeVanE() {
        let eredmeny = this.#vizszintesEll()
        if (eredmeny.indexOf("xxx") >-1) {
            return "o nyert";
        } else if (eredmeny.indexOf("ooo") > -1) {
            return "x nyert"
        }
        if (this.#lepes >= 9) {
            return "vége"
        }
        return "nincs vége"
    }

    #vizszintesEll(){
        let vText=""
        for (let index = 0; index < 9; index++) {
            vText+=this.#lista[index]
            if (index%3==2) {
                vText+="@"
            }
            console.log(vText);
        }
        return vText;
    }
}

export default Model;