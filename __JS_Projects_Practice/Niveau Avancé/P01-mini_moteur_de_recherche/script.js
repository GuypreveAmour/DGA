let list = [
"Le travail assure l'independance.",
"Le travail eloigne de nous trois grands maux, l'ennuie le vice et le besoin",
"Tout ce que l'on conçoit bien s'ennonce clairement et les mots pour le dire arrivent aisement",
"Tout ce que nous appellons le hasard n'est et ne peut être qur la cause ignorée d'un effet connu.",
"Si ici c'est le meilleur du monde, alors que sont les autres ?",
"Trois sortes d'amis sont utiles, trois sortes d'amis sont néfastes. Les utiles : un ami droit, un ami fidèle, un ami cultivé. Les néfastes : un ami faux, un ami mou, un ami bavard.",
"On parle toujours mal quand on n'a rien à dire.",
"La victoire obtenue par la violence équivaut à une défaite, car elle est momentanée.",
"Ne vous souciez pas de n'être pas remarqué ; cherchez plutôt à faire quelque chose de remarquable.",
"Quand un homme a faim, mieux vaut lui apprendre à pêcher que de lui donner un poisson.",
"Nos jeunes aiment le luxe, ont de mauvaises manières, se moquent de l'autorité et n'ont aucun respect pour l'âge. À notre époque, les enfants sont des tyrans.",
"Le savant est l'homme par lequel s'opère facilement la distinction entre la franchise et le mensonge dans les paroles, entre la vérité et l'erreur dans les convictions entre la beauté et la laideur dans les actes.",
"Le jour viendra où les personnes comme moi regarderont le meurtre des animaux comme ils regardent aujourd'hui le meurtre des êtres humains.",
"Ne vous souciez pas de n'être pas remarqué ; cherchez plutôt à faire quelque chose de remarquable.",
"Tu dois devenir l'homme que tu es. Fais ce que toi seul peux faire. Deviens sans cesse celui que tu es, sois le maître et le sculpteur de toi-même.",
"Agis avec gentillesse, mais n'attends pas de la reconnaissance.",
"La règle d'or de la conduite est la tolérance mutuelle, car nous ne penserons jamais tous de la même façon, nous ne verrons qu'une partie de la vérité et sous des angles différents.",
"De tous les actes, le plus complet est celui de construire.",
"La non-violence est infiniment supérieure à la violence, le pardon est plus viril que le châtiment. Le pardon est la parure du soldat.",
"Ne demandez jamais quelle est l'origine d'un homme ; interrogez plutôt sa vie et vous saurez ce qu'il est.",
"Le temps fait oublier les douleurs, éteint les vengeances, apaise la colère et étouffe la haine ; alors le passé est comme s'il n'eût jamais existé.",
"Celui qui aime va à la chose aimée comme les sens vont à la chose sensible.",
"Il n'y a d'autre enfer pour l'homme que la bêtise ou la méchanceté de ses semblables.",
"La méchanceté boit elle-même la plus grande partie de son venin.",
"Le choix en politique n'est pas entre le bien et le mal, mais entre le préférable et le détestable.",
"Celui qui déplace la montagne, c'est celui qui commence à enlever les petites pierres.",
"Qui pense peu, se trompe beaucoup.",
"La tolérance est un moment provisoire. Elle permet à ceux qui ne s'aiment pas de se supporter mutuellement, en attendant de pouvoir s'aimer.",
"C'est une erreur de croire nécessairement faux ce qu'on ne comprend pas.",
"La paix n'est pas l'absence de guerre, c'est une vertu, un état d'esprit, une volonté de bienveillance, de confiance, de justice.",
"Chaque homme cache en lui un enfant qui veut jouer.",
"Nulle pierre ne peut être polie sans friction, nul homme ne peut parfaire son expérience sans épreuve.",
"Le meilleur gouvernement est celui où il y a le moins d'hommes inutiles.",
"La haine tue toujours, l'amour ne meurt jamais.",
"La musique donne une âme à nos coeurs et des ailes à la pensée.",
"Il n'existe pas d'autre voie vers la solidarité humaine que la recherche et le respect de la dignité individuelle.",
"On peut connaître la vertu d'un homme en observant ses défauts.",
"Toute vérité est une route tracée à travers la réalité.",
"Les injures atroces n'ont jamais fait de tort qu'à ceux qui les ont dites.",
"La joie est en tout, il faut savoir l'extraire."
]

let tab_list =[]
console.log(list.length);
list.forEach(el =>{
    eltab = el.split(' ');
    //console.log(eltab)
    tab_list.push(eltab)
})