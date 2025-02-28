import { render, screen } from '@testing-library/react'; // Import necessary testing functions
import App from '../App.jsx';
import {beforeEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "@testing-library/user-event"
import axios from "axios"; // Adjust the path if needed

vi.mock('axios');

describe( App, () => {
    beforeEach(() => {
        // Arrange
        render(<App/>);
    })

    it('should render with a header, Addition input fields, and calculate button', () =>{
        //Act
        // const num1 = 2;
        // const num2 = 3;
        // const sum = num1 + num2;
        // console.log(sum);
//        screen.logTestingPlaygroundURL();

        expect(screen.getByText('Combined Effort Calculator')).toBeVisible();
        expect(screen.getAllByRole('spinner').length).toBe(2);
        expect(screen.getByRole('button', { name: /add/i })).toBeVisible();
    })

    // it('should display calculated value when clicking the calculate button', async () => {
    //     vi.mocked(axios.get).mockResolvedValue({
    //         data: 5
    //     })
    //
    //     const firstValueInput = screen.getAllByRole('spinbutton')[0]
    //     const secondValueInput = screen.getAllByRole('spinbutton')[1]
    //     const calcButton = screen.getByRole('button', { name: /calculate/i})
    //
    //     await userEvent.type(firstValueInput, '2')
    //     await userEvent.type(secondValueInput, '3')
    //     await userEvent.click(calcButton);
    //
    //     expect(await  screen.findByLabelText('answer result')).toBeVisible()
    //     expect(await  screen.findByLabelText('answer')).toHaveTextContent('5')
    //
    // })

})