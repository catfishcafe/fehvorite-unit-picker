import { units } from './units.js';

const myPicker = new picker.Picker({
    items: units,
    localStorageKey: 'picker-state',
    defaultSettings: {
      weaponTypes: ['sword', 'lance', 'axe', 'bow', 'dagger', 'staff', 'dark', 'light', 'anima', 'tome', 'beast', 'dragon'],
      moveTypes: ['infantry', 'armored', 'cavalry', 'flying']
  },

    getFilteredItems: function(settings) {
      var filteredList = [];
      for (var i = 0; i < units.length; i++) {
          // Skip item if:
          // 1. the character's role is not in the list of roles we've checked, or
          // 2. we checked the "recurring only" box, and the character is not a recurring character.
          if (settings.weaponTypes.indexOf(units[i].weaponType) === -1 || settings.moveTypes.indexOf(units[i].moveType) === -1) continue;
          // (settings.roles.indexOf(units[i].baseOrNot) === -1 || settings.games.indexOf(units[i].gameplayRole) === -1 || settings.Classes.indexOf(units[i].weaponType) === -1 || settings.Classes.indexOf(units[i].weaponColor) === -1 || settings.Classes.indexOf(units[i].moveType) === -1) 

          filteredList.push(units[i].id);
      }
      console.log('getFilteredItems executed')
      return filteredList;
  }

});

const pickerUI = new PickerUI(myPicker, {
    elements: {
        pick: "#pick",
        pass: "#pass",
        undo: "#undo",
        redo: "#redo",
        reset: ".reset",
        evaluating: "#evaluating",
        favorites: "#favorites",
        shortcodeLink: "#shortcode-link",
        sharedListContainer: "#shared-list-modal",
        sharedList: "#shared-list",
        sharedListContinue: "#shared-list-continue",
        sharedListSkip: ".shared-list-skip",
        settings: {
          baseOrNot: '.baseOrNot',
          games: '.games',
          gameplayRole: '.gameplayRoles',
          weaponTypes: '.weaponTypes',
          weaponColor: '.weaponColors',
          moveTypes: '.moveTypes'
      }
    }
});
  //{id: '', name: '', epithet: '', baseOrNot: '', special: '', games: [''], gameplayRole: '', weapon: '', weaponColor: '', damageType: '', range: '', moveType: '', gender: '', image: '.png'},
    //grail duo cheerleader binary healer refresher rearmed resplendent altHell

pickerUI.initialize();

/* Sortable favorites - you can safely remove this, and the Sortable.min.js script, if you don't want to be able to sort your favorite list. */
var sortable = new Sortable(pickerUI.elem.favorites.get(0), {
    draggable: '.item',
    animation: 100,
    onStart: function() {
        pickerUI.elem.favorites.addClass("sorting");
    },
    onEnd: function() {
        pickerUI.elem.favorites.removeClass("sorting");
    },
    onUpdate: function() {
        myPicker.setFavorites(pickerUI.elem.favorites.children().map(function() {
            return pickerUI.getItem(this);
        }).get());
        pickerUI.update(true);
    }
});
/* End sortable favorites */
