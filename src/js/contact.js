import '../assets/scss/contact.scss';

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { initializeAccordion } from './components/accordion.js';
import { mapSwitcher } from './components/contact/maps.js';

useTheme();
useBurger();
initializeAccordion()
mapSwitcher()