# Case Converter

Tool to convert a string from one case to another.

## Requirements

### Core functional requirements

- [x] User can enter an input string into a text field
- [x] User can choose the case of their input string from a dropdown menu
- [x] User can choose the case of the output string from a dropdown menu
- [x] User can click a submit button
- [x] When the user has:
  - entered an input string,
  - chosen the correct case of the input string,
  - chosen a desired output case,
  - and clicked the submit button,
  - then the user's string is displayed in the desired case
- [x] When the user has:
  - entered an input string,
  - chosen an incorrect case for the input string,
  - and clicked the submit button,
  - then an error message is displayed
- [x] When the user has:
  - entered an empty input string,
  - and clicked the submit button,
  - then an error message is displayed
- [x] When the user has:
  - not chosen an input case or output case,
  - and clicked the submit button,
  - then an error message is displayed

### Core non-functional requirements

- [x] Project contains a README with functional & non-functional requirements
- [ ] Functions have >80% unit test coverage
- [ ] Project includes CI pipeline

### Extra functional requirements

- [ ] User can enable an option for the case of the input string to be automatically determined
- [ ] User can view a description of all cases available
- [ ] User can click a button to copy their output string to the clipboard
- [ ] When the user has:
  - entered an input string,
  - and chosen an incorrect case for the input string,
  - then an error message is displayed before the submit button is clicked

### Extra non-functional requirements

- [ ] Project includes Cypress E2E tests
- [ ] Page is styled
- [ ] Any toggles & expandable sections are animated