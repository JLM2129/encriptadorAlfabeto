       function obtenerAlfabetoPermutado(clave) {
            const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            clave = clave.toUpperCase();
            let uniqueClave = '';
            
            for (let i = 0; i < clave.length; i++) {
            if (!uniqueClave.includes(clave[i])) {
                uniqueClave += clave[i];
            }
            }
            
            let alfabetoPermutado = uniqueClave;
            
            for (let i = 0; i < alfabeto.length; i++) {
            if (!alfabetoPermutado.includes(alfabeto[i])) {
                alfabetoPermutado += alfabeto[i];
            }
            }
            
            return alfabetoPermutado;
        }
        
        // Función para calcular el inverso multiplicativo modular
        function inversoModular(a, m) {
            let m0 = m, t, q;
            let x0 = 0, x1 = 1;
        
            if (m == 1) return 0;
        
            while (a > 1) {
            q = Math.floor(a / m);
            t = m;
        
            m = a % m;
            a = t;
            t = x0;
        
            x0 = x1 - q * x0;
            x1 = t;
            }
        
            if (x1 < 0) x1 += m0;
        
            return x1;
        }
        
        // Función para encriptar el texto
        function encriptar(texto, a, b, claves) {
            const alfabetoOriginal = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            let textoEncriptado = '';
        
            let palabras = texto.split(' ');
        
            for (let j = 0; j < palabras.length; j++) {
            let palabra = palabras[j];
            let clave = claves[j % claves.length];
            const alfabetoPermutado = obtenerAlfabetoPermutado(clave);
            palabra = palabra.toUpperCase();
            let palabraEncriptada = '';
        
            for (let i = 0; i < palabra.length; i++) {
                let caracter = palabra[i];
        
                if (alfabetoOriginal.includes(caracter)) {
                let x = alfabetoOriginal.indexOf(caracter);
                let nuevaPos = (a * x + b) % 26;
                if (nuevaPos < 0) nuevaPos += 26; // Asegurarse de que nuevaPos sea positivo
                let nuevoCaracter = alfabetoPermutado[nuevaPos];
                palabraEncriptada += nuevoCaracter;
                } else {
                palabraEncriptada += caracter;
                }
            }
        
            textoEncriptado += palabraEncriptada + ' ';
            }
        
            return textoEncriptado.trim();
        }
        
        // Función para desencriptar el texto
        function desencriptar(texto, a, b, claves) {
            const alfabetoOriginal = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const a_inv = inversoModular(a, 26); // Inverso multiplicativo de a
            let textoDesencriptado = '';
        
            let palabras = texto.split(' ');
        
            for (let j = 0; j < palabras.length; j++) {
            let palabra = palabras[j];
            let clave = claves[j % claves.length];
            const alfabetoPermutado = obtenerAlfabetoPermutado(clave);
            palabra = palabra.toUpperCase();
            let palabraDesencriptada = '';
        
            for (let i = 0; i < palabra.length; i++) {
                let caracter = palabra[i];
        
                if (alfabetoPermutado.includes(caracter)) {
                let nuevaPos = alfabetoPermutado.indexOf(caracter);
                let x = (a_inv * (nuevaPos - b)) % 26;
                if (x < 0) x += 26; // Asegurarse de que x sea positivo
                let caracterOriginal = alfabetoOriginal[x];
                palabraDesencriptada += caracterOriginal;
                } else {
                palabraDesencriptada += caracter;
                }
            }
        
            textoDesencriptado += palabraDesencriptada + ' ';
            }
        
            return textoDesencriptado.trim();
        }
        
        // Función para encriptar el texto desde el input
        function encriptarTexto() {
            if (inputText.value==""){
                alert("input vacio, por favor escribir texto");
            }else{
            const inputText = document.getElementById('inputText').value;
            const claves = ['Matematicas', 'geometria', 'fisica', 'quimica', 'estadistica', 'filosofia', 'historia', 'medicina', 'tecnologia', 'biologia'];
            const a = 5;  // Constante multiplicativa
            const b = 8;  // Constante aditiva
            const textoEncriptado = encriptar(inputText, a, b, claves);
            document.getElementById('outputText').value = textoEncriptado;
            clearInput();
            
            btn.disabled = true;
            btn1.disabled=false;
                }
                }
    
        
        // Función para desencriptar el texto desde el input
        function desencriptarTexto() {
    if (inputText.value==""){
        alert("por favor copiar texto encriptado y pegarlo en el input");
    }else{
            const inputText = document.getElementById('inputText').value;
            const claves = ['Matematicas', 'geometria', 'fisica', 'quimica', 'estadistica', 'filosofia', 'historia', 'medicina', 'tecnologia', 'biologia'];
            const a = 5;  // Constante multiplicativa utilizada en el cifrado
            const b = 8;  // Constante aditiva utilizada en el cifrado
            const textoDesencriptado = desencriptar(inputText, a, b, claves);
            document.getElementById('outputText').value = textoDesencriptado;
            clearInput();
            btn.disabled = false;
            btn1.disabled=true;
    }
            }
        
        
        function clearInput() {
            document.getElementById('inputText').value = '';
        }

function transformarTexto(texto) {
            // Convertir a minúsculas
            let textoTransformado = texto.toLowerCase();
            
            // Eliminar acentos
            textoTransformado = eliminarAcentos(textoTransformado);
            
            return textoTransformado;
        }
        
        function eliminarAcentos(texto) {
            return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        }
        
        // Usar la función en el evento del input
        document.getElementById('inputText').addEventListener('input', function() {
            this.value = transformarTexto(this.value);
        });

            btn1.disabled = true;
        
        
        
            

        
