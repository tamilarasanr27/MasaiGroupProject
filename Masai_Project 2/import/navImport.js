const nav = () => {
  return `<div id="sezzle">
    <p>
      Shopping made easy.Buy now, pay later with sezzle
      <a href="#">See details</a>
    </p>
  </div>
  <div id="a">
    <div id="b">
      <div class="a">
        <img
          src="data:image/png;base64,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";

          alt=""
        />
      </div>

      <div class="b">
        <select id="option">
          <option value="">All Departments</option>
          <option value="">Auto</option>
          <option value="">Baby</option>
          <option value="">Beauty</option>
          <option value="">Books</option>
          <option value="">Business</option>
          <option value="">Cameras</option>
          <option value="">Clothes</option>
          <option value="">Collectibles</option>
          <option value="">Crafts</option>
          <option value="">Electronincs</option>
          <option value="">Food and Drink</option>
          <option value="">Garden</option>
          <option value="">gifts</option>
          <option value="">Health & Nutrition</option>
          <option value="">Home Store</option>
          <option value="">Jewlery</option>
          <option value="">Movies</option>
          <option value="">Music</option>
          <option value="">Party supplies</option>
          <option value="">Posters</option>
          <option value="">Shoes</option>
          <option value="">Software</option>
          <option value="">Sports Fan Shop</option>
          <option value="">Sports and Fitness</option>
          <option value="">Tools</option>
          <option value="">Toys</option>
          <option value="">Travel</option>
          <option value="">Video Games</option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <div id="navbar">
          <div id="searchbar">
            <input type="text" id="search" placeholder="Search SHOP.COM" />
          </div>

          <!-- <input type="text" id="search" placeholder="Search SHOP.COM"/>    -->
        </div>

        <!-- <button id="forapi" onclick="searchImages()">Search</button> -->
      </div>

      <div class="c">
        <img
          src="https://img.shop.com/Image/header2013/motives-usa-can-100110-sculpting-concealer-banners-header1650486339409.svg"
          alt=""
        />
      </div>
    </div>

    <div id="c">
      <div class="d">
        <span class="material-symbols-outlined">
          menu
          <select class="categorie">
            <option value="#">Categories</option>
            <option value="#">Summer</option>
            <option value="">Fathers's Day</option>
            <option value="">Gift Center</option>
            <option value="">SHOP.COM Home Warranties</option>
            <option value="">Onecart Exclusive Deals</option>
            <option value="">Clothes</option>
            <option value="">Shoe</option>
            <option value="">Beauty</option>
            <option value="">Home</option>
            <option value="">Electronics</option>
            <option value="">Health & Nutrition</option>
            <option value="">Jewelery</option>
            <option value="">Kids</option>
            <option value="">Pet Supplies</option>
            <option value="">Food & Drink</option>
            <option value="">Sports</option>
            <option value="">Travel</option>
            <option value="">SHOP Travel</option>
            <option value="">All Stores</option>
            <option value="">Exclusive Brands</option>
            <option value="">All Departments</option>
            <option value="">Account</option>
            <option value="">Track Orders</option>
            <option value="">Reorder items-Updated</option>
            <option value="">Help</option>
          </select>
        </span>
      </div>
      <div class="e">
        <div><a href="#">Exclusive Brands</a></div>
        <div><a href="#">Stores</a></div>
        <div><a href="#">Deals</a></div>
        <div><a href="#">Shop Travel</a></div>
        <div><a href="#">Departments</a></div>
        <div><a href="#">Shop Buddy</a></div>
        <div><a href="#">Shop Local</a></div>
      </div>
      <div class="f">
        <div>
          <img
            src="https://img.shop.com/Image/resources/images/icon-account-circle-24px.svg"
            alt=""
          /><a href="signup.html">Signin</a>
        </div>
        <div>
          <img
            src="https://img.shop.com/Image/resources/images/icon-orders-24px.svg"
            alt=""
          /><a href="#">Orders</a>
        </div>
        <div>
          <img
            src="https://img.shop.com/Image/resources/images/icon-shopping-cart-24px.svg"
            alt=""
          /><a href="#">Carts</a>
        </div>
      </div>
    </div>
  </div>
  <div id="zz">
    <div class="zz">Your Shop Consultant is SHOP.COM</div>
    <div class="yy">
      Earn up to 50% Cashback on eligible purchases.,
      <a href="#">Learn More</a>
    </div>
  </div>
`;
};

export default nav;