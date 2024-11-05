import Header from './components/Header';
import HomePage from '../src/page/home-page/Homepage.component';



import productCategories from '../src/page/home-page/product-category';

function App() {

  let productCategoriesData=productCategories
 
  return (
    <>
    <Header/>
     <HomePage productCategories={productCategoriesData.sections} />
    </>
  )
}

export default App
