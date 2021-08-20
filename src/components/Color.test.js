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
    const mockDelete =jest.fn(() => {return 'delete'})
    const mockToggle =jest.fn(()=>{ return 'toggle'})

    const { getByTestId } = render(<Color color={colors} 
                  toggleEdit={mockToggle} deleteColor={mockDelete}/>)
    
    const button = getByTestId(/delete/i); 
 
    userEvent.click(button) 

    expect(mockDelete).toHaveBeenCalled();
    expect(mockToggle).toHaveBeenCalled();

});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
    const mockEdit = jest.fn(()=> {return 'edit'})
    const mockToggle =jest.fn(()=>{ return 'toggle'})

    const { getByTestId } = render(<Color color={colors}
    toggleEdit={mockToggle}  setEditColor={mockEdit}/>)


    const button = getByTestId(/color/i);

    userEvent.click(button) 

    expect(mockEdit).toHaveBeenCalled();
    expect(mockToggle).toHaveBeenCalled();
});