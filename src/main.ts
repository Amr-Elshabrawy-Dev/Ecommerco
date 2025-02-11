import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { router } from "./router";

const urlPath = window.location.pathname;
console.log("🚀 ~ urlPath:", urlPath);

router();

// Start Scroll to top button
// --------------------------------

const scrollToTopButton = document.getElementById("topBtn");

if (scrollToTopButton) {
  window.addEventListener("scroll", handleScroll);

  function handleScroll() {
    if (window.scrollY >= 835) {
      scrollToTopButton?.classList.remove("d-none");
    } else {
      scrollToTopButton?.classList.add("d-none");
    }
  }

  scrollToTopButton.addEventListener("click", () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  );
}
//End Scroll To Top Button
// --------------------------------

// Start Settings Box
// --------------------------------
const bodyColor = localStorage.getItem("bg_theme");
if (bodyColor !== null) {
  document.documentElement.style.setProperty("--color-bg-body", bodyColor);

  document.querySelectorAll(".bg-theme").forEach((el) => {
    const element = el as HTMLElement;
    element.classList.remove("active");
    if (element.dataset.color === bodyColor) {
      element.classList.add("active");
    }
  });
}

// const settingsBtn = document.querySelector<HTMLElement>("#settings-btn");
// const offcanvasScrolling = document.querySelector<HTMLElement>("#offcanvasScrolling");

// if (settingsBtn && offcanvasScrolling) {
//   settingsBtn.addEventListener("click", () => {
//     offcanvasScrolling.classList.toggle("show");
//     const isOffcanvasVisible = offcanvasScrolling.classList.contains("show");
//     const icon = settingsBtn.firstElementChild;

//     if (icon) {
//       if (isOffcanvasVisible) {
//         icon.classList.add("bx-spin");
//       } else {
//         icon.classList.remove("bx-spin");
//       }
//     }
//   });
// }

const bgTheme = document.querySelectorAll(".bg-theme");
bgTheme.forEach((li) => {
  li.addEventListener("click", function (this: HTMLElement) {
    document.documentElement.style.setProperty(
      "--color-bg-body",
      this.dataset.color!
    );

    localStorage.setItem("bg_theme", this.dataset.color!);

    this.parentElement?.querySelectorAll(".active").forEach((el) => {
      console.log(el);
      el.classList.remove("active");
    });

    this.classList.add("active");
  });
});



// End Settings Box
// --------------------------------

// let CreatePagination = (response) => {
//   let pages = Math.ceil(70 / response.data.length);
//   const elePagination = document.querySelector(".pagination");
//   for (let i = 1; i <= pages; i++) {
//     const liPagination = document.createElement("li");
//     liPagination.classList.add("page-item");
//     const linkPagination = document.createElement("a");
//     linkPagination.classList.add("page-link", "page-num");
//     linkPagination.setAttribute("type", "button");
//     linkPagination.innerHTML = i;
//     liPagination.append(linkPagination);
//     elePagination.appendChild(liPagination);
//     console.log(elePagination.children);
//   }
// };
// let activePagination = (response) => {
//   console.log(pageNum);
//   CreatePagination(response);
//   const pageLink = document.querySelectorAll(".page-num");
//   pageLink.forEach((link) => {
//     link.addEventListener("click", (e) => {
//       pageLink.forEach((el) => {
//         el.classList.remove("active");
//       });
//       e.target.classList.add("active");
//       pageNum = +e.target.innerHTML;
//       console.log(pageNum);
//       getData();
//     });
//   });
// };

// axios
//   .get("http://localhost:3000/product", {
//     params: {
//       _sort: "rating",
//       _order: "desc",
//       _page: pageNum,
//       _limit: 8,
//     },
//   })
//   .then(function (response) {
//     console.log(response);
//     let pages = Math.ceil(70 / response.data.length);
//     console.log(pages);
//     for (let i = 1; i <= pages; i++) {
//       console.log(i);
//       const elePagination = document.querySelector(".pagination");
//       const liPagination = document.createElement("li");
//       liPagination.classList.add("page-item");
//       const linkPagination = document.createElement("a");
//       linkPagination.classList.add("page-link", "page-num");
//       linkPagination.setAttribute("type", "button");
//       linkPagination.innerHTML = i;
//       liPagination.append(linkPagination);
//       elePagination.append(liPagination);
//     }

