import { fireEvent, getByLabelText, getByRole, findByTestId, render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import LoginForm from './Components/LoginForm';
import NavBar2 from './Components/NavBar2';
import ProductCategoryList from './Components/ProductCategoryList';
import ProductContainer from './Components/ProductContainer';
import { BrowserRouter } from 'react-router-dom';
import ProductDetailsContainer from './Components/ProductDetailsContainer';
import Footer from './Components/Footer';

// it('renders homepage product 1', async() => {
//   render(<ProductContainer />);
//   const divElement = await screen.findByTestId('item-0');
//   // expect(divElement).not.toBeNull();
//   expect(divElement).toBeInTheDocument();
// });

// it('renders homepage products', async() => {
//   render(<ProductContainer />);
//   const divElements = await screen.findAllByTestId(/item/i);
//   expect(divElements.length).toBe(20);
// });

test('renders homepage Loader', () => {
  render(<ProductContainer />);
  const hometxtElement = screen.getByText(/Loading/i);
  expect(hometxtElement).toBeInTheDocument();
});

// test('renders homepage text2', () => {
//   render(<ProductContainer />);
//   const hometxtElement2 = screen.getByText(/Products/i);
//   expect(hometxtElement2).toBeInTheDocument();
// });

// test('renders homepage banner text', () => {
//   render(<ProductContainer />);
//   const homeBannertxtElement = screen.getByText(/Download Snapdeal App Now/i);
//   expect(homeBannertxtElement).toBeInTheDocument();
// });

// test('renders homepage banner btns', () => {
//   render(<ProductContainer />);
//   const homebtnElement1 = screen.getByRole("button", { name:/DOWNLOAD ON THE/i});
//   expect(homebtnElement1).toBeInTheDocument();
//   const homebtnElement2 = screen.getByRole("button", { name:/ANDROID APP ON/i});
//   expect(homebtnElement2).toBeInTheDocument();
// });

describe('With React Testing Library', () => {
  const initialState = {AuthStatus: false, cart:[]};
  const mockStore = configureStore();
  let store;
  it('Shows Product Loader', () => {
    store = mockStore(initialState);
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <ProductDetailsContainer />
        </BrowserRouter>
      </Provider>
    );
    const productLoaderElement = screen.getByText(/The product is loading. Please wait../i);
    expect(productLoaderElement).toBeInTheDocument();
  });
});

// describe('With React Testing Library', () => {
//   const initialState = {AuthStatus: false, cart:[]};
//   const loader=false;
//   const errMsg=''
//   const mockStore = configureStore();
//   let store;
//   it('Shows Product btns', () => {
//     store = mockStore(initialState);
//     const { getByText } = render(
//       <Provider store={store}>
//         <BrowserRouter>
//           <ProductDetailsContainer />
//         </BrowserRouter>
//       </Provider>
//     );
//     const productBtnElement1 = screen.getByRole("button", {name: /ADD TO CART/i});
//     expect(productBtnElement1).toBeInTheDocument();
//     const productBtnElement2 = screen.getByRole("button", {name: /BUY NOW/i});
//     expect(productBtnElement2).toBeInTheDocument();
//   });
// });

// describe('With React Testing Library', () => {
//   const initialState = {AuthStatus: false, cart:[]};
//   const mockStore = configureStore();
//   let store;
//   it('renders Pincode holder', () => {
//     store = mockStore(initialState);
//     const { getByText } = render(
//       <Provider store={store}>
//         <BrowserRouter>
//           <ProductDetailsContainer />
//         </BrowserRouter>
//       </Provider>
//     );
//     const pincodeplaceholderElement = screen.getByPlaceholderText(/Enter PinCode/i);
//     expect(pincodeplaceholderElement).toBeInTheDocument();
    
//   });
// });

// describe('With React Testing Library', () => {
//   const initialState = {AuthStatus: false, cart:[]};
//   const mockStore = configureStore();
//   let store;
//   it('renders Pincode holder input changes', () => {
//     store = mockStore(initialState);
//     const { getByText } = render(
//       <Provider store={store}>
//         <BrowserRouter>
//           <ProductDetailsContainer />
//         </BrowserRouter>
//       </Provider>
//     );
//     const pincodeinput = screen.getByPlaceholderText(/Enter PinCode/i);
//     fireEvent.change(pincodeinput, { target: { value: 700001 } });
//     expect(pincodeinput.value).toBe("700001");
    
//   });
// });

// describe('With React Testing Library', () => {
//   const initialState = {AuthStatus: false, cart:[]};
//   const mockStore = configureStore();
//   let store;
//   it('renders Pincode holder input validations', () => {
//     store = mockStore(initialState);
//     const { getByText } = render(
//       <Provider store={store}>
//         <BrowserRouter>
//           <ProductDetailsContainer />
//         </BrowserRouter>
//       </Provider>
//     );
//     const pincodeBtnElement = screen.getByRole("button", {name: /Check/i});
//     const pincodeinput = screen.getByPlaceholderText(/Enter PinCode/i);
//     fireEvent.change(pincodeinput, { target: { value: "fdfgd" } });
//     fireEvent.click(pincodeBtnElement);
//     const divElement = screen.getByText(/Please Enter a valid Pin Code/i);
//     expect(divElement).toBeVisible()
        
