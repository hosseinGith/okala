function createItem() {
  const slider = document.createElement("div");
  slider.className = "swiper-slide  ";

  const itemsContainer = document.createElement("div");
  itemsContainer.className = "showModalButton flex flex-col h-full w-full gap-2 items-center";

  function createSingleItem() {
    // Create a single item
    const item = document.createElement("div");
    item.className =
      "flex flex-col rounded-2xl items-center py-2 h-[170px] w-[105px] flex-shrink-0 justify-between bg-white";

    // Create the image container div
    const imageContainer = document.createElement("div");
    imageContainer.className = "relative w-full h-24";

    // Create the image
    const img = document.createElement("img");
    img.src =
      "https://asset.okala.com/unsigned/rs:fill/size:192:192/quality:100/plain/s3://cdn/product/429672.png";
    img.className = "w-full h-full object-cover";

    const badge = document.createElement("span");
    badge.className =
      "absolute top-1/2 right-4 border-white border bg-[#df2532] text-white w-10 rounded-lg text-[12px] flex items-center justify-center";
    badge.textContent = "۵۰%";

    // Append the image and badge to the image container
    imageContainer.appendChild(img);
    imageContainer.appendChild(badge);

    // Create the text container div
    const textContainer = document.createElement("div");
    textContainer.className = "flex items-end px-1 flex-col w-full";

    // Create the old price
    const oldPrice = document.createElement("span");
    oldPrice.className =
      "flex gap-1 line-through text-gray-500 text-[8px] crossed";
    oldPrice.innerHTML = "۵۰.۰۰۰ <span>تومان</span>";

    // Create the new price
    const newPrice = document.createElement("span");
    newPrice.className = "flex text-gray-900 text-[12px] crossed gap-1";
    newPrice.innerHTML = "۲۵.۰۰۰ <span>تومان</span>";

    // Append prices to the text container
    textContainer.appendChild(oldPrice);
    textContainer.appendChild(newPrice);

    // Create the button
    const button = document.createElement("button");
    button.className = "border-t w-full flex items-center justify-center p-1";

    // Create the SVG icon
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("width", "14");
    svg.setAttribute("height", "14");
    svg.setAttribute("viewBox", "0 0 448 512");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("fill", "#df2532");
    path.setAttribute(
      "d",
      "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
    );

    svg.appendChild(path);
    button.appendChild(svg);

    // Append all elements to the item div
    item.appendChild(imageContainer);
    item.appendChild(textContainer);
    item.appendChild(button);

    return item;
  }

  // Add two items to the itemsContainer
  itemsContainer.appendChild(createSingleItem());
  itemsContainer.appendChild(createSingleItem());

  // Append the itemsContainer to the slider div
  slider.appendChild(itemsContainer);

  return slider;
}

Array(10)
  .fill()
  .forEach(() =>
    document.querySelector("#offerProductsContainer").appendChild(createItem())
  );
