import { render, fireEvent, screen } from '@testing-library/react';
import TestingCode from './Components/TestingCode';


test("Adds one", () => {
  // render the App component
  render(<TestingCode />);
  // save the heading in a variable
  const heading = screen.getByTestId("currentNumber");

  // save the button in a variable
  const btn = screen.getByTestId("addone");

  // click the btn
  fireEvent.click(btn);

  // test assumption
  expect(heading).toHaveTextContent("2");
});

//in terminal >npm test src/TestingCode.test.js