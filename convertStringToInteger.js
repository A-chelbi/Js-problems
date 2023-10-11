/**
 * La fonction javascript qui vous est presentee contient un bug. votre objectif est de le trouver et de le corriger.
    vous devez implementer la fonction convertToInteger() qui prend en parametre un tableau de strings. chaccune de ces strings represente un entier. la fonction doit donc les parser et retourner la liste de ces entiers.
    par exemple, convertToInteger(["4", "7", "5"]) doit retourner [4,7,5].
    vous de vez utiliser la fonction Array.map.

    function convertToInteger(strings) {
    return strings.map(parseInt);
    }
 * 
 */

function convertToInteger(strings) {
  return strings.map((string) => parseInt(string, 10));
}
