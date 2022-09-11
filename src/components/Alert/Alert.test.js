import { shallow } from "enzyme";
import Alert from "./Alert";

const props = {
  children: "Alert Text",
  className: "alertClass",
};
const setup = () =>
  shallow(<Alert children={props.children} className={props.className} />);

const findByTestAttributes = (wrapper, val) =>
  wrapper.find(`[data-test='${val}']`);

test("expect Alert component to exist", () => {
  const wrapper = setup();
  const component = findByTestAttributes(wrapper, "alert");
  expect(component.length).toBe(1);
});

test("expect Alert component's props", () => {
  const wrapper = setup();
  const component = findByTestAttributes(wrapper, "alert");
  expect(component.prop("children")).toBe("Alert Text");
  expect(component.text()).toBe("Alert Text");
  expect(component.hasClass("alertClass")).toBe(true);
});
