import React from 'react';
import { render } from '@testing-library/react';
import List from '../components/List';

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

test('renders learn react link', () => {
  const { getByText } = render(<List parentData={state}> </List>);
});
