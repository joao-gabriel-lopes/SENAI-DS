-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: pokedex
-- ------------------------------------------------------
-- Server version	8.0.35
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */
;

/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */
;

/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */
;

/*!50503 SET NAMES utf8 */
;

/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */
;

/*!40103 SET TIME_ZONE='+00:00' */
;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */
;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */
;

/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */
;

/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */
;

DROP DATABASE IF EXISTS POKEDEX;
CREATE DATABASE POKEDEX;
USE POKEDEX;

--
-- Table structure for table `pokemon`
--

DROP TABLE IF EXISTS `pokemon`;

/*!40101 SET @saved_cs_client     = @@character_set_client */
;

/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `pokemon` (
  `NUMERO` int NOT NULL,
  `NOME` varchar(40) NOT NULL,
  `DESCRICAO` text NOT NULL,
  `TIPO_1` int NOT NULL,
  `TIPO_2` int DEFAULT NULL,
  `ARQ_IMAGEM` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`NUMERO`),
  KEY `TIPO_1` (`TIPO_1`),
  KEY `TIPO_2` (`TIPO_2`),
  CONSTRAINT `pokemon_ibfk_1` FOREIGN KEY (`TIPO_1`) REFERENCES `tipo` (`ID`),
  CONSTRAINT `pokemon_ibfk_2` FOREIGN KEY (`TIPO_2`) REFERENCES `tipo` (`ID`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `pokemon`
--
LOCK TABLES `pokemon` WRITE;

/*!40000 ALTER TABLE `pokemon` DISABLE KEYS */
;

INSERT INTO
  `pokemon`
VALUES
  (
    1,
    'Bulbasaur',
    'A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.',
    1,
    2,
    'pokemon_001.png'
  ),
(
    2,
    'Ivysaur',
    'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
    1,
    2,
    'pokemon_002.png'
  ),
(
    3,
    'Venusaur',
    'The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
    1,
    2,
    'pokemon_003.png'
  ),
(
    4,
    'Charmander',
    'Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.',
    3,
    NULL,
    'pokemon_004.png'
  ),
(
    5,
    'Charmeleon',
    'When it swings its burning tail, it elevates the temperature to unbearably high levels.',
    3,
    NULL,
    'pokemon_005.png'
  ),
(
    6,
    'Charizard',
    'Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.',
    3,
    4,
    'pokemon_006.png'
  ),
(
    7,
    'Squirtle',
    'After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth.',
    5,
    NULL,
    'pokemon_007.png'
  ),
(
    8,
    'Wartortle',
    'Often hides in water to stalk unwary prey. For swimming fast, it moves its ears to maintain balance.',
    5,
    NULL,
    'pokemon_008.png'
  ),
(
    9,
    'Blastoise',
    'A brutal POKéMON with pressurized water jets on its shell. They are used for high speed tackles.',
    5,
    NULL,
    'pokemon_009.png'
  ),
(
    10,
    'Caterpie',
    'Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls.',
    6,
    NULL,
    'pokemon_010.png'
  ),
(
    11,
    'Metapod',
    'This POKéMON is vulnerable to attack while its shell is soft, exposing its weak and tender body.',
    6,
    NULL,
    'pokemon_011.png'
  ),
(
    12,
    'Butterfree',
    'In battle, it flaps its wings at high speed to release highly toxic dust into the air.',
    6,
    4,
    'pokemon_012.png'
  ),
(
    13,
    'Weedle',
    'Often found in forests, eating leaves. It has a sharp venomous stinger on its head.',
    6,
    2,
    'pokemon_013.png'
  ),
(
    14,
    'Kakuna',
    'Almost incapable of moving, this POKéMON can only harden its shell to protect itself from predators.',
    6,
    2,
    'pokemon_014.png'
  ),
(
    15,
    'Beedrill',
    'It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.',
    6,
    2,
    'pokemon_015.png'
  ),
(
    16,
    'Pidgey',
    'A common sight in forests and woods. It flaps its wings at ground level to kick up blinding sand.',
    7,
    4,
    'pokemon_016.png'
  ),
(
    17,
    'Pidgeotto',
    'Very protective of its sprawling territorial area, this POKéMON will fiercely peck at any intruder.',
    7,
    4,
    'pokemon_017.png'
  ),
(
    18,
    'Pidgeot',
    'When hunting, it skims the surface of water at high speed to pick off unwary prey such as MAGIKARP.',
    7,
    4,
    'pokemon_018.png'
  ),
(
    19,
    'Rattata',
    'Bites anything when it attacks. Small and very quick, it is a common sight in many places.',
    7,
    NULL,
    'pokemon_019.png'
  ),
(
    20,
    'Raticate',
    'It uses its whis­ kers to maintain its balance. It apparently slows down if they are cut off.',
    7,
    NULL,
    'pokemon_020.png'
  ),
(
    21,
    'Spearow',
    'It flaps its small wings busily to fly. Using its beak, it searches in grass for prey.',
    7,
    4,
    'pokemon_021.png'
  ),
(
    22,
    'Fearow',
    'With its huge and magnificent wings, it can keep aloft without ever having to land for rest.',
    7,
    4,
    'pokemon_022.png'
  ),
(
    23,
    'Ekans',
    'Moves silently and stealthily. Eats the eggs of birds, such as PIDGEY and SPEAROW, whole.',
    2,
    NULL,
    'pokemon_023.png'
  ),
(
    24,
    'Arbok',
    'It is rumored that the ferocious warning markings on its belly differ from area to area.',
    2,
    NULL,
    'pokemon_024.png'
  ),
(
    25,
    'Pikachu',
    'When several of these POKéMON gather, their electricity could build and cause lightning storms.',
    8,
    NULL,
    'pokemon_025.png'
  ),
(
    26,
    'Raichu',
    'Its long tail serves as a ground to protect itself from its own high-voltage power.',
    8,
    NULL,
    'pokemon_026.png'
  ),
(
    27,
    'Sandshrew',
    'Burrows deep underground in arid locations far from water. It only emerges to hunt for food.',
    9,
    NULL,
    'pokemon_027.png'
  ),
(
    28,
    'Sandslash',
    'Curls up into a spiny ball when threatened. It can roll while curled up to attack or escape.',
    9,
    NULL,
    'pokemon_028.png'
  ),
(
    29,
    'Nidoran-f',
    'Although small, its venomous barbs render this POKéMON dangerous. The female has smaller horns.',
    2,
    NULL,
    'pokemon_029.png'
  ),
(
    30,
    'Nidorina',
    'The female\'s horn develops slowly. Prefers physical attacks such as clawing and biting.',
    2,
    NULL,
    'pokemon_030.png'
  ),
(
    31,
    'Nidoqueen',
    'Its hard scales provide strong protection. It uses its hefty bulk to execute powerful moves.',
    2,
    9,
    'pokemon_031.png'
  ),
(
    32,
    'Nidoran-m',
    'Stiffens its ears to sense danger. The larger its horns, the more powerful its secreted venom.',
    2,
    NULL,
    'pokemon_032.png'
  ),
(
    33,
    'Nidorino',
    'An aggressive POKéMON that is quick to attack. The horn on its head secretes a powerful venom.',
    2,
    NULL,
    'pokemon_033.png'
  ),
(
    34,
    'Nidoking',
    'It uses its powerful tail in battle to smash, constrict, then break the prey\'s bones.',
    2,
    9,
    'pokemon_034.png'
  ),
(
    35,
    'Clefairy',
    'Its magical and cute appeal has many admirers. It is rare and found only in certain areas.',
    10,
    NULL,
    'pokemon_035.png'
  ),
(
    36,
    'Clefable',
    'A timid fairy POKéMON that is rarely seen. It will run and hide the moment it senses people.',
    10,
    NULL,
    'pokemon_036.png'
  ),
(
    37,
    'Vulpix',
    'At the time of birth, it has just one tail. The tail splits from its tip as it grows older.',
    3,
    NULL,
    'pokemon_037.png'
  ),
(
    38,
    'Ninetales',
    'Very smart and very vengeful. Grabbing one of its many tails could result in a 1000-year curse.',
    3,
    NULL,
    'pokemon_038.png'
  ),
(
    39,
    'Jigglypuff',
    'When its huge eyes light up, it sings a mysteriously soothing melody that lulls its enemies to sleep.',
    7,
    10,
    'pokemon_039.png'
  ),
(
    40,
    'Wigglytuff',
    'The body is soft and rubbery. When angered, it will suck in air and inflate itself to an enormous size.',
    7,
    10,
    'pokemon_040.png'
  ),
(
    41,
    'Zubat',
    'Forms colonies in perpetually dark places. Uses ultrasonic waves to identify and approach targets.',
    2,
    4,
    'pokemon_041.png'
  ),
(
    42,
    'Golbat',
    'Once it strikes, it will not stop draining energy from the victim even if it gets too heavy to fly.',
    2,
    4,
    'pokemon_042.png'
  ),
(
    43,
    'Oddish',
    'During the day, it keeps its face buried in the ground. At night, it wanders around sowing its seeds.',
    1,
    2,
    'pokemon_043.png'
  ),
(
    44,
    'Gloom',
    'The fluid that oozes from its mouth isn\'t drool. It is a nectar that is used to attract prey.',
    1,
    2,
    'pokemon_044.png'
  ),
(
    45,
    'Vileplume',
    'It has the world’s largest petals. With every step, the petals shake out heavy clouds of toxic pollen.',
    1,
    2,
    'pokemon_045.png'
  ),
(
    46,
    'Paras',
    'Burrows to suck tree roots. The mushrooms on its back grow by draw­ ing nutrients from the bug host.',
    6,
    1,
    'pokemon_046.png'
  ),
(
    47,
    'Parasect',
    'A host-parasite pair in which the parasite mushroom has taken over the host bug. Prefers damp places.',
    6,
    1,
    'pokemon_047.png'
  ),
(
    48,
    'Venonat',
    'Lives in the shadows of tall trees where it eats insects. It is attracted by light at night.',
    6,
    2,
    'pokemon_048.png'
  ),
(
    49,
    'Venomoth',
    'The dustlike scales covering its wings are color-coded to indicate the kinds of poison it has.',
    6,
    2,
    'pokemon_049.png'
  ),
(
    50,
    'Diglett',
    'Lives about one yard underground where it feeds on plant roots. It sometimes appears above ground.',
    9,
    NULL,
    'pokemon_050.png'
  ),
(
    51,
    'Dugtrio',
    'A team of DIGLETT triplets. It triggers huge earthquakes by burrowing 60 miles underground.',
    9,
    NULL,
    'pokemon_051.png'
  ),
(
    52,
    'Meowth',
    'It washes its face regularly to keep the coin on its forehead spotless. It doesn’t get along with Galarian Meowth.',
    7,
    NULL,
    'pokemon_052.png'
  ),
(
    53,
    'Persian',
    'Although its fur has many admirers, it is tough to raise as a pet because of its fickle meanness.',
    7,
    NULL,
    'pokemon_053.png'
  ),
(
    54,
    'Psyduck',
    'While lulling its enemies with its vacant look, this wily POKéMON will use psychokinetic powers.',
    5,
    NULL,
    'pokemon_054.png'
  ),
(
    55,
    'Golduck',
    'Often seen swim­ ming elegantly by lake shores. It is often mistaken for the Japanese monster, Kappa.',
    5,
    NULL,
    'pokemon_055.png'
  ),
(
    56,
    'Mankey',
    'Extremely quick to anger. It could be docile one moment then thrashing away the next instant.',
    11,
    NULL,
    'pokemon_056.png'
  ),
(
    57,
    'Primeape',
    'Always furious and tenacious to boot. It will not abandon chasing its quarry until it is caught.',
    11,
    NULL,
    'pokemon_057.png'
  ),
(
    58,
    'Growlithe',
    'Very protective of its territory. It will bark and bite to repel intruders from its space.',
    3,
    NULL,
    'pokemon_058.png'
  ),
(
    59,
    'Arcanine',
    'A POKéMON that has been admired since the past for its beauty. It runs agilely as if on wings.',
    3,
    NULL,
    'pokemon_059.png'
  ),
(
    60,
    'Poliwag',
    'Its newly grown legs prevent it from running. It appears to prefer swimming than trying to stand.',
    5,
    NULL,
    'pokemon_060.png'
  ),
(
    61,
    'Poliwhirl',
    'Capable of living in or out of water. When out of water, it sweats to keep its body slimy.',
    5,
    NULL,
    'pokemon_061.png'
  ),
(
    62,
    'Poliwrath',
    'An adept swimmer at both the front crawl and breast stroke. Easily overtakes the best human swimmers.',
    5,
    11,
    'pokemon_062.png'
  ),
(
    63,
    'Abra',
    'Using its ability to read minds, it will identify impending danger and TELEPORT to safety.',
    12,
    NULL,
    'pokemon_063.png'
  ),
(
    64,
    'Kadabra',
    'It emits special alpha waves from its body that induce headaches just by being close by.',
    12,
    NULL,
    'pokemon_064.png'
  ),
(
    65,
    'Alakazam',
    'Its brain can out­ perform a super­ computer. Its intelligence quotient is said to be 5,000.',
    12,
    NULL,
    'pokemon_065.png'
  ),
(
    66,
    'Machop',
    'Loves to build its muscles. It trains in all styles of martial arts to become even stronger.',
    11,
    NULL,
    'pokemon_066.png'
  ),
(
    67,
    'Machoke',
    'Its muscular body is so powerful, it must wear a power save belt to be able to regulate its motions.',
    11,
    NULL,
    'pokemon_067.png'
  ),
(
    68,
    'Machamp',
    'Using its heavy muscles, it throws powerful punches that can send the victim clear over the horizon.',
    11,
    NULL,
    'pokemon_068.png'
  ),
(
    69,
    'Bellsprout',
    'A carnivorous POKéMON that traps and eats bugs. It uses its root feet to soak up needed moisture.',
    1,
    2,
    'pokemon_069.png'
  ),
(
    70,
    'Weepinbell',
    'It spits out POISONPOWDER to immobilize the enemy and then finishes it with a spray of ACID.',
    1,
    2,
    'pokemon_070.png'
  ),
(
    71,
    'Victreebel',
    'Said to live in huge colonies deep in jungles, although no one has ever returned from there.',
    1,
    2,
    'pokemon_071.png'
  ),
(
    72,
    'Tentacool',
    'Drifts in shallow seas. Anglers who hook them by accident are often punished by its stinging acid.',
    5,
    2,
    'pokemon_072.png'
  ),
(
    73,
    'Tentacruel',
    'The tentacles are normally kept short. On hunts, they are extended to ensnare and immobilize prey.',
    5,
    2,
    'pokemon_073.png'
  ),
(
    74,
    'Geodude',
    'Found in fields and mountains. Mistaking them for boulders, people often step or trip on them.',
    13,
    9,
    'pokemon_074.png'
  ),
(
    75,
    'Graveler',
    'Rolls down slopes to move. It rolls over any obstacle without slowing or changing its direction.',
    13,
    9,
    'pokemon_075.png'
  ),
(
    76,
    'Golem',
    'Its boulder-like body is extremely hard. It can easily withstand dynamite blasts without damage.',
    13,
    9,
    'pokemon_076.png'
  ),
(
    77,
    'Ponyta',
    'Its hooves are 10 times harder than diamonds. It can trample anything completely flat in little time.',
    3,
    NULL,
    'pokemon_077.png'
  ),
(
    78,
    'Rapidash',
    'Very competitive, this POKéMON will chase anything that moves fast in the hopes of racing it.',
    3,
    NULL,
    'pokemon_078.png'
  ),
(
    79,
    'Slowpoke',
    'Incredibly slow and dopey. It takes 5 seconds for it to feel pain when under attack.',
    5,
    12,
    'pokemon_079.png'
  ),
(
    80,
    'Slowbro',
    'The SHELLDER that is latched onto SLOWPOKE\'s tail is said to feed on the host\'s left over scraps.',
    5,
    12,
    'pokemon_080.png'
  ),
(
    81,
    'Magnemite',
    'Uses anti-gravity to stay suspended. Appears without warning and uses THUNDER WAVE and similar moves.',
    8,
    14,
    'pokemon_081.png'
  ),
(
    82,
    'Magneton',
    'Formed by several MAGNEMITEs linked together. They frequently appear when sunspots flare up.',
    8,
    14,
    'pokemon_082.png'
  ),
(
    83,
    'Farfetchd',
    'The sprig of green onions it holds is its weapon. It is used much like a metal sword.',
    7,
    4,
    'pokemon_083.png'
  ),
(
    84,
    'Doduo',
    'A bird that makes up for its poor flying with its fast foot speed. Leaves giant footprints.',
    7,
    4,
    'pokemon_084.png'
  ),
(
    85,
    'Dodrio',
    'Uses its three brains to execute complex plans. While two heads sleep, one head stays awake.',
    7,
    4,
    'pokemon_085.png'
  ),
(
    86,
    'Seel',
    'The protruding horn on its head is very hard. It is used for bashing through thick ice.',
    5,
    NULL,
    'pokemon_086.png'
  ),
(
    87,
    'Dewgong',
    'Stores thermal energy in its body. Swims at a steady 8 knots even in intensely cold waters.',
    5,
    15,
    'pokemon_087.png'
  ),
(
    88,
    'Grimer',
    'Appears in filthy areas. Thrives by sucking up polluted sludge that is pumped out of factories.',
    2,
    NULL,
    'pokemon_088.png'
  ),
(
    89,
    'Muk',
    'Thickly covered with a filthy, vile sludge. It is so toxic, even its footprints contain poison.',
    2,
    NULL,
    'pokemon_089.png'
  ),
(
    90,
    'Shellder',
    'Its hard shell repels any kind of attack. It is vulnerable only when its shell is open.',
    5,
    NULL,
    'pokemon_090.png'
  ),
(
    91,
    'Cloyster',
    'When attacked, it launches its horns in quick volleys. Its innards have never been seen.',
    5,
    15,
    'pokemon_091.png'
  ),
(
    92,
    'Gastly',
    'Almost invisible, this gaseous POKéMON cloaks the target and puts it to sleep without notice.',
    16,
    2,
    'pokemon_092.png'
  ),
(
    93,
    'Haunter',
    'Because of its ability to slip through block walls, it is said to be from an­ other dimension.',
    16,
    2,
    'pokemon_093.png'
  ),
(
    94,
    'Gengar',
    'Under a full moon, this POKéMON likes to mimic the shadows of people and laugh at their fright.',
    16,
    2,
    'pokemon_094.png'
  ),
(
    95,
    'Onix',
    'As it grows, the stone portions of its body harden to become similar to a diamond, but colored black.',
    13,
    9,
    'pokemon_095.png'
  ),
(
    96,
    'Drowzee',
    'Puts enemies to sleep then eats their dreams. Occasionally gets sick from eating bad dreams.',
    12,
    NULL,
    'pokemon_096.png'
  ),
(
    97,
    'Hypno',
    'When it locks eyes with an enemy, it will use a mix of PSI moves such as HYPNOSIS and CONFUSION.',
    12,
    NULL,
    'pokemon_097.png'
  ),
(
    98,
    'Krabby',
    'Its pincers are not only powerful weapons, they are used for balance when walking sideways.',
    5,
    NULL,
    'pokemon_098.png'
  ),
(
    99,
    'Kingler',
    'The large pincer has 10000 hp of crushing power. However, its huge size makes it unwieldy to use.',
    5,
    NULL,
    'pokemon_099.png'
  ),
(
    100,
    'Voltorb',
    'Usually found in power plants. Easily mistaken for a POKé BALL, they have zapped many people.',
    8,
    NULL,
    'pokemon_100.png'
  ),
(
    101,
    'Electrode',
    'It stores electric energy under very high pressure. It often explodes with little or no provocation.',
    8,
    NULL,
    'pokemon_101.png'
  ),
(
    102,
    'Exeggcute',
    'Often mistaken for eggs. When disturbed, they quickly gather and attack in swarms.',
    1,
    12,
    'pokemon_102.png'
  ),
(
    103,
    'Exeggutor',
    'Legend has it that on rare occasions, one of its heads will drop off and continue on as an EXEGGCUTE.',
    1,
    12,
    'pokemon_103.png'
  ),
(
    104,
    'Cubone',
    'Because it never removes its skull helmet, no one has ever seen this POKéMON\'s real face.',
    9,
    NULL,
    'pokemon_104.png'
  ),
(
    105,
    'Marowak',
    'The bone it holds is its key weapon. It throws the bone skillfully like a boomerang to KO targets.',
    9,
    NULL,
    'pokemon_105.png'
  ),
(
    106,
    'Hitmonlee',
    'When in a hurry, its legs lengthen progressively. It runs smoothly with extra long, loping strides.',
    11,
    NULL,
    'pokemon_106.png'
  ),
(
    107,
    'Hitmonchan',
    'While apparently doing nothing, it fires punches in lightning fast volleys that are impossible to see.',
    11,
    NULL,
    'pokemon_107.png'
  ),
(
    108,
    'Lickitung',
    'Its tongue can be extended like a chameleon\'s. It leaves a tingling sensation when it licks enemies.',
    7,
    NULL,
    'pokemon_108.png'
  ),
(
    109,
    'Koffing',
    'Because it stores several kinds of toxic gases in its body, it is prone to exploding without warning.',
    2,
    NULL,
    'pokemon_109.png'
  ),
(
    110,
    'Weezing',
    'Where two kinds of poison gases meet, 2 KOFFINGs can fuse into a WEEZING over many years.',
    2,
    NULL,
    'pokemon_110.png'
  ),
(
    111,
    'Rhyhorn',
    'A POKéMON with a one-track mind. Once it charges,  it won\'t stop running until it falls asleep.',
    9,
    13,
    'pokemon_111.png'
  ),
(
    112,
    'Rhydon',
    'Protected by an armor-like hide, it is capable of living in molten lava of 3,600 degrees.',
    9,
    13,
    'pokemon_112.png'
  ),
(
    113,
    'Chansey',
    'A rare and elusive POKéMON that is said to bring happiness to those who manage to get it.',
    7,
    NULL,
    'pokemon_113.png'
  ),
(
    114,
    'Tangela',
    'The whole body is swathed with wide vines that are similar to sea­ weed. Its vines shake as it walks.',
    1,
    NULL,
    'pokemon_114.png'
  ),
(
    115,
    'Kangaskhan',
    'The infant rarely ventures out of its mother\'s protective pouch until it is 3 years old.',
    7,
    NULL,
    'pokemon_115.png'
  ),
(
    116,
    'Horsea',
    'Known to shoot down flying bugs with precision blasts of ink from the surface of the water.',
    5,
    NULL,
    'pokemon_116.png'
  ),
(
    117,
    'Seadra',
    'Capable of swim­ ming backwards by rapidly flapping its wing-like pectoral fins and stout tail.',
    5,
    NULL,
    'pokemon_117.png'
  ),
(
    118,
    'Goldeen',
    'Its tail fin billows like an elegant ballroom dress, giving it the nickname of the Water Queen.',
    5,
    NULL,
    'pokemon_118.png'
  ),
(
    119,
    'Seaking',
    'In the autumn spawning season, they can be seen swimming powerfully up rivers and creeks.',
    5,
    NULL,
    'pokemon_119.png'
  ),
(
    120,
    'Staryu',
    'If its body is torn, it can grow back if the red core remains. The core flashes at midnight.',
    5,
    NULL,
    'pokemon_120.png'
  ),
(
    121,
    'Starmie',
    'Its central core glows with the seven colors of the rainbow. Some people value the core as a gem.',
    5,
    12,
    'pokemon_121.png'
  ),
(
    122,
    'Mr-mime',
    'If interrupted while it is miming, it will slap around the offender with its broad hands.',
    12,
    10,
    'pokemon_122.png'
  ),
(
    123,
    'Scyther',
    'With ninja-like agility and speed, it can create the illusion that there is more than one.',
    6,
    4,
    'pokemon_123.png'
  ),
(
    124,
    'Jynx',
    'It seductively wiggles its hips as it walks. It can cause people to dance in unison with it.',
    15,
    12,
    'pokemon_124.png'
  ),
(
    125,
    'Electabuzz',
    'Normally found near power plants, they can wander away and cause major blackouts in cities.',
    8,
    NULL,
    'pokemon_125.png'
  ),
(
    126,
    'Magmar',
    'Its body always burns with an orange glow that enables it to hide perfectly among flames.',
    3,
    NULL,
    'pokemon_126.png'
  ),
(
    127,
    'Pinsir',
    'If it fails to crush the victim in its pincers, it will swing it around and toss it hard.',
    6,
    NULL,
    'pokemon_127.png'
  ),
(
    128,
    'Tauros',
    'When it targets an enemy, it charges furiously while whipping its body with its long tails.',
    7,
    NULL,
    'pokemon_128.png'
  ),
(
    129,
    'Magikarp',
    'In the distant past, it was somewhat stronger than the horribly weak descendants that exist today.',
    5,
    NULL,
    'pokemon_129.png'
  ),
(
    130,
    'Gyarados',
    'Once it begins to rampage, a GYARADOS will burn everything down, even in a harsh storm.',
    5,
    4,
    'pokemon_130.png'
  ),
(
    131,
    'Lapras',
    'A POKéMON that has been over­ hunted almost to extinction. It can ferry people across the water.',
    5,
    15,
    'pokemon_131.png'
  ),
(
    132,
    'Ditto',
    'Capable of copying an enemy\'s genetic code to instantly transform itself into a duplicate of the enemy.',
    7,
    NULL,
    'pokemon_132.png'
  ),
(
    133,
    'Eevee',
    'Its genetic code is irregular. It may mutate if it is exposed to radiation from element STONEs.',
    7,
    NULL,
    'pokemon_133.png'
  ),
(
    134,
    'Vaporeon',
    'Lives close to water. Its long tail is ridged with a fin which is often mistaken for a mermaid\'s.',
    5,
    NULL,
    'pokemon_134.png'
  ),
(
    135,
    'Jolteon',
    'It accumulates negative ions in the atmosphere to blast out 10000- volt lightning bolts.',
    8,
    NULL,
    'pokemon_135.png'
  ),
(
    136,
    'Flareon',
    'When storing thermal energy in its body, its temperature could soar to over 1600 degrees.',
    3,
    NULL,
    'pokemon_136.png'
  ),
(
    137,
    'Porygon',
    'A POKéMON that consists entirely of programming code. Capable of moving freely in cyberspace.',
    7,
    NULL,
    'pokemon_137.png'
  ),
(
    138,
    'Omanyte',
    'Although long extinct, in rare cases, it can be genetically resurrected from fossils.',
    13,
    5,
    'pokemon_138.png'
  ),
(
    139,
    'Omastar',
    'A prehistoric POKéMON that died out when its heavy shell made it impossible to catch prey.',
    13,
    5,
    'pokemon_139.png'
  ),
(
    140,
    'Kabuto',
    'A POKéMON that was resurrected from a fossil found in what was once the ocean floor eons ago.',
    13,
    5,
    'pokemon_140.png'
  ),
(
    141,
    'Kabutops',
    'Its sleek shape is perfect for swim­ ming. It slashes prey with its claws and drains the body fluids.',
    13,
    5,
    'pokemon_141.png'
  ),
(
    142,
    'Aerodactyl',
    'A Pokémon that roamed the skies in the dinosaur era. Its teeth are like saw blades.',
    13,
    4,
    'pokemon_142.png'
  ),
(
    143,
    'Snorlax',
    'Very lazy. Just eats and sleeps. As its rotund bulk builds, it becomes steadily more slothful.',
    7,
    NULL,
    'pokemon_143.png'
  ),
(
    144,
    'Articuno',
    'A legendary bird POKéMON that is said to appear to doomed people who are lost in icy mountains.',
    15,
    4,
    'pokemon_144.png'
  ),
(
    145,
    'Zapdos',
    'A legendary bird POKéMON that is said to appear from clouds while dropping enormous lightning bolts.',
    8,
    4,
    'pokemon_145.png'
  ),
(
    146,
    'Moltres',
    'Known as the legendary bird of fire. Every flap of its wings creates a dazzling flash of flames.',
    3,
    4,
    'pokemon_146.png'
  ),
(
    147,
    'Dratini',
    'Long considered a mythical POKéMON until recently when a small colony was found living underwater.',
    17,
    NULL,
    'pokemon_147.png'
  ),
(
    148,
    'Dragonair',
    'A mystical POKéMON that exudes a gentle aura. Has the ability to change climate conditions.',
    17,
    NULL,
    'pokemon_148.png'
  ),
(
    149,
    'Dragonite',
    'An extremely rarely seen marine POKéMON. Its intelligence is said to match that of humans.',
    17,
    4,
    'pokemon_149.png'
  ),
(
    150,
    'Mewtwo',
    'It was created by a scientist after years of horrific gene splicing and DNA engineering experiments.',
    12,
    NULL,
    'pokemon_150.png'
  ),
(
    151,
    'Mew',
    'So rare that it is still said to be a mirage by many experts. Only a few people have seen it worldwide.',
    12,
    NULL,
    'pokemon_151.png'
  );

/*!40000 ALTER TABLE `pokemon` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `tipo`
--
DROP TABLE IF EXISTS `tipo`;

/*!40101 SET @saved_cs_client     = @@character_set_client */
;

/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `tipo` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `NOME` varchar(100) DEFAULT NULL,
  `ARQ_IMAGEM` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE = InnoDB AUTO_INCREMENT = 18 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `tipo`
--
LOCK TABLES `tipo` WRITE;

/*!40000 ALTER TABLE `tipo` DISABLE KEYS */
;

INSERT INTO
  `tipo`
VALUES
  (1, 'Grama', 'grass.ico'),
(2, 'Veneno', 'poison.ico'),
(3, 'Fogo', 'fire.ico'),
(4, 'Voador', 'flying.ico'),
(5, 'Água', 'water.ico'),
(6, 'Inseto', 'bug.ico'),
(7, 'Normal', 'normal.ico'),
(8, 'Elétrico', 'electric.ico'),
(9, 'Terra', 'ground.ico'),
(10, 'Fada', 'fairy.ico'),
(11, 'Lutador', 'fighting.ico'),
(12, 'Psíquico', 'psychic.ico'),
(13, 'Pedra', 'rock.ico'),
(14, 'Aço', 'steel.ico'),
(15, 'Gelo', 'ice.ico'),
(16, 'Fantasma', 'ghost.ico'),
(17, 'Dragão', 'dragon.ico');

/*!40000 ALTER TABLE `tipo` ENABLE KEYS */
;

UNLOCK TABLES;

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */
;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */
;

/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */
;

/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */
;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */
;

/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */
;

/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */
;

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */
;

-- Dump completed on 2025-10-31 16:28:36