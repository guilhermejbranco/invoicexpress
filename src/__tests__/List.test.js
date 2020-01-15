import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { render } from '@testing-library/react';
import List from '../components/List';
import {mount, shallow, configure} from 'enzyme';

configure({adapter: new Adapter()});

var state = {
  filterBy: "client_name",
  searchInput: "",
  currentPage : 1,
  filteredDocuments : [ {
      "status": "Final",
      "type": "Invoice",
      "number": "2019/11",
      "client_name": "Elon Tusk",
      "date": "2019-02-31",
      "total_w_vat": 123.42
    }]
  }

test('renders', () => {
  const { getByText } = render(<List parentData={state}> </List>);
});

describe('List component', () => {
  it('should sort the arrays on clicks accordingly', () => {
    const  wrapper  = mount(<List parentData={state} />);
    const instance = wrapper.instance();
    expect(wrapper.state('orderBy')).toBe('client_name');
    expect(wrapper.state('orderType')).toBe('desc');
    wrapper.find('#number').simulate('click');
    expect(wrapper.state('orderBy')).toBe('number');
    expect(wrapper.state('orderType')).toBe('desc');
    expect(wrapper.state('filteredDocuments')).toBe(state.filteredDocuments.sort((a, b) => a.type.localeCompare(b.type)))
    wrapper.find('#number').simulate('click');
    wrapper.find('#date').simulate('click');
    expect(wrapper.state('orderBy')).toBe('date');
    expect(wrapper.state('orderType')).toBe('asc');
    expect(wrapper.state('filteredDocuments')).toBe(state.filteredDocuments.sort((a, b) => b.date.localeCompare(a.date)))
    wrapper.find('#total_w_vat').simulate('click');
    expect(wrapper.state('orderBy')).toBe('total_w_vat');
    expect(wrapper.state('orderType')).toBe('asc');
    expect(wrapper.state('filteredDocuments')).toBe(state.filteredDocuments.sort((a, b) => b[e] - a[e]))
    wrapper.find('#total_w_vat').simulate('click');
    wrapper.find('#date').simulate('click');
    wrapper.find('#total_w_vat').simulate('click');
    expect(wrapper.state('orderBy')).toBe('total_w_vat');
    expect(wrapper.state('orderType')).toBe('desc');
    expect(wrapper.state('filteredDocuments')).toBe(state.filteredDocuments.sort((a, b) => a[e] - b[e]))
  });
});
