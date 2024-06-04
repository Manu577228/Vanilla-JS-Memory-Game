// Define an array of objects representing cards with image URLs
const customCardArray = [
    {
      name: "Card 1",
      img: "https://images.pexels.com/photos/5945659/pexels-photo-5945659.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Card 2",
      img: "https://images.pexels.com/photos/2858083/pexels-photo-2858083.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Card 3",
      img: "https://images.pexels.com/photos/584367/pexels-photo-584367.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Card 4",
      img: "https://images.pexels.com/photos/1071875/pexels-photo-1071875.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Card 5",
      img: "https://images.pexels.com/photos/5946081/pexels-photo-5946081.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Card 6",
      img: "https://images.pexels.com/photos/3487715/pexels-photo-3487715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Card 7",
      img: "https://images.pexels.com/photos/934055/pexels-photo-934055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Card 8",
      img: "https://images.pexels.com/photos/1178610/pexels-photo-1178610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  
  // Double the card array to create pairs
  const fullCustomCardArray = [...customCardArray, ...customCardArray];
  
  // Shuffle the full card array
  fullCustomCardArray.sort(() => 0.5 - Math.random());
  
  // Select the grid and result elements
  const customGrid = document.getElementById("custom-grid");
  const customResultDisplay = document.getElementById("custom-result");
  
  // Initialize game state variables
  let customFlippedCards = [];
  let customFlippedCardsIds = [];
  let customMatchedCards = [];
  
  // Create the game board
  function createCustomBoard() {
    fullCustomCardArray.forEach((card, index) => {
      const customCardElement = document.createElement("img");
      customCardElement.src =
        "https://media.gettyimages.com/id/1480612681/video/abstract-halftone-motion-background-moving-dots-seamless-loop.jpg?s=640x640&k=20&c=t7jdDKj-Uw7UzYvnBhjRbOh7l32BtmrgvUVTXB69KXQ=";
      customCardElement.alt = "Custom Card";
      customCardElement.dataset.id = index;
      customCardElement.classList.add("custom-card");
      customCardElement.addEventListener("click", flipCustomCard);
      customGrid.appendChild(customCardElement);
    });
  }
  
  // Handle custom card flipping
  function flipCustomCard() {
    const customCardId = this.dataset.id;
  
    // Prevent flipping already matched or flipped cards
    if (!customFlippedCardsIds.includes(customCardId) && customFlippedCards.length < 2) {
      this.src = fullCustomCardArray[customCardId].img;
      customFlippedCards.push(fullCustomCardArray[customCardId].name);
      customFlippedCardsIds.push(customCardId);
  
      if (customFlippedCards.length === 2) {
        setTimeout(checkCustomMatch, 500);
      }
    }
  }
  
  // Check for matching custom cards
  function checkCustomMatch() {
    const [firstCustomCardId, secondCustomCardId] = customFlippedCardsIds;
    const [firstCustomCard, secondCustomCard] = customFlippedCards;
  
    if (firstCustomCard === secondCustomCard) {
      const matchedCustomIds = [firstCustomCardId, secondCustomCardId];
      matchedCustomIds.forEach((id) => {
        const customCardElement = document.querySelector(`img[data-id='${id}']`);
        customCardElement.classList.add("custom-matched");
        customMatchedCards.push(id);
      });
      customResultDisplay.textContent = customMatchedCards.length / 2;
  
      if (customMatchedCards.length === fullCustomCardArray.length) {
        customResultDisplay.textContent = "Congratulations! You won";
      }
    } else {
      // Flip unmatched custom cards back
      customFlippedCardsIds.forEach((id) => {
        const customCardElement = document.querySelector(`img[data-id='${id}']`);
        customCardElement.src =
          "https://media.gettyimages.com/id/1480612681/video/abstract-halftone-motion-background-moving-dots-seamless-loop.jpg?s=640x640&k=20&c=t7jdDKj-Uw7UzYvnBhjRbOh7l32BtmrgvUVTXB69KXQ=";
      });
    }
  
    // Reset flipped custom card arrays
    customFlippedCards = [];
    customFlippedCardsIds = [];
  }
  
  // Initialize the custom game board
  createCustomBoard();
  