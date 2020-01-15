import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Cookies from "universal-cookie";
import { render } from '@testing-library/react';
import App from '../components/App';
import {mount, shallow, configure} from 'enzyme';
import data from "../assets/resources/documents";

const cookies = new Cookies();

configure({adapter: new Adapter()});

var state = {
  filterBy: "client_name",
  searchInput: "",
  currentPage : 1,
  filteredDocuments : data.documents
  }

  test('render', () => {
    const wrapper = render(<App />);

  });

test('cookies', () => {
  cookies.set("currentPage", 2, { path: "/" });
  cookies.set("filterBy", "date", { path: "/" });
  cookies.set("searchInput", "elon", { path: "/" });
  const wrapper = mount(<App />);
  expect(wrapper.state('currentPage')).toBe("2");
  expect(wrapper.state('filterBy')).toBe("date");
  expect(wrapper.state('searchInput')).toBe("elon");

});
