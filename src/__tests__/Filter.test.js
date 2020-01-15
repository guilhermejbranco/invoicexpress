import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { render } from '@testing-library/react';
import Filter from '../components/Filter';
import {mount, shallow, configure} from 'enzyme';
import data from "../assets/resources/documents";

configure({adapter: new Adapter()});

var state = {
  filterBy: "client_name",
  searchInput: "", 
  currentPage : 1,
  filteredDocuments : data.documents
  }

  function filterCallbackFunction(childData){
    state.currentPage = childData.currentPage
  };

test('renders', () => {
  const { getByText } = render(<Filter parentData={state} parentCallback={filterCallbackFunction}> </Filter>);
});

describe('Filter component', () => {
  it('should filter by client_name', () => {
    const  wrapper  = mount(<Filter parentData={state} parentCallback={filterCallbackFunction}/>);
    const instance = wrapper.instance();
    expect(wrapper.state('searchInput')).toBe("");
    wrapper.find('#searchInput').simulate('change', {
      target: { value: 'Elon' }
    });
    expect(wrapper.state('searchInput')).toBe("Elon");
  });
});

describe('Filter component', () => {
  it('should change filter by', () => {
    const  wrapper  = mount(<Filter parentData={state} parentCallback={filterCallbackFunction}/>);
    const instance = wrapper.instance();
    expect(wrapper.state('filterBy')).toBe("client_name");
    wrapper.find('#filterBy').simulate('change', {
      target: { value: 'date' }
    });
    expect(wrapper.state('filterBy')).toBe("date");
  });
});
