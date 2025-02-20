import '../assets/scss/pricing.scss';

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { usePriceSwitcher } from './components/pricing/priceSwitcher.js';
import { initializeAccordion } from './components/accordion.js';
import { initializeFaqAccordion } from './components/pricing/faqAccordion.js';



useTheme();
useBurger();
usePriceSwitcher();
initializeAccordion();
initializeFaqAccordion();

