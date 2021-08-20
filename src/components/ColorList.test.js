import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen} from "@testing-library/react";
import ColorList from './ColorList';

const testColors = {
    data:[{color: '',
    code:{hex: ''},
    id: 1}]
 }
 const colors = {
     data:[
    {color: 'aqua',
    code:{hex: '#00ffff'},
    id: 1}
     ]
 }

test("Renders an empty list of colors without errors", () => {
    render(<ColorList colors={testColors.data}/>)
});

test("Renders a list of colors without errors", () => {
    render(<ColorList colors={colors.data}/>)
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
    const { rerender } = render(<ColorList colors={colors.data} editing={true} />)

    const button = screen.getByTestId(/cancel_button/i);

    expect(screen.getByTestId(/edit_menu/i)).toBeInTheDocument();

    rerender(<ColorList colors={colors.data} editing={false}/>)

    expect(screen.queryByTestId(/edit_menu/i)).not.toBeInTheDocument(); 
});
