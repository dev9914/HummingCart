import React,{useContext} from 'react'
import { useParams} from 'react-router-dom';
import { ShopContext } from '../Components/Context/ShopContext';
import Bredcrum from '../Components/Bredcrums/Bredcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProduct from '../Components/RelatedProducts/RelatedProduct';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId))
  return (
    <div>
      <Bredcrum product={product}/>
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProduct />
    </div>
  )
}

export default Product
