import { Pokemon } from "src/app/shared/models/Pokemon.model"

export const POKEMONS: Pokemon[] = [
    {  
        id: "001",
        name : "Bulbizarre",
        url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
        description: "La graine sur le dos de Bulbizarre est une réserve de nutriments. Il la fait doucement pousser en absorbant les rayons du soleil, et emmagasine de l'énergie dedans en vue de son évolution. S\'il dépense trop souvent son énergie, il n\'évoluera pas car l\'ouverture de son bulbe dépend de ses réserves de nutriments.",
        sound : "../assets/sound/bulbizarre.mp3",
        type : ["plante", "poison"]
    },
    {  
        id: "002",
        name : "Herbizarre",
        url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
        description: "Le bulbe sur le dos de Herbizarre a éclos, dévoilant ainsi une fleur fermée. Plus il passe de temps au soleil, plus sa fleur se prépare à s'ouvrir, et quelques temps avant son évolution, il dégage une douce odeur fruitée. Attention à ses Tranch'herbes et à ses Fouets lianes.",
        sound : "../assets/sound/herbizarre.mp3",
        type : ["plante", "poison"]
        },
    {  
        id: "003",
        name : "Florizarre",
        url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
        description: "Comme un panneau solaire, les pétales de la fleur de Florizarre transforment les rayons du soleil en énergie. Il est maître d'un troupeau de Herbizarre et de Bulbizarre, qu'il garde férocement. L'odeur se dégageant de sa fleur est exquise, mais mieux vaut ne pas s'approcher d'un Florizarre sauvage et de sa horde.",
        sound : "../assets/sound/florizarre.mp3",
        type : ["plante", "poison"]
        },
    {  
        id: "004",
        name : "Salamèche",
        url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
        description: "De récentes études prouvent que la flamme qui brûle sur la queue de Salamèche indique son état de santé, mais aussi son caractère. S'il se sent faible, la flamme sera toute petite. Et si par malheur sa flamme s'éteint, il meurt, car c'est le seul moyen pour lui de se refroidir.",
        sound : "../assets/sound/salameche.mp3",
        type : ["feu"]
        },
    {  
        id: "005",
        name : "Reptincel",
        url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
        description: "Reptincel est un Pokémon sauvage, difficile à maîtriser. Beaucoup de dresseurs trouvent leur Pokémon changé à leur évolution, et parfois il échappe à leur contrôle. Ses griffes acérées sont des armes redoutables, et quand il se bat, sa flamme prends une couleur bleue-argentée.",
        sound : "../assets/sound/reptincel.mp3",
        type : ["feu"]
        },
    {  
        id: "006",
        name : "Dracofeu",
        url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
        description: "Pokémon noble, Dracaufeu est aussi réputé pour avoir sale caractère. Il crache d'impressionnants jets de flammes, et ses ailes lui permettent de voler à 1400 mètres d'altitude. Cependant, si son dresseur possède assez de détermination pour lui prouver que c'est lui le maître, il peut devenir extrêmement puissant.",
        sound : "../assets/sound/dracofeu.mp3",
        type : ["feu", "vol"]
        },
    {  
        id: "007",
        name : "Carapuce",
        url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
        description: "Les bébés Carapuce sont extrêmement vulnérables à la naissance, car leur carapace est toute molle. C'est pourquoi ils boivent régulièrement une eau riche en minéraux. Elle devient ensuite dure comme de la pierre. S'il est menacé, il se réfugie à l'intérieur et envoie un jet d'eau à son agresseur.",
        sound : "../assets/sound/carapuce.mp3",
        type : ["eau"]
        },
    {  
        id: "008",
        name : "Carabaffe",
        url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png",
        description: "Carabaffe est un nageur émérite. Il contrôle efficacement ses oreilles et sa queue pour s'en servir de gouvernail. C'est un pokémon très apprécié des pompiers, car il crache de puissants jets d'eau tout en pouvant se faufiler un peu partout. Il est pacifique, mais il reste puissant.",
        sound : "../assets/sound/carabaffe.mp3",
        type : ["eau"]
        },
    {  
        id: "009",
        name : "Tortank",
        url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
        description: "Malgré sa puissance et son apparence imposante, Tortank est très apprécié car il a très bon caractère. C'est un pokémon à la nature douce et même un enfant de 7 ans pourrait le contrôler. Mais il est redoutable au combat. Si ses griffes s'ancrent dans le sol, c'est qu'il va tirer un puissant jet d'eau de ses canons.",
        sound : "../assets/sound/tortank.mp3",
        type : ["eau"]
        },
]