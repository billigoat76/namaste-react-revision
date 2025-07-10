import React from 'react'; // Optional in modern setups but safe to include
import { render, screen } from '@testing-library/react';
import ContactUs from '../components/ContactUs'; // correct path to your component

test('should load contact us component', () => {
    render(<ContactUs />);
    const heading = screen.getByText("Send us a message");
    expect(heading).toBeInTheDocument();
});

test('should load button inside contactus component', () => {
    render(<ContactUs />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
});

test('should load input email inside contactus component', () => {
    render(<ContactUs/>);
    const email = screen.getByPlaceholderText('you@example.com')
    expect(email).toBeInTheDocument();
});

test('should load two input boxes inside contact us component',()=>{
    render(<ContactUs/>)

    const inputBoxes = screen.getAllByRole('textbox');

    expect(inputBoxes.length).toBe(3)
})