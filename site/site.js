 function calculateAge() {
      // Get today's date
      const today = new Date();

      // Get your birthday (replace with your actual birthday)
      const birthdate = new Date(2000, 5, 22); // Example: January 1, 2000

      // Calculate age in milliseconds
      let ageInMillis = today - birthdate;

      // Convert milliseconds to years
      const ageInYears = Math.floor(ageInMillis / (1000 * 60 * 60 * 24 * 365.25)); 

      // Display the calculated age
      document.getElementById("age").innerHTML = "Age: " + ageInYears;
    }

    // Call the function to calculate and display age on page load
    window.onload = calculateAge;