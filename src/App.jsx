import ProductCard from './ProductCard';

export default function App() {
  const products = [
    { id: 1, title: 'Wireless Mouse', price: 25, description: 'A smooth, ergonomic wireless mouse.' },
    { id: 2, title: 'Mechanical Keyboard', price: 85, description: 'Clicky keys for fast typing.' },
    { id: 3, title: 'HD Monitor', price: 150, description: '1080p display with vibrant colors.' }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>My Tech Store</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            title={product.title} 
            price={product.price} 
            description={product.description} 
          />
        ))}
      </div>
    </div>
  );
}