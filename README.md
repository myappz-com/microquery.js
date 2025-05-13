

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


---


## 📦 Features

- DOM ready shorthand (`$(fn)`)
- Core traversal and selection  (`.find()`, `.children()`, `.add()`)
- Class manipulation (`.addClass()`, `.removeClass()`, `.toggleClass()`)
- Event binding (`.on()`)
- Form value handling (`.val()`)
- Text and HTML helpers (`.text()`, `.html()`)
- Attributes and properties (`.attr()`, `.prop()`, `.data()`)
- Inline styles (`.css()`)
- AJAX (`$.ajax()`)

---

## 🔧 Usage

Include the script:

```html
<script src="microQuery.min.js"></script>
````

---

## 🧪 Examples

### DOM Ready

```js
$(function () {
  console.log('DOM is ready');
});
```

### Select Elements

```js
$('.btn');         // by class
$('#output');      // by ID
```

### Core traversal and selection

```js
$('#container').find('.item').addClass('highlight');
$('#parent').children('.child').addClass('x'); 
$('.a').add($('#b')).addClass('highlight');
```

### Event Listener

```js
$('.btn').on('click', function () {
  alert('Clicked!');
});
```

### Class Methods

```js
$('.btn').addClass('active');
$('.btn').removeClass('active');
$('.btn').toggleClass('active');
```

### Text & HTML

```js
$('#output').text('Hello');
$('#output').html('<strong>Hi</strong>');
```

### Attributes & Props

```js
$('#link').attr('href', 'https://myappz.com');
$('#check').prop('checked', true);

$('#el').data('key', 'value');         
const val = $('#el').data('key');  
```

### CSS

```js
$('.btn').css('color', 'red');
```

### Form Values

```js
$('#name').val('Jane');
let name = $('#name').val();
```

### AJAX

```js
$.ajax({
  url: '/api/data',
  success: function (data) {
    console.log(data);
  }
});
```

---


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

## 🔒 License

MIT License — (c) 2024–2025 [MyAppz.com](https://myappz.com)
Not affiliated with the jQuery Foundation.
