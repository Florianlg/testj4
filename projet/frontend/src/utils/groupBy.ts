// On exporte par défaut une fonction générique nommée `groupByKey`
// Elle prend en paramètres : 
// - un tableau `arr` de type générique `T[]`
// - une clé `key` qui correspond à une propriété de chaque élément du tableau (clé de type `K`, qui doit appartenir aux clés de `T`)
export default function groupByKey<T, K extends keyof T>(arr: T[], key: K) {  // Range par groupes
  // Étape 1 : on crée un objet qui va contenir les groupes
  // Chaque clé de cet objet correspondra à une valeur de la propriété `key`
  // Chaque valeur associée est un tableau des éléments de `arr` qui ont cette valeur pour `key`
  let sorted = arr.reduce((groups, current) => ({
   // On crée un nouvel objet à chaque itération pour éviter la mutation directe
    // La clé est la valeur de `current[key]` convertie en string
    // Si cette clé existe déjà, on ajoute `current` au tableau existant
    // Sinon, on crée un nouveau tableau avec `current`
    ...groups,
    [String(current[key])]: [...(groups[String(current[key])] || []), current]
  }),
  // L’objet initial est un `Record<string, T[]>` vide
  {} as Record<string, T[]>)

   // Étape 2 : on trie les clés de l'objet `sorted` par ordre alphabétique
  // Cela permet de garantir un ordre déterministe sur les groupes
  sorted = Object.keys(sorted).sort().reduce((acc, key) => ({
    // On reconstitue un nouvel objet trié avec les mêmes éléments
    ...acc, [key]: sorted[key]
  }), {} as Record<string, T[]>)

  // On retourne l'objet final groupé et trié
  return sorted;
}
