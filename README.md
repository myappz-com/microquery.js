

# microQuery.js
A minimal, jQuery-compatible helper library for modern JavaScript projects

What is it?
microQuery.js is a lightweight JavaScript utility (~1KB gzipped) that mimics the most useful parts of jQuery — like $(), .on(), .addClass(), and $.ajax() — without the overhead. Perfect for modern web apps that don't need the full jQuery library.

### Why use it?
* Small footprint
* Familiar API
* No dependencies
* Ideal for PHP/JS projects, static sites, or custom CMSes
* [Demo](https://myappz.com/microquery/demo.html)

### Example Usage
```
$(function () {
  $('.btn').on('click', function () {
    $('.btn').toggleClass('highlight');

    $.ajax({
      url: '/api/data',
      success: data => {
        $('#output')[0].textContent = data.message;
      }
    });
  });
});
```
