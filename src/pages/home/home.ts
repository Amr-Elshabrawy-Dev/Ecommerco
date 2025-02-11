import axios from "axios";

// Start Product logic
// --------------------------------

export function initHome () {
  console.log("🚀 ~ Amr Elshabrawy ~ 🚀");
  let productDiv = document.querySelector("#product-div");
  console.log("🚀 ~ productDiv:", productDiv);
  let pageNum = 1;

  const getData = () => {
    axios
      .get("http://localhost:3000/product", {
        params: {
          _sort: "rating",
          _order: "desc",
          _page: pageNum,
          _limit: 8,
        },
      })
      .then(function (response) {
        showData(response);
        // activePagination(response, pageNum);
        console.log("🚀 ~ response.data:", response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  };
  getData();
  interface ProductData {
    images: string[];
    brand: string;
    title: string;
    price: number;
    discountPercentage: number;
    rating: number;
  }

  interface ApiResponse {
    data: ProductData[];
  }

  const showData = (response: ApiResponse): void => {
    const productDiv = document.querySelector("#product-div") as HTMLElement;
    productDiv.innerHTML = `
      <img src="assets/images/logos/svg-animation.svg" alt="logo loader" />
      `;
    let productContent = "";
    setTimeout(() => {
      for (const data of response.data) {
        productContent += `
        <div class="col">
          <div class="card product-card">
            <div class="card-header bg-transparent border-bottom-0">
              <div class="d-flex align-items-center justify-content-end gap-3 position-relative">
                <a href="">
                  <div class="product-compare">
                    <span>
                      <i class="bx bx-git-compare"></i>
                      compare
                    </span>
                  </div>
                </a>
                <div class="position-absolute start-0 top-0 mt-1">
                  <div onclick="like(this)" class="product-wishlist cursor-pointer mb-2">
                    <i class="bx bx-heart"></i>
                  </div>
                  <div onclick="like(this)" class="product-wishlist cursor-pointer mb-2">
                    <i class="bx bxs-cart-add"></i>
                  </div>
                  <div onclick="like(this)" class="product-wishlist cursor-pointer">
                    <i class="bx bx-zoom-in"></i>
                  </div>
                </div>
              </div>
            </div>
            <a href="">
              <img class="card-img-top product-img"
                src="..${data.images[0]}" alt="">
            </a>
            <div class="card-body">
              <div class="product-info px-2">
                <a href="">
                  <p class="product-category">${data.brand}</p>
                </a>
                <a href="">
                  <h6 class="product-name mb-2">${data.title}</h6>
                </a>
                <div class="d-flex align-items-center">
                  <div class="product-price mb-1">
                    <small class="text-decoration-line-through text-white-50 me-1">$${
                      data.price
                    }</small>
                    <small class="fs-5">$${
                      data.price - (data.price * data.discountPercentage) / 100
                    }</small>
                  </div>
                  <div class="ms-auto">
                    <div class="product-rating" title="rating ( ${
                      data.rating
                    } )">
                      <div class="rating-star" style="width: ${
                        (data.rating * 100) / 5
                      }%;">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
              `;
        productDiv.innerHTML = productContent;
      }
    }, 2500);
  };

  let likeStorage: string | LikeStorage | null = localStorage.getItem("like");

  interface LikeElement extends HTMLElement {
    children: HTMLCollection;
  }

  interface LikeStorage extends Array<LikeElement> {}

  let like = function (el: LikeElement): void {
    (el.children[0] as HTMLElement).style.color = "red";

    if (likeStorage !== null && typeof likeStorage === 'string') {
      likeStorage = JSON.parse(likeStorage) as LikeStorage;
      likeStorage.push(el);
      localStorage.setItem("like", JSON.stringify(likeStorage));
    } else {
      likeStorage = [] as LikeStorage;
      likeStorage.push(el);
      localStorage.setItem("like", JSON.stringify(likeStorage));
    }
  };
}
