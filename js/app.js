var labels = ["BMW", "Peugeot", "Chevrolet", "Subaru", "Nissan"];
var list = $("#list");

function showLabels() {
  if ($("li").length === 0) {
    for (i = 0; i < labels.length; i++) {
      list.append("<li>" + labels[i] + "</li>");
    }
  }
}

$("#btn-show").on("click", showLabels);

$("#btn-delete").on("click", function deleteLastLabel() {
  var lastLabel = labels[labels.length - 1]; // indice del ultimo elemento
  var elements = $("li");
  var lastElement = elements[elements.length - 1];

  if (lastLabel && lastElement && lastLabel === $(lastElement).html()) {
    lastElement.remove(); //remueve el elemento del HTML
    labels.pop(); // remueve el elemento del Array
  } else {
    $("#noLabels").show();
  }
});

$("#btn-addLabel").on("click", function addLabel() {
  var newLabel = $("#addLabel").val();
  var hasLabel = false;

  for (i = 0; i < labels.length; i++) {
    var element = labels[i];
    if (newLabel.toLowerCase() === element.toLowerCase()) {
      hasLabel = true;
    }
  }

  if (hasLabel === false) {
    list.append("<li>" + newLabel + "</li>");
    labels.push(newLabel);
  } else {
    $("#alreadyInList").show();
  }
});

$("#btn-deleteLabel").on("click", function deleteLabel() {
  var newLabel = $("#deleteLabel").val();
  var hasLabel = false;
  var elements = $("li");

  for (i = 0; i < labels.length; i++) {
    var element = labels[i];
    if (newLabel.toLowerCase() === element.toLowerCase()) {
      labels.splice(i, 1);
      elements.splice(i, 1);

      list.html(elements);

      hasLabel = true;
    }
  }

  if (hasLabel === false) {
    $("#notInList").show();
  }
});
