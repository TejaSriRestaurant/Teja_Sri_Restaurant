document.addEventListener('DOMContentLoaded', () => {
    const typeSelect = document.getElementById('typeSelect');
    const FoodSelect = document.getElementById('FoodSelect');
  
    // Event listener for state selection
    typeSelect.addEventListener('change', () => {
      const selectedType = typeSelect.value;
  
      // Clear existing districts
      FoodSelect.innerHTML = '<option value="">Select a Food</option>';
  
      // Fetch districts for the selected state from the server
      if (selectedType) {
        // fetch(`/districts?state=${selectedType}`)
        const payload = {
            type:selectedType
        };
        fetch('https://teja-sri.onrender.com/typer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // Add any other headers if needed
            },
            body: JSON.stringify(payload)
        })
          .then(response => response.json())
          .then(districts => {
            districts.forEach(district => {
              const option = document.createElement('option');
              option.value = district.name; // Assuming you have an _id field in your District model
              option.text = district.name;
              FoodSelect.add(option);
            });
          })
          .catch(error => console.error(error));
        console.log(selectedType)
      }
    });



    FoodSelect.addEventListener('change', () => {
        const FoodSelectr = FoodSelect.value;
    
         
        // Fetch districts for the selected state from the server
        if (FoodSelectr) {
          // fetch(`/districts?state=${selectedType}`)
          const payload = {
            name:FoodSelectr
          };
          fetch('https://teja-sri.onrender.com/typer2', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
                  // Add any other headers if needed
              },
              body: JSON.stringify(payload)
          })
            .then(response => response.json())
            .then(rating => {
                console.log(rating[0].totalStars);
                rae = (Number(rating[0].totalStars))/(Number(rating[0].numFeedback));
                ratingDisplay.innerText = `Rating: ${rae}`;
                userDisplay.innerText = `no of feedbacks: ${rating[0].numFeedback}
                
                total Stars gained by food : ${rating[0].totalStars}`;
              })
              .catch(error => console.error(error));
            }
  });
  });
  