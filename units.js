export const units = [
  //grail duo cheerleader binary healer refresher rearmed resplendent altHell story
//{id: '', name: '', epithet: '', baseOrNot: '', special: '', games: [''], gameplayRole: '', weaponType: '', weaponColor: '', range: '', moveType: '', dateAdded: '', gender: '', image: 'pictures/.png'},
//ADD DAMAGE TYPE BY JUST GROUPING ALL THE PHYSICAL AND MAGICAL ITEMS

//UNIT BATCH TWO: All the A's (that weren't in the test batch)
{id: 'abelBase', name: 'Abel', epithet: 'The Panther', baseOrNot: 'base', special: 'none', games: ['Mystery of the Emblem'], gameplayRole: 'pc', weaponType: 'lance', weaponColor: 'blue', range: '1', moveType: 'cavalry', dateAdded: '170202', gender: 'm', image: 'pictures/abelBase.png'},
{id: 'aelfricBase', name: 'Aelfric', epithet: 'Custodian Monk', baseOrNot: 'base', special: 'none', games: ['Three Houses'], gameplayRole: 'npc', weaponType: 'dark', weaponColor: 'red', range: '2', moveType: 'infantry', dateAdded: '210918', gender: 'm', image: 'pictures/aelfricBase.png', grails: 'ghb'},
{id: 'alcrystBaseRearmed', name: 'Alcryst', epithet: 'Tender Archer', baseOrNot: 'base', special: 'rearmed', games: ['Engage'], gameplayRole: 'pc', weaponType: 'bow', weaponColor: 'colorless', range: '2', moveType: 'infantry', dateAdded: '230718', gender:'m', image: 'pictures/alcrystBaseRearmed.png'},
{id: 'alearFLegendary', name: 'Alear', epithet: 'Awoken Divinity', baseOrNot: 'legendary', special: 'none', games: ['Engage'], gameplayRole: 'protagonist', weaponType: 'dragon', weaponColor: 'green', range: '1', moveType: 'infantry', dateAdded: '230831', gender: 'f', image: 'pictures/alearFLegendary.png', binary: 'f'},
{id: 'alearFBase', name: 'Alear', epithet: 'Dragon Child', baseOrNot: 'base', special: 'none', games: ['Engage'], gameplayRole: 'protagonist', weaponType: 'sword', weaponColor: 'red', damageType: 'phsyical', range: '1', moveType: 'infantry', dateAdded: '230117', gender: 'f', image: 'pictures/alearFBase.png', binary: 'f'},
{id: 'alearMBase', name: 'Alear', epithet: 'Dragon Youth', baseOrNot: 'base', special: 'none', games: ['Engage'], gameplayRole: 'protagonist', weaponType: 'sword', weaponColor: 'red', damageType: 'phsyical', range: '1', moveType: 'infantry', dateAdded: '230718', gender: 'm', image: 'pictures/alearMBase.png', binary: 'm'}, 
{id: 'alfonseSpecialNewYear', name: 'Alfonse', epithet: 'Askran Duo', baseOrNot: 'special', special: 'new year', games: ['Heroes'], gameplayRole: 'protagonist', weaponType: 'light', weaponColor: 'blue', range: '1', moveType: 'infantry', dateAdded: '200101', gender: 'm', image: 'pictures/alfonseSpecialNewYear.png', duo: 'duo', cheerleader: 'Sharena'},
{id: 'alfonseBase', name: 'Alfonse', epithet: 'Prince of Askr', baseOrNot: 'base', special: 'none', games: ['Heroes'], gameplayRole: 'protagonist', weaponType: 'sword', weaponColor: 'red', damageType: 'phsyical', range: '1', moveType: 'infantry', dateAdded: '170202', gender: 'm', image: 'pictures/alfonseBase.png', story: true},
{id: 'alfonseSpecialSpring', name: 'Alfonse', epithet: 'Spring Prince', baseOrNot: 'special', special: 'spring', games: ['Heroes'], gameplayRole: 'protagonist', weaponType: 'axe', weaponColor: 'green', range: '1', moveType: 'cavalry', dateAdded: '180322', gender: 'm', image: 'pictures/alfonseSpecialSpring.png'},
{id: 'alfonseSpecialDevoted', name: 'Alfonse', epithet: 'Uplifting Love', baseOrNot: 'special', special: 'devoted', games: ['Heroes'], gameplayRole: 'protagonist', weaponType: 'anima', weaponColor: 'green', range: '2', moveType: 'armored', dateAdded: '210205', gender: 'm', image: 'pictures/alfonseSpecialDevoted.png'},
{id: 'alfredBaseRearmed', name: 'Alfred', epithet: 'Floral Prince', baseOrNot: 'base', special: 'rearmed', games: ['Engage'], gameplayRole: 'pc', weaponType: 'lance', weaponColor: 'blue', range: '1', moveType: 'cavalry', dateAdded: '230117', gender: 'm', image: 'pictures/alfredBaseRearmed.png'},
{id: 'almBase', name: 'Alm', epithet: 'Hero of Prophecy', baseOrNot: 'base', special: 'none', games: ['Echoes'], gameplayRole: 'protagonist', weaponType: 'sword', weaponColor: 'red', range: '1', moveType: 'infantry', dateAdded: '170414', gender: 'm', image: 'pictures/almBase.png'},
{id: 'almBrave', name: 'Alm', epithet: 'Imperial Ascent', baseOrNot: 'brave', special: 'none', games: ['Echoes'], gameplayRole: 'protagonist', weaponType: 'sword', weaponColor: 'red', damageType: 'phsyical', range: '1', moveType: 'infantry', dateAdded: '190816', gender: 'm', image: 'pictures/almBrave.png'},
{id: 'almSpecialDevoted', name: 'Alm', epithet: 'Lovebird Duo', baseOrNot: 'special', special: 'devoted', games: ['Echoes'], gameplayRole: 'protagonist', weaponType: 'axe', weaponColor: 'green', range: '1', moveType: 'infantry', dateAdded: '200207', gender: 'm', image: 'pictures/almSpecialDevoted.png', duo: 'duo', cheerleader: 'Celica'},
{id: 'almLegendary', name: 'Alm', epithet: 'Saint-King', baseOrNot: 'legendary', special: 'none', games: ['Echoes'], gameplayRole: 'protagonsit', weaponType: 'bow', weaponColor: 'colorless', damageType: 'phsyical', range: '2', moveType: 'infantry', dateAdded: '190427', gender: 'm', image: 'pictures/almLegendary.png'},
{id: 'altenaBase', name: 'Altena', epithet: 'Luminous Rider', baseOrNot: 'base', special: 'none', games: ['Genealogy of the Holy War'], gameplayRole: 'pc', weaponType: 'lance', weaponColor: 'blue', damageType: 'phsyical', range: '1', moveType: 'flying', dateAdded: '200109', gender: 'f', image: 'pictures/altenaBase.png'},
{id: 'altinaSpecialWinter', name: 'Altina', epithet: 'Cross-Time Duo', baseOrNot: 'special', special: 'winter', games: ['Path of Radiance', 'Radiant Dawn'], gameplayRole: 'lore', weaponType: 'sword', weaponColor: 'red', damageType: 'phsyical', range: '1', moveType: 'infantry', dateAdded: '201217', gender: 'f', image: 'pictures/altinaSpecialWinter.png', duo: 'harmonized', cheerleader: Sanaki},
{id: 'altinaBaseMythic', name: 'Altina', epithet: "Dawn's Trueblade", baseOrNot: 'base', special: 'mythic', games: ['Radiant Dawn'], gameplayRole: 'lore', weaponType: 'sword', weaponColor: 'red', damageType: 'phsyical', range: '1', moveType: 'flying', dateAdded: '191128', gender: 'f', image: 'pictures/altinaBaseMythic.png'},
{id: 'ameliaBase', name: 'Amelia', epithet: 'Rose of the War', baseOrNot: 'base', special: 'none', games: ['Sacred Stones'], gameplayRole: 'pc', weaponType: 'axe', weaponColor: 'green', range: '1', moveType: 'armored', dateAdded: '170815', gender: 'f', image: 'pictures/ameliaBase.png', resplendent: 'jotunheimr'},
{id: 'anankos', name: 'Anankos', epithet: 'Seething Silence', baseOrNot: 'fallen', special: 'none', games: ['Fates'], gameplayRole: 'npc', weaponType: 'dragon', weaponColor: 'blue', damageType: 'phsyical', range: '1', moveType: 'armored', dateAdded: '230509', gender: 'm', image: 'pictures/anankosFallen.png'},
{id: 'annaHeroesBase', name: 'Anna', epithet: 'Commander', baseOrNot: 'base', special: 'none', games: ['Heroes'], gameplayRole: 'pc', weaponType: 'axe', weaponColor: 'green', damageType: 'phsyical', range: '1', moveType: 'infantry', dateAdded: '070202', gender: 'f', image: 'pictures/annaHeroesBase.png', story: true},
{id: 'annaFE13SpecialWedding', name: 'Anna', epithet: 'Secret Charmer', baseOrNot: 'special', special: 'wedding', games: ['Awakening'], gameplayRole: 'pc', weaponType: 'bow', weaponColor: 'green', damageType: 'phsyical', range: '2', moveType: 'cavalry', dateAdded: '230519', gender: 'f', image: 'pictures/annaFE13SpecialWedding.png'},
{id: 'annaFE13Base', name: 'Anna', epithet: 'Secret Seller', baseOrNot: 'base', special: 'none', games: ['Awakening'], gameplayRole: 'pc', weaponType: 'lance', weaponColor: 'blue', range: '1', moveType: 'infantry', dateAdded: '200605', gender: 'f', image: 'pictures/annaFE13Base.png'},
{id: 'annaFE17SpecialFall', name: 'Anna', epithet: 'Twice the Anna', baseOrNot: 'special', special: 'fall', games: ['Engage', 'Awakening'], gameplayRole: 'pc', weaponType: 'axe', weaponColor: 'green', range: '1', moveType: 'flying', dateAdded: 'pending', gender: 'f', image: 'pictures/annaFE17SpecialFall.png', duo: 'harmonized', cheerleader: 'Anna'},
{id: 'annaHeroesSpecialNewYear', name: 'Anna', epithet: 'Wealth-Wisher', baseOrNot: 'special', special: 'new year', games: ['Heroes'], gameplayRole: 'pc', weaponType: 'bow', weaponColor: 'red', damageType: 'phsyical', range: '2', moveType: 'infantry', dateAdded: '200101', gender: 'f', image: 'pictures/annaHeroesSpecialNewYear.png'},
{id: 'annadBase', name: 'Annand', epithet: 'Knight-Defender', baseOrNot: 'base', special: 'none', games: ['Genealogy of the Holy War'], gameplayRole: 'pc', weaponType: 'sword', weaponColor: 'red', range: '1', moveType: 'flying', dateAdded: '210216', gender: 'f', image: 'pictures/annandBase.png'},
{id: 'annetteSpecialWinter', name: 'Annette', epithet: 'Festive Helper', baseOrNot: 'special', special: 'winter', games: ['Three Hopes'], gameplayRole: 'pc', weaponType: 'bow', weaponColor: 'colorless', range: '2', moveType: 'amrored', dateAdded: '221216', gender: 'f', image: 'pictures/annetteSpecialWinter.png'},
{id: 'annetteBase', name: 'Annette', epithet: 'Overachiever', baseOrNot: 'base', special: 'none', games: ['Three Houses'], gameplayRole: 'pc', weaponType: 'axe', weaponColor: 'green', damageType: 'phsyical', range: '1', moveType: 'infantry', dateAdded: '200306', gender: 'f', image: 'pictures/annetteBase.png'},
{id: 'ardenBase', name: 'Arden', epithet: 'Strong and Tough', baseOrNot: 'base', special: 'none', games: ['Genealogy of the Holy War'], gameplayRole: 'pc', weaponType: 'sword', weaponColor: 'red', range: 'armored', moveType: 'armored', dateAdded: '171023', gender: 'm', image: 'pictures/ardenBase.png', grails: 'tt'},
{id: 'aresBase', name: 'Ares', epithet: 'Black Knight', baseOrNot: 'base', special: 'none', games: ['Genealogy of the Holy War'], gameplayRole: 'pc', weaponType: 'sword', weaponColor: 'red', damageType: 'phsyical', range: '1', moveType: 'cavalry', dateAdded: '180510', gender: 'm', image: 'pictures/aresBase.png'},
{id: 'areteBase', name: 'Arrette', epithet: "Requiem's Beauty", baseOrNot: 'base', special: 'none', games: ['Fates'], gameplayRole: 'npc', weaponType: 'dark', weaponColor: 'red', range: '2', moveType: 'cavalry', dateAdded: '210720', gender: 'f', image: 'pictures/areteBase.png', grails: 'ghb'},
{id: 'arionBase', name: 'Arion', epithet: "Gungnir's Heir", baseOrNot: 'base', special: 'none', games: ['Genealogy of the Holy War'], gameplayRole: 'npc', weaponType: 'lance', weaponColor: 'blue', range: '1', moveType: 'flying', dateAdded: '230916', gender: 'm', image: 'pictures/arionBase.png', grails: 'ghb'},
{id: 'arthurFE04Base', name: 'Arthur', epithet: 'Furious Mage', baseOrNot: 'base', special: 'none', games: ['Genealogy of the Holy War'], gameplayRole: 'pc', weaponType: 'anima', weaponColor: 'green', range: '2', moveType: 'infantry', dateAdded: '220418', gender: 'm', image: 'pictures/arthurFE04Base.png'},
{id: 'arthurFE14Base', name: 'Arthur', epithet: 'Hapless Hero', baseOrNot: 'base', special: 'none', games: ['Fates'], gameplayRole: 'pc', weaponType: 'axe', weaponColor: 'green', range: '1', moveType: 'infantry', dateAdded: '170202', gender: 'm', image: 'pictures/arthurFE14Base.png'},
{id: 'arturSpecialWinter', name: 'Artur', epithet: 'Silver Saint', baseOrNot: 'special', special: 'winter', games: ['fe8'], gameplayRole: 'pc', weaponType: 'anima', weaponColor: 'green', range: '2', moveType: 'armored', dateAdded: '21', gender:'m', image: 'pictures/arturSpecialWinter.png', altHell: true},
{id: 'arvalBaseMythic', name: 'Arval', epithet: 'Cycle Keeper', baseOrNot: 'base', special: 'mythic', games: ['Three Hopes'], gameplayRole: 'npc', weaponType: 'tome', weaponColor: 'colorless', range: '2', moveType: 'infantry', dateAdded: '221031', gender: '', image: 'pictures/arvalBaseMythic.png'},
{id: 'arvisBase', name: 'Arvis', epithet: 'Emperor of Flame', baseOrNot: 'base', special: 'none', games: ['Genealogy of the Holy War'], gameplayRole: 'npc', weaponType: 'dark', weaponColor: 'red', range: '2', moveType: 'infantry', dateAdded: '171018', gender:'m', image: 'pictures/arvisBase.png', grails: 'ghb'},
{id: 'asbelBase', name: 'Asbel', epithet: 'Windswept Youth', baseOrNot: 'base', special: 'none', games: ['Thracia 776'], gameplayRole: 'pc', weaponType: 'anima', weaponColor: 'green', range: '2', moveType: 'infantry', dateAdded: '210108', gender: 'm', image: 'pictures/asbelBase.png'},
{id: 'ashSpecialNewYear', name: 'Ash', epithet: 'Earnest Greetings', baseOrNot: 'special', special: 'new year', games: ['Heroes'], gameplayRole: 'pc', weaponType: 'beast', weaponColor: 'blue', range: '1', moveType: 'infantry', dateAdded: '230101', gender: 'f', image: 'pictures/ashSpecialNewYear.png'},
{id: 'ashBaseMythic', name: 'Ash', epithet: 'Retainer to Askr', baseOrNot: 'base', special: 'mythic', games: ['Heroes'], gameplayRole: 'pc', weaponType: 'beast', weaponColor: 'colorless', damageType: 'phsyical', range: '1', moveType: 'infantry', dateAdded: '211207', gender: 'f', image: 'pictures/ashBaseMythic.png', story: true},
{id: 'asheSpecialSpring', name: 'Ashe', epithet: 'Budding Chivalry', baseOrNot: 'special', special: 'spring', games: ['Three Houses'], gameplayRole: 'pc', weaponType: 'dagger', weaponColor: 'red', range: '', moveType: '', dateAdded: '', gender:'', image: 'pictures/.png'},
{id: '', name: 'Ashe', epithet: 'Fabled Sea Knight', baseOrNot: '', special: '', games: [''], gameplayRole: '', weaponType: '', weaponColor: '', range: '', moveType: '', dateAdded: '', gender:'', image: 'pictures/.png'},
{id: '', name: 'Ashera', epithet: '', baseOrNot: '', special: '', games: [''], gameplayRole: '', weaponType: '', weaponColor: '', range: '', moveType: '', dateAdded: '', gender:'', image: 'pictures/.png'},
{id: '', name: 'Ashnard', epithet: '', baseOrNot: '', special: '', games: [''], gameplayRole: '', weaponType: '', weaponColor: '', range: '', moveType: '', dateAdded: '', gender:'', image: 'pictures/.png'},
{id: '', name: 'Askr', epithet: 'God of Openness', baseOrNot: '', special: '', games: [''], gameplayRole: '', weaponType: '', weaponColor: '', range: '', moveType: '', dateAdded: '', gender:'', image: 'pictures/.png'},
{id: '', name: 'Askr', epithet: 'Renewed Gods', baseOrNot: '', special: '', games: [''], gameplayRole: '', weaponType: '', weaponColor: '', range: '', moveType: '', dateAdded: '', gender:'', image: 'pictures/.png'},
{id: '', name: 'Astram', epithet: '', baseOrNot: '', special: '', games: [''], gameplayRole: '', weaponType: '', weaponColor: '', range: '', moveType: '', dateAdded: '', gender:'', image: 'pictures/.png'},
{id: '', name: 'Astrid', epithet: '', baseOrNot: '', special: '', games: [''], gameplayRole: '', weaponType: '', weaponColor: '', range: '', moveType: '', dateAdded: '', gender:'', image: 'pictures/.png'},
{id: '', name: 'Athena', epithet: '', baseOrNot: '', special: '', games: [''], gameplayRole: '', weaponType: '', weaponColor: '', range: '', moveType: '', dateAdded: '', gender:'', image: 'pictures/.png'},
{id: '', name: 'Atlas', epithet: '', baseOrNot: '', special: '', games: [''], gameplayRole: '', weaponType: '', weaponColor: '', range: '', moveType: '', dateAdded: '', gender:'', image: 'pictures/.png'},
{id: '', name: 'August', epithet: '', baseOrNot: '', special: '', games: [''], gameplayRole: '', weaponType: '', weaponColor: '', range: '', moveType: '', dateAdded: '', gender:'', image: 'pictures/.png'},
{id: '', name: 'Aversa', epithet: '', baseOrNot: '', special: '', games: [''], gameplayRole: '', weaponType: '', weaponColor: '', range: '', moveType: '', dateAdded: '', gender:'', image: 'pictures/.png'},
{id: '', name: 'Ayra', epithet: "Astra's Wielder", baseOrNot: '', special: '', games: [''], gameplayRole: '', weaponType: '', weaponColor: '', range: '', moveType: '', dateAdded: '', gender:'', image: 'pictures/.png'},
{id: '', name: 'Ayra', epithet: 'Together in Tea', baseOrNot: '', special: '', games: [''], gameplayRole: '', weaponType: '', weaponColor: '', range: '', moveType: '', dateAdded: '', gender:'', image: 'pictures/.png'},
{id: '', name: 'Azama', epithet: '', baseOrNot: '', special: '', games: [''], gameplayRole: '', weaponType: '', weaponColor: '', range: '', moveType: '', dateAdded: '', gender:'', image: 'pictures/.png'},
{id: '', name: 'Azelle', epithet: '', baseOrNot: '', special: '', games: [''], gameplayRole: '', weaponType: '', weaponColor: '', range: '', moveType: '', dateAdded: '', gender:'', image: 'pictures/.png'},
{id: '', name: 'Azura', epithet: 'Celebratory Spirit', baseOrNot: '', special: '', games: [''], gameplayRole: '', weaponType: '', weaponColor: '', range: '', moveType: '', dateAdded: '', gender:'', image: 'pictures/.png'},
{id: '', name: 'Azura', epithet: 'Hatari Duet', baseOrNot: '', special: '', games: [''], gameplayRole: '', weaponType: '', weaponColor: '', range: '', moveType: '', dateAdded: '', gender:'', image: 'pictures/.png'},
{id: '', name: 'Azura', epithet: 'Lady of Ballads', baseOrNot: '', special: '', games: [''], gameplayRole: '', weaponType: '', weaponColor: '', range: '', moveType: '', dateAdded: '', gender:'', image: 'pictures/.png'},
{id: '', name: 'Azura', epithet: 'Lady of the Lake', baseOrNot: '', special: '', games: [''], gameplayRole: '', weaponType: '', weaponColor: '', range: '', moveType: '', dateAdded: '', gender:'', image: 'pictures/.png'},
{id: '', name: 'Azura', epithet: 'Vallite Songstress', baseOrNot: '', special: '', games: [''], gameplayRole: '', weaponType: '', weaponColor: '', range: '', moveType: '', dateAdded: '', gender:'', image: 'pictures/.png'},
{id: '', name: 'Azura', epithet: 'Young Songstress', baseOrNot: '', special: '', games: [''], gameplayRole: '', weaponType: '', weaponColor: '', range: '', moveType: '', dateAdded: '', gender:'', image: 'pictures/.png'},
//UNIT BATCH ONE: the initial batch I used to test. all batches will eventually be integrated into the full alphabetical list
  {id: 'eliwoodBase', name: 'Eliwood', epithet: 'Knight of Lycia', baseOrNot: 'base', special: 'none', games: ['fe7'], gameplayRole: 'protagonist', weaponType: 'sword', weaponColor: 'red', range: '1', moveType: 'cavalry', dateAdded: '', gender:'m', image: 'pictures/eliwoodBase.png', resplendent: 'askr'},
  {id: 'knollBase', name: 'Knoll', epithet: 'Darkness Watcher', baseOrNot: 'base', special: 'none', games: ['fe8'], gameplayRole: 'pc', weaponType: 'dark', weaponColor: 'red', range: '2', moveType: 'infantry', dateAdded: '', gender:'m', image: 'pictures/knollBase.png'},
  {id: 'limstellaBase', name: 'Lismtella', epithet: 'Living Construct', baseOrNot: 'base', special: 'none', games: ['fe7'], gameplayRole: 'npc', weaponType: 'anima', weaponColor: 'green', range: '2', moveType: 'infantry', dateAdded: '', gender:'', image: 'pictures/limstellaBase.png', grails: 'ghb'},
  {id: 'lucinaBase', name: 'Lucina', epithet: 'Future Witness', baseOrNot: 'base', special: 'none', games: ['fe13'], gameplayRole: 'pc', weaponType: 'sword', weaponColor: 'red', range: '1', moveType: 'infantry', dateAdded: '', gender:'f', image: 'pictures/lucinaBase.png', resplendent: 'ljosalfheimr'},
  {id: 'luciusBase', name: 'Lucius', epithet: 'The Light', baseOrNot: 'base', special: 'none', image: 'pictures/luciusBase.png', games: ['fe7'], gameplayRole: 'pc', weaponType: 'staff', weaponColor: 'colorless', range: '2', moveType: 'infantry', dateAdded: '', gender:'m', healer: true, resplendent: 'muspell'},
  {id: 'naesalaBase', name: 'Naesala', epithet: "Sky's Shadow", baseOrNot: 'base', special: 'none', games: ['FE10'], gameplayRole: 'pc', weaponType: 'beast', weaponColor: 'blue', range: '1', moveType: 'flying', dateAdded: '', gender:'m', image: 'pictures/naesalaBase.png', grails: 'ghb'},
  {id: 'naesalaSpecialPirate', name: 'Naesala', epithet: "Sea's Shadow", baseOrNot: 'special', special: 'pirate', games: ['fe10'], gameplayRole: 'pc', weaponType: 'beast', weaponColor: 'red', range: '1', moveType: 'flying', dateAdded: '', gender:'ma', image: 'pictures/naesalaSpecialPirate.png'},
  {id: 'natashaBase', name: 'Natasha', epithet: 'Sacred Healer', baseOrNot: 'base', special: 'none', games: ['fe8'], gameplayRole: 'pc', weaponType: 'staff', weaponColor: 'colorless', range: '2', moveType: 'infantry', dateAdded: '', gender:'f', image: 'pictures/natashaBase.png', healer: true},  {id: 'ninianBase', name: 'Ninian', epithet: 'Oracle of Destiny', baseOrNot: 'base', special: 'none', games: ['fe7'], gameplayRole: 'pc', weaponType: 'dragon', weaponColor: 'blue', range: '1', moveType: 'infantry', dateAdded: '', gender:'f', image: 'pictures/ninianBase.png', refresher: true, resplendent: 'nifl', resplendentImage: 'pictures/ninianBaseResplendent.png'},
  {id: 'ninianFallen', name: 'Ninian', epithet: 'Frozen Heart', baseOrNot: 'fallen', special: 'none', games: ['fe7'], gameplayRole: 'pc', weaponType: 'dragon', weaponColor: 'blue', range: '1', moveType: 'infantry', dateAdded: '', gender:'f', image: 'pictures/ninianFallen.png', refresher: true},
  {id: 'ninianLegendary', name: 'Ninian', epithet: 'Ice-Dragon Oracle', baseOrNot: 'legendary', special: 'none', games: ['fe7'], gameplayRole: 'pc', weaponType: 'dragon', weaponColor: 'green', range: '1', moveType: 'cavalry', dateAdded: '', gender:'f', image: 'pictures/ninianLegendary.png', refresher: true},
  {id: 'ninianSpecialWedding', name: 'Ninian', epithet: 'Bright-Eyed Bride', baseOrNot: 'special', special: 'wedding', games: ['fe7'], gameplayRole: 'pc', weaponType: 'light', weaponColor: 'blue', range: '2', moveType: 'flying', dateAdded: '', gender:'f', image: 'pictures/ninianSpecialWedding.png', refresher: true},
  {id: 'reysonBase', name: 'Reyson', epithet: 'White Prince', baseOrNot: 'base', special: 'none', games: ['fe10'], gameplayRole: 'pc', weaponType: 'beast', weaponColor: 'green', range: '1', moveType: 'flying', dateAdded: '', gender:'m', image: 'pictures/reysonBase.png', refresher: true},
  {id: 'rhysSpecialSummer', name: 'Rhys', epithet: 'Gentle Basker', baseOrNot: 'special', special: 'summer', games: ['fe10'], gameplayRole: 'pc', weaponType: 'staff', weaponColor: 'colorless', range: '2', moveType: 'infantry', dateAdded: '', gender:'m', image: 'pictures/rhysSpecialSummer.png', healer: true, altHell: true},
  {id: 'shigureBase', name: 'Shigure', epithet: 'Uplifting Artist', baseOrNot: 'base', special: 'none', games: ['fe14'], gameplayRole: 'pc', weaponType: 'lance', weaponColor: 'blue', range: '1', moveType: 'flying', dateAdded: '', gender:'m', image: 'pictures/shigureBase.png', resplendent: 'nifl'},
  {id: 'sorenFE9Base', name: 'Soren', epithet: 'Shrewd Strategist', baseOrNot: 'base', special: 'none', games: ['fe9'], gameplayRole: 'pc', weaponType: 'anima', weaponColor: 'green', range: '2', moveType: 'infantry', dateAdded: '', gender:'m', image: 'pictures/sorenFE9Base.png'},
  {id: 'sorenFE10Brave', name: 'Soren', epithet: 'Radiant Confidant', baseOrNot: 'brave', special: 'none', games: ['fe10'], gameplayRole: 'pc', weaponType: 'anima', weaponColor: 'green', range: '2', moveType: 'infantry', dateAdded: '', gender:'m', image: 'pictures/sorenFE10Brave.png', },
  //{id: '', name: '', epithet: '', baseOrNot: '', special: '', games: [''], gameplayRole: '', weaponType: '', weaponColor: '', range: '', moveType: '', dateAdded: '', gender:'', image: 'pictures/.png'},
  //grail duo cheerleader binary healer refresher rearmed resplendent altHell
  //maybe add option to use thumbnails instead as a toggle
];