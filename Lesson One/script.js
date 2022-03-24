/**
 * Create a travel bag object, with properties and some HTML to display the properties
 */

// Single line comment

const updateTravelBag = (update) => { // creating an arrow function
    let main = document.querySelector("main");
    main.innerHTML = markup(travelBag);
    console.info(update);
};

const travelBag = {
    name: "The Batman",
    volume: 52,
    color: "Black and Yellow",
    dimensions: {
        length: 21,
        height: 22,
        width: 12
    },
    box: {
        name: "Joker",
        color: "Riddler",
        shape: "Poison Ivy",
        size: "TwoFace",
        content: "Bane"
    },
    zipperOpen: false,
    toggleZipper: function(zipperStatus) {
        this.zipperOpen = zipperStatus;
    },
    newDimensions: function(dimensionsLength, dimensionsHeight, dimensionsWidth){
        this.dimensions.length = dimensionsLength;
        this.dimensions.height = dimensionsHeight;
        this.dimensions.width = dimensionsWidth;
    },
}

const markup = (travelBag) => {
    return `
    <div>
        <h3 style="color:black;">${travelBag.name}</h3>
        <ul>
        <li style="color:red;">Robin:${travelBag.color}</li>
        <li>Catwoman:${travelBag.dimensions.height}</li>
        <li style="color:orange;">Alfred:${travelBag.dimensions.width}</li>
        <li style="color:purple;">Comedy:${travelBag.box.name}</li>
        <li style="color:green;">Pop Quiz:${travelBag.box.color}</li>
        <li style="color:pink;">Pretty Flowers:${travelBag.box.shape}</li>
        <li style="color:red;">Two Sides:${travelBag.box.size}</li>
        <li style="color:blue;">Monster:${travelBag.box.content}</li>
        </ul>
        <img src="images/WayneManor.jpg" />
        <html>
        <body>
        
        <video width="320" height="240" autoplay>
          <source src="Bats.mp4" type="Bats/mp4">
          <source src="Bats.ogg" type="Bats/ogg">
          Your browser does not support the video tag.
        </video>
        
        </body>
        </html>

    </div>    `
}

const main = document.createElement("main");
main.innerHTML = markup(travelBag);
document.body.appendChild(main); // drop the contents of the main element onto the page