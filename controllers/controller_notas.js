'use strict'

// Funcion que se encarga de validar si la entrada de datos es correcta
function esBaseNitrogenadaValida(dna) {
    
    /**
     * Se usa para
     * validar que tenga solo las letras ATCG
     * que la matriz sea NxN
     */
    let esValida = true;
    // posicion del arreglo
    let i = 0;
    // longitid del arreglo
    const n = dna.length;

    while (esValida && i < n){
        esValida = /^[ATCG]+$/.test(dna[i]) && dna[i].length === n;
        i++;
    }

    return esValida;
}

function hasMutation(dna) {
    
    // se calcula el tamaño del array
    const n = dna.length
    /**
     * Es para saber el numero de secuencia (4 iguales) encontrada en el adn
     * para saber si esta mutado
     */ 
    let nSecuencias = 0;

    for(let i = 0; i < n; i++) {

        //para guardar el registro anterior del array 
        let anteriorCaracterHorizontal = ""
        let anteriorCaracterVertical = ""

        // es el que se encargar de contar caracters iguales seguidos
        let nSeguidasHorizontal = 0
        let nSeguidasVertical = 0

        for(let j = 0; j < n; j++) {

            //horizontal
            if (anteriorCaracterHorizontal === "" || anteriorCaracterHorizontal === dna[i][j]) {
                nSeguidasHorizontal++
            } else {
                if (nSeguidasHorizontal === 4) {
                    nSecuencias++
                }
                nSeguidasHorizontal = 1
            } 
            anteriorCaracterHorizontal = dna[i][j];

            //vertical
            if (anteriorCaracterVertical === "" || anteriorCaracterVertical === dna[j][i]) {
                nSeguidasVertical++
            } else {
                if (nSeguidasVertical === 4) {
                    nSecuencias++
                }
                nSeguidasVertical = 1
            }
            anteriorCaracterVertical = dna[j][i]
        }


        if (nSeguidasHorizontal === 4) {
            nSecuencias++
        }
        if (nSeguidasVertical === 4) {
            nSecuencias++
        }
    }

    //diagonal
    for(let i = 0; i < 2*n - 1; i++) {
        
        let ultimoCaracter = ""
        let nSeguidas = 0

        const col_inicial = Math.max(0, i - n)
        const iteraciones = Math.min(i, (n - col_inicial), n)
        if(iteraciones >= 4){

            for (let j = 0;j < iteraciones; j++) {
    
                const caracterActual = dna[Math.min(n, i) - j - 1][col_inicial + j]
    
                if (ultimoCaracter === "" || ultimoCaracter === caracterActual) {
                    nSeguidas++
                } else {
                    if (nSeguidas === 4) {
                        nSecuencias++
                    }
                    nSeguidas = 1
                }
                ultimoCaracter = caracterActual;
            }
    
            if (nSeguidas === 4) {
                nSecuencias++
            }
        }
    }

    return nSecuencias > 1
}

class controller_adn {

    static async detectarMutacion(req, res) {
        const dna = req.body.dna
        esBaseNitrogenadaValida(dna)
        hasMutation(dna)
        try {
            if (dna && esBaseNitrogenadaValida(dna) && hasMutation(dna)) {
                return res.status(200).json({
                    mensaje: 'OK'
                })
            } else {
                return res.status(403).json({
                    mensaje: 'Forbidden'
                })
            }
        } catch (error) {
            return res.status(500).json({
                mensaje: 'Error-500'
            })
        }
    }

    static estadisticas(req, res) {
        return {}
    }
}

export default controller_adn
