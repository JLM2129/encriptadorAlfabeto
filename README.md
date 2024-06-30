Encriptador y Desencriptador de Texto en JavaScript

Descripción
Este proyecto implementa un encriptador y desencriptador de texto en JavaScript utilizando un cifrado basado en permutaciones del alfabeto. Cada palabra del texto puede ser encriptada y desencriptada utilizando una clave diferente, seleccionada de una lista predefinida de claves.

Claves Utilizadas.

Las claves utilizadas en este proyecto son:

* Matematicas.
* geometria.
* fisica.
* quimica.
* estadistica.
* filosofia.
* historia.
* medicina.
* tecnologia.
* biologia.

Algoritmo de Encriptación
El algoritmo de encriptación utilizado se basa en la permutación del alfabeto según una clave y la aplicación de una fórmula de cifrado afín:

                                             nuevaPos=(𝑎⋅𝑥+𝑏)mod26

Donde:

* a es la constante multiplicativa (en este caso, 𝑎 = 5).

* b es la constante aditiva (en este caso, 𝑏 = 8).

* x es la posición de la letra en el alfabeto original.

* nuevaPos es la nueva posición de la letra en el alfabeto permutado.
  
Algoritmo de Desencriptación
Para revertir el encriptado, se utiliza el inverso multiplicativo modular de a y la fórmula inversa:

                                  x=(inverso multiplicativo de a - (nuevaPos−b))mod26
Donde:

* El inverso multiplicativo de a es el número que multiplicado por a da como resultado 1 módulo 26.

* nuevaPos es la posición de la letra en el alfabeto permutado.

* x es la posición de la letra en el alfabeto original.
  
Funciones Principales

1.obtenerAlfabetoPermutado(clave): Genera un alfabeto permutado basado en una clave.
2.inversoModular(a, m): Calcula el inverso multiplicativo modular de 𝑎  módulo 𝑚.
3.encriptar(texto, a, b, claves): Encripta el texto utilizando las claves proporcionadas.
4.desencriptar(texto, a, b, claves): Desencripta el texto utilizando las mismas claves proporcionadas para encriptar.
Uso
1.Encriptar Texto: Toma el texto de entrada, lo divide en palabras, y encripta cada palabra utilizando una clave diferente de la lista.
2.Desencriptar Texto: Toma el texto encriptado, lo divide en palabras, y desencripta cada palabra utilizando la clave correspondiente.
![image](https://github.com/JLM2129/encriptadorAlfabeto/assets/173087426/4a65ae6e-f4e7-4796-8e25-af8c0cf3a0d2)