//     const pageLink = document.querySelectorAll(".page-num");
//     pageLink.forEach((link) => {
//       link.addEventListener("click", (e) => {
//         pageLink.forEach((el) => {
//           el.classList.remove("active");
//         });
//         e.target.classList.add("active");
//         pageNum = +e.target.innerHTML;
//       });
//       console.log(link);
//     });
//     productDiv.innerHTML = `
//     <div class="w-25">
//       <svg class="amr" viewBox="0 0 502 455" xmlns="http://www.w3.org/2000/svg" version="1.1"
//         xmlns:xlink="http://www.w3.org/1999/xlink">
//         <path d=" M 5 125, L 5 320, 220 445, 280 445, 495 320, 495 120, 280 10, 220 10, z  " stroke="#0dcaf0"
//           stroke-width="5" fill="none" />
//         <path d="M 80 245, L 80 325, 40 300, 40 150, 160 80, 160 370, 120 345, 120 245,z M 80 170, 80 205, 120 205, 120 145,z
//               M 180 70, L 220 45, 250 145, 280 45, 320 70, 320 380, 280 405, 280 165, 270 200, 230 200, 220 165, 220 405, 180 380, z
//               M 380 245, L 380 345, 340 370, 340 80, 460 140, 460 210, 440 220, 460 230, 460 300, 420 325, 420 265, 395 245,z
//               M 380 195,L 395 195, 420 175, 420 165, 380 147,z " fill="#0000" stroke="#0dcaf0" stroke-width="5" />
//       </svg>
//     </div>
//     `;
//     let productContent = "";
//     setTimeout(() => {
//       for (const data of response.data) {
//         console.log(Math.ceil(70 / response.data.length));

//         productContent += `
//           <div class="p-3 col-lg-3 col-md-4 col-sm-6">
//             <div class="product-block rounded-2 position-relative overflow-hidden">
//               <div class="product-layer position-absolute transition">
//                 <div class="h-100 d-flex flex-column justify-content-between align-items-center p-3">
//                   <div class="w-100 d-flex justify-content-between">
//                     <div class="product-rating bg-transparent d-flex flex-column justify-content-end overflow-hidden border border-2 border-light rounded-5 h-100">
//                     <div style="height: ${
//                       (data.rating * 100) / 5
//                     }%" class="bg-info w-100 border-top border-2">
//                       <span class="fs-7">${data.rating * 2}</span>
//                     </div>
//                   </div>
//                   <div class="">
//                     <a class="d-block text-info fs-5 mb-2" href=""><i class="fa fa-heart" aria-hidden="true"></i></a>
//                     <a class="d-block text-info fs-5 mb-2" href=""><i class="fa fa-cart-plus" aria-hidden="true"></i></a>
//                     <a class="d-block text-info fs-5" href=""><i class="fa fa-share-from-square" aria-hidden="true"></i></a>
//                   </div>
//                   </div>
//                   <div class="text-center text-info">
//                     <h4 class="fs-4">${data.title}</h4>
//                     <p class=" fw-bold">${data.description}</p>
//                   </div>
//                   <div>
//                   <button class="product-btn btn btn-outline-info fw-bold text-info transition" type="button">add cart</button>
//                   </div>
//                 </div>
//               </div>
//               <a class="" href="#">
//               <img class="product-img img-fluid" src="${data.images[0]}" alt="brand">
//               </a>
//             </div>
//           </div>
//             `;
//         productDiv.innerHTML = productContent;
//       }
//     }, 8000);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(function () {});

// End Product logic
// --------------------------------

// Start pagination logic
// --------------------------------

// End pagination logic
// --------------------------------

// let search =document.getElementById("search");
// search.addEventListener('keydown', (e)=> {
//   console.log(this)
//   console.log(e.key ,'==>', e.keyCode )
// })
// search.onclick = function() {
//   console.log(this.type)
//   console.log(this.key ,'==>', this.keyCode )
// }
