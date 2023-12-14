/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
document.addEventListener('DOMContentLoaded', function () {
        const dayButtons = document.querySelectorAll('.day-selector li');
        const bookingTypeButtons = document.querySelectorAll('.small-button');
        const clearButton = document.getElementById('clear-button');
        const calculatedCostElement = document.getElementById('calculated-cost');
    
        let selectedDays = [];
        let dailyRate = 35; // Default daily rate



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
    
        function DayButtonClick(event) {
            const clickedDay = event.target.id;
    
            // Check if the same day is already selected
            if (!selectedDays.includes(clickedDay)) {
                selectedDays.push(clickedDay);
                event.target.classList.add('clicked');
            }
    
            calculateTotalCost();
        }
    
        function TypeButtonClick(event) {
            const clickedType = event.target.id;
    /********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

            if (clickedType === 'half') {
                // Sets the daily rate to $20 for the half-day button
                dailyRate = 20;
                document.getElementById('half').classList.add('clicked');
                document.getElementById('full').classList.remove('clicked');
                // when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
            } else {
                // Sets the daily rate to $35 for the full-day button
                dailyRate = 35;
                document.getElementById('full').classList.add('clicked');
                document.getElementById('half').classList.remove('clicked');
            }
    
            calculateTotalCost();
        }
/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

        function ClearButtonClick() {
            //
            selectedDays = [];
            dailyRate = 35; // Reset daily rate to default
            calculatedCostElement.innerHTML = '0';
    
            // Removes the "clicked" class from all day buttons
            dayButtons.forEach(dayButton => {
                dayButton.classList.remove('clicked');
            });
        }

        /********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

        function calculateTotalCost() {
            const totalCost = selectedDays.length * dailyRate;
            calculatedCostElement.innerHTML = totalCost;
        }
    
        // Event listeners
        dayButtons.forEach(dayButton => {
            dayButton.addEventListener('click', DayButtonClick);
        });
    
        bookingTypeButtons.forEach(bookingTypeButton => {
            bookingTypeButton.addEventListener('click', TypeButtonClick);
        });
    
        clearButton.addEventListener('click', ClearButtonClick);
    });


