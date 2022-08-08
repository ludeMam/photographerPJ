$(function () {
  var wheelDelta = 0
  var scrollSpeed = 0
  document.querySelector('main').addEventListener('mousewheel', function (e) {
    e.preventDefault()
    if (initialState === "content") {
      wheelDelta = e.wheelDelta / -120
      scrollSpeed += 5 * wheelDelta
    }
  })

  setInterval(function () {
    $('main')[0].scrollTo({
      top: scrt + scrollSpeed,
    })
    scrollSpeed = scrollSpeed * 0.95
  }, 20)
})//ready