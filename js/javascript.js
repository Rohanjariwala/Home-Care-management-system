/** menu active link **/
document.querySelectorAll("#nav_menu a").forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  }
});
/** menu active link **/
var tabLink = document.querySelectorAll(".member");

tabLink.forEach(function (item) {
  item.addEventListener(
    "click",
    function () {
      tabLink.forEach(function (item) {
        item.classList.remove("active");
      });
      item.classList.add("active");
    },
    false
  );
});

/** form hide show js */

const btn = document.getElementById("form_click");
const form = document.querySelector("form");
btn.addEventListener("click", click);

function click() {
  form.classList.remove("hide");
  form.classList.add("show");
}

/** table pagination **/
var $table = document.getElementById("table"),
  $n = 9,
  $rowCount = $table.rows.length,
  $firstRow = $table.rows[0].firstElementChild.tagName,
  $hasHead = $firstRow === "TH",
  $tr = [],
  $i,
  $ii,
  $j = $hasHead ? 1 : 0,
  $th = $hasHead ? $table.rows[0].outerHTML : "";

var $pageCount = Math.ceil($rowCount / $n);

if ($pageCount > 1) {
  for ($i = $j, $ii = 0; $i < $rowCount; $i++, $ii++)
    $tr[$ii] = $table.rows[$i].outerHTML;

  $table.insertAdjacentHTML("afterend", "<div id='buttons'></div");

  sort(1);
}

function sort($p) {
  var $rows = $th,
    $s = $n * $p - $n;
  for ($i = $s; $i < $s + $n && $i < $tr.length; $i++) $rows += $tr[$i];

  $table.innerHTML = $rows;

  document.getElementById("buttons").innerHTML = pageButtons($pageCount, $p);

  document.getElementById("id" + $p).setAttribute("class", "active");
}

function pageButtons($pCount, $cur) {
  var $prevDis = $cur == 1 ? "disabled" : "",
    $nextDis = $cur == $pCount ? "disabled" : "",
    $buttons =
      "<input type='button' class='arrow_btn prev' value='&lt;&lt; Prev' onclick='sort(" +
      ($cur - 1) +
      ")' " +
      $prevDis +
      ">";
  for ($i = 1; $i <= $pCount; $i++)
    $buttons +=
      "<input type='button' id='id" +
      $i +
      "'value='" +
      $i +
      "' onclick='sort(" +
      $i +
      ")'>";
  $buttons +=
    "<input type='button' class='arrow_btn next' value='Next &gt;&gt;' onclick='sort(" +
    ($cur + 1) +
    ")' " +
    $nextDis +
    ">";
  return $buttons;
}
/** table pagination **/
