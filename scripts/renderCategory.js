const categoryContainer = document.querySelector("#categoryContainer");

const renderCategory = () => {
  const swipperSlide = document.createElement("div");
  swipperSlide.className = "swiper-slide   flex-col items-center";

  const div = document.createElement("div");
  div.className = "flex flex-col  w-16 h-fit items-center";

  const categoryImgDiv = document.createElement("div");
  categoryImgDiv.className = "w-[72px] h-fit bg-[#f0ebe8] flex-shrink-0";
  const categoryImg = document.createElement("img");
  categoryImg.src = "https://asset.okala.com/Media/Index_v2/Category/400970-nd";
  categoryImgDiv.append(categoryImg);
  const categoryTilte = document.createElement("span");
  categoryTilte.className =
    "text-gray-800 text-center text-[11px] font-[300] h-7 overflow-hidden";
  categoryTilte.textContent = "نوشیدنی ها";

  div.append(categoryImgDiv);
  div.append(categoryTilte);
  swipperSlide.append(div);
  return swipperSlide;
};

Array(20)
  .fill()
  .forEach(() => {
    categoryContainer.append(renderCategory());
  });

