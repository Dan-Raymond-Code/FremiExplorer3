$(function () {
  $("[id^=select-subcats]").change(function (event) {
    let selectedSubcat = event.target.value;
    window.location.href = window.location.origin + "/" + selectedSubcat;
  });
});

let catDDL = document.getElementById("select-category-nav");
let subcatDDL = document.getElementById("select-subcategory-nav");
let catDDLMain = document.getElementById("select-category-main");
let subcatDDLMain = document.getElementById("select-subcategory-main");

let catDDLs = document.getElementsByClassName("select-category-nav");

if (catDDLs) {
  console.log(catDDLs.length);

  for (let i = 0; i < catDDLs.length; i++) {
    console.log("CatDDL = ", catDDLs[i].id);
  }
}

let subcatDDLs = document.getElementsByClassName("select-subcategory-nav");

if (subcatDDLs) {
  console.log(subcatDDLs.length);

  for (let i = 0; i < subcatDDLs.length; i++) {
    console.log("SubcatDDL = ", subcatDDLs[i].id);
  }
}

/* NAV MENU */
if (!catDDL) {
  console.error("Can't obtain category drop down list from NAV");
} else {
  catDDL.addEventListener("change", function (event) {
    let selectedCat = event.target.value;

    if (selectedCat == "") {
      subcatDDL.options.length = 0;
      // subcatDDL.options[0] = new Option("Choose Subcategory...", "");
      subcatDDL.options[0] = new Option("[Empty]", "");
    } else {
      let selectedOptions = categoryOptions[selectedCat];

      subcatDDL.options[0] = new Option("Choose Subcategory...", "");

      for (var i = 0; i < selectedOptions.length; i++) {
        subcatDDL.options[i + 1] = new Option(
          selectedOptions[i].text,
          selectedOptions[i].value
        );
      }
    }
  });
}

if (!subcatDDL) {
  console.log("Can't get subcategory drop down list from NAV");
} else {
  subcatDDL.addEventListener("change", function (event) {
    let selectedSubcat = event.target.value;
    //console.log(selectedSubcat);
    window.location.href = window.location.origin + "/" + selectedSubcat;
  });
}

/* MAIN MENU */
if (!catDDLMain) {
  console.error("Can't obtain category drop down list from Main");
} else {
  catDDLMain.addEventListener("change", function (event) {
    let selectedCat = event.target.value;

    if (selectedCat == "") {
      subcatDDLMain.options.length = 0;
      subcatDDLMain.options[0] = new Option("[Empty]", "");
      //subcatDDLMain.options[0] = new Option("Choose Subcategory...", "");
    } else {
      let selectedOptions = categoryOptions[selectedCat];

      subcatDDLMain.options[0] = new Option("Choose Subcategory...", "");
      //subcatDDLMain.options[].length = 1;

      for (var i = 0; i < selectedOptions.length; i++) {
        subcatDDLMain.options[i + 1] = new Option(
          selectedOptions[i].text,
          selectedOptions[i].value
        );
      }
    }
  });
}

if (!subcatDDLMain) {
  console.log("Can't get subcategory drop down list from Main");
} else {
  subcatDDLMain.addEventListener("change", function (event) {
    let selectedSubcat = event.target.value;
    //console.log(selectedSubcat);
    window.location.href = window.location.origin + "/" + selectedSubcat;
  });
}
