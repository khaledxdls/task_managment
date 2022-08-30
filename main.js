const plus1 = document.querySelector(".plus-1");
const plus2 = document.querySelector(".plus-2");
const plus3 = document.querySelector(".plus-3");
const par1 = document.querySelector(".par-1");
const par2 = document.querySelector(".par-2");
const par3 = document.querySelector(".par-3");

plus1.addEventListener("click", function() {
    plus1.classList.toggle("ph-plus");
    plus1.classList.toggle("ph-minus");
    par1.classList.toggle("hidden");
});
plus2.addEventListener("click", function() {
    plus2.classList.toggle("ph-plus");
    plus2.classList.toggle("ph-minus");
    par2.classList.toggle("hidden");
});
plus3.addEventListener("click", function() {
    plus3.classList.toggle("ph-plus");
    plus3.classList.toggle("ph-minus");
    par3.classList.toggle("hidden");
});