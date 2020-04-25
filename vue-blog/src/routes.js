import Home from "./components/Home";
import About from "./components/About";
import Advices from "./components/Advices";
import Post from "./components/Post";
import PokemonWar from "./components/PokemonWar";
import NotFoundComponent from "./components/NotFoundComponent";
import Chart from "./components/Chart";

export const routes = [
  {path: '/', component: Home, name: 'Home'},
  {path: '/about', component: About, name: 'About'},
  {path: '/advices', component: Advices, name: 'Advices'},
  {path: '/post/:id', component: Post, name: 'Post'},
  {path: '/pokemon-war', component: PokemonWar, name: 'PokemonWar'},
  {path: '/chart', component: Chart, name: 'Chart'},
  {path: '*', component: NotFoundComponent},
];
