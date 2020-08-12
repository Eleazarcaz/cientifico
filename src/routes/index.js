import Header from '../templates/Header';
import Character from '../pages/Character';
import Home from '../pages/Home';

const routes = {
  '/': Home,
  '/:id': Character,
  '/contact': 'Contact',
};

const router = async ()=>{
  const header = null || document.getElementById('header')
  const content = null || document.getElementById('content');

  header.innerHTML = Header();
};

export default router;