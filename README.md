## React App for Interacting with Raspberry Pi Pico W

### Description
This is a bare-bones React application designed for interacting with a WiFi-connected microcontroller, specifically the Raspberry Pi Pico W. The goal is to establish communication and control with the microcontroller using a web interface.

### Requirements
- Node.js installed on your machine
- npm (Node Package Manager)

### Installation
1. Clone or download this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the necessary dependencies.

### Usage
1. Ensure that the Raspberry Pi Pico W is connected to the same WiFi network as your machine.
2. Open the project folder and locate the micro Python file (`micro_py_file.txt`) inside the frontend project folder. This file contains the code to be run on the microcontroller.
3. Using Thonny or any compatible software, upload the micro Python code to the Raspberry Pi Pico W.
4. Make sure the IP address of the microcontroller is correctly configured within the frontend of the React application. This can typically be found in your router settings or by using network diagnostic tools.
5. Ensure that the ports for communication between the React app and the microcontroller are properly configured.

### Running the Application
- Once the setup is complete, run `npm start` in the terminal while in the project directory.
- The React application should start, allowing you to interact with the microcontroller through the web interface.

### Functionality
- Currently, the application is capable of lighting up a few LEDs on the microcontroller.
- Future plans involve expanding the functionality to incorporate motors and onboard batteries for more advanced and practical applications.

### Note
- This README assumes basic familiarity with React, Node.js, and microcontroller programming.
- For any issues or inquiries, feel free to contact the repository owner.