//   });
// });

// describe('With React Testing Library', () => {
//   const initialState = {AuthStatus: false, cartproduct:[],cart:[]};
//   const mockStore = configureStore();
//   let store;
//   it('renders navbar signin btn', () => {
//     store = mockStore(initialState);
//     const { getByText } = render(
//       <Provider store={store}>
//         <BrowserRouter>
//         <NavBar2 />
//         </BrowserRouter>
//       </Provider>
//     );
//     const signinButton = screen.getAllByRole("button", { name: /Sign In/i });
//   expect(signinButton).not.toBeNull();
//   });
// });

describe('With React Testing Library', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;
  it('Shows Login heading', () => {
    store = mockStore(initialState);
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      </Provider>
    );

    expect(getByText('Login On Snapdeal')).toBeInTheDocument();
  });
});

describe('With React Testing Library', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;
  it('renders login Form Labels', () => {
    store = mockStore(initialState);
    const { getByLabelText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      </Provider>
    );
    expect(getByLabelText(/Email Address/i)).toBeInTheDocument();
    expect(getByLabelText(/Password/i)).toBeInTheDocument();
  });
});

describe('With React Testing Library', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;
  it('renders login placeholders', () => {
    store = mockStore(initialState);
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      </Provider>
    );
    expect(getByPlaceholderText('Enter Email Address')).not.toBeNull();
    expect(getByPlaceholderText('Enter Password')).not.toBeNull();
  });
});

describe('With React Testing Library', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;
  it('renders login Form input changes', () => {
    store = mockStore(initialState);
    const { getByLabelText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      </Provider>
    );

    const emailinput = screen.getByPlaceholderText(/Enter Email Address/i);
    fireEvent.change(emailinput, { target: { value: "morrison@gmail.com" } });
    expect(emailinput.value).toBe("morrison@gmail.com");

    const passinput = screen.getByPlaceholderText(/Enter Password/i);
    fireEvent.change(passinput, { target: { value: "83r5^_" } });
    expect(passinput.value).toBe("83r5^_");
  });
});


describe('With React Testing Library', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;
  it('renders login btn', () => {
    store = mockStore(initialState);
    const { getByRole } = render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      </Provider>
    );
    expect(getByRole("button", { name: /Sign In/i })).not.toBeNull();

  });
});

describe('With React Testing Library', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;
  it('renders login validations', () => {
    store = mockStore(initialState);
    const { getByRole } = render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      </Provider>
    );
    const btnElement = screen.getByRole("button", { name: /Sign In/i })
    const emailinput = screen.getByPlaceholderText(/Enter Email Address/i);
    fireEvent.change(emailinput, { target: { value: "" } });
    const passinput = screen.getByPlaceholderText(/Enter Password/i);
    fireEvent.change(passinput, { target: { value: "" } });
    fireEvent.click(btnElement);
    const divElement1 = screen.getByText(/Enter a valid Email/i);
    expect(divElement1).toBeInTheDocument()
    const divElement2 = screen.getByText(/Password should contain 6 characters/i);
    expect(divElement2).toBeInTheDocument()

  });
});


test('renders footer element1', () => {
  render(<Footer />);
  const footertxtElement1 = screen.getByText(/100% Secure Payments/i);
  expect(footertxtElement1).toBeInTheDocument();
});

test('renders footer element2', () => {
  render(<Footer />);
  const footertxtElement2 = screen.getByText(/TRUSTPAY/i);
  expect(footertxtElement2).toBeInTheDocument();
});

test('renders footer element3', () => {
  render(<Footer />);
  const footertxtElement3 = screen.getByText(/HELP CENTER/i);
  expect(footertxtElement3).toBeInTheDocument();
});

test('renders footer element4', () => {
  render(<Footer />);
  const footertxtElement4 = screen.getByText(/SHOP ON THE GO/i);
  expect(footertxtElement4).toBeInTheDocument();
});

test('renders footer element5', () => {
  render(<Footer />);
  const footertxtElement5 = screen.getByText(/POLICY INFO/i);
  expect(footertxtElement5).toBeInTheDocument();
});

test('renders footer element6', () => {
  render(<Footer />);
  const footerPlaceholderElement6 = screen.getByPlaceholderText(/Your Email Address/i);
  expect(footerPlaceholderElement6).toBeInTheDocument();
});

test('renders footer element7', () => {
  render(<Footer />);
  const footertxtElement7 = screen.getByText(/Copyright Statement/i);
  expect(footertxtElement7).toBeInTheDocument();
});

test('renders footer element8', () => {
  render(<Footer />);
  const footertxtElement8 = screen.getByText(/Made In India/i);
  expect(footertxtElement8).toBeInTheDocument();
});