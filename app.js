var grid = document.getElementById('grid');
var state = {
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
  7: "",
  8: "",
  9: ""
};

for (i in state) {
  var li = document.createElement('li');
  li.id = i;
  li.onclick = function (event) {
    var target = event.target;
    target.innerHTML = target.innerHTML == '' ? 'X' : target.innerHTML;
  };
  li.innerHTML = state[i];
  grid.appendChild(li);
};
