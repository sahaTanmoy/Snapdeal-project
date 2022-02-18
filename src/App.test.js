import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import LoginForm from './Components/LoginForm';
import NavBar2 from './Components/NavBar2';
import ProductCategoryList from './Components/ProductCategoryList';
import ProductContainer from './Components/ProductContainer';
import { BrowserRouter } from 'react-router-dom';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders homepage text', () => {
  render(<ProductContainer />);
  const hometxtElement = screen.getByText(/Loading/i);
  expect(hometxtElement).toBeInTheDocument();
});

// test('renders navbar signin btn', () => {
//   render(<NavBar2 />);
//   const searchButton = screen.getByRole("button", { name: /Sign In/i });
//   // const hometxtElement = screen.getByText(/Loading/i);
//   expect(searchButton).toBeInTheDocument();
// });


// test('renders homepage text2', () => {
//   render(<ProductContainer />);
//   const hometxtElement2 = screen.getByText(/Download/i);
//   expect(hometxtElement2).toBeInTheDocument();
// });


// test('renders category headtext', () => {
//   render(<ProductCategoryList />);
//   const categoryheadtxtElement = screen.getByText(/TOP CATEGORIES/i);
//   expect(categoryheadtxtElement).toBeInTheDocument();
// });



// test('renders login form text', () => {
//   render(<LoginForm />);
//   const logintxtElement = screen.getByText(/Login On Snapdeal/i);
//   expect(logintxtElement).toBeInTheDocument();
// });

// test('renders login placeholder1', () => {
//   render(<LoginForm />);
//   const linkElement = screen.getByPlaceholderText(/Enter Email Address/i);
//   expect(linkElement).toBeInTheDocument();
// });


describe('With React Testing Library', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it('Shows "Hello world!"', () => {
      store = mockStore(initialState);
      const { getByText } = render(
          <Provider store={store}>
            <BrowserRouter>
              <LoginForm />
              </BrowserRouter>
          </Provider>
      );

      expect(getByText('Login On Snapdeal')).not.toBeNull();
  });
});
