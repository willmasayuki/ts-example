import ProductCard from './components/ProductCard';
import UserCard from './components/UserCard';
import { IElectronic, IProduce, ProduceEnum } from './types/Product.types';
import { IEmployee, IManager, IUser } from './types/User.types';

function App() {
  return (
    <div className='App'>
      <header className='App-header'></header>
      <body>
        <h1>Cards</h1>
        <div className='card-group'>
          <UserCard<IUser>
            user={{
              name: 'John Doe',
              email: 'john.doe@email.com',
              id: 1,
            }}
          />
          <UserCard<IEmployee>
            user={{
              name: 'Jane Doe',
              email: 'jane.doe@email.com',
              id: 2,
              department: 'Engineering',
            }}
          />
          <UserCard<IManager>
            user={{
              name: 'Jesse Doe',
              email: 'jesse.doe@email.com',
              id: 3,
              department: 'Project Management',
              teamSize: 10,
            }}
          />
        </div>
        <span className='divider' />
        <div className='card-group'>
          <ProductCard<IProduce>
            product={{
              name: 'Apple',
              price: 1.0,
              description: 'A fruit',
              id: 1,
              type: ProduceEnum.FRUIT,
              weight: 0.5,
            }}
          />
          <ProductCard<IProduce>
            product={{
              name: 'Carrot',
              price: 0.5,
              description: 'A vegetable',
              id: 2,
              type: ProduceEnum.VEGETABLE,
              weight: 0.25,
            }}
          />
          <ProductCard<IElectronic>
            product={{
              name: 'TV',
              price: 500.0,
              description: 'An electronic',
              id: 2,
              brand: 'Samsung',
              model: 'QLED',
            }}
          />
        </div>
      </body>
    </div>
  );
}

export default App;
