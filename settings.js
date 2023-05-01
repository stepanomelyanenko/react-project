const AppRoute = {
  Initial: 'initial',
  Game: 'game',
  Results: 'results',
};

const TIMEOUT = 900;
const RANDOMIZED = true;

const GAME_TYPES = [
  { type: 'cats', icon: 'ico-button-cats', label: 'Котики' },
  { type: 'flowers', icon: 'ico-button-flowers', label: 'Цветочки' },
  { type: 'cars', icon: 'ico-button-cars', label: 'Машины' },
];

window.TIMEOUT = TIMEOUT;
window.AppRoute = AppRoute;
window.GAME_TYPES = GAME_TYPES;
window.RANDOMIZED = RANDOMIZED;