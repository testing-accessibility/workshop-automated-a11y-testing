import React from 'react';

import DropdownList from 'components/dropdown-list';

export default {
  title: 'Components/DropdownList',
  component: DropdownList,
}

// We create a “template” of how args map to rendering
const Template = (args) => <DropdownList {...args} />;

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  defaultItemText: 'Fruits',
  items: ['apples', 'pears', 'plums']
};
