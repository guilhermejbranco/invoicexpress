import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { render } from '@testing-library/react';
import Pagination from '../components/Pagination';
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

test('renders learn react link', () => {
  const { getByText } = render(<Pagination parentCallback={filterCallbackFunction} parentData={state} > </Pagination>);
});

test('renders learn react link', () => {

});


describe('Pagination component', () => {
  it('should be changing the page', () => {
    const  wrapper  = shallow(<Pagination parentCallback={filterCallbackFunction} parentData={state} />);
    const instance = wrapper.instance();
    expect(wrapper.state('currentPage')).toBe(1);
    instance.changePage(2);
    expect(wrapper.state('currentPage')).toBe(2);
    instance.changePage(wrapper.state('currentPage') - 1);
    expect(wrapper.state('currentPage')).toBe(1);
    instance.changePage(wrapper.state('currentPage') + 1);
    expect(wrapper.state('currentPage')).toBe(2);
  });
});


describe('Pagination component', () => {
  it('should increment and decrement page number with previous and next buttons', () => {
    const  wrapper  = mount(<Pagination parentCallback={filterCallbackFunction} parentData={state} />);
    const instance = wrapper.instance();
    expect(wrapper.state('currentPage')).toBe(1);
    wrapper.find('#next-page').simulate('click');
    expect(wrapper.state('currentPage')).toBe(2);
    wrapper.find('#previous-page').simulate('click');
    expect(wrapper.state('currentPage')).toBe(1);
  });
});

describe('Pagination component', () => {
  it('should disable previous and next button accordingly', () => {
    const  wrapper  = mount(<Pagination parentCallback={filterCallbackFunction} parentData={state} />);
    const instance = wrapper.instance();
    expect(wrapper.state('currentPage')).toBe(1);
    wrapper.find('#previous-page').simulate('click');
    expect(wrapper.state('currentPage')).toBe(1);
    expect(wrapper.find("#previous-page").hasClass("disabled"))
    instance.changePage(Math.ceil(state.filteredDocuments.length/7));
    wrapper.find('#next-page').simulate('click');
    expect(wrapper.find("#next-page").hasClass("disabled"))
    expect(wrapper.state('currentPage')).toBe(Math.ceil(state.filteredDocuments.length/7));
  });
});
