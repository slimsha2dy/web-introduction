var movie = [
  document.getElementById("movie1"),
  document.getElementById("movie2"),
  document.getElementById("movie3"),
  document.getElementById("movie4"),
  document.getElementById("movie5")
]

const button = document.getElementById("register");
const reset = document.getElementById("delete");
const nameInput = document.getElementById("name");

function alertMovieNumber() {
  let count = 0;
  for (var i = 0; i < movie.length; i++) {
    if (movie[i].checked === true) {
      count++;
    }
  }
  window.alert(nameInput.value + "님, 저와 " + count + "개의 취향이 같으시네요!");
}

button.addEventListener("click", alertMovieNumber);
reset.addEventListener("click", function() {
  nameInput.value = "";
  for (var i = 0; i < movie.length; i++) {
    movie[i].checked = false;
  }
});

