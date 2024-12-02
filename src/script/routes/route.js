import Home from '../views/pages/home-page';
import Article from '../views/pages/article-page';
import AboutUs from '../views/pages/about-us';


const route = {
  '/': Home, // default page
  '/Home': Home,
  '/article': Article,
  '/aboutus': AboutUs,
};

export default route;