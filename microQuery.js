/*!
 * microQuery.js v1.0.3 - A minimal jQuery-compatible utility library
 * (c) 2024-2025 MyAppz.com | MIT License | Not affiliated with jQuery
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

      // Core traversal and selection

      find(selector) {
        const found = [];
        elements.forEach(el => {
          found.push(...el.querySelectorAll(selector));
        });
        return $(found);
      },
      children(selector) {
        const all = [];
        elements.forEach(el => {
          const kids = Array.from(el.children);
          all.push(...(selector ? kids.filter(k => k.matches(selector)) : kids));
        });
        return $(all);
      },
      add(other) {
        const newEls = [...elements];
        const toAdd = other.length !== undefined ? other : [other];
        toAdd.forEach(el => {
          if (!newEls.includes(el)) newEls.push(el);
        });
        return $(newEls);
      },
      index(el) {
        return elements.indexOf(el);
      },

      // Event handling

      on(event, handler) {
        elements.forEach(el => el.addEventListener(event, handler));
        return api;
      },

      // Class manipulation

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

      // Content manipulation

      html(content) {
        if (content === undefined) {
          return elements[0]?.innerHTML;
        }
        elements.forEach(el => el.innerHTML = content);
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

      // Attribute/property/data

      attr(name, value) {
        if (value === undefined) {
          return elements[0]?.getAttribute(name);
        }
        elements.forEach(el => el.setAttribute(name, value));
        return api;
      },

      // Content manipulation

      text(content) {
        if (content === undefined) {
          return elements[0]?.textContent;
        }
        elements.forEach(el => el.textContent = content);
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
      data(key, value) {
        if (value === undefined) {
          return elements[0]?.dataset[key];
        }
        elements.forEach(el => el.dataset[key] = value);
        return api;
      },

      // Styling
      css(property, value) {
        if (value === undefined) {
          return getComputedStyle(elements[0])[property];
        }
        elements.forEach(el => {
          el.style[property] = value;
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
