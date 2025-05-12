/*!
 * microQuery.js v1.0.1 – A minimal jQuery-compatible utility library
 * (c) 2024–2025 MyAppz.com | MIT License | Not affiliated with jQuery
 */



(function (global) {
  function $(selector) {
    // Handle $(function () { ... }) for DOM ready
    if (typeof selector === 'function') {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', selector);
      } else {
        selector();
      }
      return;
    }

    const elements = typeof selector === 'string'
      ? document.querySelectorAll(selector)
      : [selector];

    const api = {
      on(event, handler) {
        elements.forEach(el => el.addEventListener(event, handler));
        return api;
      },
      addClass(className) {
        elements.forEach(el => el.classList.add(className));
        return api;
      },
      removeClass(className) {
        elements.forEach(el => el.classList.remove(className));
        return api;
      },
      toggleClass(className) {
        elements.forEach(el => el.classList.toggle(className));
        return api;
      },
      text(content) {
        if (content === undefined) {
          return elements[0]?.textContent;
        }
        elements.forEach(el => el.textContent = content);
        return api;
      },

      html(content) {
        if (content === undefined) {
          return elements[0]?.innerHTML;
        }
        elements.forEach(el => el.innerHTML = content);
        return api;
      },

      attr(name, value) {
        if (value === undefined) {
          return elements[0]?.getAttribute(name);
        }
        elements.forEach(el => el.setAttribute(name, value));
        return api;
      },

      val(value) {
        if (value === undefined) {
          return elements[0]?.value;
        }
        elements.forEach(el => {
          if ('value' in el) el.value = value;
        });
        return api;
      },

      css(property, value) {
        if (value === undefined) {
          return getComputedStyle(elements[0])[property];
        }
        elements.forEach(el => {
          el.style[property] = value;
        });
        return api;
      },

      prop(name, value) {
        if (value === undefined) {
          return elements[0]?.[name];
        }
        elements.forEach(el => {
          el[name] = value;
        });
        return api;
      },


    };

    // Make it array-like so you can do $('#id')[0]
    Object.assign(api, elements);
    api.length = elements.length;

    return api;
  }

  $.ajax = function ({ url, method = 'GET', data = null, success, error }) {
    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: data ? JSON.stringify(data) : null
    })
      .then(res => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then(success)
      .catch(error || console.error);
  };

  global.$ = $;
})(window);
