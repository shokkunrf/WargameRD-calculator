
(function () {
  set_value();
  ap_calc();
  he_calc();
  recon_calc();
}());
function calc() {
  ap_calc();
  he_calc();
  recon_calc();
};

function set_value() {
  document.getElementById("ap__power").value = 18;
  document.getElementById("ap__type").value = "KE";
  document.getElementById("ap__armor").value = 13;
  document.getElementById("ap__strength").value = 10;
  document.getElementById("he__power").value = 3;
  document.getElementById("he__armor").value = 1;
  document.getElementById("he__strength").value = 10;
};

function ap_calc() {
  let app = document.getElementById("ap__power").value;
  let apt = document.getElementById("ap__type").value;
  let apa = document.getElementById("ap__armor").value;
  let aps = document.getElementById("ap__strength").value;
  let damage;
  if (apt == "HEAT" && app - apa >= 11) {
    damage = app - apa - 10 + 6;
  }
  else {
    damage = (app - apa) / 2 + 1;
  }
  if (apt == "HEAT" && damage <= 0) {
    damage = 1;
  }
  let result = damage / aps * 100;
  if (result > 100) {
    result = 100;
  }
  if (result < 0) {
    result = 0;
  }
  damage = damage.toFixed(1);
  result = result.toFixed(1);

  const VALUE_AP = document.getElementById("value__ap");
  const BAR_AP = document.getElementById("bar__ap");
  const VALUE_APHP = document.getElementById("value__aphp");
  VALUE_AP.innerHTML = damage;
  BAR_AP.style.width = 0 + "%";
  setTimeout(function () {
    BAR_AP.style.width = result + "%";
  }, 100);
  VALUE_APHP.innerHTML = result + "%";
};

function he_calc() {
  const DATA = [
    1, 0.4, 0.3, 0.2, 0.15, 0.1, 0.05, 0.01, 0.6, 0.3
  ];
  let hep = document.getElementById("he__power").value;
  let hea = document.getElementById("he__armor").value;
  let hes = document.getElementById("he__strength").value;
  let damage;
  let ary;
  let result;
  const VALUE_HE = document.getElementById("value__he");
  const BAR_HE = document.getElementById("bar__he");
  const VALUE_HEHP = document.getElementById("value__hehp");

  if (hea >= 0 && hea < 2) {
    ary = 0;
  } else if (hea == 2) {
    ary = 1;
  } else if (hea == 3) {
    ary = 2;
  } else if (hea == 4) {
    ary = 3;
  } else if (hea == 5) {
    ary = 4;
  } else if (hea >= 6 && hea < 8) {
    ary = 5;
  } else if (hea >= 8 && hea < 14) {
    ary = 6;
  } else if (hea >= 14 && hea < 26) {
    ary = 7;
  }
  damage = hep * DATA[ary];
  result = damage / hes * 100;
  if (result > 100) {
    result = 100;
  }
  if (result < 0) {
    result = 0;
  }
  damage = damage.toFixed(1);
  result = result.toFixed(1);

  VALUE_HE.innerHTML = damage;
  BAR_HE.style.width = 0 + "%";
  setTimeout(function () {
    BAR_HE.style.width = result + "%";
  }, 100);
  VALUE_HEHP.innerHTML = result + "%";
};

function recon_calc() {
  const DATA = [
    [950, 725, 500],
    [1125, 875, 600],
    [1350, 1075, 750],
    [1850, 1450, 1000],
    [2750, 2150, 1500],
    [675, 525, 450],
    [825, 650, 450],
    [1000, 750, 550]
  ];
  let ste = document.getElementById("stealth").value;
  let opt = document.getElementById("optics").value;
  let tmp = [ste, opt];
  const VALUE_FOREST = document.getElementById("value__forest");
  const BAR_FOREST = document.getElementById("bar__forest");
  const VALUE_URBAN = document.getElementById("value__urban");
  const BAR_URBAN = document.getElementById("bar__urban");
  for (let i = 0; i < 2; i++) {
    switch (tmp[i]) {
      case "exceptional": tmp[i] = 0;
        break;
      case "very": tmp[i] = 1;
        break;
      case "good": tmp[i] = 2;
        break;
      case "midium": tmp[i] = 3;
        break;
      case "poor": tmp[i] = 4;
        break;
    }
  }
  ste = tmp[0];
  opt = tmp[1];
  let distance_forest = DATA[ste][opt];
  let distance_urban;
  if (ste > 2) {
    distance_urban = 3000;
  } else {
    distance_urban = DATA[ste + 5][opt];
  }
  let result_forest = distance_forest / 3000 * 100;
  let result_urban = distance_urban / 3000 * 100;

  VALUE_FOREST.innerHTML = distance_forest + "m/3000m";
  VALUE_URBAN.innerHTML = distance_urban + "m/3000m";
  BAR_FOREST.style.width = 0 + "%";
  BAR_URBAN.style.width = 0 + "%";
  setTimeout(function () {
    BAR_FOREST.style.width = result_forest + "%";
    BAR_URBAN.style.width = result_urban + "%";
  }, 100);
};

function send() {
  let stealth_value = document.getElementById(stealth);
  let optics_value = document.getElementById(optics).value;
};


function change_lang() {

};


/*
$(function () {
  $('#form__send').on('click', function () {
    $.ajax({
      type: 'POST',
      url: 'model.php',
      data: {
        'stealth': $('#stealth').val(),
        'optics': $('#optics').val()
      }
    }).done(function (msg) {
      console.log(msg);
      var forestper = (msg.forest / 30) + '%';
      var urbanper = (msg.urban / 30) + '%';
      $('#bar__forest').css('width', forestper);
      $('#bar__urban').css('width', urbanper);
      $('.result__forest--value').html("<span>" + msg.forest + "m/3000m</span>");
      $('.result__urban--value').html("<span>" + msg.urban + "m/3000m</span>");
    }).fail(function (msg) {
      console.log(msg);
    })
  });
});
*/

