import { shallow } from "enzyme";
import Button from "./Button";

const props = {
  children: "Button Text",
  className: "buttonClass",
  onClick: jest.fn(),
};
const setup = () => shallow(<Button {...props} />);

const findByTestAttributes = (wrapper, val) =>
  wrapper.find(`[data-test='${val}']`);

test("expect Button component to exist", () => {
  const wrapper = setup();
  const component = findByTestAttributes(wrapper, "button");
  expect(component.length).toBe(1);
});

test("expect Button component's props", () => {
  const wrapper = setup();
  const component = findByTestAttributes(wrapper, "button");
  expect(component.prop("children")).toBe("Button Text");
  expect(component.text()).toBe("Button Text");
  expect(component.hasClass("buttonClass")).toBe(true);
});

test("simulate button click", () => {
  const wrapper = setup();
  const component = findByTestAttributes(wrapper, "button");
  component.simulate("click");
});
