import { render, screen } from "@testing-library/react";
import {Application} from "./application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    // const pageHeading = screen.getByRole('heading', {name: 'Job Application form'})
    const pageHeading = screen.getByRole('heading', {level: 1})
    expect(pageHeading).toBeInTheDocument()

    // const sectionHeading = screen.getByRole('heading', {name: 'Section 1'})
    const sectionHeading = screen.getByRole('heading', {level: 2})
    expect(sectionHeading).toBeInTheDocument()

    const paragraphElement = screen.getByText('All fields are mandatory')
    expect(paragraphElement).toBeInTheDocument()

    // **Text Match - string**
    const paragraphElement2 = screen.getByText(/All fields are mandatory/i)//full string match
    expect(paragraphElement2).toBeInTheDocument()

    const paragraphElement3 = screen.getByText("fields are mandatory", {exact: false})//substring match
    expect(paragraphElement3).toBeInTheDocument()

    const paragraphElement4 = screen.getByText('all fields are mandatory', {exact: false})//ignore case
    expect(paragraphElement4).toBeInTheDocument()
    // **Text Match - string end**

    // **Text Match - regex**
    const paragraphElement5 = screen.getByText(/fields/)//substring match
    expect(paragraphElement5).toBeInTheDocument()
    const paragraphElement6 = screen.getByText(/Fields/i)//substring match, ignore case
    expect(paragraphElement6).toBeInTheDocument()
    const paragraphElement7 = screen.getByText(/^All fields are mandatory$/i)//full string match, ignore case
    expect(paragraphElement7).toBeInTheDocument()
  // **Text Match - regex end**

  // **Text Match - custom function**
  //(content ?: string, element ?: Element | null) => boolean
    const paragraphElement8 = screen.getByText((content) => {
      return content.startsWith('All fields are mandatory');
    });
    expect(paragraphElement8).toBeInTheDocument();
  // **Text Match - custom function end**

    const closeElement = screen.getByTitle('close')
    expect(closeElement).toBeInTheDocument()

    const imageElement = screen.getByAltText('a person with a laptop')
    expect(imageElement).toBeInTheDocument()

    const customElement = screen.getByTestId('custom-element')
    expect(customElement).toBeInTheDocument()

    const nameElement = screen.getByRole('textbox', {name: 'Name'})
    expect(nameElement).toBeInTheDocument()

    const nameElement2 = screen.getByLabelText('Name', {
        selector: 'input[type="text"]'
    })
    expect(nameElement2).toBeInTheDocument()

    const nameElement3 = screen.getByPlaceholderText('Fullname')
    expect(nameElement3).toBeInTheDocument()

    const nameElement4 = screen.getByDisplayValue('John Doe')
    expect(nameElement4).toBeInTheDocument()

    const bioElement = screen.getByRole('textbox', {name: 'Bio'})
    expect(bioElement).toBeInTheDocument()

    const jobLocationElement = screen.getByRole('combobox')
    expect(jobLocationElement).toBeInTheDocument()

    const termsElement = screen.getByRole('checkbox')
    expect(termsElement).toBeInTheDocument()

    const termsElement2 = screen.getByLabelText('I agree to the terms and conditions')
    expect(termsElement2).toBeInTheDocument()

    const submitButtonElement = screen.getByRole('button')
    expect(submitButtonElement).toBeInTheDocument()
  });
});
