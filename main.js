var welcomeUser = document.getElementById('welcome-header')
var closeIcon = document.getElementById("close-icon")

closeIcon.addEventListener("click", removeBanner)
function removeBanner(){
  console.log("im in");
  welcomeUser.style.display = "none";
}




var clickClipboard = document.querySelector('.img-clipboard')
var clickWallet = document.querySelector(".wallet-img")
var clickWoman = document.querySelector(".img-woman")


clickClipboard.addEventListener("click", clipboardBorder)
clickWallet.addEventListener("click", walletBorder)
clickWoman.addEventListener("click", womanBorder)


// add blue-border to wallet
function walletBorder() {
  clickClipboard.classList.remove("blue-border");
  clickWallet.classList.add("blue-border");
  clickWoman.classList.remove("blue-border")
  innerhtmlTest()
}
// add blue border to woman-img
function womanBorder() {
  clickClipboard.classList.remove("blue-border");
  clickWallet.classList.remove("blue-border");
  clickWoman.classList.add("blue-border")
}
// add blue border to clipboard
function clipboardBorder() {
  clickClipboard.classList.add("blue-border");
  clickWallet.classList.remove("blue-border");
  clickWoman.classList.remove("blue-border")
}


var outer = document.querySelector(".outer")

clickClipboard.addEventListener("click", outerPage)
function outerPage () {
  outer.hidden = false
}

var mainContainer = document.querySelector(".main-article")
function innerhtmlTest() {
  console.log("meow");
  mainContainer.innerHTML = `<header class="header-title">
  <h1 class="h1-transaction">Transactions</h1>
  <section class="three-transaction-buttons">

      <button class="button-shared-class all-button" type="button" name="button">All</button>
      <button class="button-shared-class" type="button" name="button">Inflow</button>
      <button class="button-shared-class" type="button" name="button">Outflow</button>

  </section>
</header>
<article class="article-wrapping-both-table-form">
  <section class="table2-wrapper">
    <table>
      <tr>
        <th class="table-legend" colspan="1">Date</th>
        <th class="table-legend account-column2" colspan="1">Account</th>
        <th class="table-legend" colspan="1">Payee</th>
        <th class="table-legend" colspan="1">Inflow</th>
        <th class="table-legend" colspan="1">Outflow</th>
      </tr>
      <tr>
        <td>10-25-19</td>
        <td class="account-column2">Credit Card</td>
        <td>Target</td>
        <td> - </td>
        <td>$82.35</td>
      </tr>
      <tr>
        <td>10-24-19</td>
        <td class="account-column2">Credit Card</td>
        <td>Express</td>
        <td> - </td>
        <td>$212.24</td>
      </tr>
      <tr>
        <td>10-22-19</td>
        <td class="account-column2">Checking</td>
        <td>Paycheck</td>
        <td>$1319.12</td>
        <td> - </td>
      </tr>
      <tr>
        <td>10-21-19</td>
        <td class="account-column2">Credit Card</td>
        <td>Trader Joes</td>
        <td> - </td>
        <td>$54.92</td>
      </tr>
      <tr>
        <td>10-20-19</td>
        <td class="account-column2">Credit Card</td>
        <td>Shell</td>
        <td> - </td>
        <td>$46.23</td>
      </tr>
      <tr>
        <td>10-19-19</td>
        <td class="account-column2">Saving</td>
        <td>Rent</td>
        <td>$800.00</td>
        <td> - </td>
      </tr>
      <tr>
        <td>10-19-19</td>
        <td class="account-column2">Checkings</td>
        <td>Hapa Sushi</td>
        <td> - </td>
        <td>$13.97</td>
      </tr>
      <tr>
        <td>10-18-19</td>
        <td class="account-column2">Credit Card</td>
        <td>Target</td>
        <td> - </td>
        <td>$82.35</td>
      </tr>
      <tr>
        <td>10-18-19</td>
        <td class="account-column2">Credit Card</td>
        <td>PigTrain</td>
        <td> - </td>
        <td>$4.83</td>
      </tr>
      <tr>
        <td>10-24-19</td>
        <td class="account-column2">Checking</td>
        <td>RTD</td>
        <td> - </td>
        <td>$6.00</td>
      </tr>
      <tr>
        <td>10-24-19</td>
        <td class="account-column2">Checking</td>
        <td>Express</td>
        <td> - </td>
        <td>$212.24</td>
      </tr>
      <tr>
        <td>10-24-19</td>
        <td class="account-column2">Checking</td>
        <td>Express</td>
        <td> - </td>
        <td>$212.24</td>
      </tr>
      <tr>
        <td>10-24-19</td>
        <td class="account-column2">Checking</td>
        <td>Express</td>
        <td> - </td>
        <td>$212.24</td>
      </tr>
      <tr>
        <td>10-24-19</td>
        <td class="account-column2">Checking</td>
        <td>Express</td>
        <td> - </td>
        <td>$212.24</td>
      </tr>
      <tr>
        <td>10-24-19</td>
        <td class="account-column2">Checking</td>
        <td>Express</td>
        <td> - </td>
        <td>$212.24</td>
      </tr>
    </table>
  </section>

  <section class="new-transactions">
    <h2>New Transaction</h2>
    <form class="new-transaction-form" action="index.html" method="post">

      <label class="title-of-input">Type Of Transaction:</label>
      <select class="new-transaction-dropdown" name="expense">
        <option value="unKnown">Expense</option>
        <option value="beer">Beer</option>
        <option value="gas">Gas</option>
        <option value="movies">Movies</option>
      </select>

      <label class="title-of-input">Catigory:</label>
      <select class="new-transaction-dropdown" name="- Select One -">
        <option value="unKnown"> - Select One - </option>
        <option value="unKnown">unKnown</option>
        <option value="unKnown">unKnown</option>
        <option value="unKnown">unKnown</option>
      </select>

      <label class="title-of-input">Account Form:</label>
      <select class="new-transaction-dropdown" name="- select-one -">
        <option value="unKnown"> - Select One - </option>
        <option value="unKnown">unKnown</option>
        <option value="unKnown">unKnown</option>
        <option value="unKnown">unKnown</option>
      </select>

      <label class="title-of-input" for="payee">Payee:</label>
      <input class="new-transaction-input" id="payee" type="text" name="payee" value="" />

      <label class="title-of-input" for="outflow">Outflow:</label>
      <input class="new-transaction-input" id="outflow" type="text" name="outflow" value="">

      <label class="title-of-input" for="catigory">Catigory:</label>
      <input class="new-transaction-input" id="catigory" type="text" name="catigory" value="">

      <input class="new-transaction-submit-button" type="submit" name="submit-button" value="Log Expense">
    </form>
  </section>
 </article>
</main>`
}
// call innerHTML function in the wallet button
