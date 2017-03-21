;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-gouwuche" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M339.008 776.992q19.008 0 36 7.008t30.016 19.488 20 29.504 7.008 36-7.008 36-20 29.504-30.016 20-36 7.488q-20 0-36.512-7.488t-29.504-20-20-29.504-7.008-36 7.008-36 20-29.504 29.504-19.488 36.512-7.008zM755.008 779.008q19.008 0 36.512 7.008t30.016 19.488 20 29.504 7.488 36-7.488 36-20 29.504-30.016 20-36.512 7.488-36-7.488-29.504-20-20-29.504-7.488-36 7.488-36 20-29.504 29.504-19.488 36-7.008zM923.008 211.008q28 0 43.488 7.488t22.016 18.496 6.016 23.488-3.488 21.504-12.512 36.992-21.504 61.504-23.488 66.496-17.504 52q-12.992 40-32.992 55.488t-48.992 15.488l-524.992 0 15.008 90.016 504 0q48 0 48 40.992 0 20-9.504 34.496t-37.504 14.496l-524 0q-20 0-33.504-8.992t-22.496-23.488-14.496-31.488-8.512-32q-0.992-6.016-5.504-28.992t-11.008-57.504-14.496-76.992-16-85.504q-19.008-100.992-43.008-224.992l-75.008 0q-15.008 0-24.992-7.488t-16.512-18.016-8.992-22.496-2.496-22.016q0-20 13.504-32.992t36.512-12.992l100.992 0q20 0 32 6.016t19.008 15.008 10.016 19.008 4.992 16.992q2.016 8 4 22.496t4 29.504q3.008 18.016 6.016 38.016l684 0z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-lock" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M773.12 395.264l0-194.56c0-107.52-88.064-194.56-195.584-194.56L446.464 6.144c-108.544 0-195.584 87.04-195.584 194.56l0 194.56c-57.344 0-104.448 46.08-104.448 104.448l0 415.744c0 57.344 47.104 104.448 104.448 104.448l522.24 0c57.344 0 104.448-46.08 104.448-104.448L877.568 498.688C877.568 441.344 830.464 395.264 773.12 395.264zM589.824 836.608c0 14.336-11.264 25.6-25.6 25.6L459.776 862.208c-14.336 0-25.6-11.264-25.6-25.6l46.08-137.216c-26.624-12.288-46.08-38.912-46.08-70.656 0-43.008 34.816-77.824 77.824-77.824s77.824 34.816 77.824 77.824c0 31.744-18.432 58.368-46.08 70.656L589.824 836.608zM668.672 395.264 355.328 395.264 355.328 226.304c0-64.512 52.224-116.736 117.76-116.736l77.824 0c64.512 0 117.76 52.224 117.76 116.736L668.672 395.264z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bijiben" viewBox="0 0 1621 1024">' +
    '' +
    '<path d="M1373.051 850.88l0-738.881c0-27.651-20.606-49.999-46.066-49.999l-1025.171 0c-25.455 0-46.066 22.348-46.066 49.999l0 738.881-151.082 0 0 61.123c0 27.647 20.64 49.997 46.066 49.997l1332.364 0c25.45 0 46.091-22.348 46.091-49.997l0-61.123-156.136 0zM911.28 871.869l-188.711 0 0-32.449 188.711 0 0 32.449zM1278.267 790.137l-927.706 0 0-625.057 927.706 0 0 625.057zM1278.267 790.137z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)