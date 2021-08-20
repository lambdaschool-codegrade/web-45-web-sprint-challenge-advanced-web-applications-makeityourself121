import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from './Color';

const blankColors = {
   color: '',
   code:{hex: ''},
   id: 1
}

const colors = {
    color: 'aqua',
    code:{hex: '#00ffff'},
    id: 1
 }

test("Renders without errors with blank color passed into component", () => {
    render(<Color color={blankColors}/>)
});
  
test("Renders the color passed into component", () => {
    render(<Color color={colors}/>)
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
    // const buttonX = screen.queryByTestId("delete")
    // // const color= screen.queryByText(/aqua/i)
    // userEvent.click(buttonX)
    // // expect(color).not.toBeInTheDocument()
    // expect(button).not.toBeInTheDocument()
});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
    
});