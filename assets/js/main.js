import parallax from './components/parallax.js';
import activeMenu from './components/selected.menu.js';
import updatedateYear from './helpers/date_updater.js';
import language from './helpers/languaje_change.js';
import loader from './helpers/loader.js';
import resetToHome from './helpers/reload_page.js';
import sendEmail from './helpers/send_form.js';

loader();

resetToHome();

activeMenu();

parallax();

updatedateYear();

sendEmail();

language();
