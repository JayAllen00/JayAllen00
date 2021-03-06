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
    name: "New Travel",
    volume: 52,
    color: "burgundy",
    dimensions: {
        length: 22,
        height: 22,
        width: 12
    },
    box: {
        name: "gift box",
        color: "red",
        shape: "circle",
        size: "small",
        content: "watch"
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
        <li>Volume:${travelBag.volume}</li>
        <li style="color:red;">Color:${travelBag.color}</li>
        <li>Length:${travelBag.dimensions.length} inches</li>
        <li>Height:${travelBag.dimensions.height}</li>
        <li>Width:${travelBag.dimensions.width}</li>
        <li>Bag contents:${travelBag.box.name}</li>
        <li>Box color:${travelBag.box.color}</li>
        <li>Box shape:${travelBag.box.shape}</li>
        <li>Box size:${travelBag.box.size}</li>
        <li>Box contents:${travelBag.box.content}</li>
        <li>Zipper:${travelBag.zipperOpen ? "Open" : "Closed"}</li>
        </ul>
        <img src="images/BlueAudi.jpg" />
    </div>    `
}

const main = document.createElement("main");
main.innerHTML = markup(travelBag);
document.body.appendChild(main); // drop the contents of the main element onto the page