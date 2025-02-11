import '../assets/scss/main.scss';
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useInsightSlider, useTestimonialsSlider } from './components/home/slider.js';
import { initializeAccordion } from './components/accordion.js';

useTheme();
useBurger();
useInsightSlider();
useTestimonialsSlider();
initializeAccordion();

