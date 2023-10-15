const scheduleForm = document.getElementById('schedule-form');
const paymentForm = document.getElementById('payment-form');
const doctorSelect = document.getElementById('doctor');
const datetimeInput = document.getElementById('datetime');
const payButton = document.getElementById('pay-button');

// Dummy data for doctors (in real application, this data will come from the server)
const doctors = [
    { id: 1, name: 'Dr. Smith' },
    { id: 2, name: 'Dr. Johnson' },
    // Add more doctors as needed
];

// Populate doctor options
doctors.forEach(doctor => {
    const option = document.createElement('option');
    option.value = doctor.id;
    option.text = doctor.name;
    doctorSelect.appendChild(option);
});

scheduleForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get selected doctor and datetime
    const selectedDoctor = doctorSelect.options[doctorSelect.selectedIndex].text;
    const selectedDatetime = datetimeInput.value;
    
    // Show payment form with details
    paymentForm.innerHTML = `
        <h2>Payment Details</h2>
        <p>Doctor: ${selectedDoctor}</p>
        <p>Date and Time: ${selectedDatetime}</p>
        <label for="card">Credit Card Number:</label>
        <input type="text" id="card" required>
        <button type="button" id="pay-button">Pay Now</button>
    `;
    
    // Show payment form
    paymentForm.classList.remove('hidden');
    
    // Handle payment logic (dummy logic for demonstration)
    const payButton = document.getElementById('pay-button');
    payButton.addEventListener('click', function() {
        // Dummy payment processing logic (in real application, integrate with payment gateway)
        alert('Payment successful! Call scheduled.');
    });
});
